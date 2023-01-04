import Daemon from '../src/daemon';
import Magician from '../src/magician';

test('test deamon 100', () => {
  const daemon = new Daemon('TestName', null, 2);
  daemon.attack = 100;
  daemon.stoned = true;

  const result = 85;

  expect(daemon.attack).toBe(result);
});

test('test deamon 100 without stoned', () => {
  const daemon = new Daemon('TestName', null, 2);
  daemon.attack = 100;
  daemon.stoned = false;

  const result = 90;

  expect(daemon.attack).toBe(result);
});

test('test deamon 200', () => {
  const daemon = new Daemon('TestName', null, 2);
  daemon.attack = 200;
  daemon.stoned = true;

  const result = 175;

  expect(daemon.attack).toBe(result);
});

test('test magician 100', () => {
    const merlin = new Magician('Merlin', null, 3);
    merlin.attack = 100;
    merlin.stoned = true;
  
    const result = 72;
  
    expect(merlin.attack).toBe(result);
  });
  
  test('test magician 100 without stoned', () => {
    const merlin = new Magician('Merlin', null, 3);
    merlin.attack = 100;
    merlin.stoned = false;
  
    const result = 80;
  
    expect(merlin.attack).toBe(result);
  });
  
  test('test magician 200', () => {
    const merlin = new Magician('Merlin', null, 3);
    merlin.attack = 200;
    merlin.stoned = true;
  
    const result = 152;
  
    expect(merlin.attack).toBe(result);
  });
  
  test('.stoned = true', () => {
    const merlin = new Magician('Merlin', null, 3);
    merlin.stoned = true;
    expect(merlin.stoned).toBe(true);
  });