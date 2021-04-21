import "tailwindcss/tailwind.css"
import './App.css';
import Header from './components/Header'
import PortfolioHeader from './components/PortfolioHeader'
import PortfolioBox from './components/PortfolioBox'
function App() {
  return (
    <div className="App">
      <Header></Header>
        <PortfolioHeader></PortfolioHeader>
        <PortfolioBox></PortfolioBox>
    </div>
  );
}

export default App;
