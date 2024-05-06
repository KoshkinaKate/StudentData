import "./App.css";
import { useState } from "react";
import { learners } from "./models/learners";
import Learner from "./components/Learner";

function App() {
  const [learnerData, setLearnerData] = useState(learners);
  // learners: [{},{},{}]

  const [user, setUser] = useState({
    isLoggedIn: true,
    status: "hidden",
    content: null,
    active: true,
  });

  // ?: What if we wanted to update/change the state
  const updateState = () => {
    // 1. Duplicate using [...user] spread
    console.log("Currently Updating State");
    setUser((user) => ({
      ...user,
      // 2. update changes
      status: "visible",
    }));
  };

  const updateMultiple = () => {
    //  1. Duplicate using [...user] spread
    console.log("Currently Updating State");
    setUser((user) => ({
      ...user,
      // 2. update {MULTIPLE} changes
      status: "visible",
      content: "new Updated Content",
    }));
  };

  const addLearner = () => {
    let instructor = {
      name: "Jordan Wofford",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum",
      scores: [
        {
          date: "2018-02-08",
          score: 177,
        },
        {
          date: "2018-04-22",
          score: 192,
        },
        {
          date: "2018-09-15",
          score: 168,
        },
      ],
    };
    setLearnerData([
      ...learnerData,
      instructor
    ]);
  };

  return (
    <div className="App">
      {learnerData.map((student) => {
        return (
          <>
            <Learner data={student} />
            <div className="btnContainer">
              <button onClick={updateState}>Update State</button>
              <button onClick={updateMultiple}>Multiple</button>
              <button onClick={addLearner}>Add Learner</button>
              <button>Replace Obj</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;