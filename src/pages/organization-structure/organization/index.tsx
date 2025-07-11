import { Icon } from "@/components/icon";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Organization } from "#/entity";
import { BasicOrganizationStatus } from "#/enum";
import SimpleSearchBar from "@/layouts/components/simple-search-bar";
import { useState } from "react";
import { ORGANIZATION } from "./user";

export default function UserPage() {
	// const { push } = useRouter();
	// const pathname = usePathname();
	const [searchValue, setSearchValue] = useState("");

	const columns: ColumnsType<Organization> = [
		{
			title: "Kepengurusan",
			dataIndex: "structure_level",
			width: 120,
		},
		{
			title: "Daerah",
			dataIndex: "region",
			render: (region) => <p className="pr-3">{region}</p>,
		},
		{
			title: "Periode Kepengurusan",
			dataIndex: "period",
			width: 160,
		},
		{
			title: "Status",
			dataIndex: "status",
			align: "center",
			width: 80,
			render: (status) => (
				<Badge variant={status === BasicOrganizationStatus.ACTIVE ? "success" : "error"}>
					{status === BasicOrganizationStatus.ACTIVE ? "Berlaku" : "Habis"}
				</Badge>
			),
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
						Download SK
					</Button>
				</div>
			),
		},
	];

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<div>Daftar Kepengurusan</div>
					<Button onClick={() => {}}>Filter</Button>
				</div>
			</CardHeader>
			<CardContent>
				<div className="mb-3">
					<SimpleSearchBar placeholder="Cari berdasarkan daerah" value={searchValue} onChange={setSearchValue} />
				</div>
				<Table
					className="custom-antd-table"
					rowKey="id"
					size="small"
					scroll={{ x: "max-content" }}
					pagination={false}
					columns={columns}
					dataSource={ORGANIZATION}
				/>
			</CardContent>
		</Card>
	);
}
