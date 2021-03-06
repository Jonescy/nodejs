class Person1 {
    content = "Hi 帅哥"
    say() {
        return this.content;
    }
}

const goddess = new Person1()
console.log(goddess.say())
class Animal {
    name: string // 声明属性类型
    color: string
    constructor (name: string, color: string) {
        this.name = name
        this.color = color

    }
    eat() {
        return `${this.name} eat`
    }
}

class Cat extends Animal {
    call: Function
    constructor (name: string, color: string) {
        super(name, color) // 先有super调用父类，才有子类属性
        this.name = name  // 实例成员
        this.color = color

    }
    walk() {
        return `${this.name} cat walk!`
    }


}
Cat.prototype.call = function () {
    console.log("I can call");
}
let cat = new Cat("jones", "write");
console.log(cat.eat());
console.log(cat.walk());
cat.walk()
console.log(typeof Cat); //function，类就是构造函数