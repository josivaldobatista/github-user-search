import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => (
    <div className="home-container">
        <div className="home-title">
            Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
        </div>
        <p className="home-content">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
            Favor observar as instruções passadas no capítulo sobre a elaboração 
            deste projeto. Este design foi adaptado a partir de Ant Design System 
            for Figma, de Mateusz Wierzbicki: 
                <a className="link-email" href="mailto:antforfigma@gmail.com"> antforfigma@gmail.com</a>
        </p>
        <Link to="/search-profile">
            <ButtonIcon text="Começar"/>
        </Link>
    </div>
);

export default Home;