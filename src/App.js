import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Friends from './components/Friends/Friends' 
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.messagePage}/>}/>
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage}/>}/>
          <Route path='/news' render={ () => <News />}/>
          <Route path='/music' render={ () => <Music />}/>
          <Route path='/settings' render={ ()=> <Settings />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;