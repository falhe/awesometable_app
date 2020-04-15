import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`

export const ImageWrapper = styled.div`
  display: flex;
  height: 80%;
  z-index: 10;
`

export const Img = styled.img`
  width: 100%;
`

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  filter: blur(4px);
  width: 100%;
  height: 100%;
`
