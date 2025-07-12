// Folder: /pages/administration/letters/archive.tsx
import { Card } from "@/ui/card";
import { Title } from "@/ui/typography";
import { Button } from "@/ui/button";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import SimpleSearchBar from "@/layouts/components/simple-search-bar";

interface ArchivedLetter {
	id: string;
	letterNumber: string;
	type: "Masuk" | "Keluar";
	subject: string;
	archivedDate: string;
}

const data: ArchivedLetter[] = [
	{
		id: "1",
		letterNumber: "001/HNR-JKT/VII/2024",
		type: "Masuk",
		subject: "Undangan Konsolidasi Wilayah Tahun Lalu",
		archivedDate: "2024-12-31",
	},
	{
		id: "2",
		letterNumber: "003/HNR-PST/I/2025",
		type: "Keluar",
		subject: "Pengajuan Proposal Kegiatan",
		archivedDate: "2025-01-20",
	},
];

const columns: ColumnsType<ArchivedLetter> = [
	{ title: "No. Surat", dataIndex: "letterNumber", key: "letterNumber" },
	{ title: "Tipe Surat", dataIndex: "type", key: "type" },
	{ title: "Perihal", dataIndex: "subject", key: "subject" },
	{ title: "Tanggal Arsip", dataIndex: "archivedDate", key: "archivedDate" },
	{
		title: "Aksi",
		key: "action",
		render: (_, record) => (
			<Button variant="outline" size="sm" onClick={() => alert(`Lihat arsip surat ID ${record.id}`)}>
				Lihat
			</Button>
		),
	},
];

export default function ArchivedLettersPage() {
	const [search, setSearch] = useState("");

	const filteredData = data.filter(
		(item) =>
			item.subject.toLowerCase().includes(search.toLowerCase()) ||
			item.letterNumber.toLowerCase().includes(search.toLowerCase()) ||
			item.type.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<Card className="p-4 space-y-4">
			<div className="flex justify-between items-center">
				<Title as="h4">Arsip Surat</Title>
				<SimpleSearchBar placeholder="Cari arsip..." value={search} onChange={(e) => setSearch(e)} />
			</div>
			<Table className="custom-antd-table" columns={columns} dataSource={filteredData} rowKey="id" pagination={false} />
		</Card>
	);
}
