import ButtonIcon from 'core/components/ButtonIcon';
import Input from 'core/components/Input';
import React from 'react';

import './styles.css';

const DetailsCard = () => {
    return (
        <div className="details-catd-container">
            <div className="details-title">
                Informações
            </div>
            <Input text="Empresa: "/>
            <Input text="Website/Blog: "/>
            <Input text="Localidade: "/>
            <Input text="Membro desde: "/>
            <div className="button-icon">
                <ButtonIcon text="Ver perfil" />
            </div>
        </div>
    )
};

export default DetailsCard;