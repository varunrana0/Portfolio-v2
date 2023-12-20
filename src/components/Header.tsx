"use client";
import { myInfo } from "@/intro";
import { Avatar, Link } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";

const Header = () => {
	return (
		<section className="py-16 pt-32 sm:pt-44">
			<div className="flex items-center gap-8">
				<Avatar
					isBordered
					color="secondary"
					radius="full"
					src={myInfo.avatar}
					className="rounded-full p-px h-[64px] w-[64px]"
				/>
				<div className="flex flex-col gap-0">
					<h1 className="font-medium text-white text-[30px] md:text-3xl tracking-tighter">
						{myInfo?.name}
					</h1>
					<p className="items-center text-[18px] md:text-lg text-gray-400">
						<span className="hidden sm:inline-block">
							Software Developer
						</span>
						<span className="inline-block sm:hidden">SD</span> at
						<Link
							as={NextLink}
							passHref
							isExternal
							href="https://mtechzilla.com"
							className=" ml-2 text-[#61DAFB] font-semibold">
							Mtechzilla
						</Link>
					</p>
				</div>
			</div>
			<div>
				{/* <h1 className="text-gray-300 text-4xl md:text-xl leading-none mb-8 mt-2 capitalize font-semibold">
					Senior software engineer
				</h1> */}
				<p className="max-w-xl text-gray-300 my-10 text-sm text-[1.25rem] leading-7">
					{myInfo?.bio}
				</p>
				<div className="flex gap-2">
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
