import NextImage from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import Collapse from 'components/Collapse'
import Container from 'components/Container'
import OverTitle from 'components/OverTitle'
import SectionTitle from 'components/SectionTitle'
import ThreeLayersCircle from 'components/ThreeLayersCircle'
import { media } from 'utils/media'

const TABS = [
  {
    title: 'Gestión de proyectos:',
    description:
      '<p>Project Management es un eslabón fundamental para garantizar el éxito de sus proyectos, finalizándolos en tiempo y dentro de su presupuesto. <br/>En Zentoria tenemos amplísima experiencia en gestionar proyectos de distinta envergadura, así como de diferente naturaleza (y en ese camino, hemos implementado exitosamente 2  Oficinas de Dirección de Proyectos). <br/>Podemos encargarnos de la evaluación de un negocio, la implementación de un sistema de información, o la planeación y administración de todo un programa, o de un proyecto de inversión de capital o de mejora, utilizando la Metodología del PMI (Project Management Institute).<br/> También ofrecemos hacernos cargo de la Dirección de sus proyectos, liberando así sus propios recursos de una actividad para la que generalmente no hay "holgura" para encararla con colaboradores internos.</p>',
    imageUrl: '/landing/asesoramiento-contable.jpg',
    baseColor: '249,82,120',
    secondColor: '221,9,57',
  },
  {
    title: 'Mejora de procesos:',
    description:
      '<p>Realizamos consultoría en diseño, rediseño, implementación y control de procesos de negocio, tanto sean de empresas industriales, comerciales o de servicios.<br/>Optimizamos sus costos operativos, trabajando tanto sobre la cadena de abastecimiento, como en los procesos internos, analizando en cada caso la conveniencia de efectuar alianzas, integrar procesos o tercerizarlos.<br/>Alineamos sus estrategias de negocio con los procesos y la tecnología de su organización: sabemos que en el cambiante mundo de hoy, escoger la tecnología apropiada es una tarea fundamental.</p>',
    imageUrl: '/landing/asesoramiento-impositivo.jpg',
    baseColor: '57,148,224',
    secondColor: '99,172,232',
  },
  {
    title: 'Habilitaciones municipales:',
    description:
      '<p>Agilizamos el proceso de obtención de habilitaciones municipales, brindándote el apoyo necesario para cumplir con los requisitos y regulaciones locales.</p>',
    imageUrl: '/landing/sueldos-y-jornales.jpg',
    baseColor: '88,193,132',
    secondColor: '124,207,158',
  },
  {
    title: 'Benchmarking:',
    description:
      '<p>Realizamos el diseño e implementación de Benchmarks de eficiencia operativa. El Benchmarking es una técnica utilizada para medir el rendimiento de toda una organización o de una parte de ella, en comparación con sus pares de la industria (el mercado en el que desarrolla sus operaciones).</p>',
    imageUrl: '/landing/stock-img02.avif',
    baseColor: '255, 255, 0',
    secondColor: '230, 230, 0',
  },
]

export default function FeaturesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0])

  const imagesMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title
    const isFirst = idx === 0

    return (
      <ImageContainer key={singleTab.title} isActive={isActive}>
        <NextImage src={singleTab.imageUrl} alt={singleTab.title} layout="fill" objectFit="contain" priority={isFirst} />
      </ImageContainer>
    )
  })

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} />
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
          </TabContent>
        </Collapse>
      </Tab>
    )
  })

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx])
  }

  return (
    <FeaturesGalleryWrapper>
      <Content>
        <OverTitle>Servicios</OverTitle>
        <SectionTitle>¿Cómo podemos ayudarte?</SectionTitle>
      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>
        {imagesMarkup}
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
  )
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

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

const TabsContainer = styled.div`
  flex: 1;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`

const ImageContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p) => (p.isActive ? '2' : '0')};
  box-shadow: var(--shadow-md);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: ${(p) => (p.isActive ? '100%' : '0')};
  }
`

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media('<=desktop')} {
    width: 100%;
  }
`

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`

const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`
