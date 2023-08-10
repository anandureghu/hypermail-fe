import Navbar from "./components/Navbar";
import AllRoutes from "./routes/routes";

function App() {
  const all_routes = AllRoutes();
  return (
    <div className="App">
      <Navbar />
      {all_routes}
    </div>
  );
}

export default App;
