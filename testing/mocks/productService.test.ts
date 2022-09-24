import {useFetchProduct} from '@utils/async';

describe('Async function', () => {
    let result = {
        success: {},
        fail: {},
    };

    beforeEach(() => {
        result = {
            success: {
                name: 'milk',
                price: '200',
            },
            fail: {
                name: 'fail',
                price: '2,000',
            },
        };
    });

    it('async - return', async () => {
        return useFetchProduct().then((item) => {
            expect(item).toEqual(result.success);
        });
    });

    it('async - await', async () => {
        const product = await useFetchProduct();
        expect(product).toEqual(result.success);
    });

    it('async - resolves', () => {
        expect(useFetchProduct()).resolves.toEqual(result.success);
    });

    it('async - reject', () => {
        expect(useFetchProduct('error')).rejects.toBe('network error');
    });
});
