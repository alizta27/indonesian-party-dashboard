import { OrgLevel } from "@/types/enum";

export const dpdOptList = [
	{ value: "11", label: "Aceh" },
	{ value: "51", label: "Bali" },
	{ value: "36", label: "Banten" },
	{ value: "17", label: "Bengkulu" },
	{ value: "34", label: "Daerah Istimewa Yogyakarta" },
	{ value: "31", label: "DKI Jakarta" },
	{ value: "75", label: "Gorontalo" },
	{ value: "15", label: "Jambi" },
	{ value: "32", label: "Jawa Barat" },
	{ value: "33", label: "Jawa Tengah" },
	{ value: "35", label: "Jawa Timur" },
	{ value: "61", label: "Kalimantan Barat" },
	{ value: "63", label: "Kalimantan Selatan" },
	{ value: "62", label: "Kalimantan Tengah" },
	{ value: "64", label: "Kalimantan Timur" },
	{ value: "65", label: "Kalimantan Utara" },
	{ value: "19", label: "Kepulauan Bangka Belitung" },
	{ value: "21", label: "Kepulauan Riau" },
	{ value: "18", label: "Lampung" },
	{ value: "81", label: "Maluku" },
	{ value: "82", label: "Maluku Utara" },
	{ value: "52", label: "Nusa Tenggara Barat" },
	{ value: "53", label: "Nusa Tenggara Timur" },
	{ value: "91", label: "Papua Barat" },
	{ value: "92", label: "Papua Barat Daya" },
	{ value: "95", label: "Papua Selatan" },
	{ value: "94", label: "Papua" },
	{ value: "96", label: "Papua Tengah" },
	{ value: "97", label: "Papua Pegunungan" },
	{ value: "14", label: "Riau" },
	{ value: "76", label: "Sulawesi Barat" },
	{ value: "73", label: "Sulawesi Selatan" },
	{ value: "72", label: "Sulawesi Tengah" },
	{ value: "74", label: "Sulawesi Tenggara" },
	{ value: "71", label: "Sulawesi Utara" },
	{ value: "13", label: "Sumatera Barat" },
	{ value: "16", label: "Sumatera Selatan" },
	{ value: "12", label: "Sumatera Utara" },
];

export const orgLevelOptList = [
	{
		label: "DPD",
		value: OrgLevel.DPD,
	},
	{
		label: "DPC",
		value: OrgLevel.DPC,
	},
	{
		label: "PAC",
		value: OrgLevel.PAC,
	},
	{
		label: "PR",
		value: OrgLevel.PR,
	},
	{
		label: "PAR",
		value: OrgLevel.PAR,
	},
];

export const SIPEDAS_LEVEL_CODE = {
	LVL: {
		NATIONAL: 10,
		PROVINCE: 11,
		REGENCY: 12,
		SUB_DISTRIC: 13,
	},
	LVL2: {
		PROVINCE: 11,
		REGENCY: 12,
		SUB_DISTRIC: 13,
		WARD: 14,
	},
};
export const SIPEDAS_QUERY_KEY = {
	PROVINCE: "pro",
	REGENCY: "kab",
	SUB_DISTRICT: "kec",
};

// TODO: add more list from this site: https://sig.bps.go.id/bridging-kode/index
export const CITY_BPS_CODE = ["1171", "1172", "1173", "1174", "1175"];
