import type { ApexOptions } from "apexcharts";

export const voteOptions: ApexOptions = {
	chart: {
		type: "bar",
		toolbar: { show: false },
		foreColor: "#333",
		// background: "#FFF8E1",
	},
	plotOptions: {
		bar: {
			horizontal: true,
			borderRadius: 4,
			barHeight: "70%",
		},
	},
	colors: ["#E0A106"],
	dataLabels: {
		enabled: true,
		style: {
			colors: ["#000"],
		},
		formatter: (val: number) => `${val.toFixed(2)}%`,
	},
	stroke: { curve: "smooth" },
	grid: { show: false },
	xaxis: {
		categories: [
			"PDIP",
			"Golkar",
			"Gerindra",
			"PKB",
			"Nasdem",
			"PKS",
			"Demokrat",
			"PAN",
			"PPP",
			"PSI",
			"Perindo",
			"Gelora",
			"Hanura",
			"Buruh",
			"Ummat",
			"PBB",
			"Garuda",
			"PKN",
		],
		// title: {
		//   text: "Partai Politik",
		// },
	},
};

export const voteSeries = [
	{
		name: "Persentase Suara",
		data: [
			16.72, 15.29, 13.2, 10.62, 9.66, 8.42, 7.43, 7.24, 3.87, 2.81, 1.29, 0.84, 0.72, 0.64, 0.42, 0.32, 0.27, 0.22,
		],
	},
];

export const seatSeries = [
	{
		name: "Kursi DPR",
		data: [110, 102, 86, 68, 69, 53, 44, 48, 12],
	},
];

export const seatOptions = {
	chart: {
		type: "bar",
		height: 400,
	},
	plotOptions: {
		bar: {
			horizontal: true,
		},
	},
	xaxis: {
		categories: ["PDIP", "Golkar", "Gerindra", "PKB", "Nasdem", "PKS", "Demokrat", "PAN", "PPP"],
		title: {
			text: "Partai Politik",
		},
	},
	dataLabels: {
		enabled: true,
	},
	title: {
		text: "Perolehan Kursi DPR – Pemilu 2024",
	},
};
