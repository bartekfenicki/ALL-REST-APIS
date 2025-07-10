import express, { Application } from 'express';
import dotenvFlow from 'dotenv-flow';
import routes from './routes';
import { connect } from './repository/database';
import cors from 'cors';
import { setupDocs } from './util/documentation';

dotenvFlow.config();

const app: Application = express();

app.use(express.json());        
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

function setupCors() {

  app.use(cors({

    // Allow request from any origin
    origin: "*",

    // allow HTTP methods
    methods: 'GET, PUT, POST, DELETE',

    // allow headers
    allowedHeaders: ['auth-token', 'Origin', 'X-Requested-Width', 'Content-Type', 'Accept'],

    // allow credentials
    credentials:true
  }))
}

export function startServer() {  
    setupCors();     
    setupDocs(app);
    connect()
    const PORT: number = parseInt(process.env.PORT as string) || 4000
    app.listen(PORT, function () {
        console.log("server is running on port: " + PORT)
    })

}