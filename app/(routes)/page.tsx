import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {

  const billboard = await getBillboards("283df6d6-1c80-4d08-bfef-89fee53e2a41");
  const products = await getProducts({ isFeatured: true })
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
}