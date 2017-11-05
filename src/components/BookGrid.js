import React from 'react';
import Book from './Book';
class BookGrid extends React.Component {
  render() {
    const {files} = this.props;
    const bookList = files.map((file, index) => {
      const lastDot = file.lastIndexOf('.');
      const name = file.substring(0, lastDot);
      return (
        <Book name={name} key={index} />
      )
    })
    return (
      <div>
        {bookList}
      </div>
    )
  }
}
export default BookGrid;