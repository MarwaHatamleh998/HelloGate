let NameOfUniversity_1 = "Jordan University Of Science and Technology";
let NameOfUniversity_2 = "Princess Sumaya University for Technology";
let NumOfResearchers_1 = 150;
let NumOfResearchers_2 = 100;
let isValid__1 = true;
let isValid__2 = true;
let NameOfResearcher;
let NamesOfScientists = {};

//احسب عدد الأبحاث بعد سنة إذا زادت بمقدار 20 بحث.

let total = NumOfResearchers_1 + 20;
console.log(total);

//تحقق إذا كان عدد الأبحاث أكبر من 100 و الجامعة معتمدة.

if (NumOfResearchers_1 > 100 && isValid__1) {
  console.log("Yes, Hi into Our System");
}

//دمج اسم الجامعة مع رسالة توضيحية.

console.log("Hi, You'r in" + NumOfResearchers_1 + "System");

// استخراج أول حرف من اسم الجامعة.
console.log(NameOfUniversity_1[0]);

// مقارنة اسمين لجامعتين.

console.log(NumOfResearchers_1 === "JUST Unversity");

// تعريف متغيرين لجامعتين مختلفتين.
// Done

// مقارنة عدد الأبحاث بينهما.
console.log(
  "The Number of Resarchers for First University is " +
    NameOfUniversity_1 +
    " " +
    NumOfResearchers_1 +
    " and the secound Unviversit is " +
    NameOfUniversity_2 +
    " " +
    NumOfResearchers_2,
);

// طباعة الجامعة الأفضل بناءً على العدد.
if (NumOfResearchers_1 > NumOfResearchers_2) {
  console.log("The best Unversity is " + NameOfUniversity_1);
} else {
  console.log("The best Unversity is " + NameOfUniversity_2);
}
