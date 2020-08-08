import React from 'react'

import NotificationPanel from '../components/NotificationPanel/index'
import HomePage from '../components/HomePage/index'
import NewsletterPanel from '../components/NewsletterPanel/index'

function App() {
    return (
        <>
            <header>
                <NotificationPanel />
            </header>
            <main>
                <HomePage />
            </main>
            <footer>
               <NewsletterPanel />
            </footer>
        </>
    )
}

export default App