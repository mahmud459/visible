import 'bootstrap/dist/css/bootstrap.min.css';
import Home1 from "./Hom/Home.jsx"
import AboutSection from './About/AboutFul.jsx'
import  SiteServisic from './Servicis/Servicis.jsx'
import SiteFeatuer from './Featuers/Featuers.jsx'
import FeaturTabsSection from './Featuers/Tabs.jsx'
import PortfolioTabsSection from './Portfolio/PortfolioTabs.jsx'
import PricingSection from './Pricing/Pricing.jsx'
import FAQSection from './qustions/questions.jsx'
import TeamSection from './Team/sliderCards.jsx'
import ContactSection from './Contact/contact.jsx'
import Footer from './Footer/Footer.jsx'


function App() {
  return (
    <>
      <Home1/>
      <AboutSection/>
      <SiteServisic/>
      <SiteFeatuer/>
      <FeaturTabsSection/>
      <PortfolioTabsSection/>
      <PricingSection/>
      <FAQSection/>
      <TeamSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
