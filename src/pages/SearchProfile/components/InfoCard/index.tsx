import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ImgDefault } from 'core/assets/img-profile.svg';
import './styles.css'
import DetailsCard from './DetailsCard';
import ButtonIcon from 'core/components/ButtonIcon';

const InfoCard = () => (
    <div className="info-card">
        <ImgDefault className="img-default" />
        <DetailsCard />
        <Link to="link" className="button-icon">
            <ButtonIcon text="Ver perfil"/>
        </Link>
    </div>
);

export default InfoCard;