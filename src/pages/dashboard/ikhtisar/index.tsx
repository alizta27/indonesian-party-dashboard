import { Chart, useChart } from "@/components/chart";
import { Icon } from "@/components/icon";
import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";
import { Text, Title } from "@/ui/typography";
import { rgbAlpha } from "@/utils/theme";
import { useState } from "react";
import BannerCard from "./banner-card";
import { useNavigate } from "react-router";
import { voteOptions, voteSeries } from "./election-data";

const quickStats = [
	{
		icon: "local:level-dpc.svg",
		label: "Total Kepengurusan Terbentuk",
		value: "100",
		percent: 60,
		color: "#3b82f6", // blue
		chart: [12, 18, 14, 16, 12, 10, 14, 18, 16, 14, 12, 10],
	},
	{
		icon: "local:dpd.svg",
		label: "Total DPD Terbentuk",
		value: "100",
		percent: 100,
		color: "#8b5cf6", // violet
		chart: [12, 18, 14, 16, 12, 10, 14, 18, 16, 14, 12, 10],
	},
	{
		icon: "local:dpd.svg",
		label: "Total DPC Terbentuk",
		value: "290K+",
		percent: 80,
		color: "#f59e42", // orange
		chart: [8, 12, 10, 14, 18, 16, 14, 12, 10, 14, 18, 16],
	},
	{
		icon: "local:dpd.svg",
		label: "Total PAC Terbentuk",
		value: "839",
		percent: 80,
		color: "#10b981", // green
		chart: [10, 14, 12, 16, 18, 14, 12, 10, 14, 18, 16, 12],
	},
	{
		icon: "local:dpd.svg",
		label: "Total PR Terbentuk",
		value: "2,067",
		percent: 80,
		color: "#ec4899", // pink
		chart: [16, 14, 12, 10, 14, 18, 16, 12, 10, 14, 18, 16],
	},
	{
		icon: "local:dpd.svg",
		label: "Total PAR Terbentuk",
		value: "2,067",
		percent: 50,
		color: "#facc15", // yellow
		chart: [16, 14, 12, 10, 14, 18, 16, 12, 10, 14, 18, 16],
	},
	{
		icon: "local:dpd.svg",
		label: "Total Seluruh Pengurus",
		value: "2,067",
		percent: 0,
		color: "#0ea5e9", // sky blue
		chart: [16, 14, 12, 10, 14, 18, 16, 12, 10, 14, 18, 16],
	},
	{
		icon: "local:dpd.svg",
		label: "Total Kepengurusan Belum Terbentuk",
		value: "2,067",
		percent: 0,
		color: "#a16207", // amber
		chart: [16, 14, 12, 10, 14, 18, 16, 12, 10, 14, 18, 16],
	},
];
const monthlyRevenue = {
	series: [
		{
			name: "Terbentuk",
			data: [30, 40, 35, 50, 49, 70, 91, 60, 50, 55, 60, 65],
		},
	],
	categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	percent: 5.44,
};

const transactions = [
	{
		level: "DPC",
		name: "Kota Baru, Prov. Jawa Barat",
		ketum: "Rizky Ridho",
	},
	{
		level: "DPC",
		name: "Kab. Pamekasan, Prov. Jawa Barat",
		ketum: "Ahmad Fadillah",
	},
	{
		level: "PAC",
		name: "Kec. Pamekasan, Kab. Pamekasan, Prov. Jawa Barat",
		ketum: "Maman Abdullah",
	},
	{
		level: "PAC",
		name: "Kec. Pamekasan, Kab. Pamekasan, Prov. Jawa Barat",
		ketum: "Hamdan Syafei",
	},
	{
		level: "PAC",
		name: "Kec. Pamekasan, Kab. Pamekasan, Prov. Jawa Barat",
		ketum: "Hamdan Syafei",
	},
];

const totalIncome = {
	series: [100, 400, 700, 1000, 2000, 1000],
	labels: ["DPP", "DPD", "DPC", "PAC", "PR", "PAR"],
	details: [
		{ label: "DPP", value: 100 },
		{ label: "DPD", value: 400 },
		{ label: "DPC", value: 700 },
		{ label: "PAC", value: 1000 },
		{ label: "PR", value: 2000 },
		{ label: "PAR", value: 1000 },
	],
};

export default function Workbench() {
	const [activeTab, setActiveTab] = useState("Semua Kepengurusan");
	const navigate = useNavigate();
	const chartOptions = useChart({
		xaxis: { categories: monthlyRevenue.categories },
		chart: { toolbar: { show: false } },
		grid: { show: false },
		stroke: { curve: "smooth" },
		dataLabels: { enabled: false },
		yaxis: { show: false },
		legend: { show: false },
	});
	const donutOptions = useChart({
		labels: totalIncome.labels,
		legend: { show: false },
		dataLabels: { enabled: false },
		plotOptions: { pie: { donut: { size: "70%" } } },
	});

	// throw new Error("test error"); // 注释掉直接抛错，改用演示组件

	return (
		<div className="flex flex-col gap-4 w-full">
			<BannerCard />
			{/* 顶部四个统计卡片 */}
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
								<span
									className={`text-xs flex items-center gap-1 font-bold ${
										stat.percent > 0 ? "text-green-500" : stat.percent < 0 ? "text-red-500" : ""
									}`}
								>
									{stat.percent > 0 ? (
										<Icon icon="mdi:percent" size={16} />
									) : stat.percent < 0 ? (
										<Icon icon="mdi:percent" size={16} />
									) : null}
									{stat.percent !== 0 ? `${Math.abs(stat.percent)}%` : stat.label === "Total Task" ? "New" : null}
								</span>
							</div>
							<div className="w-full h-10 mt-2">
								<Chart
									type="bar"
									height={40}
									options={useChart({
										chart: { sparkline: { enabled: true } },
										colors: [stat.color],
										grid: { show: false },
										yaxis: { show: false },
										tooltip: { enabled: false },
									})}
									series={[{ data: stat.chart }]}
								/>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* 月度收入+项目进度区块 */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<Card className="lg:col-span-2">
					<CardContent className="p-6">
						<div className="flex items-center justify-between mb-2">
							<Text variant="body2" className="font-semibold">
								Tren Pembentukan Kepengurusan
							</Text>
							<span className="flex items-center gap-1 text-green-500 font-bold text-sm">
								<Icon icon="mdi:arrow-up" size={16} />
								{monthlyRevenue.percent}%
							</span>
						</div>
						<Chart type="area" height={220} options={chartOptions} series={monthlyRevenue.series} />
					</CardContent>{" "}
				</Card>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<Card className="lg:col-span-2">
					<CardContent className="p-6">
						<div className="flex items-center justify-between mb-2">
							<Text variant="body2" className="font-semibold">
								Perolehan Suara DPR RI Menurut Partai Politik Hasil Pemilu Legislatif 2024
							</Text>
							<span className="flex items-center gap-1 text-red-500 font-bold text-sm">
								<Icon icon="mdi:arrow-down" size={16} />
								{53.25}% dari Pemilu sebelumnya
							</span>
						</div>
						<Chart options={voteOptions} series={voteSeries} type="bar" height={600} />
					</CardContent>{" "}
				</Card>
			</div>

			{/* 交易+收入区块 */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<Card className="lg:col-span-2 flex flex-col p-6">
					<div className="flex items-center gap-4 mb-4">
						<Text variant="body2" className="font-semibold">
							Kepengurusan Terbaru:
						</Text>
						<div className="flex gap-2">
							{["Semua Kepengurusan", "DPD", "DPC", "PAC", "PR", "PAR"].map((tab) => (
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
						<table className="w-full text-sm">
							<tbody>
								{transactions.map((tx) => (
									<tr key={tx.name} className="border-b last:border-0">
										<td className="py-2 w-12">
											<div className="font-semibold">{tx.level}</div>
										</td>
										<td className="py-2">
											<div className="font-semibold">{tx.name}</div>
											<div className="text-xs">
												Ketum: <span className="font-semibold">{tx.ketum}</span>
											</div>
										</td>
										<td className="py-2 text-right font-bold">
											<p className="underline text-primary cursor-pointer">Lihat SK</p>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="flex items-center justify-between mt-4 gap-2">
						<Button onClick={() => navigate("/kepengurusan")} variant="outline" className="flex-1 cursor-pointer">
							Lihat Semua
						</Button>
					</div>
				</Card>
				<Card className="flex flex-col p-6">
					<Text variant="body2" className="font-semibold  mb-2">
						Total Pengurus
					</Text>
					<div className="flex-1 flex flex-col items-center justify-center">
						<Chart type="donut" height={180} options={donutOptions} series={totalIncome.series} />
						<div className="w-full mt-4">
							{totalIncome.details.map((item, i) => (
								<div key={item.label} className="flex items-center justify-between mb-2">
									<div className="flex items-center gap-2">
										<span
											className={"inline-block w-3 h-3 rounded-full"}
											style={{
												background: [
													"rgb(224, 159, 62)",
													"rgb(0, 184, 217)",
													"rgb(255, 171, 0)",
													"rgb(255, 86, 48)",
													"rgb(54, 179, 126)",
													"rgb(183, 110, 0)",
												][i],
											}}
										/>
										<Text variant="body2">{item.label}</Text>
									</div>
									<span className="font-bold">{item.value}</span>
								</div>
							))}
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
