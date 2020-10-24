import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';

import './styles.css';

const SearchProfile = () => (
    <div className="container">
        <div className="card">
            <h1 className="title">
                Encontre um perfil Github
            </h1>
            <input type="text" className="input" />
            <ButtonIcon text="Encontrar" />
        </div>
    </div>
);

export default SearchProfile;