const { Bicycles } = require('../models/bicycle');

const { HttpError } = require('../helper');
const { ctrlWrapper } = require('../helper');

const tickets = [
   {
      price: 13684,
      carrier: 'FV',
      segments: [
         {
            origin: 'OMS',
            destination: 'SVX',
            departureTime: '2025-06-17T15:00:00',
            duration: 106,
            stops: ['LED'],
         },
         {
            origin: 'KZN',
            destination: 'SVX',
            departureTime: '2025-06-12T19:30:00',
            duration: 155,
            stops: ['UFA'],
         },
      ],
   },
   {
      price: 12784,
      carrier: 'U6',
      segments: [
         {
            origin: 'KZN',
            destination: 'SVX',
            departureTime: '2025-06-14T18:45:00',
            duration: 174,
            stops: [],
         },
         {
            origin: 'LED',
            destination: 'AER',
            departureTime: '2025-06-20T08:30:00',
            duration: 172,
            stops: ['SVX', 'UFA'],
         },
      ],
   },
   {
      price: 16676,
      carrier: 'S7',
      segments: [
         {
            origin: 'ROV',
            destination: 'VVO',
            departureTime: '2025-06-12T20:30:00',
            duration: 153,
            stops: ['UFA'],
         },
         {
            origin: 'SVX',
            destination: 'OMS',
            departureTime: '2025-06-16T13:15:00',
            duration: 254,
            stops: ['MOW', 'AER'],
         },
      ],
   },
   {
      price: 18624,
      carrier: 'S7',
      segments: [
         {
            origin: 'SVX',
            destination: 'OMS',
            departureTime: '2025-06-17T05:45:00',
            duration: 172,
            stops: [],
         },
         {
            origin: 'LED',
            destination: 'ROV',
            departureTime: '2025-06-19T13:00:00',
            duration: 160,
            stops: [],
         },
      ],
   },
   {
      price: 15684,
      carrier: 'U6',
      segments: [
         {
            origin: 'VVO',
            destination: 'OMS',
            departureTime: '2025-06-16T13:30:00',
            duration: 98,
            stops: ['LED', 'ROV'],
         },
         {
            origin: 'OMS',
            destination: 'AER',
            departureTime: '2025-06-15T05:30:00',
            duration: 184,
            stops: [],
         },
      ],
   },
   {
      price: 18820,
      carrier: 'SU',
      segments: [
         {
            origin: 'ROV',
            destination: 'AER',
            departureTime: '2025-06-18T16:00:00',
            duration: 266,
            stops: [],
         },
         {
            origin: 'VVO',
            destination: 'KZN',
            departureTime: '2025-06-19T14:00:00',
            duration: 268,
            stops: [],
         },
      ],
   },
   {
      price: 17985,
      carrier: 'SU',
      segments: [
         {
            origin: 'MOW',
            destination: 'VVO',
            departureTime: '2025-06-12T19:45:00',
            duration: 198,
            stops: [],
         },
         {
            origin: 'VVO',
            destination: 'KZN',
            departureTime: '2025-06-16T12:00:00',
            duration: 110,
            stops: [],
         },
      ],
   },
   {
      price: 8162,
      carrier: 'S7',
      segments: [
         {
            origin: 'KRR',
            destination: 'AER',
            departureTime: '2025-06-18T10:00:00',
            duration: 266,
            stops: ['ROV'],
         },
         {
            origin: 'VVO',
            destination: 'AER',
            departureTime: '2025-06-19T10:45:00',
            duration: 279,
            stops: ['MOW'],
         },
      ],
   },
   {
      price: 11351,
      carrier: 'UT',
      segments: [
         {
            origin: 'KRR',
            destination: 'AER',
            departureTime: '2025-06-17T19:30:00',
            duration: 224,
            stops: ['MOW'],
         },
         {
            origin: 'LED',
            destination: 'VVO',
            departureTime: '2025-06-17T13:30:00',
            duration: 164,
            stops: ['KRR'],
         },
      ],
   },
   {
      price: 13280,
      carrier: 'DP',
      segments: [
         {
            origin: 'UFA',
            destination: 'OMS',
            departureTime: '2025-06-20T14:30:00',
            duration: 285,
            stops: ['SVX'],
         },
         {
            origin: 'MOW',
            destination: 'UFA',
            departureTime: '2025-06-16T19:30:00',
            duration: 202,
            stops: ['LED'],
         },
      ],
   },
   {
      price: 15966,
      carrier: 'S7',
      segments: [
         {
            origin: 'VVO',
            destination: 'KZN',
            departureTime: '2025-06-12T11:00:00',
            duration: 299,
            stops: [],
         },
         {
            origin: 'ROV',
            destination: 'KRR',
            departureTime: '2025-06-19T14:30:00',
            duration: 232,
            stops: ['KZN'],
         },
      ],
   },
   {
      price: 18263,
      carrier: 'U6',
      segments: [
         {
            origin: 'ROV',
            destination: 'MOW',
            departureTime: '2025-06-12T09:45:00',
            duration: 193,
            stops: [],
         },
         {
            origin: 'KZN',
            destination: 'MOW',
            departureTime: '2025-06-17T14:00:00',
            duration: 75,
            stops: ['SVX'],
         },
      ],
   },
   {
      price: 9408,
      carrier: 'DP',
      segments: [
         {
            origin: 'VVO',
            destination: 'KRR',
            departureTime: '2025-06-15T10:15:00',
            duration: 157,
            stops: ['ROV', 'MOW'],
         },
         {
            origin: 'ROV',
            destination: 'KZN',
            departureTime: '2025-06-17T15:15:00',
            duration: 287,
            stops: ['UFA'],
         },
      ],
   },
   {
      price: 11204,
      carrier: 'DP',
      segments: [
         {
            origin: 'ROV',
            destination: 'OMS',
            departureTime: '2025-06-13T19:45:00',
            duration: 175,
            stops: ['KZN', 'KRR'],
         },
         {
            origin: 'ROV',
            destination: 'OMS',
            departureTime: '2025-06-20T06:15:00',
            duration: 147,
            stops: [],
         },
      ],
   },
   {
      price: 12042,
      carrier: 'UT',
      segments: [
         {
            origin: 'KRR',
            destination: 'ROV',
            departureTime: '2025-06-12T16:15:00',
            duration: 174,
            stops: ['VVO', 'KZN'],
         },
         {
            origin: 'MOW',
            destination: 'KZN',
            departureTime: '2025-06-16T19:15:00',
            duration: 67,
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
