import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBeer } from 'react-icons/fa';

export const Fatch = () => {

    const [post, setPost] = useState([]);

    const getData = async () => {
        let record = await fetch('https://dummyjson.com/posts', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let res = await record.json();
        setPost(res.posts);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Header />
            <Container>
                <center>
                    <h1>Blog by Fatch</h1>
                </center>

                <div className="d-flex flex-wrap">
                    {
                        post.map((val) => {
                            const {title, body} = val
                            return (
                                <div className='w-50 p-3'>
                                    <Card style={{ width: '100%', backgroundColor: '#000000' }} className=''>
                                    <Card.Img variant="top" src="" />
                                    <Card.Body className='d-flex flex-column'>
                                        <Card.Title className='text-white'>
                                        {title}
                                        </Card.Title>
                                        
                                        <Card.Text className='text-secondary'>
                                        {body}
                                        </Card.Text>
                                        <div variant="primary" className="mt-auto">&#8377; Lets go for a <FaBeer />?</div>
                                    </Card.Body>
                                </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </>
    );
}

