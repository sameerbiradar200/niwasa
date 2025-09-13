    import Image from "next/image";
    import Link from "next/link";
    import LogoApp from "@/public/output-onlinepngtools (1).png"
    import Mobile from "@/public/airbnb-mobile.webp"
import { UserNav } from "./userNav";

    export  function Navbar() {

        
        return (
            <nav className="w-full border-b">
                <div className=" px-5 lg:px-10 py-5 flex justify-between items-center">
                    <Link href="/">

                        <Image 
                            src={LogoApp} 
                            alt="logo" 
                            className="w-45 left hidden lg:block hover:scale-110 transition-transform duration-300"
                        />

                        <Image
                            src={Mobile}
                            alt ="Mobile log"
                            className="block lg:hidden w-12"
                        />

                    </Link>

                    <div className="rounded-full border px-5 py-2">
                            <h1>Hello from the search</h1>
                    </div>

                    <UserNav />

                    
                </div>
            </nav>
        );
    }