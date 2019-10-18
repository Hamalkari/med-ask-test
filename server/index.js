const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('@koa/cors');

const app = new Koa();

require('dotenv').config();


// Middleware
app.use(cors());
app.use(logger());
app.use(bodyParser());

// App routes
const servicesRoutes = require('./routes/services');

app.use(servicesRoutes.routes());

app.listen(process.env.PORT,() => {
  console.log(`http://localhost:${process.env.PORT}`);
});
