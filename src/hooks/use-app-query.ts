import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export const useAppQuery = <TData>(queryOpt: UseQueryOptions<TData>) => {
	const queryResult = useQuery({
		...queryOpt,
		retry: 1,
		refetchOnWindowFocus: false,
	});

	return queryResult;
};
