import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listadoGuitarras"
import ListadoPost from "~/components/listadoPost"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import styles from '../styles/guitarras.css'
import stylesPosts from "../styles/blog.css"
import stylesCursos from "../styles/cursos.css"
import { getCursos } from "~/models/cursos.server"
import Cursos from "~/components/cursos"


export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "stylesheet",
      href: stylesPosts
    },
    {
      rel: "stylesheet",
      href: stylesCursos
    }
  ]
}

export function meta() {

}

export async function loader() {

  const [guitarras, posts, cursos] = await Promise.all([  //al tener que hacer dos llamados a la bd, se utiliza esta sintaxis para mejorar el rendimiento en las respuestas
    getGuitarras(),
    getPosts(),
    getCursos()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    cursos: cursos.data
  }
}


function Index() {

  const { guitarras, posts, cursos } = useLoaderData()


  return (
    <>

      <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>

      <section>
        <Cursos
          cursos={cursos.attributes}
        />
      </section>

      <section className="contenedor">
        <ListadoPost
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index

