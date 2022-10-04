import { Link } from "@remix-run/react";
import { formatearFecha } from '../utils/helpers'

function Post({ post }) {
    console.log('hola', post);
    const { titulo, contenido, imagen, url, publishedAt } = post.attributes
    console.log(imagen);
    return (
        <article className="post">
            <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${titulo} `} />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                <Link className="enlace" to={`/posts/${url}`}>Ver Post</Link>
            </div>

        </article>
    )
}

export default Post
