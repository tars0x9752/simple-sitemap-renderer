import { stringifyPriority } from '../entry'

describe('stringifyPriority', () => {
  describe('valid input', () => {
    it('0', () => {
      expect(stringifyPriority(0)).toBe('0.0')
    })

    it('0.0', () => {
      expect(stringifyPriority(0.0)).toBe('0.0')
    })

    it('0.2', () => {
      expect(stringifyPriority(0.2)).toBe('0.2')
    })

    it('0.8', () => {
      expect(stringifyPriority(0.8)).toBe('0.8')
    })

    it('1', () => {
      expect(stringifyPriority(1)).toBe('1.0')
    })

    it('1.0', () => {
      expect(stringifyPriority(1.0)).toBe('1.0')
    })
  })
})
