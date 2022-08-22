import NextImage from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from 'components/Container'
import { media } from 'utils/media'
import NextLink from 'next/link';

type Partner = { imageUrl: string; href: string }

const partners: Partner[] = [
  {
    "imageUrl": "Dartee.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "Delta.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "Ermap .png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "FP INGENIERIA.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "GudD BIKE.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "la raquel.jpeg",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "landi.jpeg",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "Las Zainas.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "navajas.jpeg",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "ORV.jpeg",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "PAKKO.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "PAPEL ZONE.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "Pakki.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "Pizza uno.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "americna implant.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "bulk gytm.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "di bona.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "puerto sc.png",
    "href": "https://www.estudiolorenzoasoc.com"
  },
  {
    "imageUrl": "seguras.jpeg",
    "href": "https://www.estudiolorenzoasoc.com"
  },
]

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>Asociados más populares</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.imageUrl}>
            <NextLink
              href={partner.href}
              passHref>
              <a target="_blank" rel="noopener noreferrer">
                <NextImage src={'/partners/' + partner.imageUrl} alt={normalizePartnerLogoName(partner.imageUrl)} width={128} height={128} />
              </a>
            </NextLink>

          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  )
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.svg', '')
}

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;
  opacity: 0.8;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`

const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`
