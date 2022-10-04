export async function getGuitarras() {
    const respuesta = await fetch('http://localhost:1337/api/guitarras?populate=imagen');
    return await respuesta.json()
}

export async function getGuitarraUrl(url) {
    const respuesta = await fetch(`http://localhost:1337/api/guitarras?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}
