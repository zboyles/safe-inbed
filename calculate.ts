import { getEncoding } from "./deps.ts";

type TiktokenEncoding =
  | "cl100k_base"
  | "gpt2"
  | "r50k_base"
  | "p50k_base"
  | "p50k_edit";

const DEFAULT_ENCODING: TiktokenEncoding = "cl100k_base";

/**
 * Basic implementation to calculates the number of tokens in a given text string based on the specified encoding.
 *
 * @param {string} text - The text to be tokenized.
 * @param {TiktokenEncoding} [encoding="cl100k_base"] - The `Tiktoken` encoding model to use for tokenization.
 * @returns {number} The number of tokens in the text.
 *
 * @example
 * ```ts
 * import { calculateTokenCount } from "./mod.ts";
 * 
 * console.log("Token count:", calculateTokenCount("Hello, world!"));
 * // Output: Token count: 4
 * ```
 */
export const calculateTokenCount = (
  text: string,
  encoding: TiktokenEncoding = DEFAULT_ENCODING,
): number => {
  const encodingModel = getEncoding(encoding);
  const tokens = encodingModel.encode(text);
  return tokens.length;
};
