import { Card, Image } from "@nextui-org/react";

const Photos = () => {
	return (
		<div className="w-full max-h-[700px] gap-4 grid grid-cols-12 grid-rows-2 py-16 h-full ">
			<Card className="col-span-12 sm:col-span-4 full">
				<Image
					removeWrapper
					alt="Card background"
					className="z-0 w-full h-full object-cover object-top"
					src="/profile-logo.jpg"
				/>
			</Card>
			<Card className="col-span-12 sm:col-span-4 sm:row-span-2 h-full">
				<Image
					removeWrapper
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src="/home-img.png"
				/>
			</Card>
			<Card className="col-span-12 sm:col-span-4 full">
				<Image
					removeWrapper
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src="/avatar.jpg"
				/>
			</Card>
			<Card
				isFooterBlurred
				className="w-full h-full col-span-12 sm:col-span-4 sm:row-span-2">
				<Image
					removeWrapper
					alt="Card example background"
					className="z-0 w-full h-full object-cover"
					src="/avatar.jpg"
				/>
			</Card>
			<Card
				isFooterBlurred
				className="w-full h-full col-span-12 sm:col-span-4 sm:row-span-2">
				<Image
					removeWrapper
					alt="Relaxing app background"
					className="z-0 w-full h-full object-cover"
					src="/avatar.jpg"
				/>
			</Card>
			<Card
				isFooterBlurred
				className="w-full full col-span-12 sm:col-span-4 row-span-1">
				<Image
					removeWrapper
					alt="Relaxing app background"
					className="z-0 w-full h-full object-cover"
					src="/avatar.jpg"
				/>
			</Card>
		</div>
	);
};

export default Photos;
