import React from 'react'

import Panel from './styled/Panel'
import Container from './styled/Container'
import TextContainer from './styled/TextContainer'
import Link from './styled/Link'
import Button from './styled/Button'

function NotificationPanel() {
    return (
        <Panel>
            <Container>
                <TextContainer>
                    By accessing and using this website, you acknowledge that you have
                    read and understand our{' '}
                    <Link href="/#cookie-policy">Cookie Policy</Link>,{' '}
                    <Link href="/#privacy-policy">Privacy Policy</Link>, and our{' '}
                    <Link href="/#terms-of-service">Terms of Service</Link>.
                </TextContainer>
                <Button>Got It</Button>
            </Container>
        </Panel>
    )
}

export default NotificationPanel