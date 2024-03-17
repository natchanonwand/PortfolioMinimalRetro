import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex flex-wrap sm:flex-nowrap border-b-0 border-black sm:border-b-4'>
      <div className='bg-[#DAA520] border-r-0 sm:border-r-4 border-b-4 border-black min-w-[50px] w-full sm:w-1/12 sm:border-b-0 flex justify-center items-center p-4 sm:p-0'>
        <div className='border border-black rounded-full p-0.5 transform hover:scale-110 transition duration-300'>
          <img src="/bubee.jpg" alt="Bubee" className="w-8 h-8 rounded-full" />
        </div>
      </div>

      <nav className='w-full sm:py-8 sm:pt-11 sm:w-auto border-b-4 sm:border-b-0 border-black'>
        <ul className='flex flex-row sm:flex-row justify-around my-3 sm:my-0 sm:gap-40 px-4 sm:px-0 sm:ml-24'>
          <li className="group relative mb-0 sm:mb-0">
            <Link href="/" className="relative text-xl font-bold">
              Home
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative mb-0 sm:mb-0">
            <Link href='/about' className="relative text-xl font-bold">
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative mb-0 sm:mb-0">
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
