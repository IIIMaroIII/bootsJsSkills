import { validate } from './Validator';

try {
  const res = validate(2).getInfo();
  console.log('res', res);
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
  console.log(error);
}
