import React from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Logo } from "./Logo";
import NavItems from "./NavItems";

const MobileNav = () => {
	return (
		<nav className="md:hidden">
			<Sheet>
				<SheetTrigger className="align-middle">
					<MenuIcon size={24} className="cursor-pointer" />
				</SheetTrigger>
				<SheetContent className="flex flex-col gap-6 bg-white md:hidden">
					<Logo />
					<Separator className="border border-gray-50" />
					<NavItems />
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default MobileNav;
