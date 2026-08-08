const todos = [
    { task: "Học JavaScript", done: false },
    { task: "Làm bài tập", done: true },
    { task: "Đọc sách", done: false },
];
const result = todos.filter((todo => todo.done === false)).map((todo => todo.task));
console.log(result);
function countDone(todos) {
    return todos.reduce((acc, cur) => {
        return cur.done === true ? acc + 1 : acc;
    }, 0);
}
console.log(countDone(todos));
function markAsDone(todos, taskName) {
    const target = todos.find(todo => todo.task === taskName);
    if (target) {
        target.done = true;
    }
    return todos;
};
console.log(markAsDone(todos, "Đọc sách"));
