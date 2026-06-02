// Freelancers Data Management System

let freelancers = ["Ahmad", "Sara", "Omar"];
let jobs = ["Carpenter", "Electrician", "Plumber"];
let orders = [5, 8, 3];

// عرض عدد أصحاب المهن الحرة
console.log("Number of freelancers: " + freelancers.length);

// الوصول إلى أول عنصر باستخدام الفهرس
console.log("First freelancer: " + freelancers[0]); // خطأ  // fix 

// إضافة صاحب مهنة جديد
freelancers.push("Lina");
jobs.push("Designer"); // fix
// خطأ: لم يتم إضافة عدد الطلبات

// استبدال مهنة Sara
jobs.splice(1, 1, "Graphic Designer"); // خطأ // fix

// عرض البيانات باستخدام for loop
for (let i = 0; i < freelancers.length; i++) {
  console.log(freelancers[i] + " - " + jobs[i] + " - Orders: " + orders[i]);
}

// إنشاء مصفوفة جديدة باستخدام map
let updatedOrders = orders.map(function(order) {
  return order + 2;
});

console.log(updatedOrders);