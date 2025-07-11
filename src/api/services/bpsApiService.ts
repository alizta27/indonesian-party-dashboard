import { GLOBAL_CONFIG } from "@/global-config";
import externalApiClient from "../externalApiClient";

// https://webapi.bps.go.id/v1/api/view/domain/0000/model/statictable/lang/ind/id/1573/key/WebAPI_KEY
export const bpsApi = {
	baseUrl: `https://webapi.bps.go.id/v1/api/view/domain/0000/model/statictable/lang/ind/id/1573/key/${GLOBAL_CONFIG.bpsApiKey}`,
};

const fetchElectionResult = async () => {
	const url = bpsApi.baseUrl;
	return externalApiClient.get(url);
};

export default {
	fetchElectionResult,
};
