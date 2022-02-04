export const getLetterVariant = (currentIndex, successCount, lastFail) => {
  if (currentIndex <= successCount - 1) {
    return "success";
  }

  if (currentIndex === successCount && lastFail) {
    return "fail";
  }

  return "pending";
};
