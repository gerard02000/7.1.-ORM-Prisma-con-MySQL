import FormProveedor from "@/components/FormProveedor";
import prisma from "@/lib/prisma";
import { editProveedor } from "@/lib/actions";

async function page({ searchParams }) {
  const proveedor = await prisma.proveedor.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  });

  return (
    <div>
      <h3>Editar proveedor {searchParams.id}</h3>
      <FormProveedor
        action={editProveedor}
        title="Editar proveedor"
        proveedor={proveedor}
        disabled={false}
      />
    </div>
  );
}

export default page;


