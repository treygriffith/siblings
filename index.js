var matches = require('matches-selector')
var getChildren = require('children')

exports = module.exports = function (el, selector) {
  return getChildren(el.parentNode, selector).filter(function (sib) {
    return sib !== el
  })
}

exports.next = traverse('next')
exports.prev = traverse('prev')

function traverse(dir) {
  var prop = dir + 'ElementSibling'

  return function (el, selector, limit) {
    if (typeof selector === 'number') {
      limit = selector
      selector = null
    }

    var siblings = []
    var sibling = el

    while (true) {
      if (!(sibling = sibling[prop])) break;
      if (selector && !matches(sibling, selector)) continue;

      var length = siblings.push(sibling)
      if (limit && length >= limit) break;
    }

    return limit === 1 ? siblings.shift() : siblings
  }
}