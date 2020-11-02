import operators from '../operators';

const findOperator = (url) => operators.filter((operator) => operator.url === url);

export default findOperator;
