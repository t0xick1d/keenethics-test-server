const { Bicycles } = require('../models/bicycle');

const { HttpError } = require('../helper');
const { ctrlWrapper } = require('../helper');

const tickets = [
   {
      price: 13196,
      carrier: 'S7',
      date: '2025-06-01',
      segments: [
         {
            origin: 'OMS',
            destination: 'VVO',
            departureTime: '2025-06-17T10:30:00',
            duration: 120,
            stops: ['LED', 'ROV'],
         },
         {
            origin: 'ROV',
            destination: 'AER',
            departureTime: '2025-06-19T15:45:00',
            duration: 158,
            stops: ['SVX', 'UFA'],
         },
      ],
   },
   {
      price: 15020,
      carrier: 'SU',
      date: '2025-06-02',
      segments: [
         {
            origin: 'LED',
            destination: 'KZN',
            departureTime: '2025-06-18T09:00:00',
            duration: 140,
            stops: ['UFA'],
         },
         {
            origin: 'KZN',
            destination: 'MOW',
            departureTime: '2025-06-20T13:30:00',
            duration: 180,
            stops: [],
         },
      ],
   },
   {
      price: 11200,
      carrier: 'UT',
      date: '2025-06-03',
      segments: [
         {
            origin: 'AER',
            destination: 'ROV',
            departureTime: '2025-06-17T14:15:00',
            duration: 90,
            stops: [],
         },
         {
            origin: 'ROV',
            destination: 'LED',
            departureTime: '2025-06-19T18:00:00',
            duration: 130,
            stops: ['OMS'],
         },
      ],
   },
   {
      price: 17980,
      carrier: 'FV',
      date: '2025-06-04',
      segments: [
         {
            origin: 'MOW',
            destination: 'SVX',
            departureTime: '2025-06-16T08:30:00',
            duration: 210,
            stops: ['LED', 'KZN'],
         },
         {
            origin: 'SVX',
            destination: 'UFA',
            departureTime: '2025-06-18T11:00:00',
            duration: 75,
            stops: [],
         },
      ],
   },
];

const getAll = async (req, res, next) => {
   const result = await Bicycles.find();
   res.status(200).json(result);
};

const search = async (req, res, next) => {
   const result = { searchId: '4niyd' };
   res.status(200).json(result);
};

const getTickets = async (req, res, next) => {
   const result = tickets;
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
   search: ctrlWrapper(search),
   getTickets: ctrlWrapper(getTickets),
   getAll: ctrlWrapper(getAll),
   getById: ctrlWrapper(getById),
   add: ctrlWrapper(add),
   deleteById: ctrlWrapper(deleteById),
   updateById: ctrlWrapper(updateById),
};
