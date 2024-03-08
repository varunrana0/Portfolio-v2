import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { myInfo } from "@/intro";

export default function WorkBefore() {
    return (
        <section className="py-8 md:py-16 relative">
            <h3 className="text-white text-3xl tracking-tighter font-semibold mb-4">
                Work Experience
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-4">
                {myInfo.workBefore.map((item: any, index: number) => (
                    <Card
                        key={item + index}
                        className="max-w-[400px] border border-white/5 bg-white/5"
                    >
                        <CardHeader className="flex flex-col items-center p-3 py-5">
                            <p className="text-md text-white">
                                {item.companyName}
                            </p>
                            <p className="text-small mt-1 text-default-500">
                                {item.workDuration}
                            </p>
                        </CardHeader>
                        <CardBody className="flex flex-col items-center pt-0">
                            <p className="text-xl text-white">
                                {item.position}
                            </p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    );
}
