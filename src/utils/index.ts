import { CITY_BPS_CODE } from "@/constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * merge classnames
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * check if item exists in resourcePool
 */
export const check = (item: string, resourcePool: string[]) => {
	return resourcePool.some((p) => p === item);
};

/**
 * check if any item exists in resourcePool
 */
export const checkAny = (items: string[], resourcePool: string[]) => items.some((item) => check(item, resourcePool));

/**
 * check if all items exist in resourcePool
 */
export const checkAll = (items: string[], resourcePool: string[]) => items.every((item) => check(item, resourcePool));

/**
 * join url parts
 * @example
 * urlJoin('/admin/', '/api/', '/user/') // '/admin/api/user'
 * urlJoin('/admin', 'api', 'user/')     // '/admin/api/user'
 * urlJoin('/admin/', '', '/user/')      // '/admin/user'
 */
export const urlJoin = (...parts: string[]) => {
	const result = parts
		.map((part) => {
			return part.replace(/^\/+|\/+$/g, ""); // 去除两边/
		})
		.filter(Boolean);
	return `/${result.join("/")}`;
};

export const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const getKabOrKotaBaseOnBpsCode = (pbsCode: string) => {
	if (CITY_BPS_CODE.includes(pbsCode)) {
		return "Kota";
	}
	return "Kab.";
};
