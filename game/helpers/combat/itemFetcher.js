const items = require("../../data/items.json")

function itemFetcher(itemString) {
  return items[itemString]
}

module.exports = { itemFetcher }