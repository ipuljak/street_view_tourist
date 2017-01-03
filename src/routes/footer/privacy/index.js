import React from 'react';

import Footer from '../../../core/Footer';
import './privacy.css';

const Privacy = () => {
    return (
        <div>
            <div className="container privacy padded-top">
                <h1>Privacy Policy</h1>
                <hr />

                <p>We take your privacy seriously. This policy describes what personal information we collect and how we use it. (This privacy policy is applicable to websites falling under the primary holder The Street View Tourist - www.streetviewtourist.com)</p>

                <h2>Routine Information Collection</h2>
                <hr />

                <p>All web servers track basic information about their visitors. This information includes, but is not limited to, IP addresses, browser details, timestamps and referring pages. None of this information can personally identify specific visitors to this site. The information is tracked for routine administration and maintenance purposes, and lets me know what pages and information are useful and helpful to visitors.</p>

                <h2>Cookies and Web Beacons</h2>
                <hr />

                <p>Where necessary, this site uses cookies to store information about a visitor's preferences and history in order to better serve the visitor and/or present the visitor with customized content.</p>

                <p>Advertising partners and other third parties may also use cookies, scripts and/or web beacons to track visitors to our site in order to display advertisements and other useful information. Such tracking is done directly by the third parties through their own servers and is subject to their own privacy policies.</p>

                <h2>Controlling Your Privacy</h2>
                <hr />

                <p>Note that you can change your browser settings to disable cookies if you have privacy concerns. Disabling cookies for all sites is not recommended as it may interfere with your use of some sites. The best option is to disable or enable cookies on a per-site basis. Consult your browser documentation for instructions on how to block cookies and other tracking mechanisms.</p>

                <h2>Special Note About Google Advertising</h2>
                <hr />

                <p>Any advertisements served by Google, Inc., and affiliated companies may be controlled using cookies. These cookies allow Google to display ads based on your visits to this site and other sites that use Google advertising services. Learn how to opt out of Google's cookie usage. As mentioned above, any tracking done by Google through cookies and other mechanisms is subject to Google's own privacy policies.</p>

                <p className="last">About Google advertising: What is the DoubleClick DART cookie? The DoubleClick DART cookie is used by Google in the ads served on publisher websites displaying AdSense for content ads. When users visit an AdSense publisher’s website and either view or click on an ad, a cookie may be dropped on that end user’s browser. The data gathered from these cookies will be used to help AdSense publishers better serve and manage the ads on their site(s) and across the web. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy <a href="http://www.google.com/privacy_ads.html">here</a>.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;