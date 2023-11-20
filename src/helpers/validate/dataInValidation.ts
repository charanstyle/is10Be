import validator from 'validator'

interface dataProps {
  value: any
  type: string
}

const dataInValidate = (data: dataProps) => {
  const { value, type } = data

  switch (type) {
    case 'numeric':
      {
        if (!validator.isNumeric(value))
          return {
            status: 'error',
            message: `${value} should be numeric`,
            data: data
          }
      }
      break
    case 'alphanumeric':
      {
        if (!validator.isAlphanumeric(value))
          return {
            status: 'error',
            message: `${value} should be alphanumeric`,
            data: data
          }
      }
      break
    case 'alphabets': {
      if (!validator.isAlpha(value))
        return {
          status: 'error',
          message: `${value} should be alpha`,
          data: data
        }
    }
    case 'date':
      {
        if (
          !validator.isDate(value, {
            format: 'YYYY-MM-DD'
          })
        )
          return {
            status: 'error',
            message: `${value} should be date in format YYYY-MM-DD`,
            data: data
          }
      }
      break
    case 'email':
      {
        if (!validator.isEmail(value))
          return {
            status: 'error',
            message: `${value} should be date valid email`,
            data: data
          }
      }
      break
    case 'password':
      {
        if (!validator.isStrongPassword(value)) {
          return {
            status: 'error',
            message: `password must have atleast 8 characters, atleast one lowercase, atleast one uppercase, atleast one number and atleast one symbol`
          }
        }
      }
      break
    default: {
      return {
        status: 'error',
        message: `${type} selected is not in validator yet. please adjust the validator before checking the required type`,
        data: data
      }
    }
  }

  return {
    status: 'success',
    message: 'data is good to be used',
    data: data
  }
}

const validatorDictonary = {
  email: 'email',
  password: 'password',
  confirm_password: 'password',
  first_name: 'string',
  last_name: 'string',
  username: 'string'
}

export default dataInValidate
