const greetings: string = "Hello World, This is a TypeScript Project";

const p = document.querySelector('p') as HTMLParagraphElement;

p.textContent = greetings;