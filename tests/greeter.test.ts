import Greeter from "../src/greeter";

describe("greeting method", () => {
  test("Greeting to Eugene", () => {
    const testGreet = new Greeter('HellOOOOoo!')

    const greetPerson = testGreet.greet('Eugene')

    expect(greetPerson).toBe('HellOOOOoo!, Eugene!')
  });
  test("Greeting to boy", () => {
    const testGreet = new Greeter('Hi')

    const greetPerson = testGreet.greet('boy')

    expect(greetPerson).toBe('Hi, boy!')
  });

});