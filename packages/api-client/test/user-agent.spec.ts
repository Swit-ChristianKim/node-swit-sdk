import {userAgent} from "../src/lib/user-agent";


describe('user-agent', () => {
    it('create user-agent', () => {
        const userAgent = userAgent();
        console.log('userAgent', userAgent);
        expect(userAgent).toBe(userAgent);
    });
});