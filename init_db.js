require('dotenv').config();
const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.error('ERROR: DATABASE_URL is not defined in .env file');
    process.exit(1);
}

const client = new Client({
    connectionString: connectionString,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS map_config (
    id bigint primary key generated always as identity,
    districts jsonb not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
  );

  ALTER TABLE map_config ENABLE ROW LEVEL SECURITY;

  -- Create a policy that allows anyone to insert/select/update
  -- Since we are disabling RLS in the user prompt logic, let's just disable it here to match expectations
  ALTER TABLE map_config DISABLE ROW LEVEL SECURITY;
`;

async function initDB() {
    try {
        await client.connect();
        console.log('Connected to database...');

        await client.query(createTableQuery);
        console.log('Table map_config created successfully (or already exists).');

        await client.end();
    } catch (err) {
        console.error('Error initializing database:', err);
        process.exit(1);
    }
}

initDB();
