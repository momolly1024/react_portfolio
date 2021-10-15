import React from "react";
import "./about.css";
import styled from "styled-components";
const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`;

const About = () => {
    return (
        <Container>
            <div className="a-left">
                <div className="a-card"></div>
                <div className="a-card">
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right"></div>
        </Container>
    );
};

export default About;
