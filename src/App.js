import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

import React, { Component } from 'react'
import NavbarComp from './components/NavbarComp';
import NewsComp from './components/NewsComp';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  state = {progress : 0};
  apiKey = process.env.REACT_APP_API;

  setProgress = (val)=>{
    this.setState({progress : val})
  }

  render() {
    
    return (
      <>
        <LoadingBar
          color='#0d6efd'
          progress={this.state.progress}
        />
        <NavbarComp />
        <Routes>
          <Route exact path="/" element={<NewsComp apiKey={this.apiKey} setProgress={this.setProgress} key="general" country="in" pageSize={8} category="general" />} />
          <Route exact path="general" element={<NewsComp apiKey={this.apiKey} setProgress={this.setProgress} key="general1" country="in" pageSize={8} category="general" />} />
          <Route exact path="entertainment" element={<NewsComp apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" country="in" pageSize={8} category="entertainment" />} />
          <Route exact path="business" element={<NewsComp apiKey={this.apiKey} setProgress={this.setProgress} key="business" country="in" pageSize={8} category="business" />} />
          <Route exact path="health" element={<NewsComp apiKey={this.apiKey} setProgress={this.setProgress} key="health" country="in" pageSize={8} category="health" />} />
          <Route exact path="science" element={<NewsComp apiKey={this.apiKey} setProgress={this.setProgress} key="science" country="in" pageSize={8} category="science" />} />
          <Route exact path="sports" element={<NewsComp apiKey={this.apiKey} setProgress={this.setProgress} key="sports" country="in" pageSize={8} category="sports" />} />
          <Route exact path="technology" element={<NewsComp apiKey={this.apiKey} setProgress={this.setProgress} key="technology" country="in" pageSize={8} category="technology" />} />
        </Routes>
      </>
    )
  }
}
