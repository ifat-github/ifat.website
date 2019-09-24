import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import About from './components/About';
import Title from './components/Title';
import Jokes from './components/Jokes';
import CV from './components/CV';
import Projects from './components/Projects';
import Header from './components/Header';
import MusicMaster from './projects/music-master';
import SocialProfiles from './components/SocialProfiles';

/* const routing = (
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route path='/projects' render={() => <Header><Projects /></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
            <Route path='/music-master' render={() => <Header><MusicMaster /></Header>} /> 
        </Switch>
    </Router>
); */

ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<Projects />, document.getElementById('projects'));
ReactDOM.render(<SocialProfiles />, document.getElementById('social'));
ReactDOM.render(<CV />, document.getElementById('cv-toggle'));


/* new Promise(resolve => {
    setTimeout(() => {
        console.log('bears');
        resolve();
    }, 2000);
}).then(() => {
    console.log('beets');
    console.log('battlestar galactica');
}); */
