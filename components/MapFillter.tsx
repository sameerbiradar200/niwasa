"use client";
import { categoryItems } from "@/lib/categoryItems";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function MapFilter() {

    const serchParams = useSearchParams();
    const serch = serchParams.get('filter')
    const pathname = usePathname();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(serchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [serchParams]
    )


    return (
        <div className="flex mt-5 w-full gap-x-10 overflow-x-scroll md:overflow-x-auto no-scrollbar">
            {categoryItems.map((item) => (
                <Link key={item.id} href={pathname + '?' + createQueryString('filter', item.name)}
                    className={cn(
                        serch === item.name ? "border-b-2 border-black pb-2 flex-shrink-0" : "opacity-70 flex-shrink-0", "flex flex-col gap-y-3 items-center"
                    )}
                >

                    <div className="relative h-6 w-6">
                        <Image src={item.imageUrl} alt={item.name} fill className="h-6 w-6" />
                    </div>

                    <p>{item.name}</p>

                </Link>
            ))}
        </div>
    );
}