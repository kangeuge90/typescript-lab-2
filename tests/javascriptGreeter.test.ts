import JavaScriptGreeter from "../src/javascriptGreeter"

describe("Javascript greeting method", () => {
    test("Greeting to Eugene", () => {
      const testGreet = new JavaScriptGreeter('HellOOOOoo!')
  
      const greetPerson = testGreet.greet('Eugene')
  
      expect(greetPerson).toBe("console.log('HellOOOOoo!, Eugene!')")
    });
    test("Greeting to boy", () => {
      const testGreet = new JavaScriptGreeter('Hi')
  
      const greetPerson = testGreet.greet('boy')
  
      expect(greetPerson).toBe("console.log('Hi, boy!')")
    });
  
  });