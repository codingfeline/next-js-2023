import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-purple-100 flex flex-col h-screen justify-between">
        <Navbar />
        <div className="flex  flex-col mb-auto p-3 ">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
