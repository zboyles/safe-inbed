/**
 * @module mod.ts
 * 
 * This module provides functions to evaluate cosine similarity and calculate token counts.
 * 
 *
 * @example
 * ```ts
 * import { calculateTokenCount } from "@zac/safe-inbed";
 * 
 * console.log("Token count:", calculateTokenCount("Hello, world!"));
 * // Output: Token count: 4
 * ```
 */

/** The `evalCosineSimilarity` function is used to compute the cosine similarity between two vectors. */
export { evalCosineSimilarity } from "./evaluate.ts";
/** The `calculateTokenCount` function is used to count the number of tokens in a given input. */
export { calculateTokenCount } from "./calculate.ts";
