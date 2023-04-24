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
        <ul>
          {links.map(link => (
            <li>
              <Link href={link.to}>{link.page}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
