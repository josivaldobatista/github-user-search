import { Users } from 'core/types/GithubUsers';
import React from 'react'

import './styles.css';

type Props = {
    text: string;
    users?: Users;
}

const Input = ({text, users}: Props) => (
    <div className="input-box">
        {text}
    </div>
);

export default Input;