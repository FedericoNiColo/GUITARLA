import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export const meta = () => {
  return {
    title: 'GuitarLA - Nosotros',
    description: 'Venta de guitarras, blog de música'
  }
};


export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as:'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen nosotros" />

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut eleifend tortor in magna dictum consequat. In hac habitasse platea dictumst.
            Quisque faucibus efficitur neque, non aliquet lorem condimentum sit amet.
            Praesent blandit ante ligula, quis pellentesque libero aliquet sit amet.
            Vestibulum in sagittis nibh, eu commodo nisi. In porttitor commodo ligula
            id dignissim.
            Proin arcu est, tempus consectetur elit id, malesuada commodo quam.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut eleifend tortor in magna dictum consequat. In hac habitasse platea dictumst.
            Quisque faucibus efficitur neque, non aliquet lorem condimentum sit amet.
            Praesent blandit ante ligula, quis pellentesque libero aliquet sit amet.
            Vestibulum in sagittis nibh, eu commodo nisi. In porttitor commodo ligula
            id dignissim.
            Proin arcu est, tempus consectetur elit id, malesuada commodo quam.</p>
        </div>
      </div>

    </main>
  )
}

export default Nosotros
