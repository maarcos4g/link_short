import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

function NotFound() {
    return (
        <div className="container-error">
            <img src="notfound.png" alt='Página não encontrada' />
            <h1>Página não encontrada!</h1>
            <Link to="/" className='redirect'>
                Voltar para home
            </Link>
        </div>
    );
}

export default NotFound;