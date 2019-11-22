const controller = require('../../controller/controller')
const router = require('express').Router();

module.exports = router
    .get('/', controller.index)
    .get('/calendar', controller.read_all)
    .post('/new', controller.create)
    .get('/:id', controller.read_one)
    .put('/:id/edit', controller.update)
    .delete('/:id/delete', controller.delete_by_id)
