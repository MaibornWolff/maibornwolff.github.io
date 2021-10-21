import { Parallax } from 'react-parallax';
import React from 'react';

interface Props {
    backGroundImage: string;
    overlayText: string;
}

const ParallaxWithOverlay: React.FC<Props> = (props) => {
    return (
        //returns a parallaxed background Image with a text conatiner on top, as seen on the website

        //react-parallax is an installes component that makes parallax easier, while the section Element is the text container
        //the css classes can be found and changed at src/App.css
        <div className="parallax-container">
            <Parallax
                bgImage={props.backGroundImage}
                contentClassName="bgimage"
                strength={400}
                bgImageStyle={{ top: '-60%' }}
            >
                <section className="jumbotron text-center">
                    <div className="container">
                        <h2 className="jumbotron-heading">
                            {props.overlayText}
                        </h2>
                    </div>
                </section>
            </Parallax>
        </div>
    );
};

export default ParallaxWithOverlay;
