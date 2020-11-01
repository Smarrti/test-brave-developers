import operators from "../operators";

const findOperator = (url) => {
  return operators.filter((operator) => operator.url === url);
}

export default findOperator;