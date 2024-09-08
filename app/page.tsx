import { LandingNav } from "@/components/LandingNav";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
            <LandingNav />
        </div>
    </main>
  );
}
