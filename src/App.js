import './App.css';
import CountryContainer from './Container/CountryContaner';

function App() {

  const regions = [
    {name:'All', url:'https://restcountries.com/v3.1/all'},
    {name:'Europe', url:'https://restcountries.com/v3.1/region/europe'},
    {name:'Africa', url:'https://restcountries.com/v3.1/region/africa'},
    {name:'Asia', url:'https://restcountries.com/v3.1/region/asia'},
    {name:'Americas', url:'https://restcountries.com/v3.1/region/americas'},
    {name:'Oceania', url:'https://restcountries.com/v3.1/region/oceania'},
  ]




  return (
    <div>
      <CountryContainer regions={regions}/>
    </div>
  );
}

export default App;