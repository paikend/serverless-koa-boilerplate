import { configureApp } from '../app';
import * as serverless from "serverless-http";
const app = configureApp().callback();
export const http = serverless(app);