import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Developer from "../Componets/Developer/Developer";
import CreateDeveloper from "../Componets/CreateDeveloper/CreateDeveloper";
const About = () => {
  const [developers, setDevelopers] = useState([]);

  const getDevelopers = async () => {
    try {
      let developersDb = collection(db, "developers");
      const firebaseInfo = await getDocs(developersDb);
      const finData = firebaseInfo.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(finData);
      setDevelopers(finData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDevelopers();
  }, []);

  return (
    <div>
      {developers.map((developer) => (
        <Developer
          key={developer.id}
          name={developer.name}
          profession={developer.profession}
          age={developer.age}
          married={developer.married}
          id={developer.id}
        />
      ))}

      <CreateDeveloper />
    </div>
  );
};

export default About;
