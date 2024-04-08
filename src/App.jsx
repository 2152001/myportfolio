import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Projects from './Components/Projects'
import Services from './Components/Services'

function App() {


  return (
    <div className='h-full w-full  flex flex-col justify-start items-center '>
      <Nav />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
