import { assertEquals } from "jsr:@std/assert";
import { calculateTokenCount } from "./mod.ts";

Deno.test(function countTokensTest() {
  const tokenCount = calculateTokenCount("Hello, world!");
  assertEquals(tokenCount, 4);
});
