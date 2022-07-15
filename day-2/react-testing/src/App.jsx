
import './App.css';
import {useState} from "React";

function App() {
  const [theme,setTheme] = useState("light")
  return (
    <div className="App">
      <h3>Theme is {theme} </h3>
    <button onClick={() => {
        setTheme(theme ===   "light" ? "dark" : "light");
    }}
    >change theme</button>
    </div>
  );
}
export default App;
