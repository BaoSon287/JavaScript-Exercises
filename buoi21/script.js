/*
  BÀI TẬP: TODO LIST BẰNG JAVASCRIPT THUẦN (VANILLA JS)
  ------------------------------------------------------
  HTML và CSS đã có sẵn (index.html, style.css).  KHÔNG cần sửa 2 file đó.
  Nhiệm vụ của bạn là viết code trong file này để app chạy được.

  Đọc kỹ các TODO bên dưới, làm theo THỨ TỰ từ trên xuống dưới.
  Xem chi tiết yêu cầu + gợi ý trong file BAI-TAP.md
*/

// ============================================
// BƯỚC 0: LẤY CÁC PHẦN TỬ DOM CẦN DÙNG
// ============================================
// TODO 0.1: Lấy phần tử <form id="add-form">
// const addForm = ...
const addForm = document.getElementById('add-form');
// TODO 0.2: Lấy phần tử <input id="todo-input">
// const todoInput = ...
const todoInput = document.getElementById('todo-input');
// TODO 0.3: Lấy phần tử <ul id="todo-list">
// const todoListEl = ...
const todoListEl = document.getElementById('todo-list');
// TODO 0.4: Lấy phần tử <p id="empty-state">
// const emptyStateEl = ...
const emptyStateEl = document.getElementById('empty-state');
// TODO 0.5: Lấy phần tử <span id="items-left">
// const itemsLeftEl = ...
const itemsLeftEl = document.getElementById('items-left');
// TODO 0.6: Lấy phần tử <button id="clear-completed">
// const clearCompletedBtn = ...
const clearCompletedBtn = document.getElementById('clear-completed');
// TODO 0.7: Lấy phần tử <div id="filters"> (chứa 3 nút lọc)
// const filtersEl = ...
const filtersEl = document.getElementById('filters');

// ============================================
// BƯỚC 1: STATE (DỮ LIỆU CỦA APP)
// ============================================
// Mỗi todo là 1 object dạng: { id: number, text: string, completed: boolean }
//
// TODO 1.1: Khai báo mảng `todos` để lưu danh sách việc cần làm.
//   - Nếu localStorage đã có dữ liệu (key "todos") thì đọc và parse ra dùng lại.
//   - Nếu chưa có thì để mảng rỗng [].
// let todos = ...
let todos = JSON.parse(localStorage.getItem('todos')) || [];
// TODO 1.2: Khai báo biến `currentFilter` để lưu bộ lọc đang chọn.
//   Giá trị có thể là: "all" | "active" | "completed". Mặc định là "all".
// let currentFilter = "all";
let currentFilter = "all"
// ============================================
// BƯỚC 2: CÁC HÀM XỬ LÝ DỮ LIỆU
// ============================================

// TODO 2.1: Viết hàm saveTodos()
//   - Lưu mảng `todos` vào localStorage (nhớ JSON.stringify).
// function saveTodos() {
//
// }
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
// TODO 2.2: Viết hàm addTodo(text)
//   - Tạo 1 object todo mới: { id: ..., text: text, completed: false }
//     (gợi ý: dùng Date.now() làm id cho đơn giản, đảm bảo không trùng)
//   - Thêm vào mảng `todos`
//   - Gọi saveTodos() và render lại danh sách
// function addTodo(text) {
//
// }
function addTodo(text) {
  const todo = {
    id: Date.now(),
    text: text,
    completed: false
  }
  todos.push(todo);
  saveTodos();
  render();
}
// TODO 2.3: Viết hàm deleteTodo(id)
//   - Lọc bỏ todo có id tương ứng ra khỏi mảng `todos`
//   - Gọi saveTodos() và render lại
// function deleteTodo(id) {
//
// }
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  render()
}
// TODO 2.4: Viết hàm toggleTodo(id)
//   - Tìm todo có id tương ứng, đảo ngược giá trị `completed` (true <-> false)
//   - Gọi saveTodos() và render lại
// function toggleTodo(id) {
//
// }
function toggleTodo(id) {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
  saveTodos();
  render();
}
// TODO 2.5: Viết hàm editTodo(id, newText)
//   - Tìm todo có id tương ứng, cập nhật lại `text` = newText
//   - Nếu newText rỗng (sau khi trim) thì có thể xoá todo đó luôn
//   - Gọi saveTodos() và render lại
// function editTodo(id, newText) {
//
// }
function editTodo(id, newText) {
  if (newText.trim() === '') {
    todos = todos.filter(todo => todo.id !== id);
  } else {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      todo.text = newText.trim();
    }
  }
  saveTodos();
  render();
}
// TODO 2.6: Viết hàm clearCompleted()
//   - Lọc bỏ tất cả các todo có completed === true
//   - Gọi saveTodos() và render lại
// function clearCompleted() {
//
// }
function clearCompleted() {
  todos = todos.filter((todo => !todo.completed === true));
  saveTodos();
  render();
}
// ============================================
// BƯỚC 3: RENDER (VẼ DANH SÁCH RA MÀN HÌNH)
// ============================================

// TODO 3.1: Viết hàm getFilteredTodos()
//   - Dựa vào `currentFilter`, trả về mảng todos đã được lọc:
//     "all"       -> trả về tất cả
//     "active"    -> chỉ những todo có completed === false
//     "completed" -> chỉ những todo có completed === true
// function getFilteredTodos() {
//
// }
function getFilteredTodos() {
  if (currentFilter === "all") {
    return todos;
  }
  if (currentFilter === "active") {
    return todos.filter((todo => todo.completed === false));
  }
  if (currentFilter === "completed") {
    return todos.filter((todo => todo.completed === true));
  }
}
// TODO 3.2: Viết hàm render()
//   Đây là hàm QUAN TRỌNG NHẤT, được gọi lại mỗi khi dữ liệu thay đổi.
//   - Xoá hết nội dung cũ trong todoListEl (todoListEl.innerHTML = "")
//   - Lấy danh sách đã lọc bằng getFilteredTodos()
//   - Với mỗi todo trong danh sách:
//       + Tạo 1 thẻ <li class="todo-item"> (có thể dùng createElement
//         hoặc "sao chép" #todo-item-template bằng .content.cloneNode(true))
//       + Set data-id = todo.id
//       + Nếu todo.completed === true thì thêm class "is-completed"
//       + Gán text vào phần tử .todo-item__text
//       + Gắn sự kiện click cho nút .todo-item__check -> gọi toggleTodo(todo.id)
//       + Gắn sự kiện click cho nút .todo-item__delete -> gọi deleteTodo(todo.id)
//       + Gắn sự kiện click (hoặc dblclick) cho .todo-item__edit -> cho phép
//         sửa text (gợi ý: dùng prompt() cho đơn giản, hoặc biến span
//         thành input để sửa inline nếu muốn nâng cao hơn)
//       + Append <li> vào todoListEl
//   - Hiện/ẩn emptyStateEl tuỳ vào danh sách rỗng hay không (thêm/bỏ class "is-visible")
//   - Gọi updateItemsLeft() để cập nhật số lượng việc còn lại
// function render() {
//
// }
function render() {
  todoListEl.innerHTML = "";
  const list = getFilteredTodos();
  if (list.length === 0) {
    emptyStateEl.classList.add("is-visible");
  } else {
    emptyStateEl.classList.remove("is-visible");
  }
  list.forEach(todo => {
    const li = document.createElement('li');
    li.classList.add("todo-item");
    li.dataset.id = todo.id;
    if (todo.completed === true) {
      li.classList.add("is-completed");
    }
    const textEl = document.createElement('span');
    textEl.classList.add('todo-item__text');
    textEl.textContent = todo.text;

    const checkBtn = document.createElement('button');
    checkBtn.classList.add('todo-item__check');

    const editBtn = document.createElement('button');
    editBtn.classList.add('todo-item__edit');
    editBtn.textContent = 'Edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-item__delete');
    deleteBtn.textContent = 'Delete';
    li.append(checkBtn, textEl, editBtn, deleteBtn);

    li.querySelector('.todo-item__text').textContent = todo.text;
    li.querySelector('.todo-item__check').addEventListener('click', () => {
      toggleTodo(todo.id);
    });
    li.querySelector('.todo-item__edit').addEventListener('click', () => {
      const newText = prompt("Nhập nội dung mới:", todo.text);
      editTodo(todo.id, newText);
    });
    li.querySelector('.todo-item__delete').addEventListener('click', () => {
      deleteTodo(todo.id);
    });
    todoListEl.appendChild(li);
  });
  updateItemsLeft();
}

// TODO 3.3: Viết hàm updateItemsLeft()
//   - Đếm số lượng todo có completed === false
//   - Cập nhật text của itemsLeftEl, ví dụ: "3 việc còn lại"
//   - Lưu ý số ít/nhiều nếu muốn (VD: "1 việc còn lại" vs "2 việc còn lại")
// function updateItemsLeft() {
//
// }
function updateItemsLeft() {
  const count = todos.filter((todo => todo.completed === false)).length;
  itemsLeftEl.textContent = `${count} việc còn lại`;
}
// ============================================
// BƯỚC 4: GẮN SỰ KIỆN (EVENT LISTENERS)
// ============================================

// TODO 4.1: Lắng nghe sự kiện "submit" trên addForm
//   - preventDefault() để form không load lại trang
//   - Lấy giá trị từ todoInput, .trim() để bỏ khoảng trắng thừa
//   - Nếu rỗng thì không làm gì cả (return)
//   - Gọi addTodo(text)
//   - Xoá trắng todoInput sau khi thêm xong
// addForm.addEventListener("submit", (e) => {
//
// });
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text === "") return;
  addTodo(text);
  todoInput.value = "";
});
// TODO 4.2: Lắng nghe sự kiện "click" trên clearCompletedBtn
//   - Gọi clearCompleted()
// clearCompletedBtn.addEventListener("click", () => {
//
// });
clearCompletedBtn.addEventListener("click", () => {
  clearCompleted();
});
// TODO 4.3: Lắng nghe sự kiện "click" trên filtersEl (event delegation)
//   - Kiểm tra xem phần tử được click có phải là nút .filters__btn không
//   - Nếu đúng: đọc data-filter của nút đó, gán vào currentFilter
//   - Bỏ class "is-active" khỏi tất cả các nút, thêm "is-active" vào nút vừa bấm
//   - Gọi render() lại để áp dụng bộ lọc mới
// filtersEl.addEventListener("click", (e) => {
//
// });
filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".filters__btn");
  if (!btn) return;

  currentFilter = btn.dataset.filter;

  const buttons = filtersEl.querySelectorAll(".filters__btn");
  buttons.forEach(b => b.classList.remove("is-active"));
  btn.classList.add("is-active");

  render();
});
// ============================================
// BƯỚC 5: KHỞI CHẠY APP
// ============================================

// TODO 5.1: Hiển thị ngày hôm nay vào phần tử #today-date (không bắt buộc, làm cho đẹp)
//   Gợi ý: dùng đối tượng Date + toLocaleDateString("vi-VN", {...})

// TODO 5.2: Gọi render() một lần khi tải trang để hiển thị dữ liệu ban đầu
//   (nếu đã có todos lưu trong localStorage từ trước)
render();
