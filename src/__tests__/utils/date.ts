import {getCurrentDate} from '../../utils/date';

test('should current date object', () => {
  expect(getCurrentDate()).toEqual(new Date());
});
