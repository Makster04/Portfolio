const amadeus = require('../config/amadeus.js');

// Function to search for hotel offers
function searchHotelOffers(cityCode, checkInDate, checkOutDate, adults) {
  console.log("Step 1: Retrieving hotels in", cityCode, "for check-in on", checkInDate, "and check-out on", checkOutDate);
  // 1. Hotel List API to get the list of hotels 
  return amadeus.referenceData.locations.hotels.byCity.get({
    cityCode: cityCode
  }).then(function (hotelsList) {
    console.log('Hotels List:', hotelsList.data); // Log hotelsList
    console.log("Step 2: Searching for hotel offers based on the retrieved hotels");
    // Check if hotelsList is not empty
    if (hotelsList.data.length > 0) {
      // 2. Hotel Search API to get the price and offer id
      return amadeus.shopping.hotelOffersSearch.get({
        'hotelId': hotelsList.data[0].hotelId, // Use hotelId instead of hotelIds
        'adults': adults,
        'checkInDate': checkInDate,
        'checkOutDate': checkOutDate
      });
    } else {
      throw new Error("No hotels found in the city.");
    }
  }).then(function (offersResponse) {
    console.log('Hotel Offers:', offersResponse.data); // Log hotel offers
    // Find the offer with the lowest price
    let cheapestOffer = offersResponse.data.reduce((min, offer) => offer.price.total < min.price.total ? offer : min);
    console.log("Cheapest offer:", cheapestOffer); // Log the cheapest offer
    return offersResponse.data;
  });
}

// Example usage of the function to search for hotel offers in Seattle for specific dates
searchHotelOffers('SEA', '2024-10-10', '2024-10-13', 1)
  .then(function (offers) {
    console.log("Step 3: Displaying hotel offers for the trip:");
    console.log(offers);
  })
  .catch(function (error) {
    console.error("Something went wrong:", error);
  });
