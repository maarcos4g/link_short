import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

function ContainerEmpty() {
    return (
        <div className='container-empty'>
            <h3 className='empty-text'>Você ainda não tem nenhum link encurtado,<br />
                volte até a página inicial e tente encurtar</h3>

            <Link to="/" className='empty-button'>
                Ir para a Home
            </Link>
        </div>
    );
}

export default ContainerEmpty