import { Icon } from "@/components/icon";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import SimpleSearchBar from "@/layouts/components/simple-search-bar";
import CalegDrawer from "./detail";

// Ganti dengan tipe data yang relevan untuk Caleg
interface Caleg {
	id: string;
	full_name: string;
	dapil: string;
	lembaga: "DPR RI" | "DPRD Provinsi" | "DPRD Kabupaten";
	number: number;
	total_constituents: number;
	form_link?: string;
}

// Contoh data dummy
const CALEGS: Caleg[] = [
	{
		id: "1",
		full_name: "Ahmad Fauzi",
		dapil: "Dapil 1 - Jakarta Selatan",
		lembaga: "DPR RI",
		number: 3,
		total_constituents: 250,
	},
	{
		id: "2",
		full_name: "Siti Aminah",
		dapil: "Dapil 2 - Bandung",
		lembaga: "DPRD Kabupaten",
		number: 5,
		total_constituents: 190,
	},
];

export default function SisalehCalegList() {
	const [searchValue, setSearchValue] = useState("");
	const [selectedCaleg, setSelectedCaleg] = useState<Caleg | null>(null);

	const openDetail = (caleg: Caleg) => setSelectedCaleg(caleg);
	const closeDetail = () => setSelectedCaleg(null);

	const columns: ColumnsType<Caleg> = [
		{
			title: "Nama Caleg",
			dataIndex: "full_name",
		},
		{
			title: "Dapil",
			dataIndex: "dapil",
		},
		{
			title: "Lembaga",
			dataIndex: "lembaga",
		},
		{
			title: "No Urut",
			dataIndex: "number",
		},
		{
			title: "Jumlah Konstituen",
			dataIndex: "total_constituents",
		},
		{
			title: "Aksi",
			key: "action",
			align: "center",
			width: 240,
			render: (_, record) => (
				<div className="flex justify-center gap-2">
					<Button
						variant="outline"
						className="px-2 flex items-center gap-1"
						size="sm"
						onClick={() => openDetail(record)}
					>
						<Icon icon="solar:eye-linear" size={18} />
						Lihat
					</Button>
					<Button variant="outline" className="px-2 flex items-center gap-1" size="sm">
						<Icon icon="solar:file-download-linear" size={18} />
						Download KTA
					</Button>
				</div>
			),
		},
	];

	// Filter data jika ada pencarian
	const filteredCalegs = CALEGS.filter((caleg) => caleg.full_name.toLowerCase().includes(searchValue.toLowerCase()));

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<div className="text-lg font-semibold">Daftar Caleg</div>
					<Button onClick={() => {}}>Filter</Button>
				</div>
			</CardHeader>
			<CardContent>
				<div className="mb-3">
					<SimpleSearchBar placeholder="Cari berdasarkan nama caleg" value={searchValue} onChange={setSearchValue} />
				</div>
				<Table
					className="custom-antd-table"
					rowKey="id"
					size="small"
					scroll={{ x: "max-content" }}
					pagination={false}
					columns={columns}
					dataSource={filteredCalegs}
				/>
			</CardContent>
			{selectedCaleg && <CalegDrawer open={!!selectedCaleg} onClose={closeDetail} caleg={selectedCaleg} />}
		</Card>
	);
}
