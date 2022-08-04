import NextImage from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from 'components/Container'
import { media } from 'utils/media'

const PARTNER_LOGOS = [
  'ORV.jpeg',
  'amb-seguros.jpeg',
  'american-implant.jpeg',
  'cutmax.jpeg',
  'dar-te.jpeg',
  'delta.jpeg',
  'di-bona.jpeg',
  'emilio-vernet.jpeg',
  'engra-tec.jpeg',
  'ermap.jpeg',
  'graciela-barrios.jpeg',
  'gud-bike.jpeg',
  'impianti.jpeg',
  'jasper.jpeg',
  'la raquel.jpeg',
  'landi.jpeg',
  'las zainas.jpeg',
  'navajas.jpeg',
  'novapallets.jpeg',
  'pakko-fiesta.jpeg',
  'pakko.jpeg',
  'papel-group.jpeg',
  'pizza uno.jpeg',
  'puerto seco.jpeg',
  'roll-pro.jpeg',
  'seguras.jpeg',
]

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>Asociados más populares</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
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
