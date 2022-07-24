const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-07-24 11:00:00');

    expect(format_date(date)).toBe('7/24/2022');
});