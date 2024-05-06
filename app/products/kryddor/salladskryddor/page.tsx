"use client";

import React from "react";
import ProductResponse from "@/app/ui/products/productResponse";

const baseString: string[] = ["Salladskryddor"];

export default function SalladsKryddorPage() {


    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}