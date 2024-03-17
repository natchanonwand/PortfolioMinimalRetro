import Link from 'next/link'

export default function Header() {

  return (
    <header className='flex'>
      <div className=' bg-[#DAA520] border-r-4 border-b-4 border-black min-w-[50px] w-1/12 flex justify-center items-center'>
        <div className='border border-black rounded-full p-0.5 transform hover:scale-110 transition duration-300'>
          <img src="/bubee.jpg" alt="Bubee" className="w-8 h-8 rounded-full" />
        </div>
      </div>

      <nav className='py-8 pt-11 w-full border-b-4 border-black'>
        
        <ul className='container flex gap-52 ml-24'>
          <li className="group relative inline-block">
            <Link href="/" className="relative text-xl font-bold">
              Home
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative inline-block">
            <Link href='/about' className="relative text-xl font-bold">
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative inline-block">
            <Link href='/contact' className="relative text-xl font-bold">
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
