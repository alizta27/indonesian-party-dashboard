interface KtaTemplateProps {
	typedFullName: string;
	typedReligion: string;
	fullAddress: string;
	birthPlaceDateBirth: string;
	imageUrl: string;
}

export const KtaTemplate: React.FC<KtaTemplateProps> = ({
	typedFullName,
	typedReligion,
	fullAddress,
	birthPlaceDateBirth,
	imageUrl,
}) => {
	return (
		<div className="w-[445px] rounded-[4px] bg-white flex flex-col overflow-hidden shadow-md">
			<div className="flex">
				<div className="bg-[#000] w-[126px] h-[44px]" />
				<div className="flex-1 bg-primary h-[44px] flex justify-center items-center text-[16px]/[0px] font-bold">
					KARTU TANDA ANGGOTA
				</div>
			</div>
			<div className="flex py-[6px] px-[15px] gap-[15px] w-full">
				<div className="h-[135px] w-[97px] bg-[#ffffff] shadow-sm border-[1px]">
					<img src={imageUrl} alt="foto-anggota" className="w-full h-full object-center object-cover" />
				</div>
				<div className="flex-1 h-full flex flex-col text-[11px] gap-[2px]">
					<div className="flex">
						<div className="w-[115px] font-bold">NO. KTA</div>
						<div className="px-1">:</div>
						<div className="font-semibold">XXXX.XXXX.XXXXX</div>
					</div>

					<div className="flex">
						<div className="w-[115px] font-bold">NAMA</div>
						<div className="px-1">:</div>
						<div className="font-semibold">{typedFullName}</div>
					</div>

					<div className="flex">
						<div className="w-[115px] font-bold">TEMPAT/TGL. LAHIR</div>
						<div className="px-1">:</div>
						<div className="font-semibold">{birthPlaceDateBirth}</div>
					</div>

					<div className="flex">
						<div className="w-[115px] font-bold">AGAMA</div>
						<div className="px-1">:</div>
						<div className="font-semibold">{typedReligion}</div>
					</div>

					<div className="grid grid-cols-[115px_10px_1fr] items-start">
						<div className="font-bold">ALAMAT</div>
						<div className="px-1">:</div>
						<div className="whitespace-pre-wrap break-words font-semibold">{fullAddress}</div>
					</div>
				</div>
			</div>
			<div className="flex py-[6px] pr-[15px] pl-[6px] gap-[15px] w-full">
				<div className="h-[44px] w-[143px] bg-primary text-[11px]/[15px] flex justify-center items-center text-justify px-[9px] leading-snug self-end">
					{"Berlaku Selama  Menjadi Anggota Partai HANURA"}
				</div>
				<div className="flex-1 h-full flex pb-[10px] justify-between">
					<div className="flex text-[11px] flex-col justify-between gap-[35px] items-center">
						<div className="font-bold">KETUA UMUM</div>
						<div className="font-bold">DR. OESMAN SAPTA</div>
					</div>
					<div className="flex text-[11px] flex-col justify-between gap-[35px] items-center">
						<div className="font-bold">SEKRETARIS UMUM</div>
						<div className="font-bold">BENNY RHAMDANI, S.I.Pol</div>
					</div>
				</div>
			</div>
		</div>
	);
};
