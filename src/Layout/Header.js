import React from 'react';
import   {Link} from "react-router-dom";

const Header = () => {
    return ( 
        <header className='flex justify-between items-center bg-primary'>
            <Link to='/'>
                <h1 className='text-yellow-400 font-bold'>Festival de codigo</h1>
            </Link>
            <nav id='nav-bar' >
                <ul className='flex'>
                    <li className='mr-3 text-white'><Link to='/eventos' >Eventos</Link></li>
                    <li className='mr-3 text-white'><Link to='/teams' >Teams</Link></li>
                    <li className='mr-3 text-white'><Link to='/login' >Identificate</Link></li>
                    <li className='mr-3 text-white btn'><Link to='/nueva-cuenta' >Registrate</Link></li>

                </ul>
            </nav>
        </header>
     );
}
 
export default Header;