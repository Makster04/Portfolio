const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv').config();
const axios = require('axios'); // Import axios for HTTP requests

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './hotels.db',
});

// Define the Lodging model
const Lodging = sequelize.define('Lodging', {
  hotelName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cityCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hotelId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  offerId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  checkInDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  checkOutDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },
  adults: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amenities: {
    type: DataTypes.JSON,
    allowNull: true
  },
  policies: {
    type: DataTypes.JSON,
    allowNull: true
  },
  photos: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  timestamps: false
});

// Define controller functions
async function getHotelOffers(req, res) {
  try {
    // Fetch hotel offers from Amadeus API
    const response = await axios.get('https://test.api.amadeus.com/v1/shopping/hotel-offers', {
      params: {
        cityCode: req.query.cityCode,
        checkInDate: req.query.checkInDate,
        checkOutDate: req.query.checkOutDate,
        adults: req.query.adults,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching hotel offers:', error);
    res.status(500).json({ error: 'Failed to fetch hotel offers' });
  }
}

async function createLodging(data) {
  try {
    const lodging = await Lodging.create(data);
    console.log("Lodging entry created:", lodging.toJSON());
    return lodging;
  } catch (error) {
    console.error("Error creating lodging entry:", error);
    throw error;
  }
}

async function getLodgingsByCity(cityCode) {
  try {
    const lodgings = await Lodging.findAll({ where: { cityCode: cityCode } });
    console.log("Lodgings retrieved for city:", cityCode);
    return lodgings;
  } catch (error) {
    console.error("Error retrieving lodgings for city:", error);
    throw error;
  }
}

module.exports = {
  getHotelOffers,
  createLodging,
  getLodgingsByCity,
  sequelize,
  Lodging
};

