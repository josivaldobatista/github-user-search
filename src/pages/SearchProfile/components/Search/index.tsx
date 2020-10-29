import React, { useState } from 'react';
import ButtonIcon from 'core/components/ButtonIcon';
import './styles.css';
import { makeRequest } from 'core/utils/request';
import SearchCardLoader from '../loaders/SearchCardLoader';
import SearchResult from '../Result';
import { Users } from 'core/types/GithubUsers';

const Search = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<Users>();
    const [isLoadnig, setIsLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        makeRequest({ url: `${search}` })
            .then(userResponse => setUserData(userResponse.data))
            .finally(() => {
                setIsLoading(false);
            })
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
        <div className="search-area-container">
            <div className="search-area-content">
                <h1 className="search-area-title">
                    Encontre um perfil Github
         </h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <input
                            type="text"
                            className="search-area-input-text"
                            required
                            value={search}
                            onChange={handleOnChange}
                            placeholder="Usuário Github"
                        />
                        <div className="form-content-button">
                            <span >
                                <ButtonIcon text="Encontrar" />
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="search-content-result">
                {isLoadnig ? <SearchCardLoader /> : (
                    <>
                        <div>
                            {userData && (
                                <div>
                                    <SearchResult
                                        html_url={userData.html_url}
                                        avatar_url={userData.avatar_url}
                                        public_repos={userData.public_repos}
                                        followers={userData.followers}
                                        following={userData.following}
                                        company={userData.company}
                                        blog={userData.blog}
                                        location={userData.location}
                                        created_at={userData.created_at}
                                    />
                                </div>)}
                        </div>
                    </>)}
            </div>
        </div>
    );
}

export default Search;