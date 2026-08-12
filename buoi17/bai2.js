class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

}
class Manager extends Employee {
    constructor(name, baseSalary, bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }
    getSalary() {
        return this.baseSalary + this.bonus;
    }
}
const manager = new Manager("Vũ", 1000, 300);
console.log(manager.getSalary());