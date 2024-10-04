import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Todo from "./Components/Todo";
import NavigationBar from "./Components/Navbar";

function App() {
  return (
    <>
      <NavigationBar />
      <Todo />
    </>
  );
}

export default App;
