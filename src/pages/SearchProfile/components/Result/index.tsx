import React from 'react';
import dayjs from 'dayjs';

import ButtonIcon from 'core/components/ButtonIcon';
import './styles.css';

type Props = {
  html_url?: string, avatar_url?: string,
  public_repos?: number, followers?: number,
  following?: number, company?: string,
  blog?: string, location?: string,
  created_at?: string
}

const SearchResult = ({ html_url, avatar_url, public_repos, followers, following,
  company, blog, location, created_at }: Props) => {

  const date = dayjs(created_at).format("DD/MM/YYYY");

  return (
    <div className="search-result-container">

      <div className="search-result-content-col-1">
        <img src={avatar_url} alt="Imagem Perfil GitHub" className="search-result-content-img" />
        <span>
          <a href={html_url} target="_new">
            <ButtonIcon text="Ver perfil" />
          </a>
        </span>
      </div>
      <div className="search-result-content-col-2">
        <div className="search-result-content-info-1">
          <div className="content-info-1-field-repo">
            Repositórios públicos: {public_repos}
          </div>
          <div className="content-info-1-field-followers">
            Seguidores: {followers}
          </div>
          <div className="content-info-1-field-following">
            Seguindo: {following}
          </div>
        </div>
        <div className="search-result-content-info-2">
          <div className="content-info-2-title">
            Informações
               </div>
          <div className="content-info-2-field">
            <span className="content-info-2-field-title">
              Empresa:
              <span className="content-info-2-field-text">
                {company}
              </span>
            </span>
          </div>
          <div className="content-info-2-field">
            <span className="content-info-2-field-title">
              Website/Blog:
              <span className="content-info-2-field-text">
                {blog}
              </span>
            </span>
          </div>
          <div className="content-info-2-field">
            <span className="content-info-2-field-title">
              Localidade:
              <span className="content-info-2-field-text">
                {location}
              </span>
            </span>
          </div>
          <div className="content-info-2-field">
            <span className="content-info-2-field-title">
              Membro desde:
              <span className="content-info-2-field-text">
                {date}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;