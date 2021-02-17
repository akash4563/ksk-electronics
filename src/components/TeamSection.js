import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import Button from "./CustomButtons/Button.js";
import Card from "./Card/Card.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter.js";
import styles from "./teamStyle.js";

const useStyles = makeStyles(styles);
export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={{color:'white'}}>Instructor</h2>
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}></GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src='images/ksk.jpeg' alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:'white'}}>
                Karim
                <br />
                <small className={classes.smallTitle} style={{color:'white'}}>Teacher</small>
              </h4>
              <CardBody>
                <p className={classes.description} style={{color:'white'}}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
            </Card>
        <GridItem xs={12} sm={12} md={4}></GridItem>
          </GridItem>
        </GridContainer>
      
      </div>
    </div>
  );
}
