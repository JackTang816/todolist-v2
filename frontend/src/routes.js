import React from "react";
import { Route } from "react-router-dom"

import AddTodo from './components/AddTodo'
import TodoLists from './components/TodoLists'
import Update from './components/Update'
import Today from './components/Today'

const BaseRouter = ()=>{
    return (
        <div>
            <Route exact path='/' component={TodoLists}/>
            <Route exact path='/today/' component={Today}/>
            <Route exact path='/add/' component={AddTodo}/>
            <Route exact path='/update/' component={Update}/>
        </div>
    )
}

export default BaseRouter