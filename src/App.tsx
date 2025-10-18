import './App.scss'
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
    <div className='app'>
      <div className="appPad">
        <Header />
      </div>
      <Navbar />
      <div className="appPad">
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
