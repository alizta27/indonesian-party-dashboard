import packageJson from "../package.json";

/**
 * Global application configuration type definition
 */
export type GlobalConfig = {
	/** Application name */
	appName: string;
	/** Application version number */
	appVersion: string;
	/** Default route path for the application */
	defaultRoute: string;
	/** Public path for static assets */
	publicPath: string;
	/** Base URL for API endpoints */
	apiBaseUrl: string;
	/** Routing mode: frontend routing or backend routing */
	routerMode: "frontend" | "backend";
	/** Google Sheet API Key */
	gsheetApiKey: string;
	/** Google Sheet ID */
	gsheetOfficerResponseId: string;
	/** BPS API Key */
	bpsApiKey: string;
};

/**
 * Global configuration constants
 * Reads configuration from environment variables and package.json
 *
 * @warning
 * Please don't use the import.meta.env to get the configuration, use the GLOBAL_CONFIG instead
 */
export const GLOBAL_CONFIG: GlobalConfig = {
	appName: "H-Gate",
	appVersion: packageJson.version,
	defaultRoute: import.meta.env.VITE_APP_DEFAULT_ROUTE || "/ikhtisar",
	publicPath: import.meta.env.VITE_APP_PUBLIC_PATH || "/",
	apiBaseUrl: import.meta.env.VITE_APP_API_BASE_URL || "/api",
	routerMode: import.meta.env.VITE_APP_ROUTER_MODE || "frontend",
	gsheetApiKey: import.meta.env.VITE_APP_GSHEET_API_KEY || "",
	gsheetOfficerResponseId: import.meta.env.VITE_APP_GSHEET_OFFICER_RESPONSE_ID || "",
	bpsApiKey: import.meta.env.VITE_APP_BPS_API_KEY_DEV || "",
	// bpsApiKey: import.meta.env.VITE_APP_BPS_API_KEY_PROD || "",
};
