import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import CountUp from "react-countup";

import styles from "./Cards.module.css";


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  // console.log(props)

  //Denne component returnerer en <div> med de tre øverste kort der indholder ovenstående data
  return (
    <div className={styles.container}>

        {/* i hver grid sørger vi for at tilpasse til stor, mellem og små skærme */}
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
            {/* dette er selve kortet der bruger benytter det destructurerede data og @materialUI */}
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of Covid19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from Covid19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Deaths involving Covid19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
