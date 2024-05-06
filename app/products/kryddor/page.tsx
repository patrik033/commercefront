"use client";

import React from "react";
import ProductResponse from "@/app/ui/products/productResponse";


const baseString: string[] = ["Peppar", "Örtmixer", "Grillkryddor", "Örter", "Salladskryddor"];

export default function KryddorPage() {

    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}