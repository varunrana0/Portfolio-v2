"use client";
import Image from "next/image";
import { myInfo } from "@/intro";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromTop } from "@/utils/motion";

interface Props {
    img: string;
    name: string;
    delay: number;
}

interface Skill {
    name: string;
    img: string;
}

interface Category {
    title: string;
    list: Skill[];
}

export default function Experience() {
    return (
        <div className="py-8 md:py-16 ">
            {myInfo.techData.map((item: Category, index: number) => {
                const delay = 0.5 + (index / 10) * 2;
                const firstIndex = index === 0;
                return (
                    <div
                        className="flex flex-col items-center justify-center gap-8"
                        key={`${item.title}-${index}`}
                    >
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInFromTop(0.8)}
                            className={`text-white text-3xl tracking-tighter font-semibold ${
                                firstIndex ? "mt-0" : "mt-20"
                            }`}
                        >
                            {item.title}
                        </motion.h3>
                        <div className="flex items-center justify-center gap-x-4 gap-y-5 flex-wrap">
                            {item.list.map((list: Skill, listIndex: number) => (
                                <SkillCard
                                    key={`${index}-${listIndex + 1}-${
                                        item.title
                                    }`}
                                    name={list.name}
                                    img={list.img}
                                    delay={delay + (listIndex + 1) / 20}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const SkillCard = ({ img, name, delay }: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom(delay)}
            className="relative rounded-lg h-28 w-28 flex flex-col gap-2 items-center justify-center bg-gradient-to-b from-transparent to-slate-500/25 p-3 overflow-hidden"
        >
            <Image src={img} alt="Skill" height={40} width={45} />
            <p className="whitespace-nowrap text-sm text-gray-300">{name}</p>
        </motion.div>
    );
};
