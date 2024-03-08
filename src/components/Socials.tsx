"use client";

import { myInfo } from "@/intro";
import { slideInFromBottom } from "@/utils/motion";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

interface ISocials {
    title: string;
    link: string;
    icon: JSX.Element;
    variants: string;
}

const Socials = () => {
    const MotionLink = motion<any>(Link);

    return (
        <section className="py-8 md:py-16 relative">
            <div className="flex md:flex md:flex-row flex-col gap-2">
                {myInfo.socials.map((acc: ISocials, index: number) => {
                    const delay = 0.5 + (index / 10) * 2;

                    return (
                        <MotionLink
                            key={index}
                            as={NextLink}
                            href={acc.link}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInFromBottom(delay)}
                            className="capitalize border-1 border-white/10 text-white backdrop-blur-sm bg-white/5 p-2 rounded-full hover:bg-white/20 "
                        >
                            {acc.icon}
                        </MotionLink>
                    );
                })}
            </div>
        </section>
    );
};

export default Socials;
