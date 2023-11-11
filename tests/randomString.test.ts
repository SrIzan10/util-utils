import { randomString } from '../src/index'

describe('randomString', () => {
    it('should return a random string with the length of 10', () => {
        const result = randomString(10)
        expect(result).toHaveLength(10)
    })
    it('should return a random string with the length of 20 and a custom charset', () => {
        const result = randomString(20, 'abc')
        expect(result).toHaveLength(20)
        expect(result).toMatch(/[abc]{20}/)
    })
})