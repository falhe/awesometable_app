import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Padding } from '../style'
import { Wrapper, Content, Name, Img } from './style'
import { api } from '../App'

interface User {
  id: string
  username: string
  first_name: string
  last_name: string
  profile_images: {
    small: string
    medium: string
    large: string
  }
}

interface ResultUser {
  data: {
    success: boolean
    response: {
      user: User
      __trace: {
        userId: string
        requestId: string
        requestTook: number
      }
    }
  }
}

interface Props {
  username: string
}

export const Avatar = ({ username }: Props) => {
  const [avatar, setAvatar] = useState<User>()
  useEffect(() => {
    const getProfileImage = async () => {
      try {
        const response = await axios.get(`${api.url}/users/${username}`, {
          params: { api_key: api.api_key },
        })
        const { data } = response as ResultUser
        setAvatar(data.response.user)
      } catch (error) {
        console.log(error)
      }
    }

    getProfileImage()
  }, [username])

  return (
    <Wrapper>
      <Padding>
        {avatar && (
          <Content>
            <Name>
              {avatar.first_name} {avatar.last_name}
            </Name>
            <Img src={avatar.profile_images.medium} alt={avatar.username} />
          </Content>
        )}
      </Padding>
    </Wrapper>
  )
}
