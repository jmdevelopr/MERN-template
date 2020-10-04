import express from "express";
import { Application, Request, Response, NextFunction } from "express";

import path from "path";
import webpack from "webpack"; 
import config from "./webpack.config";

import routes from "./routes/api";

import env from "./config/dotenv";

const app: Application = express();
const compiler = webpack(config);  

app.use(express.json())
app.use('/filt/api', routes);

app.use(require('webpack-dev-middleware')(compiler, {  
    noInfo: true,  
    publicPath: config.output.publicPath  
})); 

const PORT = env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// For deployment I guess
// ----------------------------------
// app.get('/*', (req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, '..', '/index.html'))
// }) 