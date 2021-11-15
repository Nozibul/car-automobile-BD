import React from "react";
import Header from "../../../shared/Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import CarSlider from "../CarSlider/CarSlider";
import Products from "../Products/Products";
import TopHeader from "../TopHeader/TopHeader";
import UserReview from "../UserReview/UserReview";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Banner />
      <Products />
      <CarSlider />
      <UserReview />
      <Footer />
    </div>
  );
};

export default Home;
