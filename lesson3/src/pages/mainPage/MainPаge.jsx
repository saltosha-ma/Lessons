import React from 'react';
import Description from "../../components/description/Description";
import classes from "./mainPage.module.css";

function MainPage  ()  {
    return (
        <div className={classes.mainPage}>
            <h2 className={classes.title}>Main Page</h2>
            <Description title={"Title"} description={'Description'}/>
        </div>
    )
}

export default MainPage;