const goodWorth = [
    1, // Hobbits
    2, // Men
    3, // Elves
    3, // Dwarves
    4, // Eagles
    10, // Wizards
  ]
  
  const evilWorth = [
    1, // Orcs
    2, // Men
    2, // Wargs
    2, // Goblins
    3, // Uruk Hai
    5, // Trolls
    10, // Wizards
  ]
  
  const calculateWorth = (points, force) =>
    points
      .split(' ')
      .reduce(
        (total, value, index) =>
          force === 'good'
            ? Number(total) + goodWorth[index] * Number(value)
            : Number(total) + evilWorth[index] * Number(value),
        0
      )
  
  function goodVsEvil(good, evil) {
    const goodTotalWorth = calculateWorth(good, 'good')
    const evilTotalWorth = calculateWorth(evil, 'evil')
  
    if (evilTotalWorth > goodTotalWorth)
      return 'Battle Result: Evil eradicates all trace of Good'
    else if (goodTotalWorth > evilTotalWorth)
      return 'Battle Result: Good triumphs over Evil'
    else return 'Battle Result: No victor on this battle field'
  }