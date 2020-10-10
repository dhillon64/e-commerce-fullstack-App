import React, { useEffect, useState } from 'react';
import {Form,Button, Row,Col, Alert} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions';
import Loader from '../components/Loader';




const RegisterUser=({location,history})=>{
    const initialValues={
        name:"",
        email:"",
        password:"",
    }
    const [confirmPassword,setConfirmPassword]=useState('')
    const [values,setValues]=useState(initialValues);
    const [message,setMessage]=useState('');
    const dispatch=useDispatch();
    const userRegister=useSelector(state=>state.registerUser)
    const {userInfo,error,loading}=userRegister;

    const redirect=location.search ? location.search.split('=')[1] : '/'

    useEffect(()=>{
      if(userInfo){
        history.push(redirect)
      }
    },[userInfo,redirect,history])


    const handleSubmit=(e)=>{
        e.preventDefault()
        if(confirmPassword!==values.password){
          setMessage('Passwords do not match')
        }
        else{
        dispatch(register(values));
        }
        
    }


    return (
        <>
        <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h1 style={{fontWeight:"initial"}}>Create Account</h1>
                    {error&&<Alert variant='danger'>{error}</Alert>}
                    {loading&&<Loader />}
                    {message&&<Alert variant='danger'>{message}</Alert>}

        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control name='name' type="text" placeholder="Enter Name" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} value={values.name} required/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name='email' type="email" placeholder="Enter email" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} value={values.email} required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} value={values.password} required />
  </Form.Group>
  <Form.Group controlId="formBasicConfirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="Password" name='confirmPassword' placeholder="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} required />
  </Form.Group>
  <Button variant="primary" type="submit">
    Create Account
  </Button>
  <p style={{marginTop:'15px'}}>Already Have Account? <Link to={redirect ?`/login?redirect=${redirect}`:'/login'}>Log In</Link></p>
</Form>
</Col>
  </Row>
        </>
    )
}

export default RegisterUser;