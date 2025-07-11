import { Icon } from "@/components/icon";
// import { usePathname, useRouter } from "@/routes/hooks";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { OrgMember } from "#/entity";
import { USERS } from "./user";
import SimpleSearchBar from "@/layouts/components/simple-search-bar";
import { useState } from "react";

export default function UserPage() {
	// const { push } = useRouter();
	// const pathname = usePathname();
	const [searchValue, setSearchValue] = useState("");

	const columns: ColumnsType<OrgMember> = [
		{
			title: "Nama",
			dataIndex: "full_name",
		},
		{
			title: "Alamat",
			dataIndex: "address",
		},
		{
			title: "Jenis Kelamin",
			dataIndex: "gender",
		},
		{
			title: "Tanggal Lahir",
			dataIndex: "birth_date",
		},
		{
			title: "Agama",
			dataIndex: "religion",
		},
		{
			title: "Aksi",
			key: "operation",
			align: "center",
			width: 220,
			render: () => (
				<div className="flex justify-center gap-2">
					<Button variant="outline" className="w-auto px-2" size="icon">
						<Icon icon="solar:eye-linear" size={18} />
						Lihat
					</Button>
					<Button variant="outline" className="w-auto px-2" size="icon">
						<Icon icon="solar:file-download-linear" size={18} />
						Download KTA
					</Button>
				</div>
			),
		},
	];

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<div>Daftar Anggota</div>
					<Button onClick={() => {}}>Filter</Button>
				</div>
			</CardHeader>
			<CardContent>
				<div className="mb-3">
					<SimpleSearchBar placeholder="Cari berdasarkan nama" value={searchValue} onChange={setSearchValue} />
				</div>
				<Table
					className="custom-antd-table"
					rowKey="id"
					size="small"
					scroll={{ x: "max-content" }}
					pagination={false}
					columns={columns}
					dataSource={USERS}
				/>
			</CardContent>
		</Card>
	);
}
