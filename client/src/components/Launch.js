import { gql } from "@apollo/client";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Moment from "react-moment";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = () => {
  let { flight_number } = useParams();
  flight_number = parseInt(flight_number);

  return (
    <>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          //   if (loading) return <h4>Loading...</h4>;
          //   if (error) console.log(error);
          const {
            mission_name,
            flight_number,
            launch_date_local,
            rocket: { rocket_name, rocket_id, rocket_type },
          } = data.launch;
          console.log(data);
          return (
            <>
              <h1 className="display-4 my-3">
                <span className="text-dark">Mission: </span>
                {mission_name}
              </h1>
              <h4 className="mb-3">Launch Details</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  Flight Number: {flight_number}
                </li>
                <li className="list-group-item">
                  Launch Name:{" "}
                  <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
                </li>
              </ul>
              <h4 className="my-3">Rocket Details</h4>
              <ul className="list-group">
                <li className="list-group-item">Rocket Name: {rocket_name}</li>
                <li className="list-group-item">Rocket Id: {rocket_id}</li>
                <li className="list-group-item">Rocket Type: {rocket_type}</li>
                <li className="list-group-item">
                  Launch result: {""}
                  <span
                    className={
                      flight_number % 2 === 0 ? "text-success" : "text-danger"
                    }
                  >
                    {flight_number % 2 === 0 ? "success" : "failure"}
                  </span>
                </li>
              </ul>
              <hr />
              <Link to="/" className="btn btn-secondary">
                Back
              </Link>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Launch;
