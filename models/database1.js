
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/procon';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('ALTER TABLE items ADD COLUMN pro bool, ADD COLUMN con bool');
query.on('end', function() { client.end(); });
