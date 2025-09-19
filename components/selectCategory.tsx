"use client"

import { categoryItems } from "@/lib/categoryItems"
import { Card, CardHeader } from "./ui/card"
import Image from "next/image"
import { useState } from "react"

export function SelectCategory(){

    const [selectCategory,setSelectCategory] = useState<String|null>(null)

    return(
        <div className="grid grid-cols-4 gap-8 w-3/5 mx-auto mt-10">
            {categoryItems.map((item)=>(
                <div key={item.id} className="cursor-pointer" >
                    <Card className={selectCategory === item.name ? "border-primary":""}
                    onClick={()=> setSelectCategory(item.name)}
                    >
                        <CardHeader>
                            <Image
                                src={item.imageUrl}
                                alt={item.name}
                                height={32}
                                width={32}
                                className="h-8 w-8"
                            />
                            <h3>{item.name}</h3>
                        </CardHeader>
                    </Card>
                </div>
            ))}
        </div>
    )
} 