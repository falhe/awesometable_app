import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import axios from 'axios'

import App, { api } from './App'

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

test('renders learn react link', async () => {
  render(<App />)

  axiosMock.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        success: true,
        response: {
          count: 2,
          posts: [
            {
              id: 'iop1VUrHF_U',
              created: '2019-07-11T19:17:38-04:00',
              mediaId:
                'NTMzN2EzNjQ4MTVmNTc0ZjAyMDUxMTEzNzM0M2FjYTI2N2UwY2Q3ZToyNTRiZGZkNTI2MDc3OGQ5OlM4TFZLRUJ5K0lLYnJ4WWhZdTJyZXc9PQ==',
              user: {
                id: 'o9M2-GtNlBE',
                username: 'honest',
              },
              likes: 545,
              title: null,
              description: 'The quick brown fox jumps over the lazy dog.',
            },
            {
              id: '3GigJfjFvv4',
              created: '2020-04-15T11:13:56-04:00',
              mediaId:
                'ZDJhYmY3ODZhMjA3YTViODA4YjFiYmY0ZmZlMTIzZjZlYWNjM2NlZjpkYWYxYTU4OGNiOWM5YTRhOlJTT2hramxJNlZ2OXVzQ2wzWERhdVE9PQ==',
              user: {
                id: 'zmHAx844_-o',
                username: 'vdapinto',
              },
              likes: 4,
              title: 'Midnight yard',
              description:
                'My mum tries to be cool by saying that she likes all the same things that i do.',
            },
          ],
        },
      },
    })
  )

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(`${api.url}/posts`, {
    params: { api_key: api.api_key, limit: 15, offset: 0 },
  })
})
