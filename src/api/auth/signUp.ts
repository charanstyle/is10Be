export interface newUserDataProps {
  email: 'string'
  first_name: 'string'
  last_name: 'string'
  dob: 'string'
  password: 'string'
  confirmPassword: 'string'
}

const signUp = async (newUserData: newUserDataProps) => {
  try {
    const { email, first_name, last_name, dob, password, confirmPassword } =
      newUserData

    const dateNewFormat = {}
  } catch (err) {
    console.log('error: ', err)
  }
}

export default signUp
