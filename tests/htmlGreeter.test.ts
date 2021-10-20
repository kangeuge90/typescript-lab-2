import HtmlGreeter from '../src/htmlGreeter'

describe("Html greeting method", () => {
    test("Greeting to Eugene", () => {
      const testGreet = new HtmlGreeter('HellOOOOoo!')
  
      const greetPerson = testGreet.greet('Eugene')
  
      expect(greetPerson).toBe('HellOOOOoo!, Eugene!')
    });
    test("Greeting to boy", () => {
      const testGreet = new HtmlGreeter('Hi')
  
      const greetPerson = testGreet.greet('boy')
  
      expect(greetPerson).toBe('Hi, boy!')
    });
  
  });