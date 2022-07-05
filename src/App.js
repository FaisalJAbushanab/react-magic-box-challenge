import { React, useState} from "react"
import ColorBox from "./ColorBox";
import SearchBar from "./SearchBar";
function App() {
  const [color, setColor] = useState('');
  const [isDarkText, setIsDarkText] = useState(true)
  return (
      <main className="container">
        <ColorBox 
          color= {color}
          isDarkText = {isDarkText}
        />
        <SearchBar 
        color = {color}
        setColor = {setColor}
        isDarkText = {isDarkText}
        setIsDarkText = {setIsDarkText}
        />
      </main>
  );
}

export default App;
