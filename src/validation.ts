export const validateLastmod = (lastmod: string): boolean => {
  const lastmodRegex = /^\d{4}-\d{2}-\d{2}$/

  return lastmodRegex.test(lastmod)
}

export const validatePriority = (priority: number): boolean => {
  return priority >= 0 && priority <= 1
}
