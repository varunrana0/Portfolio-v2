"use client";
import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { myInfo } from "@/intro";

export default function WorkBefore() {
	const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
		new Set(["0"]),
	);

	return (
		<section className="py-8 md:py-16">
			<h3 className="text-white text-3xl tracking-tighter font-semibold mb-4">
				Work Experience
			</h3>
			{myInfo?.workBefore?.map((item: any, index: number) => (
				<Accordion
					selectedKeys={selectedKeys}
					onSelectionChange={() =>
						setSelectedKeys(new Set([String(index)]))
					}
					key={index}
					className="mt-4 p-0">
					<AccordionItem
						key={index}
						className="border-1 mt-4 border-white/20 backdrop-blur-xl bg-white/5 p-5 md:px-7 py-5 rounded-lg"
						aria-label="Janelle Lenard"
						// startContent={
						// 	<Avatar
						// 		isBordered
						// 		color="secondary"
						// 		radius="full"
						// 		src="/avatar.jpg"
						// 	/>
						// }
						subtitle={<span>{item?.workDuration}</span>}
						title={
							<span className="text-white whitespace-pre-line break-words">
								{item?.companyName}
							</span>
						}>
						<ul className="py-2">
							{item?.workResponsibilities?.map((list: string) => (
								<li
									key={list}
									className="text-white/70 text-sm mt-4 tracking-wider">
									{list}
								</li>
							))}
						</ul>
					</AccordionItem>
				</Accordion>
			))}
		</section>
	);
}
