import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join'
import MostRead from './components/MostRead/MostRead'
import Navbar from './components/Navbar/Navbar'
import Posts from './components/Posts/Posts'

function App() {
  // optional padding in each component
  return (
    <div className='overflow-x-hidden font-poppins bg-[#f5f5f5]'>
      <div className="px-[10%]">
        <Header />
      </div>
      <Navbar />
      <div className="px-[10%]">
      <Hero />
      <Posts />
      {/* Join our Community */}
      <Join />
      <MostRead />
      </div>
      <Footer />
    </div> 
  )
}

export default App
