import React from 'react';

import './styles.css';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <button className="btn-icon">
        <h1 className="btn-icon-content">{text}</h1>
    </button>
);

export default ButtonIcon;