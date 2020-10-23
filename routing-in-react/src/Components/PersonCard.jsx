import React from 'react';
import { Link } from "react-router-dom";

const PersonCard = props => {
    return (
        <div className="card m-4 shadow" style={{ width: "18rem" }}>
            <div className="card-body bg-light border border-success">
                <h2 className="card-title">{props.person.name}</h2>
                {/* <p className="card-text">{props.person.age}</p> */}
                <Link to={`/people/${props.person.id}`}>
                    <button className="btn btn-small btn-secondary">See More</button>
                </Link>
            </div>
        </div >
    )
}

export default PersonCard













// import React from 'react';
// import GhibliLogo from '../assets/logo.png'
// import { v4 as uuidv4 } from 'uuid';
// import PeopleName from './SinglePerson'

// class People extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             people: [],
//             loadPeople: false
//         }

//         this.handleFetchAndRenderPeople = this.handleFetchAndRenderPeople.bind(this);
//     }

//     handleFetchAndRenderPeople() {
//         fetch('https://ghibliapi.herokuapp.com/people/')
//             .then(res => res.json())
//             .then(res => this.setState({ people: res, loadPeople: true }))
//             .catch(err => console.log(err));
//     }

//     render() {
//         if (this.state.loadPeople) {
//             return (
//                 <React.Fragment>
//                     <img src={GhibliLogo} alt="Studio Ghibli Logo" />
//                     <h1 className="m-2">Ghibli Fun Facts</h1>
//                     <div className="container">
//                         {this.state.people.map(person => <PeopleName person={person} key={uuidv4()} />)}
//                     </div>

//                 </React.Fragment>
//             )
//         } 

//         else {
//             return (
//                 <React.Fragment>
//                     <img src={GhibliLogo} alt="Studio Ghibli Logo" />
//                     <h1 className="m-2">Ghibli Fun Facts</h1>
//                     <div className="container">
//                     {/* <button className="btn btn-dark mx-2" onClick={this.handleFetchAndRenderPeople}>Load People</button> */}
//                     </div>

//                 </React.Fragment>
//             )
//         }
//     }
// }

// export default People;