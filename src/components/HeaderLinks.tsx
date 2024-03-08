import Image from "next/image";
import { HeaderLinkItems } from "@/intro";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { Link } from "@nextui-org/react";

interface IHeaderLinks {
    id: number;
    href: string;
    src: string;
    style: string;
    title: string;
}

const HeaderLinks = () => {
    const MotionLink = motion<any>(Link);
    return (
        <>
            {HeaderLinkItems.map((item: IHeaderLinks, index: number) => {
                const timing = (0.5 + index / 10) * 2;

                return (
                    <MotionLink
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInFromTop(timing)}
                        key={item.href + index}
                        isExternal
                        href={item.href}
                        className="bg-white/5  text-gray-400 p-4 font-medium text-sm rounded-md flex flex-col items-center justify-center h-24 w-24 gap-2 hover:bg-white/10"
                    >
                        <Image
                            height={40}
                            width={40}
                            src={item.src}
                            alt="Nextjs"
                            loading="lazy"
                            decoding="async"
                            className="aspect-square"
                        />
                        {item.title}
                    </MotionLink>
                );
            })}
        </>
    );
};

export default HeaderLinks;
