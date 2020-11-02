import ContentModal from '../../components/ContentModal';

const validateForm = (phone, money, openModal, contentModal) => {
  if (phone.match('89[0-9]{9}') === null && phone.length === 11) {
    openModal(true);
    contentModal(<ContentModal
      type="Bad"
      message="Не корректный номер телефона. Номер телефона должен выглядить 89991236547"
      setIsOpenModal={openModal}
    />)
    return false;
  }
  if (!(money >= 1 && money <= 1000)) {
    openModal(true);
    contentModal(<ContentModal
      type="Bad"
      message="Не корректная сумма. Сумма должна быть от 1 до 1000"
      setIsOpenModal={openModal}
    />)
    return false;
  }
  return true;
}

export default validateForm;