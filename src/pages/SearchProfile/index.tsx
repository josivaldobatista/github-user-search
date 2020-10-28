import React from 'react';
import InfoCard from './components/InfoCard';
import SearchCard from './components/SearchCard';

import './styles.css';

const SearchProfile = () => (
    <div className="container">
        <SearchCard text="Encontre um perfil Github"/>
        <InfoCard />
    </div>
);

export default SearchProfile;