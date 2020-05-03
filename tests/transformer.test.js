import css from './__fixtures__/sample.css';
import scss from './__fixtures__/sample.css';

describe('Jest css module transformer', () => {
    test('css output', () => {
        expect(css).toMatchSnapshot();
    });

    test('scss output', () => {
        expect(scss).toMatchSnapshot();
    });
});
