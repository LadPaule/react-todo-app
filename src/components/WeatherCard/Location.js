import React from 'react';
import styled from '@emotion/styled';


const Location = (props) => {
    const Container = styled.div`
        text-align: center;
    `
    const City = styled.h1`
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    `
    const Country = styled.h3`
    font-family: 'Merriweather', sans-serif;
    font-size: 1.1rem;
    `
    return ( 
        <Container className="location">
            <City>Kampala</City>
            <Country>UG</Country>
        </Container>
        
     );
}
 
export default Location;
