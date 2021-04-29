import React from 'react';

import Card from '../../atom/card'
import Icon from '../../atom/Icon'

const Hero = (props) => {
    const { name } = props;
    return(
        <div>
          <Card />
          <p>{name}</p>
          <Icon name="heart" />
        </div>
    )
}

export default Hero;