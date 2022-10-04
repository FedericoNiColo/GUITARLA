export async function getCursos() {
    const respuesta = await fetch('http://localhost:1337/api/curso?populate=imagen');
    return await respuesta.json()
}