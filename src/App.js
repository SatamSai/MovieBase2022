import './App.css';
import Collection from './pages/collection';
import CollectionDetails from './pages/collectiondetails';
import Home from './pages/home';
import Search from './pages/search';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DetailPage from './pages/detailPage';
import People from './pages/people';
import PeopleDetails from './pages/peopleDetails';

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
        <Route path='/people' element={<People/>}/>
        <Route path='/people/:id' element={<PeopleDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
