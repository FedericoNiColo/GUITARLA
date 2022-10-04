import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listadoGuitarras";
import { getGuitarras } from "~/models/guitarras.server"


export const meta = () => {
    return {
        title: 'GuitarLA - Tienda de guitarras',
        description: 'Nuestra coleccion de guitarras'
    }
};

export async function loader() { //nueva funcionalidad en react-router-dom
    const guitarras = await getGuitarras()
    console.log(guitarras);
    return guitarras.data
}

function Tienda() {

    const guitarras = useLoaderData() //esta funcion se usa para obtener la informacion que retorna loader()
    return (
        <main className="contenedor">
            <ListadoGuitarras
                guitarras={guitarras}
            />
        </main>

    )
}

export default Tienda
