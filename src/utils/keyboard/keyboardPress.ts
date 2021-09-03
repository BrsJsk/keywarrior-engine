import { fromEvent, map } from 'rxjs';

export const keyboardPress = fromEvent<KeyboardEvent>(
  document,
  'keypress'
).pipe(map((data) => data.key));
