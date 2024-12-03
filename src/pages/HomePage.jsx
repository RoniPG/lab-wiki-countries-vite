import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://ih-countries-api.herokuapp.com";

function HomePage() {
    const [countries, setCountries] = useState([]);

    const getCountries = () => {
        axios
            .get(`${BASE_URL}/countries`)
            .then((response) => {
                const countriesData = response.data;
                setCountries(countriesData)
            })
            .catch(err => console.log(err));
    };
    useEffect(() => {
        getCountries();
    }, [])
    return (
        <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
                {countries.map(country => (
                    <a key={country._id} className="list-group-item list-group-item-action">
                        {country.name.official}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
