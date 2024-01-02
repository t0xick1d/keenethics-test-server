const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helper');

const isValidId = (req, res, next) => {
   const { bicycleId } = req.params;
   if (!isValidObjectId(bicycleId)) {
      next(HttpError(400, `${bicycleId} is not valid id`));
   }
   next();
};
module.exports = isValidId;
