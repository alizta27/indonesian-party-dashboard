// Folder: /pages/administration/letters/incoming.tsx
import { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import { Card } from "@/ui/card";
import { Title } from "@/ui/typography";
import { Button } from "@/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/ui/drawer";
import { Input } from "@/ui/input";
import SimpleSearchBar from "@/layouts/components/simple-search-bar";

interface LetterData {
	id: string;
	letterNumber: string;
	sender: string;
	subject: string;
	receivedDate: string;
}

const data: LetterData[] = [
	{
		id: "1",
		letterNumber: "001/HNR-JKT/VII/2025",
		sender: "DPD Hanura Jakarta",
		subject: "Undangan Konsolidasi Wilayah",
		receivedDate: "2025-07-12",
	},
	{
		id: "2",
		letterNumber: "002/KPU-BDG/VII/2025",
		sender: "KPU Kota Bandung",
		subject: "Pemberitahuan Verifikasi Caleg",
		receivedDate: "2025-07-10",
	},
];

const columns: ColumnsType<LetterData> = [
	{ title: "No. Surat", dataIndex: "letterNumber", key: "letterNumber" },
	{ title: "Pengirim", dataIndex: "sender", key: "sender" },
	{ title: "Perihal", dataIndex: "subject", key: "subject" },
	{ title: "Tanggal Diterima", dataIndex: "receivedDate", key: "receivedDate" },
	{
		title: "Aksi",
		key: "action",
		render: (_, record) => (
			<Button variant="outline" onClick={() => alert(`Buka surat ID ${record.id}`)}>
				Buka
			</Button>
		),
	},
];

export default function IncomingLettersPage() {
	const [search, setSearch] = useState("");
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [file, setFile] = useState<File | null>(null);

	const filteredData = data.filter(
		(item) =>
			item.sender.toLowerCase().includes(search.toLowerCase()) ||
			item.subject.toLowerCase().includes(search.toLowerCase()) ||
			item.letterNumber.toLowerCase().includes(search.toLowerCase()),
	);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.[0]) {
			setFile(e.target.files[0]);
		}
	};

	const handleUpload = () => {
		if (file) {
			alert(`Uploading: ${file.name}`);
			// TODO: upload logic here
			setIsDrawerOpen(false);
		}
	};

	return (
		<>
			<Card className="p-4 space-y-4">
				<div className="flex justify-between items-center">
					<Title as="h4">Surat Masuk</Title>
					<div className="flex gap-2">
						<SimpleSearchBar placeholder="Cari surat..." value={search} onChange={(e) => setSearch(e)} />
						<Button onClick={() => setIsDrawerOpen(true)}>Upload Surat</Button>
					</div>
				</div>
				<Table
					className="custom-antd-table"
					columns={columns}
					dataSource={filteredData}
					rowKey="id"
					pagination={false}
				/>
			</Card>

			<Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} direction="right">
				<DrawerContent className="p-4">
					<DrawerHeader>
						<DrawerTitle>Upload Surat Masuk</DrawerTitle>
					</DrawerHeader>
					<div className="space-y-4 px-4">
						<Input type="file" accept="application/pdf" onChange={handleFileChange} />
						{file && <p className="text-sm text-muted">File: {file.name}</p>}
						<div className="flex justify-end gap-2">
							<DrawerClose asChild>
								<Button variant="outline">Batal</Button>
							</DrawerClose>
							<Button onClick={handleUpload} disabled={!file}>
								Upload
							</Button>
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		</>
	);
}
