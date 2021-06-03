import React from 'react'

const Profile = (props) => {
    console.log(props.location.data);
    let name = props.location.data.firstname;
    let bids = props.location.data.bids;
    return (
        <div>
            <h1>This is a {name} profile</h1>
            <h2>Bids</h2>
            <table>
                <thead>
                    <tr>
                        <th>Car Title</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bids.map((bid) => (
                            <tr key={bid.id}>
                                <td>{bid.carTitle}</td>
                                <td>{bid.amount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default Profile;
