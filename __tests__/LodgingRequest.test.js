const nock = require('nock');
const lodgingController = require('../src/controllers/lodgingController');

let apiResponseData;

beforeAll(() => {
  nock('https://test.api.amadeus.com')
    .get('/v1/shopping/hotel-offers')
    .query({
      cityCode: 'LON',
      checkInDate: '2024-10-10',
      checkOutDate: '2024-10-13',
      adults: 1,
    })
    .reply(200, {
      data: [
        {
          type: 'hotel-offer',
          id: '1',
          cityCode: 'LON',
          checkInDate: '2024-10-10',
          checkOutDate: '2024-10-13',
          adults: 1,
          totalPrice: 200,
          currency: 'USD',
        },
      ],
    });
});

test('should get hotel offers from the Amadeus API', async () => {
  const req = {
    query: {
      cityCode: 'LON',
      checkInDate: '2024-10-10',
      checkOutDate: '2024-10-13',
      adults: 1,
    },
  };

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  await lodgingController.getHotelOffers(req, res);

  apiResponseData = res.json.mock.calls[0][0];

  expect(res.status).toHaveBeenCalledWith(200);
  expect(apiResponseData.data.length).toBeGreaterThan(0);
});

test('should create a lodging entry in the database', async () => {
  const lodgingData = {
    hotelName: 'Test Hotel',
    cityCode: 'LON',
    hotelId: '123',
    offerId: '1',
    checkInDate: '2024-10-10',
    checkOutDate: '2024-10-13',
    totalPrice: 200,
    currency: 'USD',
    adults: 1,
  };

  const lodgingEntry = await lodgingController.createLodging(lodgingData);

  expect(lodgingEntry).toHaveProperty('hotelName', 'Test Hotel');
  expect(lodgingEntry).toHaveProperty('cityCode', 'LON');
  expect(lodgingEntry).toHaveProperty('totalPrice', 200);
});

test('should get lodgings by city code from the database', async () => {
  const cityCode = 'LON';

  const lodgings = await lodgingController.getLodgingsByCity(cityCode);

  expect(lodgings.length).toBeGreaterThan(0);
});

