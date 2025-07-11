import { Button } from "@/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/form";
import { Input } from "@/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import DropZone from "./drop-zone";
import { Text } from "@/ui/typography";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";
import { dpdOptList, orgLevelOptList } from "@/constants";
import useRegionService from "@/api/hooks/useRegionService";
// import useGsheetService from "@/api/hooks/useGsheetService";
// import useBpsService from "@/api/hooks/useBpsService";
import { capitalizeFirst, getKabOrKotaBaseOnBpsCode } from "@/utils";
import { PageLoading } from "@/components/loading";
import { OrgLevel } from "@/types/enum";

type FieldType = {
	level?: string;
	province?: string;
	regency?: string;
	subdistric?: string;
	villageWard?: string;
	hamlet?: string;
};

function UserAccount() {
	const form = useForm<FieldType>({
		defaultValues: {
			level: "DPD",
			province: "",
			regency: "",
			subdistric: "",
			villageWard: "",
			hamlet: "",
		},
	});
	const { watch } = form;

	const selectedLevel = watch("level");
	const selectedProvince = watch("province");

	const enableProvince = [OrgLevel.DPD, OrgLevel.DPC, OrgLevel.PAC, OrgLevel.PAR, OrgLevel.PR].includes(
		selectedLevel as OrgLevel,
	);

	const enableResidence = [OrgLevel.DPC, OrgLevel.PAC, OrgLevel.PAR, OrgLevel.PR].includes(selectedLevel as OrgLevel);

	const enableSubdictrict = [OrgLevel.PAC, OrgLevel.PAR, OrgLevel.PR].includes(selectedLevel as OrgLevel);

	const enableVillageWard = [OrgLevel.PAC, OrgLevel.PAR].includes(selectedLevel as OrgLevel);

	const enableHamlet = [OrgLevel.PAR].includes(selectedLevel as OrgLevel);

	const { data: regencyListData, isLoading: isLoadingRegencyData } = useRegionService.useResidenceData(
		"12",
		selectedProvince ?? "",
		enableResidence,
	);
	// const { data } = useGsheetService.useListOfficerResponse();
	// const { data: electionResultData } = useBpsService.useElectionResult();
	// console.log({ electionResultData: electionResultData?.data.data });
	const regencyListOpt = Object.entries(regencyListData?.data ?? {}).map(([key, value]) => ({
		value: key,
		label: `${getKabOrKotaBaseOnBpsCode(key)} ${capitalizeFirst(value as string)}`,
	}));

	const handleClick = (value: FieldType) => {
		console.log({ value });
		toast.success("Pengurus berhasil di tambahkan!");
	};

	return (
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
			<PageLoading loading={isLoadingRegencyData} />
			<div className="col-span-1">
				<Card className="flex-col items-center px-6! pb-10! pt-10! h-full">
					<DropZone />
				</Card>
			</div>
			<div className="col-span-1">
				<Card className="h-full">
					<CardHeader>
						<CardTitle>Form Data Pengurus</CardTitle>
						<Text variant="subTitle2">Lengkapi data di bawah ini dengan benar untuk mengupload data pengurus</Text>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<div className="grid grid-cols-1 gap-4 md:grid-cols-1 pt-3">
								<FormField
									control={form.control}
									name="level"
									rules={{
										required: {
											value: true,
											message: "Kepengurusan tidak boleh kosong",
										},
									}}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Kepengurusan</FormLabel>
											<FormControl>
												<Select value={field.value} onValueChange={field.onChange}>
													<SelectTrigger className="h-9 w-full">
														<SelectValue />
													</SelectTrigger>
													<FormMessage />
													<SelectContent>
														{orgLevelOptList.map((opt) => (
															<SelectItem key={opt.value} value={opt.value.toString()}>
																{opt.label}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</FormControl>
										</FormItem>
									)}
								/>
								{enableProvince ? (
									<FormField
										disabled={!selectedLevel}
										control={form.control}
										name="province"
										rules={{
											required: {
												value: true,
												message: "Provinsi tidak boleh kosong",
											},
										}}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Provinsi</FormLabel>
												<FormControl>
													<FormControl>
														<Select onValueChange={field.onChange} {...field}>
															<SelectTrigger className="h-9 w-full">
																<SelectValue />
															</SelectTrigger>
															<FormMessage />
															<SelectContent>
																{dpdOptList.map((opt) => (
																	<SelectItem key={opt.value} value={opt.value.toString()}>
																		{opt.label}
																	</SelectItem>
																))}
															</SelectContent>
														</Select>
													</FormControl>
												</FormControl>
											</FormItem>
										)}
									/>
								) : null}
								{enableResidence ? (
									<FormField
										disabled={!regencyListOpt?.length}
										control={form.control}
										name="regency"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Kabupaten/Kota</FormLabel>
												<FormControl>
													<Select onValueChange={field.onChange} {...field}>
														<SelectTrigger className="h-9 w-full">
															<SelectValue />
														</SelectTrigger>
														<FormMessage />
														<SelectContent>
															{regencyListOpt.map((opt) => (
																<SelectItem key={opt.value} value={opt.value.toString()}>
																	{opt.label as string}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
												</FormControl>
											</FormItem>
										)}
									/>
								) : null}
								{enableSubdictrict ? (
									<FormField
										control={form.control}
										name="subdistric"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Kecamatan</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
											</FormItem>
										)}
									/>
								) : null}
								{enableVillageWard ? (
									<FormField
										control={form.control}
										name="villageWard"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Desa/Kelurahan</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
											</FormItem>
										)}
									/>
								) : null}
								{enableHamlet ? (
									<FormField
										control={form.control}
										name="hamlet"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Dusun</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
											</FormItem>
										)}
									/>
								) : null}
							</div>
						</Form>
					</CardContent>
					<CardFooter className="flex justify-end">
						<Button className="cursor-pointer" onClick={form.handleSubmit(handleClick)}>
							Upload Data Pengurus
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}

export default UserAccount;
