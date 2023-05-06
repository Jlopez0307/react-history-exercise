import React, { Component } from "react";
import JokeList from "./JokeList";
import JokeList2 from "./components/JokeList2";

/** App component. Renders list of jokes. */

//Class based method

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <JokeList />
//       </div>
//     );
//   }
// }

//Updated with hooks
const App = () => {
  return (
    <div className="App">
      <JokeList />
      <JokeList2 />
    </div>
  );
}

export default App;
