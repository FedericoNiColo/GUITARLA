import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'

function hearder() {
    return (
        <header className='header'>
            <div className=' barra'>
                <Link to='/'>
                    <img className='logo' src={logo} alt="iamgen logo" />
                </Link>

                <Navegacion />
            </div>
        </header>
    )
}

export default hearder
