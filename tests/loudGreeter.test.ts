import LoudGreeter from '../src/loudGreeter'

describe("Loud greeting method", () => {
    test("Greeting to Eugene", () => {
      const testGreet = new LoudGreeter('HellOOOOoo!')
  
      const greetPerson = testGreet.greet('Eugene')
  
      expect(greetPerson).toBe('HellOOOOoo!, Eugene!!!')
    });
    test("Greeting to boy with addVolume", () => {
      const testGreet = new LoudGreeter('Hi')
  
      const louderGreet = testGreet.addVolume()
      const greetPerson = testGreet.greet('boy')
  
      expect(greetPerson).toBe('Hi, boy!!!!')
    });
  
  });