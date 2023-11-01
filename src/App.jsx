
import ScrollToTop from 'react-scroll-to-top'
import './App.css'
import Countries from './components/Countries/Countries'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='container'>
        <ScrollToTop smooth color="#DE3163" />  {/* style added to app.css */}
        <Navbar />
        <Countries />
      </div>
    </>
  )
}

export default App
