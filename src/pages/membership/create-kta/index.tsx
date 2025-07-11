import { Button } from "@/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/ui/form";
import { Input } from "@/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
// import { ktaTemplateHtml } from "./kta-template";
import { Modal } from "antd";

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
		},
	});

	const handleClick = () => {
		if (form.formState.isValid) {
			toast.success("Pengurus berhasil di tambahkan!");
		} else {
			toast.error("Mohon lengkapi semua data dengan benar.");
		}
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-1 gap-4">
			<Card>
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
											<select {...field} className="w-full rounded border border-gray-300 px-3 py-2">
												<option value="">Pilih jenis kelamin</option>
												<option value="male">Laki-laki</option>
												<option value="female">Perempuan</option>
												<option value="other">Lainnya</option>
											</select>
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
											<select {...field} className="w-full rounded border border-gray-300 px-3 py-2">
												<option value="">Pilih status perkawinan</option>
												<option value="single">Belum Kawin</option>
												<option value="married">Kawin</option>
												<option value="divorced">Cerai</option>
											</select>
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
											<Input {...field} placeholder="Masukkan alamat" />
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
						</div>
					</Form>
				</CardContent>
				<CardFooter className="flex gap-4 justify-end">
					<Button onClick={() => setOpenPreview(true)} variant="outline">
						Lihat Hasil
					</Button>

					<Button onClick={form.handleSubmit(handleClick)}>Buat KTA</Button>
				</CardFooter>
			</Card>
			<Modal width={780} open={openPreview} onCancel={() => setOpenPreview(false)}>
				<p>Tampilan template KTA di sini</p>
				{/* <div dangerouslySetInnerHTML={{ __html: ktaTemplateHtml }} /> */}
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
