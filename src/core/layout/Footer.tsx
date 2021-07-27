import { Grid, Link, Typography } from "@material-ui/core";
import { Container } from "react-bootstrap";
import { useStyles } from "./FooterStyles";
import logo from "./../../assets/logo.png";

const Footer = (props: any) => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <div className={classes.root + " container"}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.firstcontainer + " container "}>
          <Typography>You can’t stop time, but you can save it!</Typography>
        </Grid>
        <Grid item xs={12} className={classes.secondcontainer + " container "}>
          <Typography>
            Living in the city, there is never enough time to shop for
            groceries, pick-up supplies, grab food and wade through traffic on
            the way back home. How about we take care of all of the above for
            you? What if we can give you all that time back? Send packages
            across the city and get everything from food, groceries, medicines
            and pet supplies delivered right to your doorstep. From any store to
            your door, just make a list and we’ll make it disappear. Just
            Duckbox It!
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography>
              <img src={logo}></img>
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.thirdcontainer}>
            <Typography>Dunzo</Typography>
            <Typography>
              <Link href="#" onClick={preventDefault}  className={classes.thirdcontainer}>
                About
              </Link>
            </Typography>
            <Typography >
              <Link href="#" onClick={preventDefault}  className={classes.thirdcontainer}>
                Jobs
              </Link>
            </Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Contact
              </Link>
            </Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Terms&Condition
              </Link>
            </Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Privacy policy
              </Link>
            </Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Duckbox for partner
              </Link>
            </Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Duckbox for Business
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.thirdcontainer}>
            <Typography>Serviceble Cities</Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Bangalore
              </Link>
            </Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Pune
              </Link>
            </Typography>{" "}
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Gurgaon
              </Link>
            </Typography>{" "}
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Hyadrabad
              </Link>
            </Typography>{" "}
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                New Delhi
              </Link>
            </Typography>{" "}
            <Typography>
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Chennai
              </Link>
            </Typography>{" "}
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Mumbai
              </Link>
            </Typography>{" "}
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Bangalore
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.thirdcontainer}>
            <Typography>Get in Touch</Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Email
              </Link>
            </Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Twitter
              </Link>
            </Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Whatsapp
              </Link>
            </Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Facebook
              </Link>
            </Typography>
            <Typography >
              <Link href="#" onClick={preventDefault} className={classes.thirdcontainer}>
                Instagram
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              <img src={logo}></img>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
