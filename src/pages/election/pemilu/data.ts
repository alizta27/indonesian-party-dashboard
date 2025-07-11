import type { ApexOptions } from "apexcharts";

export const voteSeries = [
	{
		name: "Persentase Suara",
		data: [
			16.72, 15.29, 13.22, 10.62, 9.66, 8.42, 7.43, 7.24, 3.87, 2.81, 1.29, 0.84, 0.72, 0.64, 0.42, 0.32, 0.27, 0.22,
		],
	},
];

export const voteOptions: ApexOptions = {
	chart: { type: "bar", height: 500 },
	plotOptions: {
		bar: {
			horizontal: true,
			borderRadius: 4,
		},
	},
	colors: ["#E0A106"],
	dataLabels: {
		enabled: true,
		formatter: (val: number) => `${val.toFixed(2)}%`,
	},
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
	},
	title: {
		text: "Persentase Perolehan Suara – Pemilu 2024",
		style: { color: "#E0A106", fontSize: "16px" },
	},
	tooltip: {
		y: { formatter: (val) => `${val.toFixed(2)}%` },
	},
};

export const jumlahSeries = [
	{
		name: "Jumlah Suara",
		data: [
			25387279, 23208654, 20071708, 16115655, 14660516, 12781353, 11283160, 10984003, 5878777, 4260169, 1955154,
			1281991, 1094588, 972910, 642545, 484486, 406883, 326800,
		],
	},
];

export const jumlahOptions: ApexOptions = {
	chart: { type: "bar", height: 500 },
	plotOptions: {
		bar: {
			horizontal: true,
			borderRadius: 4,
		},
	},
	colors: ["#E0A106"],
	dataLabels: {
		enabled: true,
		formatter: (val) => val.toLocaleString("id-ID"),
	},
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
	},
	title: {
		text: "Jumlah Suara Sah – Pemilu 2024",
		style: { color: "#E0A106", fontSize: "16px" },
	},
	tooltip: {
		y: { formatter: (val) => val.toLocaleString("id-ID") },
	},
};

export const kursiSeries = [
	{
		name: "Kursi DPR",
		data: [110, 102, 86, 68, 69, 53, 44, 48, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
];

export const kursiOptions: ApexOptions = {
	chart: { type: "bar", height: 500 },
	plotOptions: {
		bar: {
			horizontal: true,
			borderRadius: 4,
		},
	},
	colors: ["#E0A106"],
	dataLabels: {
		enabled: true,
		formatter: (val) => `${val} Kursi`,
	},
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
	},
	title: {
		text: "Jumlah Kursi DPR – Pemilu 2024",
		style: { color: "#E0A106", fontSize: "16px" },
	},
	tooltip: {
		y: { formatter: (val) => `${val} Kursi` },
	},
};

export const columns = [
	{
		title: "No",
		dataIndex: "no",
		key: "no",
		width: 50,
	},
	{
		title: "Partai Politik",
		dataIndex: "partai",
		key: "partai",
	},
	{
		title: "Jumlah Suara",
		dataIndex: "jumlah",
		key: "jumlah",
		align: "right",
		render: (value: number) => value.toLocaleString("id-ID"),
	},
	{
		title: "Persentase Suara (%)",
		dataIndex: "persentase",
		key: "persentase",
		align: "right",
	},
	{
		title: "Kursi DPR",
		dataIndex: "kursi",
		key: "kursi",
		align: "right",
	},
];

export const data = [
	{ no: 1, partai: "PDIP", jumlah: 25387279, persentase: "16.72", kursi: 110 },
	{
		no: 2,
		partai: "Golkar",
		jumlah: 23208654,
		persentase: "15.29",
		kursi: 102,
	},
	{
		no: 3,
		partai: "Gerindra",
		jumlah: 20071708,
		persentase: "13.22",
		kursi: 86,
	},
	{ no: 4, partai: "PKB", jumlah: 16115655, persentase: "10.62", kursi: 68 },
	{ no: 5, partai: "Nasdem", jumlah: 14660516, persentase: "9.66", kursi: 69 },
	{ no: 6, partai: "PKS", jumlah: 12781353, persentase: "8.42", kursi: 53 },
	{
		no: 7,
		partai: "Demokrat",
		jumlah: 11283160,
		persentase: "7.43",
		kursi: 44,
	},
	{ no: 8, partai: "PAN", jumlah: 10984003, persentase: "7.24", kursi: 48 },
	{ no: 9, partai: "PPP", jumlah: 5878777, persentase: "3.87", kursi: 12 },
	{ no: 10, partai: "PSI", jumlah: 4260169, persentase: "2.81", kursi: 0 },
	{ no: 11, partai: "Perindo", jumlah: 1955154, persentase: "1.29", kursi: 0 },
	{ no: 12, partai: "Gelora", jumlah: 1281991, persentase: "0.84", kursi: 0 },
	{ no: 13, partai: "Hanura", jumlah: 1094588, persentase: "0.72", kursi: 0 },
	{ no: 14, partai: "Buruh", jumlah: 972910, persentase: "0.64", kursi: 0 },
	{ no: 15, partai: "Ummat", jumlah: 642545, persentase: "0.42", kursi: 0 },
	{ no: 16, partai: "PBB", jumlah: 484486, persentase: "0.32", kursi: 0 },
	{ no: 17, partai: "Garuda", jumlah: 406883, persentase: "0.27", kursi: 0 },
	{ no: 18, partai: "PKN", jumlah: 326800, persentase: "0.22", kursi: 0 },
];
