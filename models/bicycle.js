const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helper');

const schema = Joi.object({
   name: Joi.string().min(5).required(),
   type: Joi.string().min(5).required(),
   color: Joi.string().min(5).required(),
   wheelSize: Joi.number().required(),
   price: Joi.number().required(),
   description: Joi.string().min(5).required(),
});

const updateSchema = Joi.object({
   name: Joi.string().min(5),
   status: Joi.string().valid('available', 'busy', 'unavailable'),
   type: Joi.string().min(5),
   color: Joi.string().min(5),
   wheelSize: Joi.number(),
   price: Joi.number(),
   description: Joi.string().min(5),
});

const bicycleSchema = new Schema({
   name: {
      type: String,
      minLength: 5,
      required: true,
   },
   status: {
      type: String,
      enum: ['available', 'busy', 'unavailable'],
      required: true,
   },
   type: {
      type: String,
      minLength: 5,
      required: true,
   },
   color: {
      type: String,
      minLength: 5,
      required: true,
   },
   wheelSize: {
      type: Number,
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },
   description: {
      type: String,
      minLength: 5,
      required: true,
   },
});

bicycleSchema.post('save', handleMongooseError);

const Bicycles = model('bicycles', bicycleSchema);

module.exports = { Bicycles, schema, updateSchema };
