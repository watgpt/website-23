import React from 'react';
import { Stack, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMailBulk, FaDiscord, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
        <Stack direction="horizontal" gap={2} className="social-links">
            <Badge><Link to="#"><FaMailBulk size={30} /></Link></Badge>
            <Badge><Link to="#"><FaDiscord size={30} /></Link></Badge>
            <Badge><Link to="#"><FaInstagram size={30} /></Link></Badge>
            <Badge><Link to="#"><FaLinkedin size={30} /></Link></Badge>
        </Stack>
    </footer>
  );
};

export default Footer;