const mongoose = require('mongoose');
const FoodLog = mongoose.model("FoodLog");

module.exports = {
  index(request, response) {
    FoodLog.find()
      .then(foodlogs => response.json(foodlogs))
      .catch(err=> response.json(err));
  },
  read_all(request, response) {
    FoodLog.find()
      .then(foodlogs => response.json(foodlogs))
      .catch(err=> response.json(err));
  },
  create(request, response) {
    FoodLog.create(request.body)
      .then(foodlog => response.json(foodlog))
      .catch(err => response.json(err));
  },
  read_one(request, response) {
    FoodLog.findById(request.params.id)
      .then(foodlog => response.json(foodlog))
      .catch(err => res.json(err));
  },
  update(request, response) {
    FoodLog.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true, context: 'query' })
      .then(foodlog => response.json(foodlog))
      .catch(err => response.json(err));
  },
  delete_by_id(req, res) {
    FoodLog.remove({_id : req.params.id})
    .then(foodlog => res.json(foodlog))
    .catch(err => res.json(err));
  },
};
