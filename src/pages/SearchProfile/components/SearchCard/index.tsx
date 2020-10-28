import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';

import './styles.css';

type Props = {
    text: string
}

const SearchCard = ({ text }: Props) => (
    <div className="search-container">
        <h1 className="title">
            {text}
        </h1>
        <input type="text" className="input" />
        <ButtonIcon text="Encontrar" />
    </div>
);

export default SearchCard;