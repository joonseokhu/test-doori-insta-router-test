import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Layout from 'src/components/Layout'
import PostDetailModal from 'src/components/PostDetailModal'

const Page = props => {
  const location = useLocation()
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    (async () => {
      console.log('eeee')
      const { data } = await axios.get('http://15.165.17.58/api/posts')
      setPosts(data.rows)
    })()
  }, [])

  return (
    <Layout>
      <List>
        {posts.map(post => (
          <ListItem key={post.id}>
            <Link
              to={{
                pathname: `/p/${post.id}`,
                state: { background: location },
              }}
            >
              <Image url={post?.images?.[0]?.url ?? ''} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Layout>
  )
}

export default Page

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  margin: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.15);
  border-radius: 4px;
  overflow: hidden;
`

const Image = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fff;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  &:hover:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.35);
  }
`
