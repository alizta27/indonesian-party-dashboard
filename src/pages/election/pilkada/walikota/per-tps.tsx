import { Chart } from "@/components/chart";
import { dpdOptList } from "@/constants";
import { Card, CardContent } from "@/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/ui/select";
import { Text, Title } from "@/ui/typography";
import { Table } from "antd";
import type { ApexOptions } from "apexcharts";
import { useState } from "react";

export default function PilkadaWalikotaTps() {
	const [province, setProvince] = useState("11");
	const [kabupaten, setKabupaten] = useState("Kota Contoh 1");
	const [kecamatan, setKecamatan] = useState("");
	const [kelurahan, setKelurahan] = useState("");
	const [tps, setTps] = useState("");

	const chartSeries: number[] = [154, 133]; // dummy suara per TPS

	const chartOptions: ApexOptions = {
		chart: {
			type: "pie",
		},
		labels: ["Paslon 1 (Rina – Hadi)", "Paslon 2 (Dimas – Sari)"],
		colors: ["#E0A106", "#C48804"],
		title: {
			text: "Perolehan Suara",
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
			pasangan: "Rina – Hadi",
			partai: "Hanura, PDIP, PKB",
			jumlah: 154,
			persentase: "53.7%",
		},
		{
			no: 2,
			pasangan: "Dimas – Sari",
			partai: "Golkar, Gerindra",
			jumlah: 133,
			persentase: "46.3%",
		},
	];

	return (
		<div className="flex flex-col gap-4 w-full">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-none shadow-none">
				<div>
					<Title as="h4" className="text-xl mb-1">
						{`Hasil Pilkada Walikota - ${kabupaten}${
							kecamatan ? "," : ""
						} ${kecamatan}${kelurahan ? "," : ""} ${kelurahan}${tps ? "," : ""} ${tps}`}
					</Title>
					<Text variant="body2" className="text-muted-foreground">
						Data hasil suara Plikada Walikota untuk Kota yang di pilih.
					</Text>
				</div>
				<div className="flex items-center gap-2">
					<Text variant="body2" className="text-muted-foreground">
						Provinsi:
					</Text>
					<Select value={province} onValueChange={(v) => setProvince(v)}>
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

			<Card>
				<CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4">
					<SelectGroup>
						<SelectLabel>Kota</SelectLabel>
						<Select value={kabupaten} onValueChange={setKabupaten}>
							<SelectTrigger className="w-full h-9">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{["Kota Contoh 1", "Kota Contoh 2", "Kota Contoh 3"].map((val) => (
									<SelectItem key={val} value={val}>
										{val}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Kecamatan</SelectLabel>
						<Select value={kecamatan} onValueChange={setKecamatan}>
							<SelectTrigger className="w-full h-9">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{["Kec. Contoh 1", "Kec. Contoh 2", "Kec. Contoh 3"].map((val) => (
									<SelectItem key={val} value={val}>
										{val}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Kelurahan/Desa</SelectLabel>
						<Select value={kelurahan} onValueChange={setKelurahan}>
							<SelectTrigger className="w-full h-9">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{["Kel. Contoh 1", "Kel. Contoh 2", "Kel. Contoh 3"].map((val) => (
									<SelectItem key={val} value={val}>
										{val}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>TPS</SelectLabel>
						<Select value={tps} onValueChange={setTps}>
							<SelectTrigger className="w-full h-9">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{["TPS Contoh 1", "TPS Contoh 2", "TPS Contoh 3"].map((val) => (
									<SelectItem key={val} value={val}>
										{val}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</SelectGroup>
				</CardContent>
			</Card>

			<Card>
				<CardContent>
					<Chart
						key={`${province}-${kabupaten}-${kecamatan}-${kelurahan}-${tps}`}
						options={chartOptions}
						series={chartSeries}
						type="pie"
						height={400}
					/>
				</CardContent>
			</Card>

			<Card>
				<CardContent className="p-6">
					<Text variant="body1" className="font-semibold mb-2">
						Tabel Rekapitulasi Suara TPS
					</Text>
					<Table
						className="custom-antd-table pt-3"
						columns={pilkadaColumns as any}
						dataSource={tableData}
						pagination={false}
						rowKey="pasangan"
					/>
				</CardContent>
			</Card>
		</div>
	);
}
