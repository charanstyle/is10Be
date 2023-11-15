export interface sqlProps{
  type: string,
  table: string,
  filters: string[]
} 

const sqlConstructor = (props: sqlProps) => {
  const sql = `${props.type} from ${props.table}`

  props.filters ? 
}