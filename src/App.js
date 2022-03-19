import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

/* function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect( ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);
  return(
    <div>
      <h2>Load Countries</h2>
      <h4>available countries : {countries.length}</h4>
      {
        countries.map( country => <ShowCountries name ={country.name.common} population = {country.population}></ShowCountries>)
      }
    </div>
  )
}

function ShowCountries(props){
  return(
    <div>
      <h2>Name : {props.name}</h2>
      <p>Population : {props.population}</p>
    </div>
  )
} */
export default App;
