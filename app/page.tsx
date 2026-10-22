'use client'

// react method
import { useState, useEffect } from 'react';

// data mapping
import { categoryData } from "./lib/mappings/dataCategory"; 

// component
import SidebarHomeMobile from "./components/sidebar";
import CategoryCard from "./components/categoryCard";
import EntryTitle from "./components/entryTitle";
import Slider from './components/slider';
import LastestProducts from './components/lastestProducts';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenSidebarMobile() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="root text-zinc-700 h-[30000px]">
      <SidebarHomeMobile active={isOpen} onClose={handleOpenSidebarMobile} />

      <header className="flex px-5 items-center justify-between h-15">
        <div className="leftHeader flex items-center gap-2">
          <div className="logos">
            <a href="" className="font-bold text-2xl">JmoX</a>
            <hr className="w-1/2" />
          </div>
        </div>

        <div className="fitures-header flex items-center justify-between gap-4">
          <button className="w-10 h-10 text-2xl">❤</button>
          <button className="w-10 h-10 text-2xl relative">
            👜
            <span className="indexIndicatorCart absolute w-4 h-4 bg-red-300 right-0 top-0 text-sm text-zinc-950 rounded-full full-center">1</span>
          </button>
          <button onClick={handleOpenSidebarMobile} className="accountHitbox w-10 h-10 cursor-pointer group">
            <div className="w-full h-full bg-zinc-300 rounded-full group-hover:bg-zinc-400 "></div>
          </button>
        </div>
      </header>
        <search className="py-2 px-5 md:hidden mb-7" aria-description="searchBar_mobile">
          <form className="relative">
            <input className="bg-zinc-200 h-10 w-full outline-2 outline-zinc-300 rounded-md shadow-md px-5 ps-10" name="search_product" placeholder="Cari produk" type="search" />

            <span className="w-10 h-10 full-center absolute top-1/2 -translate-y-1/2 left-0">🔎</span>
          </form>
        </search>

        {/* banner */}
        <Slider />
     

        <main className='py-4 px-5'>
          <section className='py-10' aria-label='flashSalePage'>
              <EntryTitle key={0} value='Lastest'/>
              <LastestProducts/>

          </section>
        </main>
    </div>
  );
}