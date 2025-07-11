import Icon from "@/components/icon/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import PerTps from "./per-tps";
import AllAnalysis from "./all";
import { Separator } from "@/ui/separator";

export default function PilkadaBupati() {
	return (
		<Tabs defaultValue="1" orientation="vertical">
			<TabsList>
				<TabsTrigger value="1">
					<div className="flex items-center">
						<Icon icon="solar:graph-new-up-outline" size={20} className="mr-2" color="#E09F3E" />
						<span>Data Keseluruhan</span>
					</div>
				</TabsTrigger>
				<TabsTrigger value="2">
					<div className="flex items-center">
						<Icon icon="solar:graph-new-up-outline" size={20} className="mr-2" color="#E09F3E" />
						<span>Data Per TPS</span>
					</div>
				</TabsTrigger>
			</TabsList>
			<Separator />
			<TabsContent value="1">
				<AllAnalysis />
			</TabsContent>
			<TabsContent value="2">
				<PerTps />
			</TabsContent>
		</Tabs>
	);
}
