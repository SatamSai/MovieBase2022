import './App.css';
import Collection from './pages/collection';
import CollectionDetails from './pages/collectiondetails';
import Home from './pages/home';
import Search from './pages/search';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DetailPage from './pages/detailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie' element={<Search search="movie"/>}/>
        <Route path='/tv' element={<Search search="tv"/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/collection/:id' element={<CollectionDetails/>}/>
        <Route path='/:category/:id' element={<DetailPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
