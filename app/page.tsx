export default function Home() {
  return (
    <div className="root px-5 text-zinc-700">
      <header className="flex items-center justify-between h-15">
        <div className="leftHeader flex items-center gap-2">
          <div className="w-10 h-10 flex" aria-description="HitboxHamburgerMenuInMobile">
            <div className="w-7 h-7 mt-auto">
              <div className="line h-1 bg-zinc-700 mb-2"></div>
              <div className="line w-[70%] h-1 bg-zinc-700"></div>
            </div>
          </div>
          <div className="logos">
            <a href="" className="font-bold text-2xl">JmoX</a>
            <hr className="w-1/2" />
          </div>
        </div>

        <div className="fitures-header flex items-center justify-between gap-4">
          <button className="w-10 h-10 text-2xl relative">
            👜
            <span className="indexIndicatorCart absolute w-4 h-4 bg-red-300 right-0 top-0 text-sm text-zinc-950 rounded-full full-center">1</span>
          </button>
          <button className="w-10 h-10 bg-zinc-400 rounded-full shadow-md" aria-description="acount"></button>
        </div>
      </header>
    </div>
  );
}