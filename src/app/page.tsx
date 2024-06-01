import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Categories from './components/Categories/Categories';
import Featured from './components/Featured'
import IndexBar from './components/IndexBar';
import SimpleSlider from "./components/SimpleSlider/SimpleSlider";
import ProfileBar from './components/ProfileBar/ProfileBar'
import GridBar from './components/GridBar'
import JoinUs from './components/Join/JoinUs';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroBanner/>
      <Categories/>
      <Featured/>
      <IndexBar/> 
      <SimpleSlider/>
      <ProfileBar/>
      <GridBar/>
      <JoinUs/>
      <Footer/>
    </main>
  );
}
