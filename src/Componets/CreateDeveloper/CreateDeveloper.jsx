import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../config/firebase";

const CreateDeveloper = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState(0);
  const [married, setMarried] = useState(false);

  const developersDB = collection(db, "developers");

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleProfession = (e) => {
    e.preventDefault();
    setProfession(e.target.value);
  };

  const handleAge = (e) => {
    e.preventDefault();
    setAge(Number(e.target.value));
  };

  const handleMarried = (e) => {
    e.preventDefault();
    setMarried(e.target.checked);
  };

  const createDeveloper = async () => {
    try {
      await addDoc(developersDB, {
        name: name,
        profession: profession,
        age: age,
        married: married,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Developer Name"
        onChange={handleName}
      />
      <input
        type="text"
        placeholder="Enter Developer Profession"
        onChange={handleProfession}
      />
      <input
        type="number"
        onChange={handleAge}
        placeholder="Enter Developer Age"
      />
      <input
        checked={married}
        id="married"
        type="radio"
        onChange={handleMarried}
      />
      <label htmlFor="married">Is The Developer Married</label>
      <button onClick={createDeveloper}>Create Developer</button>
    </div>
  );
};

export default CreateDeveloper;
