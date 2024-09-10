"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export function LandingNav() {
    const pathname = usePathname();
    return (
        <nav className="w-full flex items-center justify-between py-2 fixed top-0 left-0 right-0 px-36 h-auto mb-10 z-[49] backdrop-blur-lg" style={{ margin: '0 auto', textAlign: 'center' }}>
            <Link href={"/"} className="font-semibold flex items-center gap-4">
                <img className="size-14" src="/svgs/logo.svg" alt="logo" />
                <span className="block">Resume-tweaker</span>
            </Link>
            {pathname === "/" && (
                <div className="flex gap-4 mx-auto">
                    <Link href={"#"} className="hover:underline hover:text-primary hover:scale-110">Pricing</Link>
                    <Link href={"/blogs"} className="hover:underline hover:text-primary hover:scale-110">Blogs</Link>
                    <Link href={"#"} className="hover:underline hover:text-primary hover:scale-110">About</Link>
                    <Link href={"#"} className="hover:underline hover:text-primary hover:scale-110">Features</Link>
                </div>
            )}
            <div className="flex gap-4">
                <ModeToggle />
                <Button>Login</Button>
            </div>
        </nav>
    )
}
