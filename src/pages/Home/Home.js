import React from 'react'

import { Section } from '../../components'
import ModeContextProvider from '../../Contexts/ModeContext'


const Home = () => {
    return (

        <ModeContextProvider>
            <Section title='our most popular categorie' />
            <Section title='nonfiction' cat='nonfiction' />
            <Section title='fiction' cat='fiction' />
            <Section title="children's" cat='children' />
            <Section title='self improvement' cat='self_improvement' />
        </ModeContextProvider>


    )
}

export default Home