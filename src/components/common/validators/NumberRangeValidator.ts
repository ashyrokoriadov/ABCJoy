import { NumberRangeRule } from "./ValidationRules";

export const validateNumberRange = (
  actualValue: number,
  rule: NumberRangeRule
): boolean => actualValue >= rule.min && actualValue <= rule.max;
