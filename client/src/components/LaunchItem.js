import Moment from "react-moment";

const LaunchItem = ({
  launch: { mission_name, launch_date_local, flight_number },
}) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            <span
              className={
                flight_number % 2 === 0 ? "text-success" : "text-danger"
              }
            >
              Mission: {mission_name}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
