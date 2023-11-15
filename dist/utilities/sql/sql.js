export const sqlConstructor = (props) => {
    let sql = `${props.type} from ${props.table}`;
    props.filters ? (sql = `${sql} where ${props.filters}`) : ``;
    return sql;
};
