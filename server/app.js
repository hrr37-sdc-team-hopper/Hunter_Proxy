const express = require('express');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(morgan('dev'));

const staticPath = `${__dirname}/../public`;
app.use('/books/:id', express.static(staticPath));
//(Jordis) Andrew-Service
/*
app.use(
	'/books/:id/details',
	proxy({ target: 'http://localhost:3001', changeOrigin: true })
);

// (Daniel)hannah-service
app.use(
	'/books/:id/reviews',
	proxy({
		target: 'http://ec2-18-216-231-60.us-east-2.compute.amazonaws.com:3003',
		changeOrigin: true
	})
);

//(Ike) kaz-service
app.use(
	'/books/:id/info',
	proxy({
		target: 'http://ec2-54-219-181-249.us-west-1.compute.amazonaws.com:3002',
		changeOrigin: true
	})
);
*/
// (Hunter)ginger-service
app.use(
	'/books/:id/authors',
	proxy({
		target: 'http://ec2-3-83-42-150.compute-1.amazonaws.com:3000',
		changeOrigin: true
	})
);

module.exports = app;
