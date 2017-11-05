import fs from 'mz/fs';
export const getAllPdfs = (filePath) => {
  return fs.readdir(filePath);
}

export const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}