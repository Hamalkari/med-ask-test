const Router = require('koa-router');
const router = new Router();

const servicesQueries = require('../db/queries/services');

const PREFIX_URL = '/services';
const GET_ALL_SERVICES_URL = `${PREFIX_URL}/getAllServices`;


router.get(GET_ALL_SERVICES_URL,
    async (ctx) => {
      try {
        const services = await servicesQueries.getAllServices();

        ctx.status = 200;
        ctx.body = {
          status: 'success',
          services,
          message: 'Услуги были успешно получены'
        };
      } catch (error) {
        ctx.status = 500;
        ctx.body = {
          status: 'error',
          message: 'Внутренняя ошибка сервера!'
        };
        console.log(error);
      }
});

module.exports = router;