const { sequelize, Lodging } = require('../src/controllers/LodgingController'); // Import sequelize instance and Lodging model

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Reset the database before running tests
});

test('should store the lodging offer in the database', async () => {
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

  await Lodging.create(lodgingData);

  const retrievedLodging = await Lodging.findOne({
    where: { cityCode: lodgingData.cityCode },
  });

  expect(retrievedLodging).not.toBeNull(); // Ensure the record is in the database
  expect(retrievedLodging.hotelName).toBe(lodgingData.hotelName); // Check hotelName
  expect(retrievedLodging.cityCode).toBe(lodgingData.cityCode); // Check cityCode
  expect(retrievedLodging.totalPrice).toBe(lodgingData.totalPrice); // Check totalPrice
});
