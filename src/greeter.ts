// In its own file, create a class named Greeter. This is the parent class.
// Properties:
// greeting (a string)
// Methods:
// constructor: Sets the greeting property from a parameter.
// greet: Has a string parameter called name. It returns the composed greeting based on the greeting property 
// and name parameter. Use this format: "{greeting}, {name}!".
// Jest Tests: Test with different greetings and names.

class Greeter {
    constructor(
        public greeting : string,
    ) {

    }

    greeting(name: string) {
        return `${greeting}, ${name}!`
    }
}

export default Greeter;