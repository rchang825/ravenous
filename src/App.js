import './App.css';
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";

function App() {
  const sampleBusiness =     {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Padding Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  };
  const businessArr = [
    sampleBusiness,
    sampleBusiness,
    sampleBusiness,
    sampleBusiness,
    sampleBusiness,
    sampleBusiness
  ];

  return (
    <div>
      <SearchBar />
      <BusinessList businesses={businessArr}/>
    </div>
  );
}

export default App;
