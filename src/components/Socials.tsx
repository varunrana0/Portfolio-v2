"use client";
import { myInfo } from "@/intro";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";

const Socials = () => {
	return (
		<section className="py-8 md:py-16">
			<div className="flex md:flex md:flex-row flex-col gap-4 items-center justify-center w-full">
				{myInfo?.socials?.map((acc: any) => (
					<Button
						key={acc?.title}
						as={NextLink}
						href={acc?.link}
						passHref
						className={`capitalize w-full md:w-fit border-1 border-white/10 text-white backdrop-blur-sm bg-white/5 rounded-lg`}
						style={{
							backgroundImage:
								"radial-gradient(circle at top left, #2020208c, transparent)",
						}}
						variant="bordered"
						target="_blank"
						size="lg"
						color={acc?.variants}
						startContent={<acc.icon />}>
						{acc?.title}
					</Button>
				))}
			</div>
		</section>
	);
};

export default Socials;
