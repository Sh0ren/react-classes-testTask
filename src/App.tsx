import "./App.css"
import Clock from "./entites/clock/clock"
import LanguageSelector from "./entites/LanguageSelector/LanguageSelector"
import Header from "./widgets/header/Header"
import Main from "./widgets/main/Main"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  )
}

export default App
