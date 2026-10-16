console.log("--- Câu 1 ---");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

console.log("--- Câu 2 ---");
let tien = 100000;
let soLan = 0;
while (tien >= 30000) {
  tien -= 30000;
  soLan++;
}
console.log("Số lần tiêu:", soLan, "| Còn lại:", tien);

console.log("--- Câu 3 ---");
let i3 = 10;
do {
  console.log("Chạy ít nhất 1 lần");
  i3++;
} while (i3 < 5);

console.log("--- Câu 4 ---");
for (let i = 51; ; i++) {
  if (i % 7 === 0) {
    console.log(i);
    break;
  }
}

console.log("--- Câu 5 ---");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

console.log("--- Câu 6 ---");
let i6 = 10;
while (i6 > 0) {
  console.log(i6);
  i6--;
}

console.log("--- Câu 7 ---");
let i7 = 5;
while (i7 >= 1) {
  console.log(i7);
  i7--;
}

console.log("--- Câu 8 ---");
for (let i = 1; i <= 10; i++) {
  console.log("2 x " + i + " = " + 2 * i);
}

console.log("--- Câu 9 ---");
function tinhDienTich(dai, rong) {
  return dai * rong;
}
console.log(tinhDienTich(4, 5));

console.log("--- Câu 10 ---");
function chao(ten = "bạn") {
  console.log("Xin chào " + ten);
}
chao();
chao("Lan");

console.log("--- Câu 11 ---");
function f(a) {
  console.log(a * 2);
}
let x = f(3);
console.log(x);

console.log("--- Câu 12 ---");
const binhPhuong = (x) => x * x;
console.log(binhPhuong(5));

console.log("--- Câu 14 ---");
function test() {
  let a = 1;
  return a;
}
console.log(test());

console.log("--- Câu 15 ---");
function tongTu1Den(n) {
  let tong = 0;
  for (let i = 1; i <= n; i++) {
    tong += i;
  }
  return tong;
}
console.log(tongTu1Den(100));

console.log("--- Câu 16 ---");
function tinhTrungBinh(a, b, c) {
  return (a + b + c) / 3;
}
console.log(tinhTrungBinh(8, 9, 10));

console.log("--- Câu 17 ---");
function kiemTraChanLe(n) {
  if (n % 2 === 0) {
    return "chẵn";
  } else {
    return "lẻ";
  }
}
console.log(kiemTraChanLe(7));
console.log(kiemTraChanLe(10));

console.log("--- Câu 18 ---");
function giaiThua(n) {
  let kq = 1;
  for (let i = 1; i <= n; i++) {
    kq *= i;
  }
  return kq;
}
console.log(giaiThua(5));
