function CountryDetails() {
    return (
        <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
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
        </div>
    );
}

export default CountryDetails;
