// Libraries
import { connect, connection } from 'mongoose';
import endpoint from './endpoints.config';
import { error, log } from './assets/logger';

// Code
connect(endpoint.mongoUrl);

connection.on('error', err => error(err, 'database_connection'));
connection.on('connecting', () => log('Connecting to the database', 'database_connection'));
connection.on('connected', () => log('Connected to the database', 'database_connection'));
