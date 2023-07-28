import '../styles/globals.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Nunito } from 'next/font/google'
import MountedClient from './components/MountedClient'


const newFont = Nunito({
    subsets: ['latin']
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={newFont.className}>
                <MountedClient>
                    <Navbar />
                </MountedClient>
                {children}
            </body>
        </html>
    )
}

export default RootLayout