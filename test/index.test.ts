import * as request from 'supertest';
import { configureApp } from '../src/app';

test('path("/") Hello world works', async () => {
    const response = await request(configureApp().callback()).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
});
