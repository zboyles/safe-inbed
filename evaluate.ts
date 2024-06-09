/**
 * Calculates the cosine similarity between two vectors.
 *
 * Cosine similarity is a measure of similarity between two non-zero vectors of an inner product space that
 * measures the cosine of the angle between them. Its measure is derived by taking the dot product of the vectors
 * and dividing that by the product of their magnitudes. This function is useful for comparing the orientation,
 * but not the magnitude, of the vectors. It's often used in natural language processing to assess the similarity
 * between two documents.
 *
 * @description Intended to be used to test an artificially chunked embedding against the full embedding
 *
 * @param vec1 The first vector as an array of numbers.
 * @param vec2 The second vector as an array of numbers.
 * @returns The cosine similarity between vec1 and vec2 as a number.
 * @throws {Error} If the vectors are of different lengths or if either vector has a norm of zero.
 */
export const evalCosineSimilarity = (
  vec1: number[],
  vec2: number[],
): number => {
  if (vec1.length !== vec2.length) {
    throw new Error("Vectors must be of the same length");
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vec1.length; i++) {
    dotProduct += vec1[i] * vec2[i];
    normA += vec1[i] ** 2;
    normB += vec2[i] ** 2;
  }

  if (normA === 0 || normB === 0) {
    throw new Error("Vector norm cannot be zero");
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
};
