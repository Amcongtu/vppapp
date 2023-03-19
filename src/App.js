import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import route from './routes';

export default function App() {
  return (
    <div>
    <Router>
      <Routes>
        {route.map(function(route,index){
          var Layout = route.layout;
          if(Layout === null){
            Layout="div"
          }
          var Element = route.element;
          return <Route path={route.path} key={index} element={
            <Layout>
              <Element/>
            </Layout>
          }>

          </Route>
        })}
      </Routes>
    </Router>
  </div>
  )
}


