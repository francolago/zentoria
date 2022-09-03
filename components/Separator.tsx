import styled from 'styled-components'
import { media } from 'utils/media'

const Separator = styled.div`
  margin: 4rem 0;
  border: 1px solid rgba(var(--secondary), 0.025);
  height: 0px;

  ${media('<=tablet')} {
    margin: 2rem 0;
  }
`

export default Separator
