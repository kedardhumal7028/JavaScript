class Animal
{
    Speak()
    {
        console.log("Animal Speak");
    }
}

class Dog extends Animal
{
    Speak()
    {
        console.log("Dog Barks");
    }
}

class Cat extends Animal
{
    Speak()
    {
        console.log("Cat Meow");
    }
}

class Cow extends Animal
{
    Speak()
    {
        console.log("Cow Moos");
    }
}

let obj = new Dog();
obj.Speak();

obj = new Cat();
obj.Speak();

obj = new Cow();
obj.Speak();