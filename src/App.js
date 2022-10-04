
import ClassBasedCounter from "./components/ClassBasedCounter";
import FunctionalCounter from "./components/FunctionalCounter";

function App() {
  return (
    <div className="app">
      <h2>This is a Functional counter</h2>
      <FunctionalCounter />
      <h2>This is a Class based  counter</h2>
      <ClassBasedCounter/>
    </div>
  );
}

export default App;
