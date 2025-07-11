import { Icon } from "@/components/icon";
import type { NavProps } from "@/components/nav";
import { Badge } from "@/ui/badge";

export const frontendNavData: NavProps["data"] = [
	{
		name: "sys.nav.dashboard",
		items: [
			{
				title: "Ikhtisar",
				path: "/ikhtisar",
				icon: <Icon icon="local:ic-workbench" size="24" />,
			},
			{
				title: "sys.nav.analysis",
				path: "/analysis",
				icon: <Icon icon="local:ic-analysis" size="24" />,
			},
		],
	},
	{
		name: "Struktur Organisasi",
		items: [
			{
				title: "Pengurus",
				path: "/pengurus",
				icon: <Icon icon="solar:users-group-rounded-bold-duotone" size="24" />,
			},
			{
				title: "Kepengurusan",
				path: "/kepengurusan",
				icon: <Icon icon="solar:folder-open-bold-duotone" size="24" />,
			},
			{
				title: "Upload Data",
				path: "/upload-kepengurusan",
				icon: <Icon icon="solar:cloud-upload-bold-duotone" size="24" />,
			},
		],
	},
	{
		name: "Keanggotaan",
		items: [
			{
				title: "Anggota",
				path: "/anggota",
				icon: <Icon icon="solar:user-bold-duotone" size="24" />,
			},
			{
				title: "Buat KTA",
				path: "/buat-kta",
				icon: <Icon icon="solar:user-id-bold-duotone" size="24" />,
			},
		],
	},
	{
		name: "Pemilihan",
		items: [
			{
				title: "Anggota Legislatif",
				path: "/pemilu",
				icon: <Icon icon="solar:user-check-rounded-bold-duotone" size="24" />,
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
				children: [
					{
						title: "DPR RI",
						path: "/error/500",
					},
					{
						title: "DPRD Provinsi",
						path: "/error/500",
					},
					{
						title: "DPRD Kabupaten",
						path: "/error/500",
					},
				],
			},
			{
				title: "Hasil Pemilu",
				path: "/pemilu",
				icon: <Icon icon="solar:file-check-bold-duotone" size="24" />,
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
				children: [
					{
						title: "DPR RI",
						path: "/pemilu/dpr-ri",
					},
					{
						title: "DPRD Provinsi",
						path: "/pemilu/dprd-provinsi",
					},
					{
						title: "DPRD Kabupaten",
						path: "/pemilu/dprd-kabupaten",
					},
				],
			},
			{
				title: "Hasil Pilkada",
				path: "/pilkada",
				icon: <Icon icon="solar:streets-map-point-bold-duotone" size="24" />,
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
				children: [
					{
						title: "Gubernur",
						path: "/pilkada/gubernur",
					},
					{
						title: "Walikota",
						path: "/pilkada/walikota",
					},
					{
						title: "Bupati",
						path: "/pilkada/bupati",
					},
				],
			},
			// {
			//   title: "Real Count",
			//   path: "/real-count",
			//   icon: (
			//     <Icon icon="solar:calculator-minimalistic-bold-duotone" size="24" />
			//   ),
			//   info: (
			//     <Badge variant="error">
			//       <Icon
			//         icon="solar:lock-keyhole-minimalistic-bold-duotone"
			//         size={14}
			//       />
			//     </Badge>
			//   ),
			// },
			{
				title: "Real Count",
				path: "/real-count",
				icon: <Icon icon="solar:calculator-minimalistic-bold-duotone" size="24" />,
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
				children: [
					{
						title: "DPR RI",
						path: "/real-count/dpr-ri",
					},
					{
						title: "DPRD Provinsi",
						path: "/real-count/dprd-provinsi",
					},
					{
						title: "DPRD Kabupaten",
						path: "/real-count/dprd-kabupaten",
					},
					{
						title: "Gubernur",
						path: "/real-count/gubernur",
					},
					{
						title: "Walikota",
						path: "/real-count/walikota",
					},
					{
						title: "Bupati",
						path: "/real-count/bupati",
					},
				],
			},
			{
				title: "Quick Count",
				path: "/quick-count",
				icon: <Icon icon="solar:alarm-play-bold-duotone" size="24" />,
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
				children: [
					{
						title: "DPR RI",
						path: "/quick-count/dpr-ri",
					},
					{
						title: "DPRD Provinsi",
						path: "/quick-count/dprd-provinsi",
					},
					{
						title: "DPRD Kabupaten",
						path: "/quick-count/dprd-kabupaten",
					},
					{
						title: "Gubernur",
						path: "/quick-count/gubernur",
					},
					{
						title: "Walikota",
						path: "/quick-count/walikota",
					},
					{
						title: "Bupati",
						path: "/quick-count/bupati",
					},
				],
			},
		],
	},
	{
		name: "Program Kerja",
		items: [
			{
				title: "Evaluasi",
				path: "/poker/evaluasi",
				icon: <Icon icon="solar:graph-new-up-bold-duotone" size="24" />,
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
				children: [
					{ title: "DPP", path: "/poker/evaluasi/dpp" },
					{ title: "DPD", path: "/poker/evaluasi/dpd" },
					{ title: "DPC", path: "/poker/evaluasi/dpc" },
				],
			},
			{
				title: "Kegiatan",
				path: "/poker/kegiatan",
				icon: <Icon icon="solar:clipboard-list-bold-duotone" size="24" />,
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
			},
			{
				title: "Timeline Kegiatan",
				path: "/poker/timeline",
				icon: <Icon icon="solar:calendar-bold-duotone" size="24" />,
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
			},
		],
	},
	{
		name: "Administrasi",
		items: [
			{
				title: "Manajemen Surat",
				icon: <Icon icon="solar:document-bold-duotone" size="24" />,
				path: "/administrasi/manajemen-surat",
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
				children: [
					{
						title: "Surat Masuk",
						path: "/administrasi/manajemen-surat/surat-masuk",
					},
					{
						title: "Surat Keluar",
						path: "/administrasi/manajemen-surat/surat-keluar",
					},
					{
						title: "Buat Surat",
						path: "/administrasi/manajemen-surat/buat-surat",
					},
					{
						title: "Arsip Surat",
						path: "/administrasi/manajemen-surat/arsip-surat",
					},
				],
			},
			{
				title: "Template",
				icon: <Icon icon="solar:pen-new-square-bold-duotone" size="24" />,
				path: "/administrasi/template",
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
				children: [
					{
						title: "Template Surat",
						path: "/administrasi/template/template-surat",
					},
					{
						title: "Tanda Tangan / Paraf",
						path: "/administrasi/template/tanda-tangan",
					},
					// {
					//   title: "Akses & Peran",
					//   path: "/administrasi/akses-surat",
					// },
				],
			},
			{
				title: "Pelacakan & Laporan",
				icon: <Icon icon="solar:chart-2-bold-duotone" size="24" />,
				path: "/administrasi/pelacakan-laporan",
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
				children: [
					{
						title: "Disposisi Surat",
						path: "/administrasi/pelacakan-laporan/disposisi-surat",
					},
					{
						title: "Agenda Surat",
						path: "/administrasi/pelacakan-laporan/agenda-surat",
					},
					{
						title: "Laporan Surat",
						path: "/administrasi/pelacakan-laporan/laporan-surat",
					},
				],
			},
		],
	},

	{
		name: "Data SiSaleh",
		items: [
			{
				title: "Daftar Caleg",
				path: "/sisaleh/daftar-caleg",
				icon: <Icon icon="solar:user-speak-rounded-bold-duotone" size="24" />,
				info: (
					<Badge variant="error">
						<Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" size={14} />
					</Badge>
				),
			},
			// {
			//   title: "Input Konstituen",
			//   path: "/sisaleh/input-konstituen",
			//   icon: <Icon icon="solar:user-hand-up-bold-duotone" size="24" />,
			//   info: (
			//     <Badge variant="error">
			//       <Icon
			//         icon="solar:lock-keyhole-minimalistic-bold-duotone"
			//         size={14}
			//       />
			//     </Badge>
			//   ),
			// },
		],
	},
	// {
	//   name: "sys.nav.pages",
	//   items: [
	//     // management
	//     {
	//       title: "sys.nav.management",
	//       path: "/management",
	//       icon: <Icon icon="local:ic-management" size="24" />,
	//       children: [
	//         {
	//           title: "sys.nav.user.index",
	//           path: "/management/user",
	//           children: [
	//             {
	//               title: "sys.nav.user.profile",
	//               path: "/management/user/profile",
	//             },
	//             {
	//               title: "sys.nav.user.account",
	//               path: "/management/user/account",
	//             },
	//           ],
	//         },
	//         {
	//           title: "sys.nav.system.index",
	//           path: "/management/system",
	//           children: [
	//             {
	//               title: "sys.nav.system.permission",
	//               path: "/management/system/permission",
	//             },
	//             {
	//               title: "sys.nav.system.role",
	//               path: "/management/system/role",
	//             },
	//             {
	//               title: "sys.nav.system.user",
	//               path: "/management/system/user",
	//             },
	//           ],
	//         },
	//       ],
	//     },
	//     // menulevel
	//     {
	//       title: "sys.nav.menulevel.index",
	//       path: "/menu_level",
	//       icon: <Icon icon="local:ic-menulevel" size="24" />,
	//       children: [
	//         {
	//           title: "sys.nav.menulevel.1a",
	//           path: "/menu_level/1a",
	//         },
	//         {
	//           title: "sys.nav.menulevel.1b.index",
	//           path: "/menu_level/1b",
	//           children: [
	//             {
	//               title: "sys.nav.menulevel.1b.2a",
	//               path: "/menu_level/1b/2a",
	//             },
	//             {
	//               title: "sys.nav.menulevel.1b.2b.index",
	//               path: "/menu_level/1b/2b",
	//               children: [
	//                 {
	//                   title: "sys.nav.menulevel.1b.2b.3a",
	//                   path: "/menu_level/1b/2b/3a",
	//                 },
	//                 {
	//                   title: "sys.nav.menulevel.1b.2b.3b",
	//                   path: "/menu_level/1b/2b/3b",
	//                 },
	//               ],
	//             },
	//           ],
	//         },
	//       ],
	//     },
	//     // errors
	//     {
	//       title: "sys.nav.error.index",
	//       path: "/error",
	//       icon: <Icon icon="bxs:error-alt" size="24" />,
	//       children: [
	//         {
	//           title: "sys.nav.error.403",
	//           path: "/error/403",
	//         },
	//         {
	//           title: "sys.nav.error.404",
	//           path: "/error/404",
	//         },
	//         {
	//           title: "sys.nav.error.500",
	//           path: "/error/500",
	//         },
	//       ],
	//     },
	//   ],
	// },
	// {
	//   name: "sys.nav.ui",
	//   items: [
	//     // components
	//     {
	//       title: "sys.nav.components",
	//       path: "/components",
	//       icon: <Icon icon="solar:widget-5-bold-duotone" size="24" />,
	//       caption: "sys.nav.custom_ui_components",
	//       children: [
	//         {
	//           title: "sys.nav.icon",
	//           path: "/components/icon",
	//         },
	//         {
	//           title: "sys.nav.animate",
	//           path: "/components/animate",
	//         },
	//         {
	//           title: "sys.nav.scroll",
	//           path: "/components/scroll",
	//         },
	//         {
	//           title: "sys.nav.i18n",
	//           path: "/components/multi-language",
	//         },
	//         {
	//           title: "sys.nav.upload",
	//           path: "/components/upload",
	//         },
	//         {
	//           title: "sys.nav.chart",
	//           path: "/components/chart",
	//         },
	//         {
	//           title: "sys.nav.toast",
	//           path: "/components/toast",
	//         },
	//       ],
	//     },
	//     // functions
	//     {
	//       title: "sys.nav.functions",
	//       path: "/functions",
	//       icon: <Icon icon="solar:plain-2-bold-duotone" size="24" />,
	//       children: [
	//         {
	//           title: "sys.nav.clipboard",
	//           path: "/functions/clipboard",
	//         },
	//         {
	//           title: "sys.nav.token_expired",
	//           path: "/functions/token_expired",
	//         },
	//       ],
	//     },
	//   ],
	// },
	// {
	//   name: "sys.nav.others",
	//   items: [
	//     {
	//       title: "sys.nav.permission",
	//       path: "/permission",
	//       icon: <Icon icon="mingcute:safe-lock-fill" size="24" />,
	//     },
	//     {
	//       title: "sys.nav.permission.page_test",
	//       path: "/permission/page-test",
	//       icon: <Icon icon="mingcute:safe-lock-fill" size="24" />,
	//       auth: ["permission:read"],
	//       hidden: true,
	//     },
	//     // {
	//     //   title: "sys.nav.calendar",
	//     //   path: "/calendar",
	//     //   icon: <Icon icon="solar:calendar-bold-duotone" size="24" />,
	//     //   info: <Badge variant="warning">+12</Badge>,
	//     // },
	//     {
	//       title: "sys.nav.kanban",
	//       path: "/kanban",
	//       icon: <Icon icon="solar:clipboard-bold-duotone" size="24" />,
	//     },
	//     // {
	//     //   title: "sys.nav.disabled",
	//     //   path: "/disabled",
	//     //   icon: <Icon icon="local:ic-disabled" size="24" />,
	//     //   disabled: true,
	//     // },
	//     // {
	//     //   title: "sys.nav.label",
	//     //   path: "#label",
	//     //   icon: <Icon icon="local:ic-label" size="24" />,
	// info: (
	//   <Badge variant="info">
	//     <Icon icon="solar:bell-bing-bold-duotone" size={14} />
	//     New
	//   </Badge>
	// ),
	//     // },
	//     // {
	//     //   title: "sys.nav.link",
	//     //   path: "/link",
	//     //   icon: <Icon icon="local:ic-external" size="24" />,
	//     //   children: [
	//     //     {
	//     //       title: "sys.nav.external_link",
	//     //       path: "/link/external-link",
	//     //     },
	//     //     {
	//     //       title: "sys.nav.iframe",
	//     //       path: "/link/iframe",
	//     //     },
	//     //   ],
	//     // },
	//     // {
	//     //   title: "sys.nav.blank",
	//     //   path: "/blank",
	//     //   icon: <Icon icon="local:ic-blank" size="24" />,
	//     // },
	//   ],
	// },
];
