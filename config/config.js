import { createConnection } from 'mysql2'
import 'dotenv/config'

export const dbConnector = createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
)