import '../styles/globals.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Nunito } from 'next/font/google'
import MountedClient from './components/MountedClient'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import ReduxProvider from './providers/ReduxProvider'
import ToastProvider from './providers/ToastProvider'


const newFont = Nunito({
    subsets: ['latin']
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={newFont.className}>
                <ReduxProvider>

                    <MountedClient>
                        <Navbar />
                    </MountedClient>
                    {children}
                    <ToastProvider />
                    <LoginModal />
                    <RegisterModal />
                </ReduxProvider>

            </body>
        </html>
    )
}

export default RootLayout