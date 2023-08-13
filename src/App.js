import Navbar from "./components/Navbar";
import AllRoutes from "./routes/routes";

function App() {
  const all_routes = AllRoutes();
  return (
    <div className="App">
      <Navbar />
      <div>{all_routes}</div>
    </div>
  );
}

export default App;
