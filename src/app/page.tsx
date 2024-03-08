import Experience from "@/components/Skills";
import Header from "@/components/Header";
import WorkBefore from "@/components/WorkBefore";
import Socials from "@/components/Socials";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main className="py-10 px-5 relative z-[50]">
            <div className="max-w-4xl mx-auto h-full z-[50]">
                <Header />
                <WorkBefore />
                <Experience />
                <Projects />
                <Socials />
            </div>
        </main>
    );
}
