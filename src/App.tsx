import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-3 md:grid-cols-4">
        <div className="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-2 md:col-span-3">
          <MainContent></MainContent>
        </div>
      </div>
    </div>
  );
}

export default App;
