import { useState, useEffect } from "react";
import FetchingData from "../Componets/FetchingData/FetchingData";

const Home = () => {
  const [team, setTeam] = useState("");

  const handleTeamChange = (team) => {
    setTeam(team);
  };

  useEffect(() => {
    // Run only on mount
    console.log("Component mounted");
  }, []);

  return (
    <>
      <div>
        <h3>My favorite team is {team}</h3>

        <button onClick={() => handleTeamChange("Southampton")}>
          Southampton
        </button>
        <button onClick={() => handleTeamChange("Swansea")}>Swansea</button>
        <button onClick={() => handleTeamChange("Brighton")}>Brighton</button>
      </div>

      <div>
        <FetchingData />
      </div>
    </>
  );
};

export default Home;
