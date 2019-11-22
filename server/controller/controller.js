module.exports = {
    home: function (req, res) {
    },
    calendar: function(req,res){
    },
    log: function(req,res){
    }, 
    fact: function(req,res){
    }, 

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
    Foodlog.findById(request.params.id)
      .then(foodlog => response.json(foodlog))
      .catch(err => res.json(err));
  },
  update(request, response) {
    Foodlog.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true, context: 'query' })
      .then(foodlog => response.json(foodlog))
      .catch(err => response.json(err));
  },
  delete_by_id(req, res) {
    Foodlog.remove({_id : req.params.id})
    .then(restaurants => res.json(restaurants))
    .catch(err => res.json(err));
  },
};
