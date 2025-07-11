import { Loader2 } from "lucide-react";

export const PageLoading = ({ loading }: { loading: boolean }) => {
	if (!loading) return null;
	return (
		<div className="flex justify-center items-center w-full h-full absolute top-0 left-0 z-modal bg-primary/10">
			<Loader2 className="animate-spin mr-2 text-primary w-2xl h-9" />
		</div>
	);
};
