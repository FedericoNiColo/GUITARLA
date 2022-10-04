import { useLoaderData } from "@remix-run/react"
import { getPostUrl } from "~/models/posts.server"
import { formatearFecha } from "~/utils/helpers"
import styles from "~/styles/blog.css"

export function meta({ data }) { //el atributo data se carga automaticamente cuando la funcion loader trae la informacion

    if (!data) {

        return {
            title: `GuitarLA - Post no encontrado`,
            description: ` Venta de guitarras - Post no encontrada`
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        description: ` Venta de guitarras -  ${data.data[0].attributes.titulo}`
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export async function loader({ params }) {
    const { postUrl } = params
    const post = await getPostUrl(postUrl)

    if (!post.data.length === 0) {
        throw new Response('', {
            status: 484,
            statusText: 'Entrada no encontrada'
        })
    }
    return post
}

export default function Post() {
    const post = useLoaderData()
    console.log('post', post.data[0].attributes);
    const { titulo, contenido, publishedAt, imagen } = post.data[0].attributes
    return (
        <article className="contenido post mt-3">
            <img className="imagen" src={imagen.data.attributes.url} alt={`imagen blog ${titulo} `} />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>

            </div>
        </article>
    )
}
