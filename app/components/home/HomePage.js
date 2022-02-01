import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
    render() {
        return(
            <div className="home">
                <div className="home__banner home__banner--bg">
                    <div className="overlay"></div>
                    <h2>Free and Simple <span>invoicing</span> for freelancers and businesses.</h2>
                    <Link to="/QuickBill/dashboard" className="solid-btn">Create Invoice</Link>
                    <h4>No signup required</h4>
                </div>
            </div>
        );
    }
}
