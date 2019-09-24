import React from "react";
import { Link } from "react-router-dom";
// import Carousel from "./Carousel";

class PropertyCard extends React.Component {

    sumPropertyHeld = () => {
        let amount_held = 0

        this.props.holdings.map(holding => {
            if (holding.property_id == this.props.property.id) {
            amount_held += holding.amount
            }
        })
        return amount_held
    }

    render() {
        const {
            price,
            rent,
            lease_length,
            last_year_appreciation,
            next_year_appreciation,
            beds_baths_sqft,
            address,
            zone,
        } = this.props.property;

        return (
            <>
                    <div className="card property-card">
                        <img
                            src={[this.props.tempHouseImage]}
                            alt="Card cap"
                            className="card-img-top img-fluid"
                        />

                        <div className="card-body">
                            <h5 className="card-title text-primary">
                                ${price.toLocaleString()}
                            </h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Rent: ${rent.toLocaleString()}
                            </li>
                            <li className="list-group-item">
                                Leased for the next {lease_length / 12} years.
                            </li>
                            <li className="list-group-item">
                                Appreciated by {last_year_appreciation}% last
                                year.
                            </li>
                            <li className="list-group-item">
                                Appreciation is predicted to be{" "}
                                {next_year_appreciation}% next year.
                            </li>
                            <li className="list-group-item">
                                {beds_baths_sqft}
                            </li>
                            <li className="list-group-item">{address}</li>

                            <li className="list-group-item">

                            <div className="text d-flex justify-content-between"><span>{Math.round(this.sumPropertyHeld()/price*100)}% Owned</span></div>
                            <div className="progress">
                                <div role="progressbar" style={{width: `${Math.round(this.sumPropertyHeld()/price*100)}%`}} aria-valuenow={Math.round(this.sumPropertyHeld()/price*100)} aria-valuemin={0} aria-valuemax="100" className="progress-bar dashbg-1 owned-bar"></div>
                            </div>
                            </li>

                            <li className="list-group-item">
                                {beds_baths_sqft}
                            </li>
                            <li className="list-group-item">{Math.round(this.sumPropertyHeld()/price*100)}%</li>

                        </ul>

                        <div className="card-body">
                            <Link to="/property" className="btn btn-primary">
                                Temp Button
                            </Link>
                            <Link
                                to="/property"
                                className="btn btn-outline-primary"
                                style={{ marginLeft: "1.5em" }}
                            >
                                Add to Watchlist
                            </Link>
                        </div>
                    </div>
            </>
        );
    }
}

export default PropertyCard;
