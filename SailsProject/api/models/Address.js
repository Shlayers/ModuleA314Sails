module.exports = {
  attributes: {
    numRue: {
      type: 'string',
      minLength: 1,
      maxLength: 4,
      required: true
    },
    rue: {
      type: 'string',
      minLength: 5,
      required: true
    },
    ville: {
      type: 'string',
      minLength: 6,
      required: true
    },
    codePostal: {
      type: 'string',
      minLength: 4,
      maxLenght: 10,
      required: true
    },
    owner:{
      model: 'user'
    }
  }
};

