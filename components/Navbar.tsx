import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={18}
          className="object-contain bg-white rounded-full "
        />
      </Link>
      <div className="flex-1 padding-x  text-2xl font-extrabold">
        <h1 className="">Encontra la ropa que marca tu estilo!</h1>
      </div>
    </nav>
  </header>
);

export default NavBar;
