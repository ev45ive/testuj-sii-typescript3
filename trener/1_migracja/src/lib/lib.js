// @ts-check

/**
 * Dividing numbers
 * @param {number} a A
 * @param {number} b B
 * @returns {number}
 */
export const divide = (a, b) => a / b;

export const multiply = (/** @type {number} */ a, /** @type {number} */ b) =>
  a * b;

// @ts-ignore
divide("2", "1");


// @ts-expect-error
divide("2", "1");
