import React from 'react';
import { Link } from 'react-router-dom';
import operators from '../../lib/operators';
import * as Styles from './style';

const Main = () => {
  return (
    <>
      <Styles.MainTitle>Выберите оператора</Styles.MainTitle>
      {
        operators.map((operator) => (
          <Link 
            to={`/pay/${operator.url}`}
            key={operator.id}
          >
            <img
              src={operator.photo}
              alt={operator.name}
            />
            <p>{operator.name}</p>
          </Link>
        ))
      }
    </>
  )
}

export default Main;