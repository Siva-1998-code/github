import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function WorldCase() {
  const [posts, setPost] = useState(null)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPost(res.data);
        console.log(res.data);
      })
  })
  return (
    <Container>
      <section>
        
        <div>
          {
            (posts) ?
              (<ul>
                {
                  posts.map(post => {
                    return (
                      <Card style={{ width: '18rem' }} className="justify-content-md-center">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                          <Card.Title>{post.title}</Card.Title>
                          <Card.Text>
                            {post.body}
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    )
                  })
                }
              </ul>) : (<label className="justify-content-md-center"><AiOutlineLoading3Quarters /></label>)
          }
        </div>
      </section>

    </Container>
  )
}

export default WorldCase;