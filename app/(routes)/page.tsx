import getBillboards from "@/actions/get-billboards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {

  const billboard = await getBillboards("4bf910b0-9cc1-49da-972e-2a99c7ce790c");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}