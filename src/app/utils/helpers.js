/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
export function $qs(selector, scope) {
  return (scope || document).querySelector(selector)
}
/**
 * querySelectorAll wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
export function $qsa(selector, scope) {
  return (scope || document).querySelectorAll(selector)
}
/**
 * contains class wrapper
 *
 * @param {string} className class find
 * @param {Element} element element
 */
export function $cc(className, element) {
  return element.classList.contains(className)
}
/**
 * add class wrapper
 *
 * @param {string} className class for add on element
 * @param {Element} element element
 */
export function $adc(className, element) {
  return element.classList.add(className)
}
/**
 * remove class wrapper
 *
 * @param {string} className class for remove on element
 * @param {Element} element element
 */
export function $rmc(className, element) {
  return element.classList.remove(className)
}
/**
 * createElement wrapper
 *
 * @param {string} tagName name element
 * @param {Array} options options of element
 */
export function $ce(tagName, options) {
  const newElm = document.createElement(tagName)
  if (options) {
    for (let opt in options) {
      newElm[opt] = options[opt]
    }
  }
  return newElm
}

/**
 * addEventListener wrapper
 *
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 * @param {boolean} [capture] Capture the event
 */
export function $on(target, type, callback, capture) {
  (target || document.querySelectorAll(target)).addEventListener(type, callback, !!capture)
}

/**
 * Attach a handler to an event for all elements matching a selector.
 *
 * @param {Element} target Element which the event must bubble to
 * @param {string} selector Selector to match
 * @param {string} type Event name
 * @param {Function} handler Function called when the event bubbles to target
 *                           from an element matching selector
 * @param {boolean} [capture] Capture the event
 */
export function $delegate(target, selector, type, handler, capture) {
  const dispatchEvent = event => {
    event.preventDefault()
    const targetElement = event.target
    const potentialElements = target.querySelectorAll(selector)
    let i = potentialElements.length
    while (i--) {
      if (potentialElements[i] === targetElement) {
        handler.call(this, targetElement)
        break
      }
      if (potentialElements[i] === targetElement.closest(selector)) {
        handler.call(this, targetElement.closest(selector))
        break
      }
    }
  }

  $on(target, type, dispatchEvent, !!capture)
}

/**
 * Encode less-than and ampersand characters with entity codes to make user-
 * provided text safe to parse as HTML.
 *
 * @param {string} s String to escape
 *
 * @returns {string} String with unsafe characters escaped with entity codes
 */
export const escapeForHTML = s => s.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;')

/*!
 * JavaScript detach - v0.2 - 5/18/2011
 * http://benalman.com/
 *
 * Copyright (c) 2011 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

export const $detach = (node, async, fn) => {
  const parent = node.parentNode;
  const next = node.nextSibling;
  // Re-attach node to DOM.
  const reattach = () => {
    parent.insertBefore(node, next);
  }
  // No parent node? Abort!
  if (!parent) { return; }
  // Detach node from DOM.
  parent.removeChild(node);
  // Handle case where optional `async` argument is omitted.
  if (typeof async !== "boolean") {
    fn = async;
    async = false;
  }
  // Note that if a function wasn't passed, the node won't be re-attached!
  if (fn && async) {
    // If async == true, reattach must be called manually.
    fn.call(node, reattach);
  } else if (fn) {
    // If async != true, reattach will happen automatically.
    fn.call(node);
    reattach();
  }
}
