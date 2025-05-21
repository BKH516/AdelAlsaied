import "./App.css";
import NavBar from "./assets/Components/NavBar/NavBar";
import Hero from "./assets/Components/Hero/hero";
import Portfolio from "./assets/Components/Portfolio/Portfolio";
import SocialMedia from "./assets/Components/SocialMedia/SocialMedia";
import SectionWorkMy from "./assets/Components/SectionWorkMy/SectionWorkMy";
import Food from "./assets/Components/Pictures/Food/Food";
import Dentistry from "./assets/Components/Pictures/Dentistry/Dentistry";
import DeliveryCompany from "./assets/Components/Pictures/DeliveryCompany/DeliveryCompany";
import TravelAndTourismCompany from "./assets/Components/Pictures/TravelAndTourismCompany/TravelAndTourismCompany";
import SoftwareProgrammingCompany from "./assets/Components/Pictures/SoftwareProgrammingCompany/SoftwareProgrammingCompany";
import Bakery from "./assets/Components/Pictures/Bakery/Bakery";
import SectionTextLogo from "./assets/Components/SectionTextLogo/SectionTextLogo";
import SectionLogo from "./assets/Components/SectionLogo/SectionLogo";
import Footer from "./assets/Components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <NavBar />
        
        {/* القسم العلوي */}
        <div id="home" className="Image-hero">
          <Hero />
        </div>

        <Portfolio />

        {/* قسم الأعمال */}
        <div id="Mywork">
          <SocialMedia />
        </div>

        <section className="Section">
          <div className="display Food logo-section">
            <SectionWorkMy
              Text="FOOD"
              textClass="Text-Food-color"
              background="background-color-Food Silence"
              Food={<Food />}
            />
          </div>

          <div className="display Dentistry logo-section ">
            <SectionWorkMy
              Text="Dentistry"
              textClass="Text-Dentistry-color"
              background="background-color-Dentistry Silence"
              Food={<Dentistry />}
            />
          </div>

          <div className="display DeliveryCompany logo-section">
            <SectionWorkMy
              Text="DeliveryCompany"
              textClass="Text-DeliveryCompany-color"
              background="background-color-DeliveryCompany Silence"
              Food={<DeliveryCompany />}
            />
          </div>

          <div className="display TravelAndTourismCompany logo-section">
            <SectionWorkMy
              Text="TravelAndTourismCompany"
              textClass="Text-TravelAndTourismCompany-color"
              background="background-color-TravelAndTourismCompany Silence"
              Food={<TravelAndTourismCompany />}
            />
          </div>

          <div className="display SoftwareProgrammingCompany logo-section">
            <SectionWorkMy
              Text="SoftwareProgrammingCompany"
              textClass="Text-SoftwareProgrammingCompany-color"
              background="background-color-SoftwareProgrammingCompany Silence"
              Food={<SoftwareProgrammingCompany />}
            />
          </div>

          <div className="display Bakery logo-section">
            <SectionWorkMy
              Text="Bakery"
              textClass="Text-Bakery-color"
              background="background-color-Bakery Silence"
              Food={<Bakery />}
            />
          </div>
        </section>
      </main>

      <section className="logo-f">
        <SectionTextLogo />
      </section>

      <section className="SectionLogo">
        <SectionLogo />
      </section>

      {/* قسم التواصل */}
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;
