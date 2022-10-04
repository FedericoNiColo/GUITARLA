import { useLoaderData } from '@remix-run/react'
import { getGuitarraUrl } from '../../models/guitarras.server'

export async function loader({ params }) { //params es para obtener el parametro de la url. como en react usamos useParams
    const { guitarraUrl } = params

    const guitarra = await getGuitarraUrl(guitarraUrl)
    console.log(guitarra);

    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }

    return guitarra
}
export function meta({ data }) { //el atributo data se carga automaticamente cuando la funcion loader trae la informacion

    if (!data) {

        return {
            title: `GuitarLA - Guitarra no encontrada`,
            description: ` Venta de guitarras - Guitarra no encontrada`
        }
    }

    return {
        title: `GuitarLA - ${data.nombre}`,
        description: ` Venta de guitarras -  ${data.nombre}`
    }
}

function GuitarraUrl() {

    const guitarra = useLoaderData()
    console.log(guitarra);
    const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes

    return (

        <div className="contenedor guitarra">
            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>{descripcion}</p>
                <p className='precio'>${precio}</p>
            </div>
        </div>

    )
}

export default GuitarraUrl
