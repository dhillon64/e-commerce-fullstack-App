import React, { useEffect, useState } from 'react';
import {Form,Button, Row,Col, Alert} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogIn } from '../actions';
import Loader from '../components/Loader';




const LoginScreen=({location,history})=>{
    const initialValues={
        email:"",
        password:""
    }
    const [values,setValues]=useState(initialValues);
    const dispatch=useDispatch();
    const userLogin=useSelector(state=>state.userLogin);
    const {loading,userInfo,error}=userLogin;

    const redirect=location.search ? location.search.split('=')[1] : '/'

    useEffect(()=>{
        if(userInfo){
          history.push(redirect)
        }

    },[history,userInfo,redirect])

    const handleSubmit=(e)=>{
        e.preventDefault()

        dispatch(LogIn(values));
        
    }


    return (
        <>
        <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h1 style={{fontWeight:"initial"}}>SIGN IN</h1>
                    {error&&<Alert variant='danger'>{error}</Alert>}
                    {loading&&<Loader />}

        <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name='email' type="email" placeholder="Enter email" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} value={values.email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} value={values.password} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <p style={{marginTop:'15px'}}>New Customer? <Link to={redirect ?`/register?redirect=${redirect}`:'/register'}>Register</Link></p>
</Form>
</Col>
  </Row>
        </>
    )
}

export default LoginScreen;