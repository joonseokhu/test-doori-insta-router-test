import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Layout from 'src/components/Layout'

const Page = () => {
  const [posts, setPosts] = React.useState([])
  const history = useHistory()
  React.useEffect(() => {
    (async () => {
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
                state: { modal: true },
              }}>
              <Image url={post?.files?.[0]?.url ?? ''} />
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
`

const ListItem = styled.li`
  margin: 10px;
`

const Image = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
