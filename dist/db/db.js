import pg from 'pg';
import 'dotenv/config';
const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
export const query = (query, params) => {
    return pool.query(query, params);
};
