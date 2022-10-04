import {
  Meta,
  Links,
  Outlet,
  Scripts, //para que no recargue la página mientras se navega
  LiveReload, //para que carguen los cambios automaticos
  useCatch,
  Link

} from '@remix-run/react'
import styles from '../app/styles/index.css'
import Hearder from './components/hearder';
import Footer from './components/footer';

export const meta = () => ({
  charset: "utf-8",
  title: "GuitarLA - Remix",
  viewport: "width=device-width,initial-scale=1",
});


export function links() {

  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;700;900&display=swap"
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Hearder />
        {children}
        <Footer />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

/* MANEJO DE ERRORES AL NO ENCONTRAR PAGINAS */
export function CatchBoundary() {
  const error = useCatch()
  return (
    <Document>
      <p className='error'>{error.status} {error.statusText}</p>
      <Link className='error-enlace'>Volver al inicio</Link>
    </Document>
  )
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className='error'>{error.status} {error.statusText}</p>
      <Link className='error-enlace'>Volver al inicio</Link>
    </Document>
  )
}
