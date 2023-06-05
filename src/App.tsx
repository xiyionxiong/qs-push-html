import "./App.css";
import useContext from "./GlobalState";
import MainLayout from "./components/Main";
import ResultsLayout from "./components/Results";

function App() {
  const { key } = useContext();

  return <>{key === "app" ? <MainLayout /> : <ResultsLayout />}</>;
}

export default App;
