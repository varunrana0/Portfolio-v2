"use client";
import { myInfo } from "@/intro";
import { Avatar, Link } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";

const Header = () => {
	return (
		<section className="py-16">
			<div className="">
				<Avatar
					isBordered
					color="secondary"
					radius="full"
					src={myInfo?.avatar}
					className="h-24 w-24 object-top mb-4"
				/>
				<h6 className="font-medium text-white text-lg md:text-2xl tracking-tighter">
					{myInfo?.name}
				</h6>
				{/* <h1 className="text-gray-300 text-4xl md:text-xl leading-none mb-8 mt-2 capitalize font-semibold">
					Senior software engineer
				</h1> */}
				<p className="max-w-xl text-gray-300 mt-10 text-sm tracking-wide ">
					{myInfo?.bio}
				</p>
				<div className="mt-4 flex gap-2">
					<Link
						as={NextLink}
						passHref
						isExternal
						href="https://nextjs.org/"
						className="bg-white/5 border-1 border-white/30 text-white px-2 py-1.5 font-medium text-sm rounded-md flex items-center justify-center w-fit gap-2">
						<span className="inline-flex">
							<Image
								height={20}
								width={20}
								src="/next-favicon.ico"
								alt="nextjs"
							/>
						</span>
						Next.js
					</Link>
					<Link
						as={NextLink}
						passHref
						isExternal
						href="https://react.dev/"
						className="bg-sky-100/5 border-1 border-sky-400 text-[#61DAFB] px-2 py-1.5 font-medium text-sm rounded-md flex items-center justify-center w-fit gap-2">
						<span className="inline-flex">
							<Image
								height={20}
								width={20}
								src="/react-logo.svg"
								alt="nextjs"
								style={{ width: "auto", height: "auto" }}
							/>
						</span>
						React.js
					</Link>
					<Link
						as={NextLink}
						passHref
						isExternal
						href="https://supabase.com/"
						className="bg-green-100/5 border-1 border-green-400 text-green-600 px-2 py-1.5 font-medium text-sm rounded-md flex items-center justify-center w-fit gap-2">
						<span className="inline-flex">
							<Image
								height={20}
								width={20}
								src="/supabase-icon.png"
								alt="nextjs"
							/>
						</span>
						Supabase
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Header;
