import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Scrollchor from 'react-scrollchor';

import * as actions from '../../actions';

import Footer from '../../core/Footer';

/**
 *  Home class container 
 *    -> Serves as the home page for the website
 *       Renders a title and slogan, as well as two separate types of views:
 * 
 *      - Categories
 *          which is a list of types of locations or structures that the 
 *          website is structured by and that the user can further explore
 *          when clicked. Links to /location/:type route.
 *          Examples of types are 'bridge', 'museum', 'zoo', etc.
 * 
 *      - Countries
 *          which is a list of the countries in the database. The user can 
 *          click to take them to a /country/:country route which then renders
 *          information about the country as well as it's cities (where views
 *          can finally be explored in depth.
 *          Examples of countries are 'Canada', 'Germany', etc.
 *  
 *  TODO:
 *      - include static proptypes for the props to clean redundancy
 *      - refactor some of the renders into separate functional components
 */
class Home extends Component {
  // If the types (categories/countries) have not been loaded yet, then fetch them from the database
  componentWillMount() {
    if (!this.props.types) {
      this.props.getDistincts();
    }
  }

  // Scroll the page to the top once mounted
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div id="header">
          <div className="header-content">
            <div className="header-content-inner">
              <h1 id="homeHeading"><i className="fa fa-street-view"></i> {Home.Constants.Header.Title}</h1>
              <hr />
              <p>{Home.Constants.Header.Subtitle}</p>
              <Scrollchor to="#about"><button className="btn btn-primary btn-xl btn-logo">{Home.Constants.Header.Button}</button></Scrollchor>
            </div>
          </div>
        </div>

        <section className="bg-primary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">How would you like to explore?</h2>
                <hr className="light" />
                <p className="text-faded">The Street View Tourist utilizes the power of Google Street View to bring
                            to life the many landmarks and locations this world has to offer. Save the trip fees and explore the
                            world in the comfort of your own chair!</p>
                <p className="text-faded">Our locations are indexed by both countries and categories. You can search
                            for the locations of the world by selecting a country and then city, or you may search globally by
                            selecting a category type. Once you are on a city or category page, you may instantly select views
                            to be loaded in through a scrollable side menu. If you are on mobile, this menu can be accessed by
                            clicking the "Views" button.</p>
                <Link to="/categories"><button className="btn btn-default btn-xl sr-button">Categories</button></Link>
                <hr className="light" />
                <Link to="/countries"><button className="btn btn-default btn-xl sr-button">Countries</button></Link>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">What The Street View Tourist offers...</h2>
                <hr className="primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-street-view text-primary sr-icons"></i>
                  <h3>Explore the World</h3>
                  <p className="text-muted">Harness the power of Google Street View and explore the world through our wonderfully categorized locations. Our website makes discovering new locations easy. You can discover new places in many of our different countries and cities, but if you're unsure where you'd like to go, then you can look around through the many various category types.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-heart text-primary sr-icons"></i>
                  <h3>Favorites & Comments</h3>
                  <p className="text-muted">Registering to our website is free and easy! You'll be able to save your favorite locations and (in a future update) be able to revisit them through your profile. You can also leave a comment on each of the views where you may engage with the other community members.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-globe text-primary sr-icons"></i>
                  <h3>Up to Date</h3>
                  <p className="text-muted">We are always updating the database with more and more locations for you to explore and enjoy. All of our locations are manually inputted to ensure that each view is easily accessible in the Street View window and allows you to walk around and explore. A future update will allow users to submit their own locations and edit the content of existing ones.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-cogs text-primary sr-icons"></i>
                  <h3>Instant Loading</h3>
                  <p className="text-muted">This website is a single page application powered by the React framework offering a fast and responsive browsing experience. You may instantly change categories or countries, as well as switch from one view onto another through the sidebar.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

Home.Constants = {
  Header: {
    Title: "The Street View Tourist",
    Subtitle: "Tap, swipe, and scroll your way around the world as The Street View Tourist!",
    Button: "Get Started"
  },

  Sections: {

  }
};

const mapStateToProps = state => {
  return {
    types: state.streetView.types
  }
};

export default connect(mapStateToProps, actions)(Home);