import NextImage from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import OverTitle from 'components/OverTitle'
import SectionTitle from 'components/SectionTitle'
import { media } from 'utils/media'

const TABS = [
  {
    title: 'Gabriel Lorenzo',
    description:
      '<ul>' +
      '<li>50 años</li>' +
      '<li>Administrador de empresas UNLU</li>' +
      '</ul>',
    imageUrl: '/team/gabriel-lorenzo.jpg',
    ratioX: 16,
    ratioY: 9
  },
  {
    title: 'Daniel Lorenzo',
    description:
      '<ul>' +
      '<li>57 años</li>' +
      '<li>contador publico UBA</li>' +
      '</ul>',
    imageUrl: '/team/daniel-lorenzo.jpg',
    ratioX: 16,
    ratioY: 9
  },
  // {
  //   title: 'Federico y Matías Lorenzo',
  //   description:
  //     '<ul>' +
  //     '<li>22 y 23 años</li>' +
  //     '<li>contadores públicos UBA</li>' +
  //     '</ul>',
  //   imageUrl: '/team/los-lorenzo.jpg',
  //   ratioX: 16,
  //   ratioY: 9
  // },
]

export default function Team() {
  const [ratio, setRatio] = useState(16/9) // default to 16:9
  const cards = TABS.map((singleTab, idx) => {
    return (
      <Card key={idx}>
        <h3>{singleTab.title}</h3>
        <ImageContainer>
          <NextImage src={singleTab.imageUrl}
                     alt={singleTab.title}
                     width={200}
                     height={200 / ratio}
                     layout="fixed" // you can use "responsive", "fill" or the default "intrinsic"
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
        <OverTitle>El equipo</OverTitle>
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

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 0.8rem;
  box-shadow: var(--shadow-md);
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  margin: 2rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  cursor: pointer;
  border-radius: 0.6rem;

  font-size: 1.6rem;

  ${media('<=desktop')} {
    width: 100%;
  }
  
  h3 {
    padding-bottom: 10px;
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  font-size: 1.5rem;

  p {
    font-weight: normal;
  }
`
