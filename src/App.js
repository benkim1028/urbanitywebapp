import 'tachyons'
import 'styling/semantic.less'
import "../src/styling/urbanity.css"

import React from 'react'
import Page from "./components/MainPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ChatPage from "./components/ChatPage";

const App = () => (
    <BrowserRouter>
        <div style={{height: '100%'}}>
            <Switch>
                <Route path="/chat" component={ChatPage}/>
                <Route path="/" component={Page}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default App
