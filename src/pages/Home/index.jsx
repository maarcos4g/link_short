import React, { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import { CircleIndicator } from 'react-indicators';

import Header from '../../components/Header';
import ModalLink from '../../components/ModalLink';
import api from '../../services/api';
import { saveLink } from '../../services/storage';
import { toast } from 'react-toastify'

import './styles.css';

function HomePage() {
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    async function handleShortLink() {
        try {
            const response = await api.post("/shorten", {
                long_url: link,
            })
            setData(response.data);
            setShowModal(true);

            saveLink('@linkData', response.data);

            setLink('');

        } catch (error) {
            alert("Opps... parece que algo deu errado.");
            setLink('');
        }
    }

    return (
        <div className='container'>
            <div className='containerLogo'>
                <img src="logo.png" alt='Sujeito Link logo' />
                <h1>SujeitoLink</h1>
                <span>Cole seu link para encurtar 👇</span>
            </div>

            <div className='input-area'>
                <div>
                    <FiLink size={24} color='#FFF' />
                    <input type="text" placeholder='Cole seu link aqui ...'
                        value={link} onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <button onClick={handleShortLink}>Gerar Link</button>
            </div>

            <Header />


            {
                showModal && (
                    <ModalLink
                        closeModal={() => setShowModal(false)}
                        content={data}
                    />
                )}
        </div>
    )
}

export default HomePage;
