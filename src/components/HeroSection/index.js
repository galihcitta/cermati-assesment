import React from 'react'

import Container from './styled/Container';
import HeadText from './styled/HeadText';
import SubHeadText from './styled/SubHeadText';
import Description from './styled/Description';
import Button from './styled/Button';
import Icon from './styled/Icon';
import Wrapper from './styled/Wrapper';

function HeroSection({
    heroText1,
    heroText2,
    heroText3,
    heroText4,
    bgHero,
    iconHero
}) {
    return (
        <Container background={bgHero}>
            <Icon src={iconHero}/>
            <Wrapper>
                <HeadText>{heroText1}</HeadText>
                <SubHeadText>{heroText2}</SubHeadText>
                <Description>{heroText3}</Description>
                <Button>{heroText4}</Button>
            </Wrapper>
        </Container>
    )
}

export default HeroSection