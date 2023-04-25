import "./Job.css";

function Job(props) {
  return (
    <div className="jobContainer" style={{ borderColor: props.borderColor }}>
      <h3>{props.title} </h3>
      <div className="discriptionRow">
        <h5>
          {props.contractType} - {props.country} - {props.city}
        </h5>
      </div>
    </div>
  );
}

export default Job;
