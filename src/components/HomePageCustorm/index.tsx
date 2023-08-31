import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Translate, {translate} from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {Typography, Grid, Button} from "@material-ui/core";
import {useTrail, animated, useSpring} from "@react-spring/web";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import Experience from "@site/src/components/Experience";
import Projects from "@site/src/components/Projects";
import Contact from "@site/src/components/Contact";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

function SocialLinks({animatedProps, ...props}) {

    return (
        <animated.div className="social__links" style={animatedProps}>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography display={"inline"} gutterBottom>
                        Social Media:
                    </Typography>
                </Grid>
                <Grid item>
                    <a href="https://www.linkedin.com/in/hcq/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </Grid>
                <Grid item>
                    <a href="https://github.com/HaochenQ">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </Grid>
            </Grid>
        </animated.div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    ;
    const {siteConfig} = useDocusaurusContext();

    const animatedHero = useSpring({
        opacity: 1,
        transform: "translateX(0)",
        from: {opacity: 0, transform: "translateX(8em)"},
        config: {mass: 2, tension: 260, friction: 30},
        delay: 600,
    });
    const animatedTexts = useTrail(5, {
        from: {opacity: 0, transform: "translateY(3em)"},
        to: {opacity: 1, transform: "translateY(0)"},
        config: {
            mass: 3,
            friction: 45,
            tension: 460,
        },
        delay: 200,
    });

    return (
        <>
            <Grid container style={{padding: "5%"}} className="hero">
                {/*Personal Intro */}
                <Grid item xs={12} lg={6} className="homeIntro">
                    <animated.div style={animatedTexts[0]}>
                        <Typography variant="h2" gutterBottom>
                            <Translate>Hello! I am</Translate>
                            <span className="intro__name"> Duc Anh</span>
                            {/* <Typography variant="body2">
                <span>{siteConfig.tagline}</span>
              </Typography> */}
                        </Typography>
                      <Typography variant="h2" gutterBottom>
                        <Translate>A Backend Developer.</Translate>
                      </Typography>
                    </animated.div>
                    <animated.div style={animatedTexts[1]}>
                        <Typography variant="body1">
                            <Translate>
                              An experienced Solution Architect with a robust background in designing, implementing, and optimizing mission-critical back-end systems. Highly skilled in various back-end technologies like Spring Boot and Scala, I have a proven track record of steering complex projects to success.
                            </Translate>{" "}
                        </Typography>
                    </animated.div>
                    &nbsp;
                    <animated.div style={animatedTexts[2]}>
                        <Typography variant="h6" gutterBottom>
                            <Translate>My Skills:</Translate>
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          Java, Spring Boot, Scala, Docker, Kubernetes, Solution Design & Implementation, etc.
                        </Typography>
                    </animated.div>
                    &nbsp;
                    <animated.p style={animatedTexts[3]}>
                        <Button
                            style={{textTransform: "none"}}
                            color="primary"
                            variant="outlined"
                            size="small"
                        >
                            <Translate>My Resume</Translate>
                        </Button>
                    </animated.p>
                    <SocialLinks animatedProps={animatedTexts[4]}/>
                </Grid>

                <Grid item xs={12} lg={6} className="homeImg">
                    {/* <img src={useBaseUrl(image)} className="image" /> */}
                    <animated.img
                        src={useBaseUrl("img/programmer.svg")}
                        style={animatedHero}
                    />
                </Grid>
            </Grid>
            {/* Experiences section */}
            <Grid>
                <Experience />
            </Grid>
            {/* Projects section */}
            {/*<Grid>*/}
            {/*    <Projects />*/}
            {/*</Grid>*/}
            {/* Contact form */}
            <Grid>
                <Contact />
            </Grid>
        </>
    );
}
