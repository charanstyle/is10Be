import { sqlConstructor } from './utilities/sql/sql.js';
const testsql = sqlConstructor({
    type: 'SELECT',
    table: 'userinfo',
    filters: [`first_name='Robin`]
});
console.log('testsql: ', testsql);
