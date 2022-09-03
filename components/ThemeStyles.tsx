import styled from 'styled-components';
import { media } from '../utils/media';

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 0.8rem;
  box-shadow: var(--shadow-md);
  
  img {
    border-radius: 0.8rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  margin: 2rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  cursor: pointer;
  border-radius: 0.6rem;
  width: 280px;
  height: 420px;
  font-size: 1.6rem;

  ${media('<=tablet')} {
    width: 100%;
  }
  
  h3 {
    padding-bottom: 10px;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  font-size: 1.5rem;

  p {
    font-weight: normal;
  }
`

const SvgContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`
