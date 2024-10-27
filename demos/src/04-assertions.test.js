 //matchers

 test('test object', () => {
   const obj = {
     name: 'Jesus',
     age: 30,
     city: 'Madrid',
   };
   obj.education = {
     university: 'Universidad de Madrid',
     degree: 'Licenciatura en Ingeniería Informática',
   };
   expect(obj).toMatchObject({
     name: 'Jesus',
     age: 30,
     city: 'Madrid',
     education: {
       university: 'Universidad de Madrid',
       degree: 'Licenciatura en Ingeniería Informática',
     },
   });
 });

 test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).not.toBeTruthy();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
 });

 test('boolean', () => {
  const data = true;
  expect(data).toBeTruthy();
  expect(data).not.toBeFalsy();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
 });

 test('boolean', () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();
  expect(1).toBeTruthy();
 });

 test('string', () => {
  expect('Jesus').toBe('Jesus');
  expect('Jesus').not.toBe('Pepe');
  expect('Jesus').toBeTruthy();
  expect('Jesus').not.toBeFalsy();
  expect('Jesus').toMatch('esu');
 });

 test('array',() => {
  const data = [1, 2, 3];
  expect(data).toEqual([1, 2, 3]);
  expect(data).toContain(1);
 })
