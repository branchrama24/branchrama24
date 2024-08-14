import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Methodologies ,Pattern} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          </div>
        <About />
        <Methodologies />
        <Pattern />
        <Experience />
        <Tech />
        <Works />
        <Contact/>
        <Hero/>
      </div>
    </BrowserRouter>
  );
}

export default App;
