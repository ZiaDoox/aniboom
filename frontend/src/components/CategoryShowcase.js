import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryShowcase = ({categoryTitle, categoryDescription, imgURL}) => {
    return (
        <LinkContainer className="category-showcase" style={{ maxWidth: '22rem', margin: 'auto'}} to={'/products/'+categoryTitle}>
            <MDBCard >
                <MDBCardImage src={imgURL} className='img-fluid rounded' position="top" style={{width: '200px', height: '200px', margin: '15px auto 15px auto', padding:'10px'}}/>
                <MDBCardBody style={{textAlign: 'center'}}>
                    <MDBCardTitle className='category-title'style={{fontWeight: 'bold', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '22px'}}>{categoryTitle}</MDBCardTitle>
                    <MDBCardText className='category-desc'>{categoryDescription}</MDBCardText> 
                </MDBCardBody>                
            </MDBCard>
        </LinkContainer>
    )
}

export default CategoryShowcase
