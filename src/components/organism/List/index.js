import React from 'react';

import { Ordernation } from '../../molecule/Ordernation'

export const List = () => {
    return(
        <section>
            <Ordernation 
               label="Econtrados 20 heróis"
               firtsIcon="heroes"
               secondIcon="heart"
               secondText="Somente favoritos"
               firstText="Ordenar por nome - A/Z" />
        </section>
    )
}