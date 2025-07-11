// export type Env = {};

export default {
	async fetch(request: Request): Promise<Response> {
		const url = new URL(request.url);
		const pathname = url.pathname;

		let targetUrl = "";
		let shouldProxy = false;

		// Proxy to Sipedas
		if (pathname.startsWith("/api-wilayah")) {
			targetUrl = `https://sipedas.pertanian.go.id${pathname.replace("/api-wilayah", "/api")}${url.search}`;
			shouldProxy = true;
		}

		// Proxy to Google Sheets API
		else if (pathname.startsWith("/api-gsheet")) {
			targetUrl = `https://sheets.googleapis.com${pathname.replace("/api-gsheet", "")}${url.search}`;
			shouldProxy = true;
		}

		// Not matched any proxy
		if (!shouldProxy) {
			return new Response("Not found", { status: 404 });
		}

		// Proxy the request
		const response = await fetch(targetUrl, {
			headers: {
				"User-Agent": "Cloudflare-Workers-Proxy",
				Accept: "application/json",
			},
		});

		const body = await response.text();

		return new Response(body, {
			status: response.status,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, OPTIONS",
				"Access-Control-Allow-Headers": "*",
				"Content-Type": "application/json",
			},
		});
	},
};
