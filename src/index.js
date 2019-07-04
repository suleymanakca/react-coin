import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import List from './components/list/List';
import NotFound from './components/notfound/NotFound';
import Detail from './components/detail/Detail';
import './index.css';
import Search from './components/common/Search';

const App = () => {
    return (
    <BrowserRouter>
        <div>
            <Search/>
            <Switch>
                <Route path="/" component={List} exact />
                <Route path="/currency/:id" component={Detail} /> 
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>  
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));