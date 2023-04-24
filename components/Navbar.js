import Link from 'next/link'

const Navbar = () => {
  const links = [
    { to: '/', page: 'Home' },
    { to: '/about', page: 'About' },
    { to: '/contact', page: 'Contact' },
    { to: '/signin', page: 'Sign In' },
  ]

  return (
    <div>
      <nav>
        <ul className="flex justify-end items-center ">
          {links.map(link => (
            <li className=" gap-3 p-3">
              <Link className="hover:bg-slate-100 p-5" href={link.to}>
                {link.page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
