import { format as formatDateFns, isValid, parseISO } from "date-fns";

export const formatDate = (dateInput: string, pattern: string): string => {
	const date = parseISO(dateInput);

	return isValid(date) ? formatDateFns(date, pattern) : "";
};
