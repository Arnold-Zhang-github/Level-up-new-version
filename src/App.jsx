import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Sessions from "./components/Sessions";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";

const App = () => {
   return (
      <>
         <Navbar />
         <div className="flex flex-col">
            <HeroSection />
            <Sessions />
            <Feedback />
            <Footer />
         </div>
      </>
   );
};

export default App;
