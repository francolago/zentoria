import NextImage from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import OverTitle from 'components/OverTitle'
import SectionTitle from 'components/SectionTitle'
import { media } from 'utils/media'
import { Card, CardContent, CardsContainer, ImageContainer } from 'components/ThemeStyles'
import { padding } from 'polished'

const TABS = [
  {
    title: 'Gabriel Lagomarsino',
    // description: '<p>Experimentado Project Manager con más de 30 años de experiencia, especialista en metodologías ágiles, experto en Planificación y Control, Mejora de Procesos y liderazgo de equipos multidisciplinarios.<p/>',
    description: '<ul>' + '<li>+30 años de experiencia en Project Management</li>' + '<li>Especialista en metodologías ágiles, experto en Planificación, Control y Mejora de Procesos</li>' + '<li>MBA, UCEMA</li>' + '</ul>',
    imageUrl: '/team/Gabriel-Lagomarsino.jpg'
  }
  //{
  // title: 'Daniel Lorenzo',
  // description: '<ul>' + '<li>57 años</li>' + '<li>contador publico UBA</li>' + '</ul>',
  // imageUrl: '/team/daniel-lorenzo.jpg'
  //}
  // {
  //   title: 'Federico y Matías Lorenzo',
  //   description:
  //     '<ul>' +
  //     '<li>22 y 23 años</li>' +
  //     '<li>contadores públicos UBA</li>' +
  //     '</ul>',
  //   imageUrl: '/team/los-lorenzo.jpg',
  // },
]

export default function Team() {
  const [ratio, setRatio] = useState(16 / 9)
  const cards = TABS.map((singleTab, idx) => {
    return (
      <Card key={idx}>
        <h3>{singleTab.title}</h3>
        <ImageContainer>
          <NextImage src={singleTab.imageUrl}
            alt={singleTab.title}
            width={200}
            height={200 / ratio}
            layout="fixed"
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setRatio(naturalWidth / naturalHeight)
            }
          />
        </ImageContainer>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
        </CardContent>
      </Card>
    )
  })

  return (
    <FeaturesGalleryWrapper>
      <Content>
        {/* <OverTitle>El equipo</OverTitle> */}
        <SectionTitle>¿Quienes somos?</SectionTitle>
      </Content>
      <GalleryWrapper>
        <CardsContainer>
          {cards}
        </CardsContainer>
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
  )
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`
