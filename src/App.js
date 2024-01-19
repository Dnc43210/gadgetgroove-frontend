import './App.css';
import Banner from './components/Banner';
import Collections from './components/Collections';
import NavigationBar from './components/NavigationBar';
import { Footer } from './components/footer';
const withMT = require("@material-tailwind/react/utils/withMT");


function App() {
  return (
    <>
      <NavigationBar/>
      <Banner/>
      <Collections/>
      <Footer/>

      
    </>
  );
}

export default App; 
