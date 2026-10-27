'use client'

// react method
import { useState } from 'react';


// component
import SidebarHomeMobile from "./components/sidebar";
import EntryTitle from "./components/entryTitle";
import Slider from './components/slider';
import LastestProducts from './components/lastestProducts';
import ByCategory from './components/shopByCategory';
import BestSellerPage from './components/bestSeller';
import AboutPage from './components/aboutBrand';
import NewSteller from './components/newsteller';
import Footer from './components/footer';
import NavBottomHome from './components/navBottom';
import HeaderTop from './components/headerTop';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenSidebarMobile() {
    setIsOpen((prev) => !prev);
  }



  return (
    <div className="root text-zinc-700">
      <SidebarHomeMobile active={isOpen} />
      {/* <div className='bar-promo h-15 bg-red-300'></div> */}
      <HeaderTop toggle={handleOpenSidebarMobile} />

        {/* banner */}
        <Slider />

        <main>
          <section className='' aria-label='flashSalePage'>
              <LastestProducts/>
              <ByCategory />
              <BestSellerPage />
              <AboutPage />
              <NewSteller />
              <Footer />
          </section>
        </main>

        {/* navbar bottom mobile */}
        <NavBottomHome />
    </div>
  );
}