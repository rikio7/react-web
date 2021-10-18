import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight, HeroBtnWrapper  } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);


    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Heaven Is Myth Nature Is Real</HeroH1>
                <HeroP>Book Now for your Life Worth Travelling Destinations!</HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to='signin' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    
                    >
                         Let's Go{hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;
