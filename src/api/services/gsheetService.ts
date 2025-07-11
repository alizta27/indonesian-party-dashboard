import { GLOBAL_CONFIG } from "@/global-config";
import externalApiClient from "../externalApiClient";

export const gsheetApi = {
	baseUrl: `/api-gsheet/v4/spreadsheets/${GLOBAL_CONFIG.gsheetOfficerResponseId}/values/Responses1!A2:E?key=${GLOBAL_CONFIG.gsheetApiKey}`,
};

const fetchListOfficerResponse = async () => {
	const url = gsheetApi.baseUrl;
	return externalApiClient.get(url);
};

export default {
	fetchListOfficerResponse,
};
