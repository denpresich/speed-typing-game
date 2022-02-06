/* eslint-disable no-undef */
import { getLetterVariant } from "./utils";

describe("Word.utils", () => {
  describe("getLetterVariant", () => {
    it("should return pending", () => {
      // arrange
      const currentIndex = 3;
      const successCount = 3;
      const lastFail = false;

      const expectedVariant = "pending";

      // act
      const actualVariant = getLetterVariant(
        currentIndex,
        successCount,
        lastFail
      );

      // asset
      expect(actualVariant).toBe(expectedVariant);
    });

    it("should return success", () => {
      // arrange
      const currentIndex = 2;
      const successCount = 3;
      const lastFail = true;

      const expectedVariant = "success";

      // act
      const actualVariant = getLetterVariant(
        currentIndex,
        successCount,
        lastFail
      );

      expect(actualVariant).toBe(expectedVariant);
    });

    it("should return fail", () => {
      // arrange
      const currentIndex = 3;
      const successCount = 3;
      const lastFail = true;

      const expectedVariant = "fail";

      // act
      const actualVariant = getLetterVariant(
        currentIndex,
        successCount,
        lastFail
      );

      // assert
      expect(actualVariant).toBe(expectedVariant);
    });
  });
});
