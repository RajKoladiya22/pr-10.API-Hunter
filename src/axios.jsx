import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Header } from './header';

export const Axios = () => {

    const [product, setPreoduct] = useState([]);

    const getData = async () => {
        let record = await axios.get('https://dummyjson.com/products')
        setPreoduct(record.data.products);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Header />
            <Container>
                <center>
                    <h1>Sasta Bazar by Axios</h1>
                </center>
                <div className="d-flex flex-wrap">
                    {
                        product.map((val) => {
                            const { id, title, price, brand, thumbnail, description, rating, warrantyInformation } = val;
                            return (
                                <Card key={id} style={{ width: '18rem', backgroundColor: '#000000' }} className='m-2'>
                                    <Card.Img variant="top" src={thumbnail} />
                                    <Card.Body className='d-flex flex-column'>
                                        <Card.Title className='text-white'>{title}</Card.Title>
                                        {brand ? <span className='text-secondary text-opacity-50'>[{brand}]</span> : null}

                                        <Card.Text className='text-secondary'>
                                            <p>{warrantyInformation}</p>
                                            Rating: {rating}/5
                                        </Card.Text>
                                        <Button variant="primary" className="mt-auto">&#8377;{price}</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
            </Container>
        </>
    );
}

