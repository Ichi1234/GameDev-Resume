export default function Navbar() {
  return (
    <nav>
      <div className="p-4 text-lg flex justify-around items-center tracking-widest">
        <a href="#hero" className="font-title text-primary">
          KASIDET UTHAIWIWATKUL
        </a>

        <div className="font-body text-sm space-x-8 text-textmaincolor font-semibold">
          <a href="#games">GAMES</a>
          <a href="#about">ABOUT ME</a>
          <a href="#contact">CONTACT</a>
          <a href="signup" className="text-primary font-normal">SIGN UP</a>
          <a href="admin" className="text-primary font-normal">ADMIN</a>
        </div>
      </div>

      <hr className="text-[#1f1c19]" />
    </nav>
  );
}