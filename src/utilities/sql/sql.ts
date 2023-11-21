export type sqltypes = {
  select: 'SELECT'
  update: 'UPDATE'
  delete: 'DELETE'
}

export interface sqlProps {
  type: sqltypes
  table: string
  values?: string[]
  conditions?: string
}

export const sqlConstructor = (props: sqlProps) => {
  let sql = ``
  if (props.type.select) {
    sql = `${props.type} from ${props.table}`
    props.conditions ? (sql = `${sql} where ${props.conditions};`) : `${sql};`
    return sql
  }

  if (props.type.update) {
    sql = `${props.type} ${props.table}`
    const arrayToCommaValues = props.values?.join(',')
    sql = `${sql} SET ${arrayToCommaValues}`
    props.conditions ? (sql = `${sql} where ${props.conditions};`) : `${sql};`
    return sql
  }

  if (props.type.delete) {
    sql = `DELETE from ${props.table}`
    props.conditions ? `${sql} where ${props.conditions};` : `${sql};`
    return sql
  }
}
