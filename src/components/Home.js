import React from 'react';
import { Button, Stack, Image } from 'react-bootstrap';
import '../styles/Home.css';

function Home(){
    const handleJoinClick = () => {
        window.open('https://www.apple.com/ca/', '_blank');
    }

    return(
            <Stack gap={3} className="landing-stack">
                <Image src={require(`../assets/watgpt-logo.png`)} width={200} alt="logo"/>
                <p className='tagline'>Creating GPT Powered Solutions For Every Student</p>
                <p className="col-md-6">We develop GPT trained software and chatbots that are practical to use for University of Waterloo students. We are a student design team at the University of Waterloo and a member of the Sedra Student Design Centre. </p>
                <Button className="py-2" variant="outline-light" onClick={handleJoinClick}>join us</Button>
            </Stack>
    );
}

export default Home;
