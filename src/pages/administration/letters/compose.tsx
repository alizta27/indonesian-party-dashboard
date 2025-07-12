// Folder: /pages/administration/letters/create.tsx
import { useState } from "react";
import { Card } from "@/ui/card";
import { Title } from "@/ui/typography";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";
// import { StyledEditor } from "@/components/editor/styles";
// import Editor from "@/components/editor";
import LexicalTextEditor from "@/layouts/components/LexicalEditor";
import { Icon } from "@/components/icon";

export default function CreateLetterPage() {
	const [form, setForm] = useState({
		letterNumber: "",
		recipient: "",
		subject: "",
		date: "",
		content: "",
		type: "outgoing",
	});

	const handleChange = (key: keyof typeof form, value: string) => {
		setForm({ ...form, [key]: value });
	};

	const handleSubmit = () => {
		console.log("Surat disimpan:", form);
		alert("Surat berhasil dibuat");
	};

	return (
		<Card className="p-6 space-y-6">
			<Title as="h4">Buat Surat</Title>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<Label>Template Surat</Label>
					<Select value={form.type} onValueChange={(val) => handleChange("type", val)}>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Pilih jenis surat" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="incoming">Internal</SelectItem>
							<SelectItem value="outgoing">External</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<Label>Tanggal</Label>
					<Input type="date" value={form.date} onChange={(e) => handleChange("date", e.target.value)} />
				</div>
				<div className="md:col-span-2">
					<Label>Tujuan / Penerima</Label>
					<Input value={form.recipient} onChange={(e) => handleChange("recipient", e.target.value)} />
				</div>
				<div className="md:col-span-2">
					<Label>Perihal</Label>
					<Input value={form.subject} onChange={(e) => handleChange("subject", e.target.value)} />
				</div>
				<div className="md:col-span-2 flex flex-col gap-2">
					<Label>Isi Surat</Label>
					<LexicalTextEditor />
				</div>
			</div>
			<div className="flex justify-end gap-4">
				<Button variant="outline" className="bg-[#00a76f] text-white" onClick={handleSubmit}>
					<Icon icon="solar:diskette-line-duotone" className="mr-2" size={18} />
					Simpan Surat
				</Button>
				<Button variant="outline" onClick={handleSubmit}>
					<Icon icon="solar:printer-minimalistic-line-duotone" className="mr-2" size={18} />
					Cetak Surat
				</Button>
				<Button variant="default" onClick={handleSubmit}>
					<Icon icon="solar:streets-navigation-line-duotone" className="mr-2" size={18} />
					Kirim Surat
				</Button>
			</div>
		</Card>
	);
}
