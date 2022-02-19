import React from 'react'
import styled from 'styled-components'

import laliga2 from '../../../../assets/laliga-login.jpeg'

const DivImagenCont = styled.div`
    width:100%
`

const ImgLaLiga = styled.img`
    width:100%;
`

const ImgLoginLiga = () => {
  return (
    <DivImagenCont>
        <ImgLaLiga src={laliga2} />
    </DivImagenCont>
  )
}

export default ImgLoginLiga
