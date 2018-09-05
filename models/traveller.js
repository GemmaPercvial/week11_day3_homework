Journey = require('./journey.js');

const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const mappedJourney = this.journeys.map(journey => journey.startLocation)
    return mappedJourney
};

Traveller.prototype.getJourneyEndLocations = function () {
  const mappedJourney = this.journeys.map(journey => journey.endLocation)
    return mappedJourney
};

Traveller.prototype.getModesOfTransport = function () {
  const transport = this.journeys.map(journey => journey.transport)
  return transport
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourneys = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return foundJourneys
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const foundJourneys = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return foundJourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistanceTravelled = this.journeys.reduce((distanceTotal, journey) => {
    return distanceTotal + journey.distance;
  }, 0);
  return totalDistanceTravelled;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueModesOfTransport = [];
    this.journeys.forEach((journey) => {
      if (!uniqueModesOfTransport.includes(journey.transport)){
        uniqueModesOfTransport.push(journey.transport);
      }
    })
  return uniqueModesOfTransport;
};


module.exports = Traveller;
