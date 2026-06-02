// اكتب دالة باسم calculatePi تستقبل عدد الحدود n، ثم تستخدم صيغة Leibniz لحساب قيمة π بشكل تقريبي.

// يجب أن تقوم الدالة بـ:

// إنشاء متغير لتخزين مجموع الحدود.
// استخدام حلقة لتكرار الحساب حسب قيمة n.
// حساب المقام باستخدام الأعداد الفردية.
// تبديل الإشارة بين الجمع والطرح.
// إرجاع قيمة π باستخدام return.


function calculatePi(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let denominator = 2 * i + 1; 

        if (i % 2 === 0) {
            sum += 1 / denominator;
        } else {
            sum -= 1 / denominator;
        }
    }

    return 4 * sum;
}

console.log(calculatePi(1000));