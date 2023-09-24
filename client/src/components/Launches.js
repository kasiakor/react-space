import { gql } from "@apollo/client";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
    }
  }
`;

const Launches = () => {
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          //   if (loading) return <h4>Loading...</h4>;
          //   if (error) console.log(error);

          return (
            <>
              {data &&
                data.launches &&
                data.launches.map((launch) => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Launches;
