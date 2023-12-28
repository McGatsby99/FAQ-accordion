// import logo from './logo.svg';
import './App.css';
import mobileImage from './assets/images/background-pattern-mobile.svg'
import desktopImage from './assets/images/background-pattern-desktop.svg'

import Faq from './Faq';


function App() {
  return (
    <div className="App">
     <section className='bg-image'>
       <picture>
        <source media="(min-width:400px)" srcset={desktopImage}/>
        <img src={mobileImage} alt="Flowers" />
      </picture>
     </section>
     <Faq />
    </div>
  );
}

export default App;
