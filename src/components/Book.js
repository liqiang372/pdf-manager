import './Book.scss';
import React from 'react';
import {getRandomColor} from '../services/util';
class Book extends React.Component {
  constructor() {
    super();
  }
  render() {
    const {name} = this.props;
    const style = {
      'backgroundColor': getRandomColor()
    }
    return(
      <div className='item'>
        <div className='item__thumbnail' style={style}></div>
        <div className='item__name'>{name}</div>
      </div>
    );
  }
}

export default Book;