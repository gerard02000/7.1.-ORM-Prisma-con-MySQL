import FormProveedor from "@/components/FormProveedor";
import prisma from "@/lib/prisma";
import { deleteProveedor } from "@/lib/actions";

async function page({ searchParams }) {
  const proveedor = await prisma.proveedor.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  });

  return (
    <div>
      <h3>Eliminar proveedor {searchParams.id}</h3>
      <FormProveedor
        action={deleteProveedor}
        title="Eliminar proveedor"
        proveedor={proveedor}
        disabled={true}
      />
    </div>
  );
}

export default page;

