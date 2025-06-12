const { Bicycles } = require('../models/bicycle');

const { HttpError } = require('../helper');
const { ctrlWrapper } = require('../helper');

const tickets = [
   {
      price: 19849,
      carrier: 'DP',
      date: '2025-06-01',
      segments: [
         {
            origin: 'LED',
            destination: 'EKT',
            departureTime: '2025-06-19T21:15:00',
            duration: 232,
            stops: ['SVX'],
         },
         {
            origin: 'LED',
            destination: 'EKT',
            departureTime: '2025-06-19T15:45:00',
            duration: 234,
            stops: ['KZN', 'VVO'],
         },
      ],
   },
   {
      price: 14388,
      carrier: 'SU',
      date: '2025-06-02',
      segments: [
         {
            origin: 'KZN',
            destination: 'ROV',
            departureTime: '2025-06-15T10:00:00',
            duration: 104,
            stops: ['LED', 'MOW'],
         },
         {
            origin: 'MOW',
            destination: 'KZN',
            departureTime: '2025-06-16T05:30:00',
            duration: 240,
            stops: [],
         },
      ],
   },
   {
      price: 18407,
      carrier: 'UT',
      date: '2025-06-03',
      segments: [
         {
            origin: 'LED',
            destination: 'SVX',
            departureTime: '2025-06-20T08:15:00',
            duration: 188,
            stops: ['ROV', 'OMS'],
         },
         {
            origin: 'KZN',
            destination: 'LED',
            departureTime: '2025-06-20T20:45:00',
            duration: 98,
            stops: ['MOW', 'UFA', 'EKT'],
         },
      ],
   },
   {
      price: 15600,
      carrier: 'S7',
      date: '2025-06-04',
      segments: [
         {
            origin: 'EKT',
            destination: 'MOW',
            departureTime: '2025-06-20T16:30:00',
            duration: 139,
            stops: ['OMS'],
         },
         {
            origin: 'VVO',
            destination: 'ROV',
            departureTime: '2025-06-16T22:45:00',
            duration: 73,
            stops: ['UFA', 'KZN', 'EKT'],
         },
      ],
   },
   {
      price: 19705,
      carrier: 'AK',
      date: '2025-06-05',
      segments: [
         {
            origin: 'UFA',
            destination: 'KZN',
            departureTime: '2025-06-16T17:00:00',
            duration: 157,
            stops: ['ROV', 'EKT'],
         },
         {
            origin: 'SVX',
            destination: 'KZN',
            departureTime: '2025-06-18T06:15:00',
            duration: 166,
            stops: [],
         },
      ],
   },
   {
      price: 10689,
      carrier: 'DP',
      date: '2025-06-06',
      segments: [
         {
            origin: 'MOW',
            destination: 'OMS',
            departureTime: '2025-06-20T07:00:00',
            duration: 71,
            stops: [],
         },
         {
            origin: 'KZN',
            destination: 'OMS',
            departureTime: '2025-06-17T12:45:00',
            duration: 112,
            stops: ['EKT'],
         },
      ],
   },
   {
      price: 9443,
      carrier: 'FV',
      date: '2025-06-07',
      segments: [
         {
            origin: 'LED',
            destination: 'AER',
            departureTime: '2025-06-15T15:15:00',
            duration: 204,
            stops: [],
         },
         {
            origin: 'LED',
            destination: 'OMS',
            departureTime: '2025-06-16T10:15:00',
            duration: 172,
            stops: [],
         },
      ],
   },
   {
      price: 17121,
      carrier: 'U6',
      date: '2025-06-08',
      segments: [
         {
            origin: 'ROV',
            destination: 'AER',
            departureTime: '2025-06-16T11:45:00',
            duration: 139,
            stops: [],
         },
         {
            origin: 'LED',
            destination: 'ROV',
            departureTime: '2025-06-17T07:00:00',
            duration: 199,
            stops: ['OMS'],
         },
      ],
   },
   {
      price: 19396,
      carrier: 'S7',
      date: '2025-06-09',
      segments: [
         {
            origin: 'EKT',
            destination: 'AER',
            departureTime: '2025-06-18T15:00:00',
            duration: 186,
            stops: [],
         },
         {
            origin: 'AER',
            destination: 'MOW',
            departureTime: '2025-06-15T11:00:00',
            duration: 215,
            stops: ['OMS', 'SVX'],
         },
      ],
   },
   {
      price: 14444,
      carrier: 'S7',
      date: '2025-06-10',
      segments: [
         {
            origin: 'ROV',
            destination: 'KZN',
            departureTime: '2025-06-20T21:00:00',
            duration: 225,
            stops: ['AER', 'EKT', 'SVX'],
         },
         {
            origin: 'AER',
            destination: 'ROV',
            departureTime: '2025-06-15T19:30:00',
            duration: 117,
            stops: [],
         },
      ],
   },
   {
      price: 18480,
      carrier: 'S7',
      date: '2025-06-11',
      segments: [
         {
            origin: 'KZN',
            destination: 'VVO',
            departureTime: '2025-06-18T13:30:00',
            duration: 228,
            stops: [],
         },
         {
            origin: 'MOW',
            destination: 'VVO',
            departureTime: '2025-06-15T07:00:00',
            duration: 84,
            stops: ['EKT'],
         },
      ],
   },
   {
      price: 16036,
      carrier: 'SU',
      date: '2025-06-12',
      segments: [
         {
            origin: 'UFA',
            destination: 'ROV',
            departureTime: '2025-06-19T11:15:00',
            duration: 147,
            stops: ['SVX'],
         },
         {
            origin: 'EKT',
            destination: 'UFA',
            departureTime: '2025-06-18T19:00:00',
            duration: 221,
            stops: ['OMS', 'ROV'],
         },
      ],
   },
   {
      price: 9332,
      carrier: 'AK',
      date: '2025-06-13',
      segments: [
         {
            origin: 'UFA',
            destination: 'ROV',
            departureTime: '2025-06-17T21:15:00',
            duration: 103,
            stops: ['LED', 'EKT'],
         },
         {
            origin: 'LED',
            destination: 'MOW',
            departureTime: '2025-06-20T11:45:00',
            duration: 155,
            stops: [],
         },
      ],
   },
   {
      price: 19951,
      carrier: 'S7',
      date: '2025-06-14',
      segments: [
         {
            origin: 'AER',
            destination: 'UFA',
            departureTime: '2025-06-20T06:15:00',
            duration: 198,
            stops: ['OMS'],
         },
         {
            origin: 'UFA',
            destination: 'ROV',
            departureTime: '2025-06-17T13:30:00',
            duration: 93,
            stops: ['AER', 'MOW', 'EKT'],
         },
      ],
   },
   {
      price: 19528,
      carrier: 'U6',
      date: '2025-06-15',
      segments: [
         {
            origin: 'EKT',
            destination: 'AER',
            departureTime: '2025-06-16T16:30:00',
            duration: 76,
            stops: [],
         },
         {
            origin: 'ROV',
            destination: 'VVO',
            departureTime: '2025-06-18T18:00:00',
            duration: 128,
            stops: ['EKT', 'MOW'],
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
