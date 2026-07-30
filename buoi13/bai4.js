function createGreeter(greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}!`);
    }
}

const greetVi = createGreeter("Xin chào");
const greetEn = createGreeter("Hello");

greetVi("An"); // "Xin chào, An!"
greetEn("An"); // "Hello, An!"
