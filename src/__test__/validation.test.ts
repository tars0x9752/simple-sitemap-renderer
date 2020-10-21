import { validateLastmod, validatePriority } from '../validation'

describe('validateLastmod', () => {
  describe('valid', () => {
    it('2020-10-10', () => {
      expect(validateLastmod('2020-10-10')).toBe(true)
    })
  })

  describe('invalid', () => {
    it('202-1-1', () => {
      expect(validateLastmod('202-1-1')).toBe(false)
    })
  })
})

describe('validatePriority', () => {
  describe('valid', () => {
    it('2020-10-10', () => {
      expect(validatePriority(0.5)).toBe(true)
    })
  })

  describe('invalid', () => {
    it('-1', () => {
      expect(validatePriority(-1)).toBe(false)
    })

    it('1.1', () => {
      expect(validatePriority(1.1)).toBe(false)
    })

    it('100', () => {
      expect(validatePriority(100)).toBe(false)
    })
  })
})
