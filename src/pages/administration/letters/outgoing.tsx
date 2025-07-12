// Folder: /pages/administration/letters/outgoing.tsx
import { Card } from "@/ui/card";
import { Title } from "@/ui/typography";
import { Button } from "@/ui/button";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import SimpleSearchBar from "@/layouts/components/simple-search-bar";

interface LetterData {
	id: string;
	letterNumber: string;
	recipient: string;
	subject: string;
	sentDate: string;
}

const data: LetterData[] = [
	{
		id: "1",
		letterNumber: "003/HNR-JKT/VII/2025",
		recipient: "DPW Hanura Jawa Barat",
		subject: "Pemberitahuan Hasil Konsolidasi",
		sentDate: "2025-07-11",
	},
	{
		id: "2",
		letterNumber: "004/HNR-JKT/VII/2025",
		recipient: "KPU Kota Surabaya",
		subject: "Pengiriman Berkas Verifikasi",
		sentDate: "2025-07-09",
	},
];

const columns: ColumnsType<LetterData> = [
	{ title: "No. Surat", dataIndex: "letterNumber", key: "letterNumber" },
	{ title: "Penerima", dataIndex: "recipient", key: "recipient" },
	{ title: "Perihal", dataIndex: "subject", key: "subject" },
	{ title: "Tanggal Kirim", dataIndex: "sentDate", key: "sentDate" },
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

export default function OutgoingLettersPage() {
	const [search, setSearch] = useState("");

	const filteredData = data.filter(
		(item) =>
			item.recipient.toLowerCase().includes(search.toLowerCase()) ||
			item.subject.toLowerCase().includes(search.toLowerCase()) ||
			item.letterNumber.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<Card className="p-4 space-y-4">
			<div className="flex justify-between items-center">
				<Title as="h4">Surat Keluar</Title>
				<SimpleSearchBar placeholder="Cari surat..." value={search} onChange={(e) => setSearch(e)} />
			</div>
			<Table className="custom-antd-table" columns={columns} dataSource={filteredData} rowKey="id" pagination={false} />
		</Card>
	);
}
