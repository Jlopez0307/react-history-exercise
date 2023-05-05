import React, { Component } from "react";
import JokeList from "./JokeList";

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
    </div>
  );
}

export default App;
