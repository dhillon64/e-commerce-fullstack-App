import React, { useEffect, useState } from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions';
import {CheckoutSteps} from '../components/CheckoutSteps';


function ShippingScreen ({history}){
    const shippingAddress=useSelector(state=>state.cart.shippingAddress);
    const dispatch=useDispatch();
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');
    const [postCode,setPostCode]=useState('');
    const [country,setCountry]=useState('');

    useEffect(()=>{
        if(shippingAddress){
            setAddress(shippingAddress.address);
            setCity(shippingAddress.city);
            setPostCode(shippingAddress.postCode);
            setCountry(shippingAddress.country);
        }
    },[shippingAddress])



    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveShippingAddress({address,city,postCode,country}))
        history.push('/payment')

    }
    



    return (
        <>
        
        <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
        <CheckoutSteps step1 step2 />
        
        
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='Address'>
                <Form.Label>Address</Form.Label>
                <Form.Control required type='text' placeholder='Enter address' value={address} onChange={(e)=>setAddress(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control required type='text' placeholder='Enter City' value={city} onChange={(e)=>setCity(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='postCode'>
                <Form.Label>Post Code</Form.Label>
                <Form.Control required type='text' placeholder='Enter Post Code' value={postCode} onChange={(e)=>setPostCode(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control required type='text' placeholder='Enter Country' value={country} onChange={(e)=>setCountry(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Continue</Button>
            </Form>
            </Col>
        </Row>
        
        </>
    )
}

export default ShippingScreen;