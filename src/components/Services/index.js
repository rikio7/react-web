import React from 'react';
import Icon1 from '../../images/safari.jpg';
import Icon2 from '../../images/trekk.jpg';
import Icon3 from '../../images/trav.jpg';
import { 
    ServiceCard, 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper,
    ServicesIcon, 
    ServicesH2, 
    ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
            <ServiceCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Jungle Safari</ServicesH2>
                <ServicesP>Experience the close view of WildLife with Jungle Safari.</ServicesP>
            </ServiceCard>
            <ServiceCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Trekking</ServicesH2>
                <ServicesP>Hiking onto the snow and hilly mountains.</ServicesP>
            </ServiceCard>
            <ServiceCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Travelling</ServicesH2>
                <ServicesP>Travel to the different and amazing parts.</ServicesP>
            </ServiceCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
