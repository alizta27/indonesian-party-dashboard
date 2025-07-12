import type { RouteObject } from "react-router";
import { Navigate } from "react-router";
import { Component } from "./utils";

export const frontendDashboardRoutes: RouteObject[] = [
	{ path: "ikhtisar", element: Component("/pages/dashboard/ikhtisar") },
	{ path: "analysis", element: Component("/pages/dashboard/analysis") },
	{ path: "blank", element: Component("/pages/sys/others/blank") },
	{
		path: "pengurus",
		element: Component("/pages/organization-structure/org-officers"),
	},
	{
		path: "kepengurusan",
		element: Component("/pages/organization-structure/organization"),
	},
	{
		path: "upload-kepengurusan",
		element: Component("/pages/organization-structure/upload"),
	},
	{
		path: "anggota",
		element: Component("/pages/membership/member"),
	},
	{
		path: "buat-kta",
		element: Component("/pages/membership/create-kta"),
	},
	{
		path: "pemilu",
		children: [
			{ index: true, element: <Navigate to="dpr-ri" replace /> },
			{
				path: "dpr-ri",
				element: Component("/pages/election/pemilu/dpr-ri"),
			},
			{
				path: "dprd-provinsi",
				element: Component("/pages/election/pemilu/dprd-provinsi"),
			},
			{
				path: "dprd-kabupaten",
				element: Component("/pages/election/pemilu/dprd-provinsi"),
			},
		],
	},
	{
		path: "pilkada",
		children: [
			{ index: true, element: <Navigate to="gubernur" replace /> },
			{
				path: "gubernur",
				element: Component("/pages/election/pilkada/gubernur"),
			},
			{
				path: "walikota",
				element: Component("/pages/election/pilkada/walikota"),
			},
			{
				path: "bupati",
				element: Component("/pages/election/pilkada/walikota"),
			},
		],
	},
	{
		path: "quick-count",
		children: [
			{ index: true, element: <Navigate to="dpr-ri" replace /> },
			{
				path: "dpr-ri",
				element: Component("/pages/election/quick-count"),
			},
			{
				path: "dprd-provinsi",
				element: Component("/pages/election/quick-count"),
			},
			{
				path: "dprd-kabupaten",
				element: Component("/pages/election/quick-count"),
			},
			{
				path: "gubernur",
				element: Component("/pages/election/quick-count"),
			},
			{
				path: "walikota",
				element: Component("/pages/election/quick-count"),
			},
			{
				path: "bupati",
				element: Component("/pages/election/quick-count"),
			},
		],
	},
	{
		path: "real-count",
		children: [
			{ index: true, element: <Navigate to="dpr-ri" replace /> },
			{
				path: "dpr-ri",
				element: Component("/pages/election/real-count"),
			},
			{
				path: "dprd-provinsi",
				element: Component("/pages/election/real-count"),
			},
			{
				path: "dprd-kabupaten",
				element: Component("/pages/election/real-count"),
			},
			{
				path: "gubernur",
				element: Component("/pages/election/real-count"),
			},
			{
				path: "walikota",
				element: Component("/pages/election/real-count"),
			},
			{
				path: "bupati",
				element: Component("/pages/election/real-count"),
			},
		],
	},
	{
		path: "poker",
		children: [
			{ index: true, element: <Navigate to="evaluasi/dpp" replace /> },
			{
				path: "evaluasi",
				children: [
					{
						path: "dpp",
						element: Component("/pages/projects/evaluation/dpp"),
					},
					{
						path: "dpd",
						element: Component("/pages/projects/evaluation/dpd"),
					},
					{
						path: "dpc",
						element: Component("/pages/projects/evaluation/dpc"),
					},
				],
			},
			{
				path: "kegiatan",
				element: Component("/pages/projects/task-list"),
			},
			{
				path: "timeline",
				element: Component("/pages/projects/timeline"),
			},
		],
	},
	{
		path: "sisaleh",
		children: [
			{ index: true, element: <Navigate to="caleg" replace /> },
			{
				path: "daftar-caleg",
				element: Component("/pages/sisaleh/caleg-list"),
			},
			{
				path: "input-konstituen",
				element: Component("/pages/sisaleh/input-konstituen"),
			},
		],
	},
	{
		path: "administrasi",
		children: [
			{ index: true, element: <Navigate to="surat-masuk" replace /> },

			// 🔸 Manajemen Surat
			{
				path: "surat-masuk",
				element: Component("/pages/administration/letters/incoming"),
			},
			{
				path: "surat-keluar",
				element: Component("/pages/administration/letters/outgoing"),
			},
			{
				path: "buat-surat",
				element: Component("/pages/administration/letters/compose"),
			},
			{
				path: "arsip-surat",
				element: Component("/pages/administration/letters/archive"),
			},

			// 🔸 Template & Otorisasi
			{
				path: "template-surat",
				element: Component("/pages/administration/templates/list"),
			},
			{
				path: "tanda-tangan",
				element: Component("/pages/administration/templates/signature"),
			},
			{
				path: "akses-surat",
				element: Component("/pages/administration/templates/access"),
			},

			// 🔸 Pelacakan & Laporan
			{
				path: "disposisi-surat",
				element: Component("/pages/administration/tracking/disposition"),
			},
			{
				path: "agenda-surat",
				element: Component("/pages/administration/tracking/schedule"),
			},
			{
				path: "laporan-surat",
				element: Component("/pages/administration/tracking/reports"),
			},
		],
	},
	// Unused
	{
		path: "components",
		children: [
			{ index: true, element: <Navigate to="animate" replace /> },
			{ path: "animate", element: Component("/pages/components/animate") },
			{ path: "scroll", element: Component("/pages/components/scroll") },
			{
				path: "multi-language",
				element: Component("/pages/components/multi-language"),
			},
			{ path: "icon", element: Component("/pages/components/icon") },
			{ path: "upload", element: Component("/pages/components/upload") },
			{ path: "chart", element: Component("/pages/components/chart") },
			{ path: "toast", element: Component("/pages/components/toast") },
		],
	},
	{
		path: "functions",
		children: [
			{ index: true, element: <Navigate to="clipboard" replace /> },
			{ path: "clipboard", element: Component("/pages/functions/clipboard") },
			{
				path: "token_expired",
				element: Component("/pages/functions/token-expired"),
			},
		],
	},
	{
		path: "management",
		children: [
			{ index: true, element: <Navigate to="user" replace /> },
			{
				path: "user",
				children: [
					{ index: true, element: <Navigate to="profile" replace /> },
					{
						path: "profile",
						element: Component("/pages/management/user/profile"),
					},
					{
						path: "account",
						element: Component("/pages/management/user/account"),
					},
				],
			},
			{
				path: "system",
				children: [
					{ index: true, element: <Navigate to="permission" replace /> },
					{
						path: "permission",
						element: Component("/pages/management/system/permission"),
					},
					{ path: "role", element: Component("/pages/management/system/role") },
					{ path: "user", element: Component("/pages/management/system/user") },
					{
						path: "user/:id",
						element: Component("/pages/management/system/user/detail"),
					},
				],
			},
		],
	},
	{
		path: "error",
		children: [
			{ index: true, element: <Navigate to="403" replace /> },
			{ path: "403", element: Component("/pages/sys/error/Page403") },
			{ path: "404", element: Component("/pages/sys/error/Page404") },
			{ path: "500", element: Component("/pages/sys/error/Page500") },
		],
	},
	{
		path: "menu_level",
		children: [
			{ index: true, element: <Navigate to="1a" replace /> },
			{ path: "1a", element: Component("/pages/menu-level/menu-level-1a") },
			{
				path: "1b",
				children: [
					{ index: true, element: <Navigate to="2a" replace /> },
					{
						path: "2a",
						element: Component("/pages/menu-level/menu-level-1b/menu-level-2a"),
					},
					{
						path: "2b",
						children: [
							{ index: true, element: <Navigate to="3a" replace /> },
							{
								path: "3a",
								element: Component("/pages/menu-level/menu-level-1b/menu-level-2b/menu-level-3a"),
							},
							{
								path: "3b",
								element: Component("/pages/menu-level/menu-level-1b/menu-level-2b/menu-level-3b"),
							},
						],
					},
				],
			},
		],
	},
	{
		path: "link",
		children: [
			{ index: true, element: <Navigate to="iframe" replace /> },
			{
				path: "iframe",
				element: Component("/pages/sys/others/link/iframe", {
					src: "https://ant.design/index-cn",
				}),
			},
			{
				path: "external-link",
				element: Component("/pages/sys/others/link/external-link", {
					src: "https://ant.design/index-cn",
				}),
			},
		],
	},
	{
		path: "permission",
		children: [
			{ index: true, element: Component("/pages/sys/others/permission") },
			{
				path: "page-test",
				element: Component("/pages/sys/others/permission/page-test"),
			},
		],
	},
	{ path: "calendar", element: Component("/pages/sys/others/calendar") },
	{ path: "kanban", element: Component("/pages/sys/others/kanban") },
	{ path: "blank", element: Component("/pages/sys/others/blank") },
];
