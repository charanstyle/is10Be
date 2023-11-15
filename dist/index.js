import * as db from './db/db.js';
const result = await db.query('select $1::text as name', ['Robin Singh']);
console.log('result: ', result.rows);
