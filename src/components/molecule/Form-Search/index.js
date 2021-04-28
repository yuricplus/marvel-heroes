import React from 'react';

import Icon from '../../atom/Icon'

import './style.scss';

const Search = ({placeholder}) => {
    return (
        <div className="form-seach form-lg">
            <input type="text" className="input-search" placeholder={placeholder}/>
            <button className="search-btn"><Icon name="search"/></button>
        </div>
    )
}

export default Search;