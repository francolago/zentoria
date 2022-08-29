import NextLink from 'next/link'
import { FacebookIcon, LinkedinIcon, WhatsappIcon } from 'react-share'
import styled from 'styled-components'
import Container from 'components/Container'
import { media } from 'utils/media'
import NextImage from 'next/image'

type SingleFooterListItem = { title: string; href: string }
type FooterListItems = SingleFooterListItem[]
type SingleFooterList = { title: string; items: FooterListItems }
type FooterItems = SingleFooterList[]

const footerItems: FooterItems = [
  {
    title: 'Productos',
    items: [
      { title: 'Servicios', href: '/features' },
      { title: 'Promociones', href: '/promociones' },
      { title: 'Algo', href: '/algo' },
      { title: 'Algo más', href: '/algo-mas' },
    ],
  },
  {
    title: 'Conocenos',
    items: [
      { title: 'Blog', href: '/blog' },
      { title: 'Contacto', href: '/contact' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Centro de ayuda', href: '/help-center' },
    ],
  },
  {
    title: 'Redes sociales',
    items: [
      { title: 'Facebook', href: '/Facebook' },
      { title: 'Instagram', href: '/Instagram' },
      { title: 'Twitter', href: '/Twitter' },
      { title: 'Email', href: '/Email' },
    ],
  },
  {
    title: 'Administrativo',
    items: [
      { title: 'Política de privacidad', href: '/privacy-policy' },
      { title: 'Política de cookies', href: '/cookies-policy' },
    ],
  }
]

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        {/*<ListContainer>*/}
        {/*  {footerItems.map((singleItem) => (*/}
        {/*    <FooterList key={singleItem.title} {...singleItem} />*/}
        {/*  ))}*/}
        {/*</ListContainer>*/}
        <BottomBar>
          <ShareBar>
            <NextLink
              href="https://api.whatsapp.com/send/?phone=+5491134482240&text=Buenos%20d%C3%ADas!%20Quisiera%20asesoramiento%20sobre"
              passHref>
              <a target="_blank" rel="noopener noreferrer">
                <WhatsappIcon size={60} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.facebook.com/Lorenzoyasoc" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FacebookIcon size={60} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.linkedin.com/company/lorenzo-y-asociados-sa" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={60} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.instagram.com/lorenzoyasociados/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <NextImage src="/instagram-circle-icon.png" width={60} height={60}></NextImage>
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2022 Lorenzo y Asociados S.A.</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  )
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  )
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a target="_blank" rel="noopener noreferrer">{title}</a>
      </NextLink>
    </ListItemWrapper>
  )
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`
