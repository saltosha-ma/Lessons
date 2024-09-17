import React from 'react';
import Description from "../../components/description/Description";
import classes from "./aboutPage.module.css";

function AboutPage() {
    return (
        <div className={classes.aboutPage}>
            <h2 className={classes.title}>About Page</h2>
            <Description title="Title 2" description="description 2"/>
        </div>
    );
}

export default AboutPage;