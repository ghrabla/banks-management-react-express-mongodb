const functions = require('./functions');



test('data strings', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    expect(typeof data[0].cin).toEqual('string');
  });



test('data object', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    expect(typeof data).toEqual('object');
  });


test('data true', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    expect(typeof data).toBeTruthy();
  });


test('data false', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    expect(data.nothing).toBeFalsy();
  });


test('data object values length', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    expect(Object.values(data[0]).length).toBe(14);
  });

test('check if array or not', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    expect(Array.isArray(data)).toBe(true);
  });