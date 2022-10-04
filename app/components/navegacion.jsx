import { Link, useLocation } from '@remix-run/react'

function Navegacion() {

    const location = useLocation()

    return (
        <nav className='navegacion'>
            <Link
                to='/'
                className={location.pathname === '/' ? 'active' : 'disabled'}>Incio</Link>
            <Link
                to='/nosotros'
                className={location.pathname === '/nosotros' ? 'active' : 'disabled'}>Nosotros</Link>
            <Link
                to='/guitarras'
                className={location.pathname === '/guitarras' ? 'active' : 'disabled'}>Tienda</Link>
            <Link
                to='/posts'
                className={location.pathname === '/posts' ? 'active' : 'disabled'}>Blog</Link>
        </nav>
    )
}

export default Navegacion