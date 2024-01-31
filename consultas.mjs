//1 ejercicio
const todosLosArticulos = await prisma.articulo.findMany();

//2ejercicio
const primerArticulo = await prisma.articulo.findFirst();

//3 ejercicio
const articulosNombreYPrecio = await prisma.articulo.findMany({
    select: { nombre: true, precio: true }
});
//4 ejercicio
const precioArticuloId1 = await prisma.articulo.findUnique({
    where: { id: 1 },
    select: { precio: true }
});
//5 ejercicio

const articuloConProveedores = await prisma.articulo.findUnique({
    where: { id: 1 },
    include: { proveedores: true }
});
//6 ejercicio

const nombreProveedoresArticuloId1 = await prisma.articulo.findUnique({
    where: { id: 1 },
    select: { proveedores: { select: { nombre: true } } }
});
//7 ejercicio
const nuevoArticulo = await prisma.articulo.create({
    data: {
        nombre: "Nuevo Artículo",
        descripcion: "Descripción del nuevo artículo",
        precio: 15.99
    }
});

//8 ejercicio
const nuevoProveedor = await prisma.proveedor.create({
    data: {
        nombre: "Nuevo Proveedor",
        nacional: true
    }
});
//9 ejercicio

const nuevoArticuloConProveedores = await prisma.articulo.create({
    data: {
        nombre: "Artículo con Proveedores",
        proveedores: {
            createMany: {
                data: [
                    { proveedor: { connect: { id: 2 } } },
                    { proveedor: { connect: { id: 3 } } }
                ]
            }
        }
    }
});

// 10 ejercicio

const actualizarPrecioArticuloId1 = await prisma.articulo.update({
    where: { id: 1 },
    data: { precio: 25.99 }
});

// 11 ejercicio
const actualizarPrecioYNombreArticuloId1 = await prisma.articulo.update({
    where: { id: 1 },
    data: { precio: 30.99, nombre: "Nuevo Nombre" }
});

// 12 ejercicio

const conectarProveedoresArticuloId1 = await prisma.articulo.update({
    where: { id: 1 },
    data: {
        proveedores: {
            connect: [{ id: 2 }, { id: 3 }]
        }
    }
});

// 13 ejercicio


const desconectarProveedorArticuloId1 = await prisma.articulo.update({
    where: { id: 1 },
    data: {
        proveedores: {
            disconnect: { id: 3 }
        }
    }
});

// 14 ejercicio

const eliminarProveedorId1 = await prisma.proveedor.delete({
    where: { id: 1 }
});

// 15 ejercicio

const eliminarArticulosPrecioMayor20 = await prisma.articulo.deleteMany({
    where: { precio: { gt: 20 } }
});