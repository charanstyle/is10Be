import { DateTime } from 'luxon'
import { sqlConstructor } from '../../utilities/sql/sql.js'
import { query } from '../../db/db.js'
import { error, success } from '../../helpers/basic/statusMessages.js'

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
    const { email, first_name, last_name, password, confirmPassword } =
      newUserData

    const dob = DateTime.fromISO(newUserData.dob).toFormat('yyyy-MM-dd')

    const newUserSql = sqlConstructor({
      type: 'SELECT',
      table: 'userinfo',
      fields: ['email', 'first_name', 'last_name']
    })

    if (newUserSql.status === 'success') {
      return success(newUserSql.data)
    } else {
      return error(newUserSql.message)
    }
  } catch (err) {
    console.log('error: ', err)
  }
}

export default signUp
