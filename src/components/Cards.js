import React from 'react';
import '../styles/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Courses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Physics'
              label='Class 11'
              path='/courses/class_11'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Physics'
              label='Class 12'
              path='/courses/class_12'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Experience Electronics of General---------------------'
              label='Electronics'
              path='/courses/Elec_gen'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Electronics of Honours---------------------    '
              label='Electronics'
              path='/courses/Elec_hons'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

// <CardItem
// src='images/img-3.jpg'
// text='Hons.'
// label='Electronics'
// path='/courses/Elec_hons'
// />
// <CardItem
// src='images/img-4.jpg'
// text='Gen.'
// label='Electronics'
// path='/courses/Elec_gen'
// />