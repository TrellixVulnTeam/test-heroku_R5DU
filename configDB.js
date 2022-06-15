// import sqlite3 from 'sqlite3'
// import { open } from 'sqlite'
const sqlite3 = require('sqlite3')
const open = require('sqlite').open

// you would have to import / invoke this in another file
export async function openDb () {
  return open({
    filename: './database.db',
    driver: sqlite3.Database
  })
}