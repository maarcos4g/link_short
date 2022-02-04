import React from 'react';
import { FiLink, FiTrash } from 'react-icons/fi';

import './styles.css'

function LinkItem({ longUrl, key, onPress, onDelete }) {
    return (
        <div key={key} className="link-item">
            <button className='link' onClick={onPress}>
                <FiLink size={18} color='#FFF' />
                {longUrl}
            </button>
            <button className='delete' onClick={onDelete}>
                <FiTrash size={24} color='#FF5454' />
            </button>
        </div>
    );
}

export default LinkItem;