import bpsApiService from "@/api/services/bpsApiService";
import { useAppQuery } from "@/hooks";

const useElectionResult = () => {
	return useAppQuery({
		queryKey: ["fetchElectionResult"],
		queryFn: () => bpsApiService.fetchElectionResult(),
	});
};

export default {
	useElectionResult,
};
