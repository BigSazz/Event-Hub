import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
	subsets: ["latin"],
	weight: ["400", "600"],
});

export const Logo = () => {
	return (
		<div className="flex items-center gap-x-3">
			<Image src="/assets/logo.svg" height="30" width="30" alt="Logo" />
			<p className={cn("font-semibold text-xl", font.className)}>
				EventHub
			</p>
		</div>
	);
};
