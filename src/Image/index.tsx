import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Wrapper, ImageWrapper, Img, BackgroundImg } from './style'
import { api } from '../App'

interface Media {
  id: string
  type: string
  statistics: {
    views: number
    downloads: number
    likes: number
    created: number
  }
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  owner: {
    id: string
    username: string
  }
}

interface ResultMedia {
  data: {
    success: boolean
    response: {
      media: Media
      __trace: {
        mediaId: string
        requestId: string
        requestTook: number
      }
    }
  }
}

interface Props {
  mediaId: string
}

export const Image = ({ mediaId }: Props) => {
  const [image, setImage] = useState<Media>()
  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await axios.get(`${api.url}/medias/${mediaId}`, {
          params: { api_key: api.api_key },
        })
        const { data } = response as ResultMedia
        setImage(data.response.media)
      } catch (error) {
        console.log(error)
      }
    }
    getImage()
  }, [mediaId])

  return (
    <Wrapper>
      <BackgroundImg src={image?.urls.regular} alt={image?.owner.username} />
      <ImageWrapper>
        <Img src={image?.urls.regular} alt={image?.owner.username} />
      </ImageWrapper>
    </Wrapper>
  )
}
