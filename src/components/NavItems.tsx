/** @format */

"use client";

import { PRODUCTS_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);
	useEffect(() => {
      const handler = (e:KeyboardEvent) => {
		if(e.key === "Escape"){
			setActiveIndex(null)
		}
		document.addEventListener("keydown",handler)
	  }
	},[])
    const isAnyOpen = activeIndex !== null
	const navRef = useRef<HTMLDivElement | null>(null)
	useOnClickOutside(navRef,() => setActiveIndex(null))
	return (
		<div className='flex gap-4 h-full' ref={navRef}>
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
