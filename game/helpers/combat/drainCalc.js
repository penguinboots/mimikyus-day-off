function drainCalc(damage, drainPercent) {
  return damage * (drainPercent / 100)
}

module.exports = { drainCalc }