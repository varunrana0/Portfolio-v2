"use client";
import { Tabs, Tab, Card, CardBody, Image } from "@nextui-org/react";
import styles from "../styles/marquees.module.css";
import { myInfo } from "@/intro";

export default function Experience() {
	const categories = Object.entries(myInfo.techData).map(([value, label]) => {
		const contentValues = label.map((content) => content);

		return {
			id: value,
			label: value,
			content: contentValues,
		};
	});

	return (
		<div className="py-8 md:py-16">
			<h3 className="text-white text-3xl tracking-tighter font-semibold mb-4">
				Tech Stack
			</h3>
			<div className={`sm:flex gap-4 w-full ${styles.skills}`}>
				<Tabs items={categories} className={`${styles.slot}`}>
					{(item: any) => (
						<Tab
							className="sm:py-0 justify-start capitalize font-medium text-white w-full"
							key={item.id}
							title={item.label}>
							<Card className=" bg-white/5 backdrop-blur-2xl shadow-none h-full">
								<CardBody className="sm:px-10 px-5 font-normal border-white text-white">
									<div className="grid md:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-14 place-items-center">
										{item.content.map(
											(content: {
												name: string;
												icon: string;
												img: string;
											}) => (
												<div
													key={content.name}
													className="flex flex-col items-center justify-center gap-4">
													<Image
														src={content.img}
														alt={content.img}
														className="h-16 w-16 object-contain aspect-auto"
													/>
													<p className="text-center whitespace-nowrap antialiased text-sm">
														{content?.name}
													</p>
												</div>
											),
										)}
									</div>
								</CardBody>
							</Card>
						</Tab>
					)}
				</Tabs>
			</div>
		</div>
	);
}
