import { success, error } from '../../helpers/basic/statusMessages.js'

export interface sqlProps {
  type: string
  fields?: string[]
  table: string
  values?: string[]
  conditions?: string
}

export const sqlConstructor = (props: sqlProps) => {
  let sql = ``
  if (props.type === 'SELECT') {
    if (props.fields) {
      sql = `${props.type} ${props.fields?.join(', ')} from ${props.table}`
      props.conditions ? (sql = `${sql} where ${props.conditions};`) : `${sql};`
      return success(sql)
    } else {
      return error('selectable fields are missing')
    }
  } else if ((props.type = 'UPDATE')) {
    sql = `${props.type} ${props.table}`
    const arrayToCommaValues = props.values?.join(',')
    sql = `${sql} SET ${arrayToCommaValues}`
    props.conditions ? (sql = `${sql} where ${props.conditions};`) : `${sql};`
    return {
      status: 'success',
      message: sql
    }
  } else if (props.type === 'DELETE') {
    sql = `DELETE from ${props.table}`
    props.conditions ? `${sql} where ${props.conditions};` : `${sql};`
    return {
      status: 'success',
      message: sql
    }
  } else {
    return error('sql props type is missing')
  }
}
