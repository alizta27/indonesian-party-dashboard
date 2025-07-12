import { Chart, useChart } from "@/components/chart";
import Icon from "@/components/icon/icon";
import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";
import { Progress } from "@/ui/progress";
import { ScrollArea } from "@/ui/scroll-area";
import { Text, Title } from "@/ui/typography";
import { rgbAlpha } from "@/utils/theme";
import { useState } from "react";
import ProgramKerjaTable from "./table-data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";
import { dpdOptList } from "@/constants";

const quickStats = [
	{
		icon: "solar:clipboard-list-linear",
		label: "Total Kegiatan",
		value: "320",
		percent: 30.6,
		color: "#3b82f6",
		chart: [12, 18, 14, 16, 12, 10, 14, 18, 16, 14, 12, 10],
	},
	{
		icon: "solar:checklist-outline",
		label: "Kegiatan Terlaksana",
		value: "839",
		percent: 0,
		color: "#10b981",
		chart: [10, 14, 12, 16, 18, 14, 12, 10, 14, 18, 16, 12],
	},
	{
		icon: "solar:bicycling-round-outline",
		label: "Kegiatan Sedang Berlangsung",
		value: "290",
		percent: 30.6,
		color: "#f59e42",
		chart: [8, 12, 10, 14, 18, 16, 14, 12, 10, 14, 18, 16],
	},
	{
		icon: "solar:close-square-outline",
		label: "Kegiatan Belum Terlaksana",
		value: "67",
		percent: -30.6,
		color: "#ef4444",
		chart: [16, 14, 12, 10, 14, 18, 16, 12, 10, 14, 18, 16],
	},
];

const monthlyRevenue = {
	series: [
		{
			name: "Kegiatan",
			data: [30, 40, 35, 50, 49, 70, 91, 60, 50, 55, 60, 65],
		},
	],
	categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	percent: 5.44,
};

const projects = [
	{
		label: "Konsolidasi Struktural dari Pusat, Daerah Sampai di Desa/Kelurahan",
		progress: 100,
	},
	{
		label: "Digitalisasi Managemen Organisasi, Data Base Struktur Kepengurusan dan Keanggotaan",
		progress: 70,
	},
	{
		label:
			"Konsolidasi atau Penataan ulang struktur organisasi berdasarkan kebutuhan strategis dan pemetaan kekuatan daerah",
		progress: 50,
	},
	{ label: "Penyusunan Tata Kelola Organisasi", progress: 80 },
	{ label: "HUT PARTAI HANURA KE 19", progress: 0 },
];

export default function DppProjectEvaluation() {
	const [activeTab, setActiveTab] = useState("Seluruh Kegiatan");
	const [province, setProvince] = useState("11");

	const chartOptions = useChart({
		xaxis: { categories: monthlyRevenue.categories },
		chart: { toolbar: { show: false } },
		grid: { show: false },
		stroke: { curve: "smooth" },
		dataLabels: { enabled: false },
		yaxis: { show: false },
		legend: { show: false },
	});

	// throw new Error("test error"); // 注释掉直接抛错，改用演示组件

	return (
		<div className="flex flex-col gap-4 w-full">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-none shadow-none">
				<div>
					<Title as="h4" className="text-xl mb-1">
						{`Program Kerja DPC ${dpdOptList.find((opt) => opt.value === province)?.label}`}
					</Title>
					<Text variant="body2" className="text-muted-foreground">
						{`Menampilkan statistik pelaksanaan dan daftar Poker (Perogram Kerja) DPC ${
							dpdOptList.find((opt) => opt.value === province)?.label
						}.`}
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
					<Button>
						<Icon icon="solar:refresh-bold" />
						Perbarui Data
					</Button>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{quickStats.map((stat) => (
					<Card key={stat.label} className="flex flex-col justify-between h-full">
						<CardContent className="flex flex-col gap-2 p-4">
							<div className="flex items-center gap-2">
								<div className="rounded-lg p-2" style={{ background: rgbAlpha(stat.color, 0.1) }}>
									<Icon icon={stat.icon} size={24} color={stat.color} />
								</div>
								<Text variant="body2" className="font-semibold">
									{stat.label}
								</Text>
							</div>
							<div className="flex items-center gap-2 mt-2">
								<Title as="h3" className="text-2xl font-bold">
									{stat.value}
								</Title>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* 月度收入+项目进度区块 */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<Card className="lg:col-span-2">
					<CardContent className="p-6">
						<div className="flex items-center justify-between mb-2">
							<Text variant="body2" className="font-semibold">
								Tren Pelaksanaan Kegiatan
							</Text>
						</div>
						<Chart type="area" height={220} options={chartOptions} series={monthlyRevenue.series} />
					</CardContent>
				</Card>
				<Card className="flex flex-col gap-4 p-6">
					<Text variant="body2" className="font-semibold  mb-2">
						Pelaksanaan Program
					</Text>
					<ScrollArea className="h-[220px]">
						<div className="flex flex-col gap-4">
							{projects?.map((item) => (
								<div key={item.label}>
									<div className="flex items-center justify-between mb-2">
										<Text variant="body2" className="truncate max-w-[80%]">
											{item.label}
										</Text>
										<span className="text-xs font-bold text-blue-500">{item.progress}%</span>
									</div>
									<Progress value={item.progress} />
								</div>
							))}
						</div>
					</ScrollArea>
				</Card>
			</div>

			{/* 交易+收入区块 */}
			<div className="grid grid-cols-1 gap-4">
				<Card className="lg:col-span-2 flex flex-col p-6">
					<div className="flex items-center gap-4 mb-4">
						<Text variant="body2" className="font-semibold">
							Program Kerja
						</Text>
						<div className="flex gap-2">
							{["Seluruh Kegiatan", "Terlaksana", "Sedang Berlangsung", "Belum Terlaksana"].map((tab) => (
								<Button
									key={tab}
									size="sm"
									variant={activeTab === tab ? "default" : "ghost"}
									onClick={() => setActiveTab(tab)}
								>
									{tab}
								</Button>
							))}
						</div>
					</div>
					<div className="flex-1 overflow-x-auto">
						<div className="flex flex-col gap-10">
							<div className="flex flex-col gap-6">
								<Text variant="body2" className="font-semibold">
									A. PROGRAM JANGKA PENDEK (0–12 bulan)
								</Text>
								<ProgramKerjaTable />
							</div>
							<div className="flex flex-col gap-6">
								<Text variant="body2" className="font-semibold">
									B. PROGRAM JANGKA PANJANG (0–24 bulan)
								</Text>
								<ProgramKerjaTable />
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
