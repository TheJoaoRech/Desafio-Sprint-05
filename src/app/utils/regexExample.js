const regexExample = {
  cpfRegex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,

  cnpjRegex: /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2}$/,

  cepRegex: /^\d{5}-\d{3}$/,

  plateRegex: /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/,

  idRegex: /[0-9a-fA-F]{24}/
};

module.exports = regexExample;
