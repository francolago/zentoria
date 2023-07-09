import NextLink from 'next/link'
import styled from 'styled-components'
import Button from 'components/Button'
import ButtonGroup from 'components/ButtonGroup'
import Container from 'components/Container'
import OverTitle from 'components/OverTitle'
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context'
import { media } from 'utils/media'
import React, { useState } from 'react';
import Image from 'next/image'

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext()
  const [ratio, setRatio] = useState(1280 / 854)

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Garantizamos tu tranquilidad</CustomOverTitle>
        <Heading>Simplificá tu contabilidad</Heading>
        <Description>
          Somos un estudio contable impositivo integral, orientado a actividades desarrolladas por empresas
          unipersonales, sociedades,
          monotributistas, asociaciones sin fines de lucro, fundaciones, fideicomisos y constructoras.
        </Description>
        <Subheading>Consultoría Empresarial </Subheading>
        <Description>
          Más de 20 años de experiencia en consultoría, gestión de proyectos, mejora de procesos, habilitaciones, y capacitaciones in company.
        </Description>

        <ListItem>Project Management | Process Improvement | Habilitaciones</ListItem>

        <CustomButtonGroup>
          {/*<Button onClick={() => setIsModalOpened(true)}>*/}
          {/*  Subscribe to the newsletter <span>&rarr;</span>*/}
          {/*</Button>*/}
          <NextLink href="contact" passHref>
            <Button >
              Contactanos <span>&rarr;</span>
            </Button>
          </NextLink>
          <NextLink href="features" passHref>
            <Button transparent>
              Servicios <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        {/*<HeroIllustration />*/}
        <Image src="/landing/sueldos-y-jornales.jpg"
          width={500}
          height={500 / ratio}
          layout="fixed"
          onLoadingComplete={({ naturalWidth, naturalHeight }) =>
            setRatio(naturalWidth / naturalHeight)
          }
        />
      </ImageContainer>
    </HeroWrapper>
  )
}

const HeroWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  
  img {
    border-radius: 0.8rem;
  }

  ${media('<=tablet')} {
    display: none;
  }
`

const Description = styled.p`
  font-size: 1.6rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`

const ListItem = styled.li`
  margin: 10px 0;
  font-size: 1.4rem;
  font-weight: 900;
  color: rgb(82, 82, 82);
`

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`
const Subheading = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 22px
`
const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`
