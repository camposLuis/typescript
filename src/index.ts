import express from 'express';
import { helloWorld } from './methods';

const app = express();

app.get('/', helloWorld);

app.listen(3333);
