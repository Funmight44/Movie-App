
import Footer from './components/footer';
import Header from './components/header';
import './index.css';
import AllRoutes from './route/AllRoutes';

function App() {
  return (
    <div className="App">
        <Header/>
        <AllRoutes/>
        <Footer/>
    </div>
  );
}

export default App;
