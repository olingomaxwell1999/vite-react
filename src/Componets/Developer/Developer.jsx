import PropTypes from "prop-types";
const Developer = ({ name, age, married, id, profession }) => {
  return (
    <div>
      <h1 style={{ color: married ? "green" : "red" }}>{name}</h1>
      <h2>{profession}</h2>
      <h3>{age}</h3>
    </div>
  );
};

Developer.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  married: PropTypes.bool,
  id: PropTypes.string,
  profession: PropTypes.string,
};

export default Developer;
