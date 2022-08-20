import NextImage from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from 'components/Container'
import { media } from 'utils/media'

const PARTNER_LOGOS = [
  'Dartee.png',
  'Delta.png',
  'Ermap .png',
  'FP INGENIERIA.png',
  'GudD BIKE.png',
  'la raquel.jpeg',
  'landi.jpeg',
  'Las Zainas.png',
  'navajas.jpeg',
  'ORV.jpeg',
  'PAKKO.png',
  'PAPEL ZONE.png',
  'Pakki.png',
  'Pizza uno.png',
  'americna implant.png',
  'bulk gytm.png',
  'di bona.png',
  'puerto sc.png',
  'seguras.jpeg'
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
        {PARTNER_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <NextImage src={'/partners/' + logo} alt={normalizePartnerLogoName(logo)} width={128} height={128} />
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
