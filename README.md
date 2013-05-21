# Siblings

```js
var getSiblings = require('siblings')
```

## getSiblings(element[, selector])

```js
var siblings = getSiblings(element, selector)
var siblings = getSiblings(element)
```

* `element` - DOM element to get the siblings of
* `selector` - optional string selector to filter the siblings

returns `siblings[]` - Array of DOM elements that are the siblings of `element`.
  Note, does not return the element.

## getSiblings.next(element[, selector[, limit]])

```js
var nextSiblings = getSiblings.next(element, selector, limit)
var nextSiblings = getSiblings.next(element, limit)
var nextSiblings = getSiblings.next(element, selector)
var nextSiblings = getSiblings.next(element)
```

* `element` - DOM element to get the siblings of
* `selector` - optional string selector to filter the siblings
* `limit` - maximum number of siblings desired.

returns:

* `sibling` - DOM element or `null` if `limit === 1`
* `siblings[]` - array of DOM elements if `limit !== 1`

## getSiblings.prev(element[, selector[, limit]])

Same as `.next()` except in the opposite direction.

## Compatibility

IE9+

## License

The MIT License (MIT)

Copyright (c) 2013 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.