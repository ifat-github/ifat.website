import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import Projects from './components/Projects';
import Header from './components/Header';
import MusicMaster from './projects/music-master';
import './index.css';

const routing = (
    <BrowserRouter history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route path='/projects' render={() => <Header><Projects /></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
            <Route path='/music-master' render={() => <Header><MusicMaster /></Header>} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

/* new Promise(resolve => {
    setTimeout(() => {
        console.log('bears');
        resolve();
    }, 2000);
}).then(() => {
    console.log('beets');
    console.log('battlestar galactica');
}); */
