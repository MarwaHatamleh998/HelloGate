// ========================================
// المرحلة الثانية: تعديل النصوص داخل الصفحة
// غيّر عنوان المتجر باستخدام innerText
// ========================================

let storeTitle = document.getElementById("store-title");

storeTitle.innerText = "Smart Home Products Store";

// ========================================
// أضف عرضًا يحتوي على كلمة <strong>
// باستخدام innerHTML
// ========================================

let offerBox = document.getElementById("offer-box");

offerBox.innerHTML =
  "Special Offer: <strong>30% off</strong> on kitchen tools!";

// ========================================
// عدّل وصف أحد المنتجات باستخدام textContent
// ========================================

let productDescription = document.querySelector(".product-description");

productDescription.textContent =
  "A modern wooden table suitable for living rooms and offices.";

// ========================================
// المرحلة الثالثة: إنشاء منتج جديد
// أنشئ بطاقة منتج جديدة باستخدام createElement()
// ========================================

let newProduct = document.createElement("div");

newProduct.classList.add("product-card");
// ========================================
// أنشئ عنوان المنتج <h3>
// ========================================

let productTitle = document.createElement("h3");

productTitle.textContent = "Smart Kitchen Lamp";

// ========================================
// أنشئ وصف المنتج <p>
// ========================================

let productText = document.createElement("p");

productText.textContent =
  "A smart lamp that adds warm lighting to your kitchen.";

// ========================================
// المرحلة الرابعة: إضافة العناصر إلى الصفحة
// أضف عنوان ووصف المنتج داخل البطاقة
// ========================================

newProduct.appendChild(productTitle);

newProduct.appendChild(productText);

// ========================================
// أضف بطاقة المنتج داخل قسم المنتجات
// ========================================

let productsContainer = document.getElementById("products-container");

productsContainer.appendChild(newProduct);

document.getElementById("product-card").style.backgroundColor = "white";