import React from 'react';
import {StyledFooter, StyledLink, StyledText} from "./footer.styled";

// import classes from './footer.module.css'

const Footer = ({text, path, link}) => {
    return (
        <StyledFooter>
            {text && <StyledText>{text}</StyledText>}
            <StyledLink to={path}>{link}</StyledLink>
        </StyledFooter>
    );
};

export default Footer;