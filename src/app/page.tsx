import Experience from "@/components/Skills";
import Header from "@/components/Header";
import WorkBefore from "@/components/WorkBefore";
import { Divider } from "@nextui-org/react";
import Socials from "@/components/Socials";
import Photos from "@/components/Photos";

export default function Home() {
	return (
		<main className="py-10 px-5">
			<div className="max-w-4xl mx-auto h-full">
				<Header />
				{/* <Divider className="bg-gradient-to-r from-transparent via-white/40 to-transparent" /> */}
				{/* <Photos /> */}
				<Divider className="bg-gradient-to-r from-transparent via-white/40 to-transparent" />
				<WorkBefore />
				<Divider className="bg-gradient-to-r from-transparent via-white/40 to-transparent" />
				<Socials />
				{/* Dank Mono, 'Courier New', monospace */}
				<Divider className="bg-gradient-to-r from-transparent via-white/40 to-transparent" />
			</div>
		</main>
	);
}
