// JavaScriptGreeter Class
// In its own file, create a class named JavaScriptGreeter. This is a subclass of Greeter.
// Additional Properties: n/a
// Additional Methods: n/a
// Override greet: Override the greet method to wrap the result in a console.log. For example, greet might 
// return "console.log('Hello, Grant!')". Note, this is not actually calling console.log, just returning a string 
// that looks like JavaScript.
// Jest Tests: Test with different greetings and names.

import Greeter from "./greeter";

class JavaScriptGreeter extends Greeter { // do I have to re-initialize the constructor, or is it inherited?



    greet(name: string) {
        return `console.log('${this.greeting}, ${name}!')`
    }
}

export default JavaScriptGreeter;