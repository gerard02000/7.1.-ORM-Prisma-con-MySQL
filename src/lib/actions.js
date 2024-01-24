'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function getArticulos() {
  try {
    const articulos = await prisma.articulo.findMany()
    return articulos;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}

export async function newArticulo(formData) {
  try {
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = Number(formData.get('precio'))

    const articulo = await prisma.articulo.create({
      data: { nombre, descripcion, precio },
    })

    console.log(articulo);
    revalidatePath('/articulos')
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}


export async function editArticulo(formData) {
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = Number(formData.get('precio'))

  try {
    const articulo = await prisma.articulo.update({
      where: { id },
      data: { nombre, descripcion, precio },
    })
    console.log(articulo);
    revalidatePath('/articulos')
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

export async function deleteArticulo(formData) {
  try {
    const id = Number(formData.get('id'))

    const articulo = await prisma.articulo.delete({
      where: {
        id: id,
      },
    })
    console.log(articulo);
    revalidatePath('/articulos')
  } catch (error) {
    console.log(error);
  }

  redirect('/articulos');
}
export async function getProveedores() {
  try {
    const proveedores = await prisma.proveedor.findMany();
    return proveedores;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function newProveedor(formData) {
  try {
    const nombre = formData.get('nombre');
    const nacional = formData.get('nacional') === 'true'; // Convierte la cadena a booleano

    const proveedor = await prisma.proveedor.create({
      data: { nombre, nacional },
    });

    console.log(proveedor);
    revalidatePath('/proveedores');
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedores');
}

export async function editProveedor(formData) {
  const id = Number(formData.get('id'));
  const nombre = formData.get('nombre');
  const nacional = formData.get('nacional') === 'true'; // Convierte la cadena a booleano

  try {
    const proveedor = await prisma.proveedor.update({
      where: { id },
      data: { nombre, nacional },
    });
    console.log(proveedor);
    revalidatePath('/proveedores');
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedores');
}

export async function deleteProveedor(formData) {
  try {
    const id = Number(formData.get('id'));

    const proveedor = await prisma.proveedor.delete({
      where: {
        id: id,
      },
    });
    console.log(proveedor);
    revalidatePath('/proveedores');
  } catch (error) {
    console.log(error);
  }

  redirect('/proveedores');
}