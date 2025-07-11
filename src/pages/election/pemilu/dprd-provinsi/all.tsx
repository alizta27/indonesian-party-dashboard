import { Chart } from "@/components/chart";
import { Card, CardContent } from "@/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { Text, Title } from "@/ui/typography";
import {
	columns,
	data,
	jumlahOptions,
	jumlahSeries,
	kursiOptions,
	kursiSeries,
	voteOptions,
	voteSeries,
} from "../data";
import { Table } from "antd";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";
import { useState } from "react";
import { dpdOptList } from "@/constants";

export default function PemiluAll() {
	const [province, setProvince] = useState("11");

	return (
		<div className="flex flex-col gap-4 w-full">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-none shadow-none">
				<div>
					<Title as="h4" className="text-xl mb-1">
						{` Hasil Pemilu DPRD Provinsi ${dpdOptList.find((opt) => opt.value === province)?.label}`}
					</Title>
					<Text variant="body2" className="text-muted-foreground">
						{`Menampilkan perolehan suara DPRD Provinsi ${
							dpdOptList.find((opt) => opt.value === province)?.label
						} secara berdasarkan hasil resmi KPU.`}
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

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
				{/* Total Suara Sah */}
				<Card className="p-4 text-center shadow-sm">
					<h2 className="text-lg font-bold text-primary">151.796.631</h2>
					<p className="text-sm font-semibold">Total Suara Sah</p>
				</Card>

				{/* Partai Lolos Parlemen */}
				<Card className="p-4 text-center shadow-sm">
					<h2 className="text-lg font-semibold text-primary">9 Partai</h2>
					<p className="text-sm font-semibold">Partai Lolos Parlemen</p>
				</Card>

				{/* Partisipasi Tidak Hadir */}
				<Card className="p-4 text-center shadow-sm">
					<h2 className="text-lg font-semibold text-primary">119.400</h2>
					<p className="text-sm font-semibold">Partisipasi Tidak Hadir (Golput)</p>
				</Card>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
				<Card>
					<CardContent className="p-6">
						<Tabs defaultValue="persentase" className="w-full">
							<TabsList className="bg-[#fff3d1]">
								<TabsTrigger value="persentase">Persentase</TabsTrigger>
								<TabsTrigger value="jumlah">Jumlah Suara</TabsTrigger>
								<TabsTrigger value="kursi">Kursi DPR</TabsTrigger>
							</TabsList>
							<TabsContent value="persentase">
								<Chart options={voteOptions} series={voteSeries} type="bar" height={500} />
							</TabsContent>
							<TabsContent value="jumlah">
								<Chart options={jumlahOptions} series={jumlahSeries} type="bar" height={500} />
							</TabsContent>
							<TabsContent value="kursi">
								<Chart options={kursiOptions} series={kursiSeries} type="bar" height={500} />
							</TabsContent>
						</Tabs>
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
							columns={columns as any}
							dataSource={data}
							pagination={false}
							rowKey="partai"
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
