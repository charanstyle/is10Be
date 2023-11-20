import validator from 'validator'

const validatorDictonary = {
  email: 'email',
  password: 'password',
  confirm_password: 'password',
  first_name: 'string',
  last_name: 'string',
  username: 'string',
  date: 'date'
}

const testObject = {
  email: 'email@email.com',
  date: '01/09/1985',
  username: 'RobinSingh2020456',
  password: 'canonlyhavealphabetsnospaces',
  first_name: 'Robin'
}

interface dataProps {
  value: any
  type: string | number
}

const dataInValidate = (data: dataProps) => {
  const { value, type } = data

  console.log('value received: ', value)
  console.log('type received: ', type)

  switch (Object(validatorDictonary)[`${type}`]) {
    case 'numeric':
      {
        if (!validator.isNumeric(value + ''))
          return {
            status: 'error',
            message: `value should be numeric`,
            data: data
          }
      }
      break
    case 'string':
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

const objectValidator = (obj: any) => {
  for (const key in obj) {
    if (key) {
      const test = dataInValidate({ value: obj[`${key}`], type: `${key}` })
      console.log(test)
    } else {
    }
  }
}

objectValidator(testObject)
