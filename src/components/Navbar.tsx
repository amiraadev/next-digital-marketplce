/** @format */

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
	return (
		<div className='bg-white sticky s-50 top-0 inset-x-0 h-16'>
			<header className='relative bg-white'>
				<MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <div className="ml-4 flex lg:ml-0">
                                <Link href='/'></Link>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
			</header>
		</div>
	);
};
export default Navbar;
