import styled from 'styled-components'
import AutofitGrid from 'components/AutofitGrid'
import BasicCard from 'components/BasicCard'
import Page from 'components/Page'
import SectionTitle from 'components/SectionTitle'
import YoutubeVideo from 'components/YoutubeVideo'
import { media } from 'utils/media'

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Asesoramiento Contable',
    description:
      'Llevamos la contabilidad de su empresa. Registramos, clasificamos y organizamos las operaciones mercantiles de su empresa para conocer el flujo de ingresos y gastos, la entrada y salida de capital.'
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Asesoramiento Impositivo',
    description:
      'Ayudamos a nuestros clientes a adoptar las formas y estructuras que les permitan operar con los menores costos impositivos dentro del marco legal disponible. Maximizamos el potencial de su empresa a través de soluciones que respondan a sus necesidades con innovación y creatividad.'
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Sueldos y Jornales',
    description:
      'Brindamos un asesoramiento integral o parcial dependiendo de las necesidades del cliente para acompañarlo en el proceso de liquidación de sueldos y jornales de sus empleados.'
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Servicios Societarios',
    description:
      'Asesoramos a nuestros clientes sobre las distintas alternativas para la constitución de sociedades o entes sin fines de lucro, analizando sus aspectos estratégicos, legales e impositivos. Asesoramos en cómo deben funcionar y cuáles son sus obligaciones sociales.'
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?'
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?'
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?'
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?'
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?'
  }
]

export default function FeaturesPage() {
  return (
    <Page title="Servicios" description="Ofrecemos servicios personalizados para todo tipo de responsables inscriptos">
      <Wrapper>
        <SectionTitle>Fijate esta breve introducción</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=bfy5pHV4RAQ" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  )
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`
