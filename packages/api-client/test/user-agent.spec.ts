import {userAgent} from "../src/lib/user-agent";


describe('user-agent', () => {
    it('create user-agent', () => {
        const agent = userAgent();
        console.log('userAgent', agent);
        expect(agent).toBe(agent);
    });
});