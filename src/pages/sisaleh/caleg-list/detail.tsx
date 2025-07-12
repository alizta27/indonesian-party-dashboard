import {
	Drawer,
	DrawerClose,
	DrawerContent,
	// DrawerDescription,
	DrawerHeader,
	DrawerTitle,
} from "@/ui/drawer";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import { Separator } from "@/ui/separator";
import { Text, Title } from "@/ui/typography";

interface Props {
	open: boolean;
	onClose: () => void;
	caleg: {
		full_name: string;
		number: number;
		lembaga: string;
		dapil: string;
		total_constituents: number;
		form_link?: string;
	};
}

export default function CalegDrawer({ open, onClose, caleg }: Props) {
	return (
		<Drawer open={open} onClose={onClose} direction="right">
			<DrawerContent className="p-4">
				<DrawerTitle>
					<Title as="h4">Detail Caleg</Title>
					<Text variant="body2" color="secondary">
						Informasi lengkap caleg
					</Text>
				</DrawerTitle>
				<DrawerHeader>
					<Text variant="body1" className="font-medium">
						{caleg.full_name}
					</Text>
				</DrawerHeader>

				<div className="space-y-3 px-4 py-2 text-sm">
					<div>
						<Text variant="caption" color="secondary">
							No Urut
						</Text>
						<Text variant="body1">{caleg.number}</Text>
					</div>

					<div>
						<Text variant="caption" color="secondary">
							Lembaga
						</Text>
						<Badge>{caleg.lembaga}</Badge>
					</div>

					<div>
						<Text variant="caption" color="secondary">
							Dapil
						</Text>
						<Text variant="body1">{caleg.dapil}</Text>
					</div>

					<div>
						<Text variant="caption" color="secondary">
							Jumlah Konstituen
						</Text>
						<Text variant="body1">{caleg.total_constituents}</Text>
					</div>

					{caleg.form_link && (
						<div>
							<Text variant="caption" color="secondary">
								Google Form
							</Text>
							<a href={caleg.form_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
								{caleg.form_link}
							</a>
						</div>
					)}
				</div>

				<Separator className="my-4" />

				<div className="flex justify-end px-4">
					<DrawerClose asChild>
						<Button variant="outline">Tutup</Button>
					</DrawerClose>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
