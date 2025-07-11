import gsheetService from "@/api/services/gsheetService";
import { useAppQuery } from "@/hooks";

const useListOfficerResponse = () => {
	return useAppQuery({
		queryKey: ["listOfficerResponse"],
		queryFn: () => gsheetService.fetchListOfficerResponse(),
	});
};

export default {
	useListOfficerResponse,
};
