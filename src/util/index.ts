export function convertParameterValueFromString(value: string): number | boolean | undefined {
  // boolean
  if (value === 'true') return true;
  if (value === 'false') return false;

  // number
  const numValue = Number(value);
  if (!isNaN(numValue)) return numValue;

  // failed to convert
  return undefined;
}
