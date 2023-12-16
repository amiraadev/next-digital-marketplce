/** @format */

"use client";

import { PRODUCTS_CATEGORIES } from "@/config";
import { useRef, useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);
    const isAnyOpen = activeIndex !== null
	const navRef = useRef<HTMLDivElement | null>()
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
				return <NavItem key={category.value} category={category}
                handleOpen={handleOpen}
                isOpen={isOpen}
                isAnyOpen={isAnyOpen}  />;
			})}
		</div>
	);
};
export default NavItems;
