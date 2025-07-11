import { Chart } from "@/components/chart";
import { dpdOptList } from "@/constants";
import { Card, CardContent } from "@/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";
import { Text, Title } from "@/ui/typography";
import { Table } from "antd";
import type { ApexOptions } from "apexcharts";
import { useState } from "react";

export default function PilkadaGubernurAll() {
	const [province, setProvince] = useState("11");

	const chartOptions: ApexOptions = {
		chart: {
			type: "pie",
		},
		labels: ["Paslon 1 (Andi – Budi)", "Paslon 2 (Citra – Deni)"],
		colors: ["#E0A106", "#C48804"],
		title: {
			text: `Perolehan Suara – Pilkada Gubernur Provinsi ${
				dpdOptList.find((opt) => opt.value === province)?.label
			} 2024`,
			style: { color: "#E0A106", fontSize: "16px" },
		},
		dataLabels: {
			enabled: true,
			formatter: (val: number) => `${val.toFixed(1)}%`,
		},
		tooltip: {
			y: {
				formatter: (val: number) => `${val.toLocaleString("id-ID")} suara`,
			},
		},
		legend: {
			position: "bottom",
		},
	};

	const chartSeries: number[] = [3529483, 3118400];

	const pilkadaColumns = [
		{ title: "No", dataIndex: "no", key: "no", width: 50 },
		{ title: "Pasangan Calon", dataIndex: "pasangan", key: "pasangan" },
		{ title: "Partai Pengusung", dataIndex: "partai", key: "partai" },
		{
			title: "Jumlah Suara",
			dataIndex: "jumlah",
			key: "jumlah",
			align: "right",
			render: (val: number) => val.toLocaleString("id-ID"),
		},
		{
			title: "Persentase",
			dataIndex: "persentase",
			key: "persentase",
			align: "right",
		},
	];

	const tableData = [
		{
			no: 1,
			pasangan: "Andi – Budi",
			partai: "PDIP, PKB, Hanura",
			jumlah: 3529483,
			persentase: "53.1%",
		},
		{
			no: 2,
			pasangan: "Citra – Deni",
			partai: "Golkar, Gerindra, PAN",
			jumlah: 3118400,
			persentase: "46.9%",
		},
	];

	return (
		<div className="flex flex-col gap-4 w-full">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-none shadow-none">
				<div>
					<Title as="h4" className="text-xl mb-1">
						{`Menampilkan hasil perolehan suara Pilkada Gubernur Provinsi ${
							dpdOptList.find((opt) => opt.value === province)?.label
						}`}
					</Title>
					<Text variant="body2" className="text-muted-foreground">
						Menampilkan perolehan suara Pilkada Gubernur secara berdasarkan hasil resmi KPU.
					</Text>
				</div>
				<div className="flex items-center gap-2">
					<Text variant="body2" className="text-muted-foreground">
						Pilih Provinsi:
					</Text>
					<Select value={province} onValueChange={(v) => setProvince(v as any)}>
						<SelectTrigger className="w-32 h-9">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{dpdOptList.map((opt) => (
								<SelectItem key={opt.value} value={opt.value.toString()}>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-3">
				<Card>
					<CardContent>
						<Chart key={province} options={chartOptions} series={chartSeries} type="pie" height={400} />
					</CardContent>
				</Card>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
				<Card>
					{/* <CardTitle></CardTitle> */}
					<CardContent className="p-6">
						<Text variant="body1" className="font-semibold">
							Tabel Rekapitulasi
						</Text>
						<Table
							className="custom-antd-table pt-3"
							columns={pilkadaColumns as any}
							dataSource={tableData}
							pagination={false}
							rowKey="partai"
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
