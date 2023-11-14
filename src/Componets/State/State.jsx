import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const State = () => {
  const [mood, setMood] = useState("angry");

  const handleHappy = () => {
    setMood("happy");
  };

  const handleSad = () => {
    setMood("sad");
  };

  const handleAngry = () => {
    setMood("angry");
  };

  const handleBored = () => {
    setMood("bored");
  };

  return (
    <div>
      <h1>I am in a {mood} mood</h1>

      <ButtonGroup>
        <Button onClick={handleHappy} className="btn-primary ms-4">
          Happy
        </Button>
        <Button onClick={handleSad} className="btn-primary ms-4">
          Sad
        </Button>
        <Button onClick={handleAngry} className="btn-primary ms-4">
          Angry
        </Button>
        <Button onClick={handleBored} className="btn-primary ms-4">
          Bored
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default State;
