export interface NumberRangeRule {
  min: number;
  max: number;
}

export const questionCountRule: NumberRangeRule = {
  min: 1,
  max: 10,
};

export const timeBetweenQuestionsRule: NumberRangeRule = {
  min: 1,
  max: 5,
};
