import externalApiClient from "../externalApiClient";

export const WilayahSipedasApi = {
	baseUrl: "/api-wilayah/wilayah/list_wilayah",
	query: {
		national: (lvl2: "11" | "12" | "13") => `?thn=2025&lvl=10&lv2=${lvl2}`,
		province: (lvl2: "12" | "13" | "14", pro: string) => `?thn=2025&lvl=11&pro=${pro}&lv2=${lvl2}`,
		regency: (lvl2: "13" | "14", pro: string, kab: string) => `?thn=2025&lvl=12&pro=${pro}&kab=${kab}&lv2=${lvl2}`,
		subDistrict: (lvl2: "14", pro: string, kab: string, kec: string) =>
			`?thn=2025&lvl=13&pro=${pro}&kab=${kab}&kec=${kec}&lv2=${lvl2}`,
	},
};

const fetchNational = async (lvl2: "11" | "12" | "13") => {
	const url = WilayahSipedasApi.baseUrl + WilayahSipedasApi.query.national(lvl2);
	return externalApiClient.get(url);
};

const fetchProvince = async (lvl2: "12" | "13" | "14", pro: string) => {
	const url = WilayahSipedasApi.baseUrl + WilayahSipedasApi.query.province(lvl2, pro);
	return externalApiClient.get(url);
};

const fetchRegency = async (lvl2: "13" | "14", pro: string, kab: string) => {
	const url = WilayahSipedasApi.baseUrl + WilayahSipedasApi.query.regency(lvl2, pro, kab);
	return externalApiClient.get(url);
};

const fetchSubDistrict = async (lvl2: "14", pro: string, kab: string, kec: string) => {
	const url = WilayahSipedasApi.baseUrl + WilayahSipedasApi.query.subDistrict(lvl2, pro, kab, kec);
	return externalApiClient.get(url);
};

export default {
	fetchNational,
	fetchProvince,
	fetchRegency,
	fetchSubDistrict,
};
