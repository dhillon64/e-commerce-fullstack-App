import React, { useEffect } from 'react';
import {Row,Col, Container, Card} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProfileScreen=({history})=>{
    const userInfo=useSelector(state=>state.userLogin.userInfo);
    useEffect(()=>{
        if(!userInfo){
            history.push('/login');
        }

    },[userInfo,history])
    return (
        <>
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={12} md={12}>
            <h1><i className='fas fa-user'> My Profile</i></h1>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col xs={12} md={6}>
            <Card border="primary">
    <Card.Header><h2><strong style={{marginRight:'20px'}}>My Orders</strong><i class="fas fa-clipboard-list fa-lg"></i></h2></Card.Header>
    <Card.Body>
      <Card.Title>View your account status. From here you can get details of any order and print invoices for your records.</Card.Title>
      
    </Card.Body>
  </Card>
  <br />
            

            </Col>
            <Col xs={12} md={6}>
                <Link to='/editprofile'>
            <Card className='pb-0' border="primary">
    <Card.Header><h2><strong style={{marginRight:'25px'}}>Edit Profile</strong><i class="fas fa-users fa-lg"></i></h2></Card.Header>
    <Card.Body>
      <Card.Title>Here you can update your User details, such as Email address and Password.</Card.Title>
      
    </Card.Body>
  </Card>
  </Link>

                
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default ProfileScreen;