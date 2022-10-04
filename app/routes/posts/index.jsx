import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server.js"
import ListadoPost from "~/components/listadoPost";


export function meta() {
    return {
        title: 'GuitarLA - Blog',
        description: 'GuitarLA, blog de música y venta de guitarras'
    }

}

export async function loader() {
    const posts = await getPosts()
    console.log('estos son los post', posts);
    return posts.data
}

function Blog() {

    const posts = useLoaderData()
    console.log(posts);

    return (

        <ListadoPost
            posts={posts}
        />
    )
}

export default Blog
