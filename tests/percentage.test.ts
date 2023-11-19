// did I overenginner these tests?
import { percentage } from "../src/index";
import { describe, it, expect } from 'vitest';

describe('percentage', () => {
    it('should return 50% when 1 is half of 2', () => {
        expect(percentage(1, 2)).toBe(50);
    });
    it('should return 0% when 0 is half of 2', () => {
        expect(percentage(0, 2)).toBe(0);
    });
    it('should return 100% when 2 is half of 2', () => {
        expect(percentage(2, 2)).toBe(100);
    });
    it('should return 100% when 2 is half of 1', () => {
        expect(percentage(2, 1)).toBe(100);
    });
    it('should return 200% when 2 is half of 1 and allowNumNot100 is true', () => {
        expect(percentage(2, 1, true)).toBe(200);
    })
    it('should throw an error when total is 0', () => {
        expect(() => percentage(1, 0)).toThrow();
    });
    it('should throw an error when partial is negative', () => {
        expect(() => percentage(-1, 2)).toThrow();
    });
    it('should throw an error when total is negative', () => {
        expect(() => percentage(1, -2)).toThrow();
    });
})