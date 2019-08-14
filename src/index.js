import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import Projects from './components/Projects';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route path='/projects' render={() => <Header><Projects /></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

/* new Promise(resolve => {
    setTimeout(() => {
        console.log('bears');
        resolve();
    }, 2000);
}).then(() => {
    console.log('beets');
    console.log('battlestar galactica');
}); */
