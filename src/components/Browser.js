import './Browser.scss';
import React, { Component } from 'react';
import BookGrid from './BookGrid';
import {getAllPdfs} from '../services/util';
const fs = require('fs');
// const path = require('path');
class Browser extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
    }
  }
  componentDidMount() {
    getAllPdfs('/Users/qiang/projects/books')
    .then((files) => {
      this.setState({
        files: files,
      })
    })
  }
  render() {
    return (
      <div className="browser">
        <BookGrid files={this.state.files}/>
      </div>
    );
  }
}

export default Browser;
