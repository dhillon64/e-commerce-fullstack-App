import React, { useEffect, useState } from 'react';
import {Form,Button, Row,Col, Alert} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetails } from '../actions';
import Loader from '../components/Loader';


const EditUserScreen=({location,history})=>{

    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    const userInfo=useSelector(state=>state.userLogin.userInfo);
    const loading=useSelector(state=>state.userLogin.loading);
    const error=useSelector(state=>state.userLogin.error);
    const success=useSelector(state=>state.userLogin.success);
  
    
    
    

    useEffect(()=>{
        if(!userInfo){
          history.push('/login')
        }else{
            
                
                setName(userInfo.name);
                setEmail(userInfo.email)
            
    }
},[userInfo,history,dispatch]);

    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(confirmPassword!==password){
          setMessage('Passwords do not match')
        }
        else{
            dispatch(updateUserDetails({id:userInfo._id,name,email,password}))
        }      
    }


    return (
        <>
        <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h1 style={{fontWeight:"initial"}}>Update Details</h1>
                    {error&&<Alert variant='danger'>{error}</Alert>}
                    {loading&&<Loader />}
                    {message&&<Alert variant='danger'>{message}</Alert>}
                    {success&&<Alert variant='success'>User details updated Successfully</Alert>}

        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control name='name' type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={name} required/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name='email' type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
  </Form.Group>
  <Form.Group controlId="formBasicConfirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="Password" name='confirmPassword' placeholder="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Update Account
  </Button>
</Form>
</Col>
  </Row>
        </>
    )
}

export default EditUserScreen;