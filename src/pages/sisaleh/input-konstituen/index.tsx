import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/ui/form";
import { Textarea } from "@/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";

const schema = z.object({
	name: z.string().min(1, "Nama wajib diisi"),
	nik: z.string().min(16, "NIK harus 16 digit"),
	phone: z.string().optional(),
	address: z.string().optional(),
	relation: z.string().optional(),
	gender: z.enum(["male", "female"]),
});

type FormData = z.infer<typeof schema>;

export default function InputKonstituenPage() {
	const form = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
			nik: "",
			phone: "",
			address: "",
			relation: "",
			gender: "male",
		},
	});

	const onSubmit = (data: FormData) => {
		console.log("Konstituen Submitted:", data);
		// TODO: Save to backend / Supabase / Firebase
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Input Konstituen</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nama Lengkap</FormLabel>
									<FormControl>
										<Input placeholder="Masukkan nama konstituen" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="nik"
							render={({ field }) => (
								<FormItem>
									<FormLabel>NIK</FormLabel>
									<FormControl>
										<Input placeholder="Masukkan NIK 16 digit" maxLength={16} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="gender"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Jenis Kelamin</FormLabel>
									<FormControl>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<SelectTrigger>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="male">Laki-laki</SelectItem>
												<SelectItem value="female">Perempuan</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>No. HP</FormLabel>
									<FormControl>
										<Input placeholder="Masukkan nomor HP" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="address"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Alamat</FormLabel>
									<FormControl>
										<Textarea placeholder="Masukkan alamat lengkap" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="relation"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Hubungan dengan Caleg</FormLabel>
									<FormControl>
										<Input placeholder="Contoh: keluarga, relawan, tetangga" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" className="w-full !bg-primary" variant="default">
							Simpan Konstituen
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
