function drainCalc(damage, drainPercent) {
  return damage * (Math.abs(drainPercent) / 100)
}

module.exports = { drainCalc }