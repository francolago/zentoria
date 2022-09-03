import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import BasicSection from 'components/BasicSection'
import { EnvVars } from 'env'
import { getAllPosts } from 'utils/postsFetcher'
import Cta from 'views/HomePage/Cta'
import FeaturesGallery from 'views/HomePage/FeaturesGallery'
import Hero from 'views/HomePage/Hero'
import Partners from 'views/HomePage/Partners'
import Testimonials from 'views/HomePage/Testimonials'
import Team from '../views/HomePage/Team';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta name="description" content="Estudio contable lorenzo y asociados" />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Nos ajustamos a tus necesidades"
                        overTitle="a tu manera">
            <p>
              Contamos con profesionales capacitados y comprometidos en ofrecer soluciones a nuestros clientes a la
              medida de sus
              necesidades.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Tenemos lo que necesitás" overTitle="soluciones"
                        reversed>
            <p>Nos motiva la búsqueda permanente de la satisfacción del cliente. Brindamos soluciones:</p>
            <ul>
              <li>Contables</li>
              <li>Administrativas</li>
              <li>Impositivas</li>
              <li>Laborales</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Team />
          {/*<Testimonials />*/}
          {/*<Features />*/}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  )
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts()
    }
  }
}
