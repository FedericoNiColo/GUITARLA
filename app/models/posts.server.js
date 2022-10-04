
export async function getPosts() {
    const respuesta = await fetch('http://localhost:1337/api/posts?populate=imagen')
    return await respuesta.json()
}

export async function getPostUrl(url) {
    const respuesta = await fetch(`http://localhost:1337/api/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}