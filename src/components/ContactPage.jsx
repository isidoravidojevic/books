import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NavMenu from "./NavMenu";

const ContactContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
`;

const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

const ContactPage = () => {
    return (
        <ContactContainer>
            <NavMenu />
            <Title>Contact Page</Title>
            <MapContainer>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37438.47516036045!2d20.495058582799583!3d44.76231781629047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1688553263372!5m2!1ssr!2srs"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </MapContainer>
            <ContactInfo>
                <Icon icon={faPhone} />
                <span>123-456-7890</span>
            </ContactInfo>
            <ContactInfo>
                <Icon icon={faEnvelope} />
                <span>isidora@gmail.com</span>
            </ContactInfo>
        </ContactContainer>
    );
};

export default ContactPage;
