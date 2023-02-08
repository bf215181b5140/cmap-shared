export class MyClass {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public sayHello(): string {
        return `Hello, ${this.name}`;
    }
}
