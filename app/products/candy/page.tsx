"use client";

import ProductResponse from "@/app/ui/products/productResponse";


const baseString: string[] = ["LösGodis", "VanligtGodis"];

export default function CandyPage() {

    return <div >
        <ProductResponse
            baseString={baseString}
        />
    </div>
}