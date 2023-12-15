/** @format */

"use client";

import { PRODUCTS_CATEGORIES } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);
	return (
		<div className='flex gap-4 h-full'>
			{PRODUCTS_CATEGORIES.map((category, i) => {
				const handleOpen = () => {
					if (activeIndex === 0) {
						setActiveIndex(null);
					} else {
						setActiveIndex(i);
					}
				};
				const isOpen = i === activeIndex;
				return <NavItem key={} />;
			})}
		</div>
	);
};
export default NavItems;
