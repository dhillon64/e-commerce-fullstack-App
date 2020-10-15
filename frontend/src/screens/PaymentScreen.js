import React, { useEffect, useState } from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions';
import {CheckoutSteps} from '../components/CheckoutSteps';


function PaymentScreen ({history}){
    const shippingAddress=useSelector(state=>state.cart.shippingAddress);
    const dispatch=useDispatch();
    
    useEffect(()=>{
        if(!shippingAddress){
            history.push('/shipping')
        }
    },[shippingAddress,history])

    const [paymentMethod,setPaymentMethod]=useState('paypal');



    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')

    }
    



    return (
        <>
        
        <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
        <CheckoutSteps step1 step2 step3 />
        
        
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                
                <Col>
                <Form.Check type='radio' label='Paypal or Credit card' id='paypal' name='paymentMethod' value='paypal' checked onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>
                <Form.Check type='radio' label='Stripe' id='Stripe' name='paymentMethod' value='Stripe' onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>
                </Col>
                </Form.Group>
                
                <Button type='submit' variant='primary'>Continue</Button>
            </Form>
            </Col>
        </Row>
        
        </>
    )
}

export default PaymentScreen;