import React from 'react';
import { Link } from 'react-router-dom';
import operators from '../../lib/operators';
import * as Styles from './style';

const Main = () => (
  <>
    <Styles.MainTitle>Выберите оператора</Styles.MainTitle>
    <Styles.OperatorsList>
      {
        operators.map((operator) => (
          <Link 
            to={`/pay/${operator.url}`}
            key={operator.id}
          >
            <Styles.OpeatorCard
              firstColor={operator.firstColor}
              secondColor={operator.secondColor}
            >
              <Styles.OperatorImage
                src={operator.photo}
                alt={operator.name}
              />
              <Styles.OperatorName>{operator.name}</Styles.OperatorName>
            </Styles.OpeatorCard>
          </Link>
        ))
      }
    </Styles.OperatorsList>
  </>
);

export default Main;