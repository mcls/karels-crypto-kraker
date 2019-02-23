import React from 'react';

const LetterBlocks = (props) => {
  const letters = (props.value || '').split('');
  let elems = [];
  letters.forEach((letter, i) => {
    let cell = null;
    if ( letter == '.' ) {
      cell = <td key={i} className='letter-block'>&nbsp;</td>;
    } else {
      cell = <td key={i} className='letter-block'>{letter}</td>;
    }
    elems.push(cell);
  });
  return <table className='letter-blocks'><tbody><tr>{elems}</tr></tbody></table>;
};

export default LetterBlocks;
