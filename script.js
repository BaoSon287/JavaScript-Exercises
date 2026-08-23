/*
  BÀI TẬP: VALIDATE FORM ĐĂNG KÝ
  ---------------------------------
  Xem đầy đủ yêu cầu trong file de-bai.md.
  chỉ cần code trong file này. KHÔNG cần sửa index.html / style.css.

  Các id có sẵn trong HTML mà em sẽ cần dùng tới:
    - Input:        fullname, username, email, phone, password, confirm
    - Field (cha):   field-fullname, field-username, field-email,
                      field-phone, field-password, field-confirm
    - Form:          registerForm
    - Kết quả:       result
*/

// ========== BƯỚC 1: Lấy phần tử ==========
// TODO: Lấy thẻ <form id="registerForm"> và thẻ <div id="result">
// const form = ...
// const resultBox = ...
const form = document.getElementById('registerForm');
const resultBox = document.getElementById('result');
// ========== BƯỚC 2: Hàm hiển thị lỗi / hết lỗi ==========

// TODO: Viết hàm showError(fieldName, message)
// - Tìm div cha có id = "field-" + fieldName
// - Thêm class "error" vào div đó, xoá class "success" (nếu có)
// - Set nội dung text cho phần tử ".error-msg" bên trong div đó = message
function showError(fieldName, message) {
  const field = document.getElementById('field-' + fieldName)
  field.classList.add("error");
  field.classList.remove("success");
  const errorMsg = field.querySelector('.error-msg');
  errorMsg.textContent = message;
}
// TODO: Viết hàm showSuccess(fieldName)
// - Tìm div cha có id = "field-" + fieldName
// - Xoá class "error", thêm class "success"
function showSuccess(fieldName) {
  const field = document.getElementById('field-' + fieldName);
  field.classList.remove("error");
  field.classList.add("success");
}

// ========== BƯỚC 3: Các hàm validate từng ô ==========
// Mỗi hàm: đọc giá trị input tương ứng, kiểm tra theo quy tắc trong de-bai.md,
// gọi showError() hoặc showSuccess() phù hợp, và PHẢI return true / false.

function validateFullname() {
  // TODO
  // Gợi ý: const value = document.getElementById('fullname').value.trim();
  const value = document.getElementById('fullname').value.trim();
  if (!value) {
    showError('fullname', "không được để trống");
    return false;
  }
  if (value.length < 2) {
    showError('fullname', "tên không hợp lệ");
    return false;
  }
  showSuccess('fullname');
  return true;
}

function validateUsername() {
  // TODO
  const value = document.getElementById('username').value;
  if (!value) {
    showError('username', "không được để trống");
    return false;
  }
  if (value.length< 4||value.length>16) {
    showError('username', "username phải có độ dài từ 4–16 kí tự");
    return false;
  }
  for(const i in value){
    const code = value.charCodeAt(i);
    if(!((48<=code&&code<=57)||(65<=code&&code<=90)||(97<=code&&code<=122)||(code===95))){
      showError('username',"chỉ được chứa chữ cái, số hoặc dấu gạch dưới");
      return false;
    }
  }
  showSuccess('username');
  return true; // sửa lại cho đúng
}

function validateEmail() {
  // TODO
  const value = document.getElementById('email').value;
  if (!value) {
    showError('email', "không được để trống");
    return false;
  }

  const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!regex.test(value)){
    showError('email',"định dạng email không đúng");
    return false;
  }
  showSuccess('email');
  return true; // sửa lại cho đúng
}

function validatePhone() {
  // TODO
  const value = document.getElementById('phone').value;
  if (!value) {
    showError('phone', "không được để trống");
    return false;
  }
  if(value.length!==10) {
    showError('phone',"phải có đúng 10 chữ số")
    return false;
  }
  for(const i in value){
    const code = value.charCodeAt(i);
    if(!(48<=code&&code<=57)){
      showError('phone',"phải có đúng 10 chữ số");
      return false;
    }
  }
  if(value[0]!=='0') {
    showError('phone',"phải bắt đầu bằng số 0");
    return false;
  }
  showSuccess('phone');
  return true; // sửa lại cho đúng
}

function validatePassword() {
  // TODO
  const value = document.getElementById('password').value;
  if (!value) {
    showError('password', "không được để trống");
    return false;
  }
  if(value.length<8) {
    showError('password',"phải có tối thiểu 8 ký tự")
    return false;
  }
  let count1=0;
  let count2=0;
  for(const i in value){
    const code = value.charCodeAt(i);
    if(48<=code&&code<=57){
      count1++;
    }
    if((65<=code&&code<=90)||(97<=code&&code<=122)) {
      count2++;
    }
  }
  if(count1<1||count2<1){
    showError('password',"phải có ít nhất 1 chữ cái và 1 chữ số");
    return false;
  }
  showSuccess('password');
  return true; // sửa lại cho đúng
}

function validateConfirm() {
  // TODO
  // Lưu ý: cần lấy giá trị của CẢ 2 ô "password" và "confirm" để so sánh
  const valuePassword = document.getElementById('password').value;
  const valueConfirm = document.getElementById('confirm').value;
  if (!valueConfirm) {
    showError('confirm', "không được để trống");
    return false;
  }
  if(valueConfirm!==valuePassword) {
    showError('confirm','mật khẩu không khớp');
    return false;
  }
  showSuccess('confirm');
  return true; // sửa lại cho đúng
}

// ========== BƯỚC 4: Gắn sự kiện blur ==========
// TODO: Với mỗi input, lắng nghe sự kiện "blur" (mất focus)
// và gọi hàm validate tương ứng.
//
// Gợi ý:
// document.getElementById('fullname').addEventListener('blur', validateFullname);
// (làm tương tự cho 5 ô còn lại)
document.getElementById('fullname').addEventListener('blur', validateFullname);
document.getElementById('username').addEventListener('blur', validateUsername);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('confirm').addEventListener('blur', validateConfirm);
// ========== BƯỚC 5: Gắn sự kiện submit ==========
// TODO:
// 1. Lắng nghe sự kiện "submit" trên form
// 2. Gọi event.preventDefault() để chặn hành vi mặc định
// 3. Gọi TẤT CẢ 6 hàm validate (không dùng && liên tiếp — xem lý do trong de-bai.md)
// 4. Nếu tất cả đều true -> hiện #result với class "show ok" và nội dung phù hợp
// 5. Nếu có ít nhất 1 false -> hiện #result với class "show fail" và nội dung phù hợp
//
// Gợi ý cấu trúc:
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const checks = [ validateFullname(), validateUsername(), ... ];
//   const isValid = checks.every(Boolean);
//   ...
// });
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const checks = [ validateFullname(), validateUsername(), validateEmail(),validatePhone(),validatePassword(),validateConfirm() ];
  const isValid = checks.every(Boolean);
  resultBox.classList.remove('show', 'ok', 'fail');
  const resultValue = document.getElementById("result");
  if(isValid){
    resultValue.classList.add("show");
    resultValue.classList.add("ok");
    resultValue.textContent='✔ Hợp lệ! Dữ liệu sẵn sàng để gửi lên server.';
  } else {
    resultValue.classList.add("show");
    resultValue.classList.add("fail");
    resultValue.textContent='✘ Vui lòng sửa các lỗi được đánh dấu đỏ ở trên.';
  }
});