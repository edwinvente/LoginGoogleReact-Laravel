import React from 'react'
import hero from "../images/hero-bg.png";
import styled from 'styled-components';
import { Navbar } from './components/Navbar';

const HomeCard = styled.div`
    background: url(${hero});
    background-size: contain;
    width: 100%;
    min-height: 720px !important;
`

export const Home = () => {
    return (
        <HomeCard>
            <Navbar />
        </HomeCard>
    )
}
