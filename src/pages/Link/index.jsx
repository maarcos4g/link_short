import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LinkItem from '../../components/LinkItem';
import ContainerEmpty from '../../components/ContainerEmpty';
import { getLinks, deleteLink } from '../../services/storage';
import ModalLink from '../../components/ModalLink';

import './styles.css';

function LinkPage() {
    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [emptyList, setEmptyList] = useState(false);

    useEffect(() => {
        async function getMyLinks() {
            const response = await getLinks('@linkData');

            if (response.length === 0) {
                setEmptyList(true);
            }
            setMyLinks(response);
        }

        getMyLinks();
    }, [])

    function handleOpenModal(link) {
        setData(link);
        setShowModal(true);
    }

    async function handleDelete(id) {
        const response = await deleteLink(myLinks, id);

        if (response.length === 0) {
            setEmptyList(true);
        }

        setMyLinks(response);
    }

    return (
        <div className='containerLink'>
            <div className='header'>
                <Link to="/">
                    <FiArrowLeft size={38} color='#FFF' />
                </Link>
                <h1>Meus Links</h1>
            </div>

            {
                emptyList && (
                    <ContainerEmpty />
                )
            }

            {
                myLinks.map(item => (
                    <LinkItem key={item.id}
                        longUrl={item.long_url}
                        onPress={() => handleOpenModal(item)}
                        onDelete={() => handleDelete(item.id)} />
                ))
            }

            {
                showModal && (
                    <ModalLink closeModal={() => setShowModal(false)}
                        content={data} />
                )
            }
        </div>
    )
}

export default LinkPage;
