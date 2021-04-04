import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Header/>
        <Layout/>
      <Footer/>
    </div>
  );
}

export default App;
