import { configureApp } from '../app';
import {createServer} from 'http';
const port = 8001;
createServer(configureApp().callback()).listen(port);
console.log(`Listening on port ${port}`);
