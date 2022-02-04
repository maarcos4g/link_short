import React from 'react';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './styles.css'

function Header() {
    return (
        <div className="containerHeader">
            <a href="https://m.youtube.com/c/sujeitoprogramador" className='social'>
                <BsYoutube size={24} color='#FFF' />
            </a>

            <a href="https://instagram.com/eumarcos_oficial" className='social'>
                <BsInstagram size={24} color='#FFF' />
            </a>

            <Link to="/meus-links" className='header-button'>
                Meus Links
            </Link>

        </div>
    );
}

export default Header;