import { Chart } from "@/components/chart";
import { dpdOptList } from "@/constants";
import { Card, CardContent } from "@/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";
import { Text, Title } from "@/ui/typography";
import { Table } from "antd";
import type { ApexOptions } from "apexcharts";
import { useState } from "react";

export default function PilkadaWalikotaAll() {
	const [province, setProvince] = useState("11"); // Aceh

	const kotaList = [
		{
			kota: "Kota Banda Aceh",
			paslon: [
				{ nama: "Amin – Basri", suara: 50430, pengusung: "Hanura" },
				{ nama: "Citra – Dedi", suara: 45870, pengusung: "PKB, Gerindra" },
			],
		},
		{
			kota: "Kota Lhokseumawe",
			paslon: [
				{ nama: "Erwin – Fajar", suara: 41320, pengusung: "Hanura" },
				{ nama: "Gina – Hendra", suara: 39800, pengusung: "PKB" },
			],
		},
		{
			kota: "Kota Langsa",
			paslon: [
				{ nama: "Indra – Joko", suara: 31210, pengusung: "Hanura" },
				{ nama: "Kiki – Lestari", suara: 27890, pengusung: "PKB" },
				{ nama: "Miko – Nadia", suara: 12500, pengusung: "PDI" },
			],
		},
		{
			kota: "Kota Sabang",
			paslon: [
				{ nama: "Oki – Putri", suara: 23410, pengusung: "Hanura" },
				{ nama: "Rian – Sari", suara: 21980, pengusung: "PKB" },
			],
		},
		{
			kota: "Kota Subulussalam",
			paslon: [
				{ nama: "Tono – Uli", suara: 19430, pengusung: "Hanura" },
				{ nama: "Vina – Wahyu", suara: 18100, pengusung: "PKB" },
				{ nama: "Yani – Zaki", suara: 12900, pengusung: "PDI" },
			],
		},
	];

	const paslonNames = new Set<string>();

	for (const kota of kotaList) {
		for (const paslon of kota.paslon) {
			paslonNames.add(paslon.nama);
		}
	}

	const chartSeries = Array.from(paslonNames).map((nama) => ({
		name: nama,
		data: kotaList.map((k) => {
			const found = k.paslon.find((p) => p.nama === nama);
			return found ? found.suara : 0;
		}),
	}));

	const chartOptions: ApexOptions = {
		chart: {
			type: "bar",
			stacked: true,
			toolbar: { show: false },
		},
		plotOptions: {
			bar: {
				horizontal: false,
				borderRadius: 4,
				columnWidth: "40%",
			},
		},
		xaxis: {
			categories: kotaList.map((k) => k.kota),
		},
		legend: {
			show: false,
		},
		title: {
			text: `Perolehan Suara – Pilkada Walikota di Provinsi ${
				dpdOptList.find((opt) => opt.value === province)?.label
			} 2024`,
			style: { color: "#E0A106", fontSize: "16px" },
		},
		tooltip: {
			y: {
				formatter: (val: number) => `${val.toLocaleString("id-ID")} suara`,
			},
		},
	};

	const maxPaslon = Math.max(...kotaList.map((k) => k.paslon.length));

	const pilkadaColumns = [
		{ title: "No", dataIndex: "no", key: "no", width: 50 },
		{ title: "Kota", dataIndex: "kota", key: "kota" },
		...Array.from({ length: maxPaslon }, (_, i) => ({
			title: `Paslon ${i + 1}`,
			dataIndex: `paslon${i + 1}`,
			key: `paslon${i + 1}`,
			align: "left",
			render: (val: any) => {
				console.log({ val });
				if (!val) return "-";
				return (
					<div className="flex flex-col">
						<p className="font-medium text-sm text-gray-900">{val?.suara?.toLocaleString("id-ID")} suara</p>
						<p className="text-xs text-muted-foreground italic">{val.pengusung}</p>
					</div>
				);
			},
		})),
		{
			title: "Total Suara",
			dataIndex: "total",
			key: "total",
			align: "right",
			render: (val: number) => val.toLocaleString("id-ID"),
		},
	];

	const tableData = kotaList.map((kota, idx) => {
		const row: any = {
			no: idx + 1,
			kota: kota.kota,
		};

		let total = 0;

		kota.paslon.forEach((p, i) => {
			row[`paslon${i + 1}`] = {
				suara: p.suara,
				pengusung: p.pengusung,
			};
			total += p.suara;
		});

		row.total = total;
		return row;
	});

	return (
		<div className="flex flex-col gap-4 w-full">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div>
					<Title as="h4" className="text-xl mb-1">
						{`Hasil Pilkada Walikota Provinsi ${dpdOptList.find((opt) => opt.value === province)?.label}`}
					</Title>
					<Text variant="body2" className="text-muted-foreground">
						Data hasil suara Pilkada Walikota untuk seluruh kota di provinsi terkait.
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

			<div className="grid grid-cols-1 gap-4 mt-3">
				<Card>
					<CardContent>
						<Chart key={province} options={chartOptions} series={chartSeries} type="bar" height={400} />
					</CardContent>
				</Card>
			</div>

			<div className="grid grid-cols-1 gap-4">
				<Card>
					<CardContent className="p-6">
						<Text variant="body1" className="font-semibold mb-2">
							Tabel Rekapitulasi Suara Walikota
						</Text>
						<Table
							className="custom-antd-table"
							columns={pilkadaColumns as any}
							dataSource={tableData}
							pagination={false}
							rowKey="kota"
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
