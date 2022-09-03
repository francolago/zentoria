import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { AppProps } from 'next/dist/shared/lib/router/router'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ColorModeScript } from 'nextjs-color-mode'
import React, { PropsWithChildren } from 'react'
import { TinaEditProvider } from 'tinacms/dist/edit-state'

import Footer from 'components/Footer'
import { GlobalStyle } from 'components/GlobalStyles'
import Navbar from 'components/Navbar'
import NavigationDrawer from 'components/NavigationDrawer'
import NewsletterModal from 'components/NewsletterModal'
import WaveCta from 'components/WaveCta'
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context'
import { NavItems } from 'types'
import FloatingWhatsApp from 'react-floating-whatsapp'
import styled from 'styled-components'

const navItems: NavItems = [
  { title: 'Inicio', href: '/' },
  { title: 'Servicios', href: '/features' },
  { title: 'Contacto', href: '/contact' }
]

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      <ColorModeScript />
      <GlobalStyle />

      <Providers>
        <Modals />
        <Navbar items={navItems} />
        <TinaEditProvider
          editMode={
            <TinaCMS
              query={pageProps.query}
              variables={pageProps.variables}
              data={pageProps.data}
              isLocalClient={!process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
              branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
              clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
              {...pageProps}
            >
              {(livePageProps: any) => <Component {...livePageProps} />}
            </TinaCMS>
          }
        >
          <Floating>
            <FloatingWhatsApp
              phoneNumber="+5491134482240"
              accountName="Estudio Lorenzo"
              statusMessage="Usualmente responde en menos de 1 hora"
              chatMessage="Buenos días! Cómo podemos ayudarte?"
              placeholder="Buenas! Quiero asesoramiento en..."
              notification={true}
              notificationSound={false}
              avatar="logo/logo-lorenzo-letras-abajo-blanco.png"
            />
          </Floating>
          <Component {...pageProps} />
        </TinaEditProvider>
        <WaveCta />
        <Footer />
      </Providers>
    </>
  )
}

const Floating = styled.div`
  z-index: 9;
  position: fixed;
  .custom-class {
    z-index: 9;
  }
`

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  )
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext()
  if (!isModalOpened) {
    return null
  }
  return <NewsletterModal onClose={() => setIsModalOpened(false)} />
}

export default MyApp
