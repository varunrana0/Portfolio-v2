"use client";

import { myInfo } from "@/intro";
import { Avatar, Link } from "@nextui-org/react";
import NextLink from "next/link";
import HeaderLinks from "@/components/HeaderLinks";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Header = () => {
    return (
        <section className="py-16 pt-32 sm:pt-44">
            <div className="flex items-center gap-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft(0)}
                >
                    <Avatar
                        isBordered
                        color="secondary"
                        radius="full"
                        src={myInfo.avatar}
                        className="rounded-full p-px h-[64px] w-[64px]"
                    />
                </motion.div>
                <motion.div
                    className="flex flex-col gap-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromRight(0)}
                >
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
                            className="ml-2 text-[#61DAFB] font-semibold"
                        >
                            Mtechzilla
                        </Link>
                    </p>
                </motion.div>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromLeft(0.5)}
            >
                <p className="max-w-xl text-gray-300 my-10 text-sm text-[1.25rem] leading-7">
                    {myInfo?.bio}
                </p>
            </motion.div>
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromLeft(0.8)}
                className="text-slate-300 mb-4 font-semibold text-xl"
            >
                Organisation With Current Tech Stack
            </motion.p>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromLeft(1)}
                className="flex gap-2"
            >
                <HeaderLinks />
            </motion.div>
        </section>
    );
};

export default Header;
