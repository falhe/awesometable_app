import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import { PanelRight, PanelLeft } from './Panels'
import { Avatar } from './Avatar'
import { Wrapper, Right } from './style'
import { Content } from './Content'
import { Footer } from './Footer'
import { Image } from './Image'

interface Post {
  id: string
  created: string
  mediaId: string
  user: {
    id: string
    username: string
  }
  likes: number
  title: string
  description: string
}

interface Result {
  data: {
    success: boolean
    response: {
      count: number
      posts: Post[]
    }
  }
}

interface Api {
  url: 'https://api.slstice.com/mock'
  api_key: 'ZkReF8GBqc0l2Ou6DSPE'
}

export const api: Api = {
  url: 'https://api.slstice.com/mock',
  api_key: 'ZkReF8GBqc0l2Ou6DSPE',
}

function App() {
  const [posts, setPosts] = useState<Post[]>()
  const [post, setPost] = useState<Post>()
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (posts) {
        const nextPost = counter + 1
        setCounter(nextPost)
        setPost(posts[nextPost])
      }
    }, 6000)

    return () => {
      clearInterval(interval)
    }
  }, [counter, posts])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(`${api.url}/posts`, {
          params: {
            api_key: api.api_key,
            offset: counter === posts?.length ? counter : 0,
            limit: 15,
          },
        })
        const { data } = response as Result
        setPosts(data.response.posts)
      } catch (error) {
        console.log(error)
      }
    }

    getPosts()
  }, [counter, posts])

  return (
    <>
      {post && (
        <Wrapper>
          <PanelLeft>
            <Image mediaId={post.mediaId} />
          </PanelLeft>
          <PanelRight>
            <Right>
              <Avatar username={post.user.username} />
              <Content
                counter={counter}
                title={post.title}
                description={post.description}
              />
              <Footer created={post.created} likes={post.likes} />
            </Right>
          </PanelRight>
        </Wrapper>
      )}
    </>
  )
}

export default App
