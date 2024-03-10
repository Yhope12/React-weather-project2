import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="Yangon"/>
</div>
<footer>
                This project was coded by {""}
                <a href="https://www.shecodes.io/graduates/90100-yoon-yoon" target="_blank">Yoon Yoon</a>
           {""} and is {""}
           <a href='https://yhope12.github.io/MyWeatherApp/' target='_blank'>open-sourced on git-hub</a>{""}
            </footer>
    </div>
  );
}

export default App;
