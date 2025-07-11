import regionService from "@/api/services/regionService";
import { useAppQuery } from "@/hooks";

const useResidenceData = (lvl2: "12" | "13" | "14", pro: string, enable: boolean) => {
	return useAppQuery({
		queryKey: ["residenceData", lvl2, pro],
		queryFn: () => regionService.fetchProvince(lvl2, pro),
		enabled: Boolean(pro && enable),
	});
};

export default {
	useResidenceData,
};
