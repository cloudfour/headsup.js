# Heads-Up.js

Sticky headers that hide on scroll.

Forked from [ChrisCavs](https://github.com/ChrisCavs/headsup.js). Thanks Chris! 

Unlike the ChrisCavs version, this fork does not apply the styles necessary to show and hide the header. Instead it adds a class to the body when the header is hidden, allowing you to provide your own styles.

## Usage

Follow these steps to get started:

1. [Install](#install)
2. [Import](#import)
3. [Review Options](#options)

**Note**: It is required that you use a css reset that clears user agent stylesheet margin/padding.
See here for an [example](https://meyerweb.com/eric/tools/css/reset/).

### Install

Install this repo as a dependency, or reference the `headsup.js` script file.

### Import

Import Heads-up, naming it according to your preference.

```es6
import headsUp from 'headsup.js'
```

## Options

All options are optional, and come with defaults. The defaults are shown below:

```es6
headsUp({
  selector: 'header',
  debounce: false,
  hiddenHeaderClass = 'js-header-hidden'
})
```

Explanation of each option follows:

* [selector](#selector)
* [debounce](#debounce)
* [hiddenHeaderClass](#hiddenHeaderClass)

### selector

Any CSS selector that targets to your header element.

```es6
headsUp({
  target: '#header'
})
```

### debounce

When the user scrolls, a function is called to check whether it is necessary to hide or reveal the header. Specify the amount of time between function calls with the debounce option, in milliseconds. This may help with performance.

```es6

// will wait 100ms after each function call

headsUp({
  debounce: 100
})
```

### hiddenHeaderClass

Applies a class to the `body` element when the sticky header is hidden. This can be used to add special styles to other elements on the page.

```es6

// will add the class `is-hidden` to the body when the header is hidden

headsUp({
  hiddenHeaderClass: 'is-hidden'
})
```

## Browser Support

Heads-up depends on the following browser APIs:

* [pageYOffset](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset)
* [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
* [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

Consequently, it supports the following natively:

* Chrome 1+
* Firefox 3.5+
* Safari 3.2+
* Opera 10+
* IE 9+
* iOS Safari 4+
* Android Browser 2+

## License

Copyright for portions of this project are held by Christopher Cavalea, 2018. All other copyright for this project are held by Cloud Four, 2019.

[MIT](https://opensource.org/licenses/MIT). © 2019 Cloud Four