import { Button } from "@/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/ui/form";
import { Input } from "@/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
// import { ktaTemplateHtml } from "./kta-template";
import { Modal } from "antd";
import { KtaTemplate } from "./kta-template";
import { formatDate } from "@/utils/format-date";
import { formatFullAddress } from "@/utils";
import { SelectContent, SelectItem, SelectTrigger, SelectValue, Select } from "@/ui/select";
import { Text } from "@/ui/typography";
import { Textarea } from "@/ui/textarea";
import { UploadAvatar } from "@/components/upload";

type FieldType = {
	fullName?: string;
	nik?: string;
	sex?: string;
	birthPlace?: string;
	birthDate?: string;
	maritalStatus?: string;
	address?: string;
	village?: string;
	subDistrict?: string;
	city?: string;
	province?: string;
	rtRw?: string;
	postalCode?: string;
	religion?: string;
	image?: string;
};

function UserAccount() {
	const [openPreview, setOpenPreview] = useState(false);
	const form = useForm<FieldType>({
		defaultValues: {
			fullName: "",
			nik: "",
			sex: "",
			birthPlace: "",
			birthDate: "",
			maritalStatus: "",
			address: "",
			village: "",
			subDistrict: "",
			city: "",
			province: "",
			rtRw: "",
			postalCode: "",
			religion: "",
			image: "",
		},
	});

	const typedFullName = form.watch("fullName");
	const typedBirthPlace = form.watch("birthPlace");
	const typedBirthDate = form.watch("birthDate");
	const typedReligion = form.watch("religion");
	const typedAddress = form.watch("address");
	const typedVillage = form.watch("village");
	const typedSubDistrict = form.watch("subDistrict");
	const typedCity = form.watch("city");
	const typedProvince = form.watch("province");
	const typedRtRw = form.watch("rtRw");
	const typedPostalCode = form.watch("postalCode");
	const imageUrl = form.watch("image");

	const birthPlaceDateBirth = `${typedBirthPlace}, ${formatDate(typedBirthDate ?? "", "dd/MM/yyyy")}`;
	const fullAddress = formatFullAddress([
		typedAddress,
		typedVillage,
		typedSubDistrict,
		typedCity,
		typedProvince,
		typedRtRw,
		typedPostalCode,
	]);

	const handleClick = () => {
		if (form.formState.isValid) {
			toast.success("Pengurus berhasil di tambahkan!");
		} else {
			toast.error("Mohon lengkapi semua data dengan benar.");
		}
	};
	console.log({ typedReligion });
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			<Card className="h-fit">
				<CardContent>
					<Form {...form}>
						<div className="">
							<FormField
								control={form.control}
								name="image"
								rules={{ required: "Foto wajib diupload" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormControl>
											<UploadAvatar onUploadImage={(url) => field.onChange(url)} />
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
						</div>
					</Form>
				</CardContent>
			</Card>
			<Card className="col-span-2">
				<CardHeader>
					<CardTitle>Input Data Diri</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-3">
							<FormField
								control={form.control}
								name="fullName"
								rules={{ required: "Nama lengkap wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>Nama Lengkap</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Masukkan nama lengkap" />
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="nik"
								rules={{
									required: "NIK wajib diisi",
									pattern: {
										value: /^\d{16}$/,
										message: "NIK harus 16 digit angka",
									},
								}}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>NIK</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Masukkan NIK (16 digit)" maxLength={16} />
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="sex"
								rules={{ required: "Jenis kelamin wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>Jenis Kelamin</FormLabel>
										<FormControl>
											<Select {...field} onValueChange={(value) => field.onChange(value)}>
												<SelectTrigger className="w-full h-9">
													<SelectValue />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="male">Laki-Laki</SelectItem>
													<SelectItem value="female">Perempuan</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="birthPlace"
								rules={{ required: "Tempat lahir wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>Tempat Lahir</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Masukkan tempat lahir" />
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="birthDate"
								rules={{ required: "Tanggal lahir wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>Tanggal Lahir</FormLabel>
										<FormControl>
											<Input type="date" {...field} />
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="maritalStatus"
								rules={{ required: "Status perkawinan wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>Status Perkawinan</FormLabel>
										<FormControl>
											<Select {...field} onValueChange={(value) => field.onChange(value)}>
												<SelectTrigger className="w-full h-9">
													<SelectValue />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="single">Belum Kawin</SelectItem>
													<SelectItem value="married">Kawin</SelectItem>
													<SelectItem value="divorced">Cerai</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="religion"
								rules={{ required: "Agama wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>Agama</FormLabel>
										<FormControl>
											<Select {...field} onValueChange={(value) => field.onChange(value)}>
												<SelectTrigger className="w-full h-9">
													<SelectValue />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="Islam">Islam</SelectItem>
													<SelectItem value="Kristen">Kristen</SelectItem>
													<SelectItem value="Hindu">Hindu</SelectItem>
													<SelectItem value="Budha">Budha</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="province"
								rules={{ required: "Provinsi wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>Provinsi</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Masukkan provinsi" />
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="city"
								rules={{ required: "Kabupaten/Kota wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>Kabupaten/Kota</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Masukkan kabupaten/kota" />
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="village"
								rules={{ required: "Desa/Kelurahan wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>Desa/Kelurahan</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Masukkan desa/kelurahan" />
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="subDistrict"
								rules={{ required: "Kecamatan wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>Kecamatan</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Masukkan kecamatan" />
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="rtRw"
								rules={{ required: "RT/RW wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>RT/RW</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Masukkan RT/RW" />
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="address"
								rules={{ required: "Alamat wajib diisi" }}
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel>Alamat</FormLabel>
										<FormControl>
											<Textarea {...field} placeholder="Masukkan alamat" />
										</FormControl>
										{fieldState.error && <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>}
									</FormItem>
								)}
							/>
						</div>
					</Form>
				</CardContent>
				<CardFooter className="flex gap-4 justify-end">
					<Button onClick={() => setOpenPreview(true)} variant="outline">
						Lihat Preview
					</Button>

					<Button onClick={form.handleSubmit(handleClick)}>Buat KTA</Button>
				</CardFooter>
			</Card>
			<Modal width={600} open={openPreview} onCancel={() => setOpenPreview(false)} footer={null}>
				<Text variant="body1" className="font-bold">
					Preview KTA
				</Text>
				<div className="w-full flex justify-center py-5">
					<KtaTemplate
						typedFullName={typedFullName ?? ""}
						typedReligion={typedReligion ?? ""}
						fullAddress={fullAddress}
						birthPlaceDateBirth={birthPlaceDateBirth}
						imageUrl={imageUrl ?? ""}
					/>
				</div>
			</Modal>
			{/* <CommandDialog
        title="oc"
        open={openPreview}
        onOpenChange={setOpenPreview}
      >
        <CommandItem>
          <Text variant="subTitle1">Preview KTA</Text>
        </CommandItem>
        <CommandItem>
          <div dangerouslySetInnerHTML={{ __html: ktaTemplateHtml }} />
        </CommandItem>
      </CommandDialog> */}
		</div>
	);
}

export default UserAccount;
