const { Bicycles } = require('../models/bicycle');

const { HttpError } = require('../helper');
const { ctrlWrapper } = require('../helper');

const getAll = async (req, res, next) => {
   const result = await Bicycles.find();
   res.status(200).json(result);
};

const getById = async (req, res, next) => {
   const { bicycleId } = req.params;
   const result = await Bicycles.findById(bicycleId);
   if (!result) {
      throw HttpError(404, 'Not found');
   }
   res.status(200).json(result);
};

const add = async (req, res, next) => {
   const body = req.body;
   const newBicycle = await Bicycles.create({ ...body, status: 'available' });
   res.status(201).json(newBicycle);
};

const deleteById = async (req, res, next) => {
   const { bicycleId } = req.params;
   const deleteBicycleId = await Bicycles.findByIdAndRemove(bicycleId);
   console.log(deleteBicycleId);
   if (!deleteBicycleId) {
      throw HttpError(404, 'Not found');
   }
   res.status(200).json({ message: 'Bicycle deleted' });
};

const updateById = async (req, res, next) => {
   const id = req.params.bicycleId;
   const isBicyclesExist = await Bicycles.findById(id);
   if (!isBicyclesExist) {
      throw HttpError(400, 'ID doesn`t exist');
   }
   const updateBicycles = await Bicycles.findByIdAndUpdate(id, req.body, {
      new: true,
   });
   if (!updateBicycles) {
      throw HttpError(400, 'missing fields');
   }
   res.status(200).json(updateBicycles);
};

module.exports = {
   getAll: ctrlWrapper(getAll),
   getById: ctrlWrapper(getById),
   add: ctrlWrapper(add),
   deleteById: ctrlWrapper(deleteById),
   updateById: ctrlWrapper(updateById),
};
