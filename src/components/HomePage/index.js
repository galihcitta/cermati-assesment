import React from 'react'

import HeroSection from '../HeroSection/index'
import HighlightSection from '../HighlightSection/index'
import HighlightCard from '../HighlightCard/index'

import { heroContent } from '../../data/heroContent'

function HomePage() {
    return (
        <main>
            <HeroSection {...heroContent}/>
            <HighlightSection>
                <HighlightCard />
            </HighlightSection>
        </main>
    )
}

export default HomePage