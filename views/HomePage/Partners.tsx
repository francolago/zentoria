import NextImage from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from 'components/Container'
import { media } from 'utils/media'
import NextLink from 'next/link'

type Partner = { imageUrl: string; href: string }

const partners: Partner[] = [
  {
    "imageUrl": "Dartee.png",
    "href": "https://www.instagram.com/dar.tee/"
  },
  {
    "imageUrl": "Delta.png",
    "href": "https://www.deltahigiene.com.ar"
  },
  {
    "imageUrl": "Ermap .png",
    "href": "https://erm-ap.com"
  },
  {
    "imageUrl": "FP INGENIERIA.png",
    "href": "http://www.fpingenieria.com.ar"
  },
  {
    "imageUrl": "GudD BIKE.png",
    "href": "https://www.instagram.com/gudbike/?hl=es"
  },
  {
    "imageUrl": "la raquel.jpeg",
    "href": "https://www.instagram.com/laraquel.sm/?hl=es"
  },
  {
    "imageUrl": "landi.jpeg",
    "href": "https://www.facebook.com/Ferreteria-LANDI-1633926833585761/"
  },
  {
    "imageUrl": "Las Zainas.png",
    "href": "https://www.laszainas.com.ar"
  },
  {
    "imageUrl": "navajas.jpeg",
    "href": "https://www.instagram.com/nvj_bellavista/?hl=es"
  },
  {
    "imageUrl": "ORV.jpeg",
    "href": "https://www.instagram.com/orv.alianzas/?hl=es"
  },
  {
    "imageUrl": "PAKKO.png",
    "href": "https://www.instagram.com/pakkofiesta/?hl=es"
  },
  {
    "imageUrl": "PAPEL ZONE.png",
    "href": "https://www.facebook.com/papelgroup/"
  },
  {
    "imageUrl": "Pakki.png",
    "href": "https://www.instagram.com/pizzapakko/?hl=es"
  },
  {
    "imageUrl": "Pizza uno.png",
    "href": "https://www.instagram.com/pizzaunolleve/?hl=es"
  },
  {
    "imageUrl": "americna implant.png",
    "href": "http://www.americanimplant.com"
  },
  {
    "imageUrl": "bulk gytm.png",
    "href": "https://www.instagram.com/bulkgym/?hl=es"
  },
  {
    "imageUrl": "di bona.png",
    "href": "https://dibona.com.ar"
  },
  {
    "imageUrl": "puerto sc.png",
    "href": "https://www.facebook.com/abastecedora.puertoseco/"
  },
  {
    "imageUrl": "seguras.jpeg",
    "href": "https://www.instagram.com/seguras.orv/"
  },
]

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>Nuestros asociados</Title>
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
                <NextImage src={'/partners/' + partner.imageUrl} alt={normalizePartnerLogoName(partner.imageUrl)}
                           width={128} height={128} />
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
