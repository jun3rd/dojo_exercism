//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, ageInSeconds=1000000000) => {
  let earth_seconds = 31557600
  // 1 earth year === 365.25 days === 31557600
  let earthAge = Number(ageInSeconds / earth_seconds)
  switch(planet) {
    case 'earth':
      let earthAge_formatted = Number(earthAge.toFixed(2))
      return earthAge_formatted
      break;
    case 'mercury':
      let mercuryAge = Number((earthAge / 0.2408467).toFixed(2))
      return mercuryAge
      break;
    case 'venus':
      let venusAge = Number((earthAge / 0.61519726).toFixed(2))
      return venusAge
      break;
    case 'mars':
      let marsAge = Number((earthAge / 1.8808158).toFixed(2))
      return marsAge
      break;
    case 'jupiter':
      let jupiterAge = Number((earthAge / 11.862615).toFixed(2))
      return jupiterAge
      break;
    case 'saturn':
      let saturnAge = Number((earthAge / 29.447498).toFixed(2))
      return saturnAge
      break;
    case 'uranus':
      let uranusAge = Number((earthAge / 84.016846).toFixed(2))
      return uranusAge
      break;
    case 'neptune':
      let neptuneAge = Number((earthAge / 164.79132).toFixed(2))
      return neptuneAge
      break;
    default: // return 0
  }
};
