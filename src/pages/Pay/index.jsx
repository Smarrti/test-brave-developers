import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import findOperator from '../../lib/findOperator';
import validateForm from '../../lib/validateForm';
import paying from '../../lib/paying';
import Modal from '../../components/Modal';
import СontentModal from '../../components/ContentModal';
import * as Styles from './styles';

const Pay = () => {
  const { operator } = useParams();
  const [operatorInfo] = findOperator(operator);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [contentModal, setContentModal] = useState(<div />);
  const [phoneInput, setPhoneInput] = useState('');
  const [moneyInput, setMoneyInput] = useState('');
  return (
    <>
      <Styles.BackButton>
        <Link to="/">Назад</Link>
      </Styles.BackButton>
      <Styles.OperatorTitle>
        <Styles.OperatorLogo
          src={operatorInfo.photo}
          alt={operatorInfo.name}
        />
        <Styles.H2>
          Оплата в
          {operatorInfo.name}
        </Styles.H2>
      </Styles.OperatorTitle>
      <form>
        <Styles.Inputs>
          <label>
            <Styles.InputTitle>Введите номер телефона</Styles.InputTitle>
            <Styles.Input
              type="tel"
              pattern="89[0-9]{9}"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
            />
          </label>
          <label>
            <Styles.InputTitle>Введите сумму оплаты</Styles.InputTitle>
            <Styles.Input
              type="number"
              min="1"
              max="1000"
              value={moneyInput}
              onChange={(e) => setMoneyInput(e.target.value)}
            />
          </label>
        </Styles.Inputs>
        <Styles.Inputs>
          <Styles.SumbitButton
            type="submit"
            value="Оплатить"
            onClick={(e) => {
              e.preventDefault();
              if (validateForm(phoneInput, moneyInput, setIsOpenModal, setContentModal)) {
                setIsOpenModal(true);
                setIsModalLoading(true);
                if (paying(operatorInfo.name, phoneInput, moneyInput)) {
                  setContentModal(<СontentModal
                    type="Good"
                    message="Оплата успешно прошла"
                    setIsOpenModal={setIsOpenModal}
                  />);
                } else {
                  setContentModal(<СontentModal
                    type="Bad"
                    message="Произошла ошибка"
                    setIsOpenModal={setIsOpenModal}
                  />);
                }
                setIsModalLoading(false);
              }
            }}
          />
        </Styles.Inputs>
      </form>
      <Modal
        isOpen={isOpenModal}
        isModalLoading={isModalLoading}
        contentModal={contentModal}
      />
    </>
  );
};

export default Pay;
