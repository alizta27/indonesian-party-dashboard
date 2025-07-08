import bgImg from "@/assets/images/background/banner-1.png";
import Character from "@/assets/images/characters/character_3.png";
import { Icon } from "@/components/icon";
import { GLOBAL_CONFIG } from "@/global-config";
import { Button } from "@/ui/button";
import { Text, Title } from "@/ui/typography";
import type { CSSProperties } from "react";

export default function BannerCard() {
	const bgStyle: CSSProperties = {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		// !  When passing a URL of SVG to a manually constructed url() by JS, the variable should be wrapped within double quotes.
		// ! https://vite.dev/guide/assets.html
		backgroundImage: `url("${bgImg}")`,
		backgroundSize: "100%",
		backgroundPosition: "50%",
		backgroundRepeat: "no-repeat",
		opacity: 0.5,
	};
	return (
		<div className="relative bg-primary/90">
			<div className="p-6 z-2 relative">
				<div className="grid grid-cols-2 gap-4">
					<div className="col-span-2 md:col-span-1">
						<div className="flex flex-col gap-4">
							<Title as="h2" className="text-white">
								{`Selamat Datang di ${GLOBAL_CONFIG.appName} Dashboard`}
							</Title>
							<Text className="text-white">
								{`Selamat datang di ${GLOBAL_CONFIG.appName}, portal digital terintegrasi untuk memudahkan pengelolaan data dan visualisasi statistik secara modern dan efisien.`}
							</Text>
							<Text className="text-white">
								Dengan antarmuka yang elegan, kami menghadirkan pengalaman baru yang cepat, ringan, dan aman bagi semua pengguna.
							</Text>
						</div>
					</div>

					<div className="col-span-2 md:col-span-1">
						<div className="w-full h-full flex items-center justify-end">
							<img src={Character} className="w-56 h-56" alt="character" />
						</div>
					</div>
				</div>
			</div>
			<div style={bgStyle} className="z-1" />
		</div>
	);
}
