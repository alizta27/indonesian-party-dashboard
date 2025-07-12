import type React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface ProgramRow {
	key: string;
	no?: string;
	namaProgram?: string;
	namaKegiatan: string;
	sasaran: string;
	rencanaKegiatan: string;
	indikator: string;
	waktuPelaksanaan: string;
	keterangan: string;
	rowSpan?: number;
}

const columns: ColumnsType<ProgramRow> = [
	{
		title: "No",
		dataIndex: "no",
		render: (_, row) => ({
			children: row.no,
			props: { rowSpan: row.rowSpan || 0 },
		}),
	},
	{
		title: "Nama Program",
		dataIndex: "namaProgram",
		width: 300,
		render: (_, row) => ({
			children: row.namaProgram,
			props: { rowSpan: row.rowSpan || 0 },
		}),
	},
	{
		title: "Nama Kegiatan",
		dataIndex: "namaKegiatan",
		width: 300,
	},
	{
		title: "Sasaran",
		dataIndex: "sasaran",
		width: 150,
	},
	{
		title: "Rencana Kegiatan",
		dataIndex: "rencanaKegiatan",
	},
	{
		title: "Indikator Keberhasilan",
		dataIndex: "indikator",
		width: 250,
	},
	{
		title: "Waktu Pelaksanaan",
		dataIndex: "waktuPelaksanaan",
	},
	{
		title: "Keterangan",
		dataIndex: "keterangan",
	},
];

const data: ProgramRow[] = [
	{
		key: "1-1",
		no: "1",
		namaProgram: "Konsolidasi Struktural dari Pusat,\nDaerah Sampai di Desa/Kelurahan",
		namaKegiatan: "MUSDA",
		sasaran: "DPD",
		rencanaKegiatan: "",
		indikator: "Terbentuknya Kepengurusan DPD",
		waktuPelaksanaan: "JUNI–JULI 2025",
		keterangan: "Terlaksana",
		rowSpan: 4,
	},
	{
		key: "1-2",
		namaKegiatan: "MUSCAB",
		sasaran: "DPC",
		rencanaKegiatan: "",
		indikator: "Terbentuknya Kepengurusan DPC",
		waktuPelaksanaan: "AGUSTUS 2025\nOKTOBER 2025",
		keterangan: "Terlaksana",
		rowSpan: 0,
	},
	{
		key: "1-3",
		namaKegiatan: "MUSPINCAB",
		sasaran: "PAC\nPR\nPAR",
		rencanaKegiatan: "",
		indikator: "Terbentuknya Kepengurusan PAC DAN PR/PAR",
		waktuPelaksanaan: "JANUARI 2026\nDESEMBER 2026",
		keterangan: "Belum Terlaksana",
		rowSpan: 0,
	},
	{
		key: "1-4",
		namaKegiatan: "PELANTIKAN DPD DAN DPC",
		sasaran: "",
		rencanaKegiatan: "",
		indikator: "",
		waktuPelaksanaan: "NOVEMBER 2025",
		keterangan: "Sedang Berlangsung",
		rowSpan: 0,
	},
	{
		key: "2",
		no: "2",
		namaProgram: "Digitalisasi Managemen Organisasi, Data Base Struktur Kepengurusan dan Keanggotaan",
		namaKegiatan:
			"Pembuatan WEB/Aplikasi Data Base Pengurus dan Keanggotaan Partai Hanura. H-Gate (Gerbang Digitalisasi Partai Hanura)",
		sasaran: "DPD, DPC, PAC, PR, PAR",
		rencanaKegiatan: "",
		indikator:
			"Terbentuknya Sistem Pendataan Kepengurusan dan keanggotaan yang terverifikasi, tervalidasi dan Sistematis di seluruh Tingkatan",
		waktuPelaksanaan: "JULI 2025",
		keterangan: "Belum Terlaksana",
		rowSpan: 1,
	},
];

const ProgramKerjaTable: React.FC = () => {
	return <Table columns={columns} dataSource={data} bordered pagination={false} scroll={{ x: "max-content" }} />;
};

export default ProgramKerjaTable;
