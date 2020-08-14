import React, {Fragment} from "react";
import Slider from "../components/slideshow/Slideshow";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Brands from "../components/brands/Brands";
import SpecialOffers from "../components/special-offers/SpecialOffers";
import AboutCompany from "../components/about-company/AboutCompany";

const Home = () => {
    return(
        <Fragment>
            <Slider/>
            <Container maxWidth="lg">
                <Hidden smDown>
                    <Brands/>
                </Hidden>
                <SpecialOffers/>
                <AboutCompany/>
            </Container>
        </Fragment>
    )
}

export default Home;