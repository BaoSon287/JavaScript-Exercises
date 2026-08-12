const user = {
    id: 1,
    age: 20,
    name: "Bình",
    contact: {
        email: "binh@example.com",
        phone: "0909123456"
    },
    hobbies: ["reading", "coding", "gaming"]
};
const { name, contact } = user;
console.log(name, contact.email, contact.phone);
const { age = 18 } = user;
console.log(age);
const { hobbies } = user;
const [hobby1, hobby2, ...restHobbies] = hobbies;
console.log(hobby1, hobby2, restHobbies);


