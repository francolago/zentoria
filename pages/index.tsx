import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { EnvVars } from 'env'
import { getAllPosts } from 'utils/postsFetcher'
import Cta from 'views/HomePage/Cta'
import Services from 'views/HomePage/FeaturesGallery'
import Hero from 'views/HomePage/Hero'
import Partners from 'views/HomePage/Partners'
import Team from '../views/HomePage/Team'
import Description from '../views/HomePage/Description'

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
          <Services />
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <Description />
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
