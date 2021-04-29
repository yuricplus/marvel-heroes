import React, { useEffect,} from 'react';

import { Home } from '../../templates/Home'
import { getHeroes } from '../../../shared/services';



export const HomePage = () => {
    useEffect(()=> {
        handleListHeroes()
    })

    const handleListHeroes = async() =>{
        const data =  await getHeroes();
        console.log(data)
    }

    return <Home/>
}