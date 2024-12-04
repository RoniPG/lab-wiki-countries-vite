import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://ih-countries-api.herokuapp.com";

function CountryDetails() {
    const [country, setCountry] = useState(null);
    const { countryId } = useParams();

    useEffect(() => {
        axios
            .get(`${BASE_URL}/countries/${countryId}`)
            .then((response) => {
                const countryData = response.data;
                setCountry(countryData);
            })
    }, [countryId]);

    return (
        <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
            {country === undefined || country === null
                ? <p>Loading...</p>
                : <>
                    <img src="" alt="flag-of-country" />
                    <h1>COUNTRY NAME</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "30%" }}>Capital</td>
                                <td>CAPITAL</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>AREA <sup>2</sup></td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        <li><a href="#">COUNTRY 1</a></li>
                                        <li><a href="#">COUNTRY 2</a></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>}
        </div>
    );
}

export default CountryDetails;
