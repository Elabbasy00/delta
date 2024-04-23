import ClientSlider from "../components/HomeSections/client-slider/ClientSlider";
import Hero from "../components/HomeSections/hero/Hero";
import HomeAbout from "../components/HomeSections/home-about/HomeAbout";
import HomeContact from "../components/HomeSections/home-contact/HomeContact";
import System1 from "../components/HomeSections/home-systems/System1";
import System2 from "../components/HomeSections/home-systems/System2";
import HomeValues from "../components/HomeSections/home-values/HomeValues";
import ServiceSlider from "../components/service-slider/ServiceSlider";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientSlider />
      <HomeAbout />
      <ServiceSlider />
      <System1 />
      <System2 />
      <HomeValues />
      <HomeContact />
    </main>
  );
}
