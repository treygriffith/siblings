# Siblings

    var getSiblings = require('siblings')

## `getSiblings(element[, selector])`

    var siblings = getSiblings(element, selector)
    var siblings = getSiblings(element)

* `element` - DOM element to get the siblings of
* `selector` - optional string selector to filter the siblings

returns `siblings[]` - Array of DOM elements that are the siblings of `element`.
  Note, does not return the element.

## `getSiblings.next(element[, selector[, limit]])

    var nextSiblings = getSiblings.next(element, selector, limit)
    var nextSiblings = getSiblings.next(element, limit)
    var nextSiblings = getSiblings.next(element, selector)
    var nextSiblings = getSiblings.next(element)

* `element` - DOM element to get the siblings of
* `selector` - optional string selector to filter the siblings
* `limit` - maximum number of siblings desired.

returns:

* `sibling` - DOM element or `null` if `limit === 1`
* `siblings[]` - array of DOM elements if `limit !== 1`

## `getSiblings.prev`

Same as `.next()` except in the opposite direction.

## Compatibility

IE9+

## License

WTFPL