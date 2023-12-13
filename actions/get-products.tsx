import qs from "query-string";

import { Product } from "@/types";

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string
    isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
            sizeId: query.sizeId
        }

    })
    const response = await fetch(url);

    return response.json();
}

export default getProducts;