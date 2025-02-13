







// // Initialize EmailJS
// emailjs.init("3o_Ok3aG0DS4-OWJo"); // استبدل بـ EmailJS User ID الخاص بك

// // تعريف دالة updateStars في نطاق عام
// const updateStars = (value) => {
//     const starsPreview = document.getElementById("starsPreview");
//     if (starsPreview) {
//         const stars = starsPreview.querySelectorAll("span");
//         stars.forEach((star, index) => {
//             star.style.color = index < value ? "#00c5d3" : "#ccc";
//         });
//     }
// };

// // دالة للحصول على الوقت بتوقيت القاهرة بصيغة 12 ساعة
// const getCairoTime = () => {
//     const options = {
//         timeZone: 'Africa/Cairo', // توقيت القاهرة
//         hour12: true, // استخدام صيغة 12 ساعة
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric'
//     };
//     const formatter = new Intl.DateTimeFormat('ar-EG', options); // تنسيق الوقت بتوقيت القاهرة
//     return formatter.format(new Date());
// };

// // Handle the form submission
// document.getElementById("contactForm").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     // Form elements
//     const serviceName = document.getElementById("serviceName");
//     const username = document.getElementById("username");
//     const job = document.getElementById("job");
//     const email = document.getElementById("email");
//     const message = document.getElementById("message");
//     const ratingInput = document.getElementById("ratingInput");
//     const loader = document.getElementById("dira");
//     const thanks = document.querySelector(".thanks");

//     // Prepare form data
//     const formData = {
//         service_name: serviceName.value.trim(),
//         username: username.value.trim(), 
//         job: job.value.trim(), 
//         email: email.value.trim(), 
//         message: message.value.trim(),
//         rating: parseInt(ratingInput.value.trim()), 
//         timestamp: getCairoTime() 
//     };

//     console.log("Form Data:", formData); 

//     // Validate required fields
//     if (!formData.service_name || !formData.username || !formData.job || !formData.email || !formData.rating || !formData.message) {
//         alert("Please fill in all required fields!");
//         return;
//     }

//     // Validate rating
//     if (formData.rating < 1 || formData.rating > 5) {
//         alert("Rating must be between 1 and 5!");
//         ratingInput.focus();
//         return;
//     }

//     // Show loading indicator
//     if (loader) loader.style.display = "block";

//     try {
//         // Send email via EmailJS
//         const response = await emailjs.send(
//             "rate-service", // استبدل بـ Service ID الخاص بك
//             "template_nav13vb", // استبدل بـ Template ID الخاص بك
//             formData
//         );

//         console.log("EmailJS Response:", response); // تصحيح: عرض استجابة EmailJS

//         // Reset form
//         document.getElementById("contactForm").reset();
//         updateStars(1); // إعادة تعيين النجوم إلى الحالة الافتراضية

//         // Show success message
//         if (thanks) {
//             thanks.style.display = "block";
//             document.getElementById("backo").style.display="none"
//             setTimeout(() => {
//                 thanks.style.display = "none";
//             }, 10000); // إخفاء الرسالة بعد 10 ثوانٍ
//             document.getElementById('con-1').style.marginLeft ='390px'
//         }
//     } catch (error) {
//         console.error("Submission error:", error); // تصحيح: عرض الخطأ بالتفصيل
//         alert("Error submitting form! Please try again.");
//     } finally {
//         // Hide loading indicator
//         if (loader) loader.style.display = "none";
//     }
// });

// // Star rating handling
// const ratingInput = document.getElementById("ratingInput");
// const starsPreview = document.getElementById("starsPreview");
// let currentRating = 1;

// if (ratingInput && starsPreview) {
//     const stars = starsPreview.querySelectorAll("span");

//     // Input validation
//     const validateRating = (value) => {
//         if (isNaN(value)) return 1;
//         return Math.min(5, Math.max(1, value));
//     };

//     // Input event handling
//     ratingInput.addEventListener("input", (e) => {
//         let value = parseInt(e.target.value);

//         if (isNaN(value)) {
//             currentRating = 1;
//             updateStars(0);
//             return;
//         }

//         currentRating = validateRating(value);
//         e.target.value = currentRating;
//         updateStars(currentRating);
//     });

//     // Blur event handling
//     ratingInput.addEventListener("blur", () => {
//         if (ratingInput.value === "" || isNaN(ratingInput.value)) {
//             currentRating = 1;
//             ratingInput.value = currentRating;
//             updateStars(currentRating);
//         }
//     });

//     // Initial setup
//     updateStars(1);
// }












// // Initialize EmailJS
// emailjs.init("3o_Ok3aG0DS4-OWJo"); // استبدل بـ EmailJS User ID الخاص بك

// // تعريف دالة updateStars في نطاق عام
// const updateStars = (value) => {
//     const starsPreview = document.getElementById("starsPreview");
//     if (starsPreview) {
//         const stars = starsPreview.querySelectorAll("span");
//         stars.forEach((star, index) => {
//             star.style.color = index < value ? "#00c5d3" : "#ccc";
//         });
//     }
// };

// // دالة للحصول على الوقت بتوقيت القاهرة بصيغة 12 ساعة
// const getCairoTime = () => {
//     const options = {
//         timeZone: 'Africa/Cairo',
//         hour12: true,
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric'
//     };
//     const formatter = new Intl.DateTimeFormat('ar-EG', options);
//     return formatter.format(new Date());
// };

// // الحقول
// const fields = {
//     serviceName: document.getElementById("serviceName"),
//     username: document.getElementById("username"),
//     job: document.getElementById("job"),
//     email: document.getElementById("email"),
//     message: document.getElementById("message"),
//     ratingInput: document.getElementById("ratingInput")
// };

// // دالة للتحقق من صحة الإدخال
// const validateField = (input) => {
//     if (input.value.trim()) {
//         // console.log(`✅ تم إدخال قيمة صالحة في الحقل: ${input.id}`);
//         input.style.border="#ffffff00 solid 0px";
        
//         document.querySelector(".div-input").style.border="#ffffff00 solid 6px";
//         document.querySelector(".div-input").style.borderLeft="#24b29d solid 6px";
//         document.querySelector(".div-input").style.borderRight="#24b29d solid 6px";
//         document.querySelector(".img3").style.display="none"
//         document.querySelector(".img2").style.display="none"
//         document.querySelector(".img").style.display="flex"
        


//     } else {
//         invalidateField(input);
//     }
// };

// // دالة لمعالجة الإدخال غير الصحيح
// const invalidateField = (input) => {
//     // console.log(`❌ إدخال غير صالح في الحقل: ${input.id}`);
    
//         document.querySelector(".div-input").style.border="#ffffff00 solid 6px";
//         document.querySelector(".div-input").style.borderLeft="red solid 6px";
//         document.querySelector(".div-input").style.borderRight="red solid 6px";
//         document.querySelector(".img3").style.display="none"
//         document.querySelector(".img2").style.display="flex"
//         document.querySelector(".img").style.display="none"



// };

// // إضافة حدث التحقق لكل حقل
// Object.values(fields).forEach((field) => {
//     field.addEventListener("input", () => validateField(field));
// });

// // Handle the form submission
// document.getElementById("contactForm").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     // Form elements
//     const loader = document.getElementById("dira");
//     const thanks = document.querySelector(".thanks");

//     // Prepare form data
//     const formData = {
//         service_name: fields.serviceName.value.trim(),
//         username: fields.username.value.trim(),
//         job: fields.job.value.trim(),
//         email: fields.email.value.trim(),
//         message: fields.message.value.trim(),
//         rating: parseInt(fields.ratingInput.value.trim()),
//         timestamp: getCairoTime()
//     };

//     console.log("Form Data:", formData);

//     // Validate required fields
//     let allValid = true;
//     Object.values(fields).forEach((field) => {
//         if (!field.value.trim()) {
//             invalidateField(field);
//             allValid = false;
//         }
//     });

//     if (!allValid) {
//         alert("يرجى ملء جميع الحقول بشكل صحيح!");
//         return;
//     }

//     // Validate rating
//     if (formData.rating < 1 || formData.rating > 5) {
//         alert("يجب أن يكون التقييم بين 1 و 5!");
//         fields.ratingInput.focus();
//         return;
//     }

//     // Show loading indicator
//     if (loader) loader.style.display = "block";

//     try {
//         // Send email via EmailJS
//         const response = await emailjs.send(
//             "rate-service", // استبدل بـ Service ID الخاص بك
//             "template_nav13vb", // استبدل بـ Template ID الخاص بك
//             formData
//         );

//         console.log("EmailJS Response:", response);

//         // Reset form
//         document.getElementById("contactForm").reset();
//         updateStars(1);

//         // Show success message
//         if (thanks) {
//             thanks.style.display = "block";
//             document.getElementById("backo").style.display = "none";
//             setTimeout(() => {
//                 thanks.style.display = "none";
//             }, 10000);
//             document.getElementById('con-1').style.marginLeft = '390px';
//         }
//     } catch (error) {
//         console.error("Submission error:", error);
//         alert("حدث خطأ أثناء إرسال النموذج! حاول مرة أخرى.");
//     } finally {
//         // Hide loading indicator
//         if (loader) loader.style.display = "none";
//     }
// });

// // Star rating handling
// const starsPreview = document.getElementById("starsPreview");
// let currentRating = 1;

// if (fields.ratingInput && starsPreview) {
//     const stars = starsPreview.querySelectorAll("span");

//     // Input validation
//     const validateRating = (value) => {
//         if (isNaN(value)) return 1;
//         return Math.min(5, Math.max(1, value));
//     };

//     // Input event handling
//     fields.ratingInput.addEventListener("input", (e) => {
//         let value = parseInt(e.target.value);

//         if (isNaN(value)) {
//             currentRating = 1;
//             updateStars(0);
//             return;
//         }

//         currentRating = validateRating(value);
//         e.target.value = currentRating;
//         updateStars(currentRating);
//     });

//     // Blur event handling
//     fields.ratingInput.addEventListener("blur", () => {
//         if (fields.ratingInput.value === "" || isNaN(fields.ratingInput.value)) {
//             currentRating = 1;
//             fields.ratingInput.value = currentRating;
//             updateStars(currentRating);
//         }
//     });

//     // Initial setup
//     updateStars(1);
// }















// // Initialize EmailJS
// emailjs.init("3o_Ok3aG0DS4-OWJo"); // استبدل بـ EmailJS User ID الخاص بك

// // دالة للحصول على الوقت بتوقيت القاهرة
// const getCairoTime = () => {
//     const options = { timeZone: 'Africa/Cairo', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
//     return new Intl.DateTimeFormat('ar-EG', options).format(new Date());
// };

// // الحقول
// const fields = {
//     serviceName: document.getElementById("serviceName"),
//     username: document.getElementById("username"),
//     job: document.getElementById("job"),
//     email: document.getElementById("email"),
//     message: document.getElementById("message"),
//     ratingInput: document.getElementById("ratingInput")
// };

// // دالة التحقق من صحة الحقل بناءً على نوعه
// const validateField = (input) => {
//     const parentDiv = input.closest(".div-input"); // الحاوية الخاصة بالحقل
//     let isValid = false; // متغير لتحديد هل الإدخال صحيح أم لا

//     // التحقق حسب نوع الحقل
//     switch (input.id) {
//         case "username":
//             isValid = input.value.trim().split(" ").length >= 2; // يجب أن يكون هناك على الأقل اسمين
//             break;
//         case "email":
//             isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()); // التحقق من صحة البريد الإلكتروني
//             break;
//         case "job":
//         case "serviceName":
//             isValid = input.value.trim().length > 0; // يجب ألا يكون فارغًا
//             break;
//         case "message":
//             isValid = input.value.trim().length >= 10; // يجب أن يكون على الأقل 10 أحرف
//             break;
//         case "ratingInput":
//             let rating = parseInt(input.value.trim());
//             isValid = !isNaN(rating) && rating >= 1 && rating <= 5; // يجب أن يكون بين 1 و 5
//             break;
//         default:
//             isValid = input.value.trim().length > 0; // أي حقل آخر يجب ألا يكون فارغًا
//     }

//     // تطبيق التأثيرات بناءً على التحقق
//     if (isValid) {
//         applyValidStyle(parentDiv);
//     } else {
//         applyInvalidStyle(parentDiv);
//     }
// };

// // دالة تطبيق التنسيق الصحيح عند إدخال قيمة صحيحة
// const applyValidStyle = (parentDiv) => {
//     if (parentDiv) {
//       parentDiv.style.backgroundColor = "rgba(0, 95, 81, 0.43)";

//         parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
//         parentDiv.style.borderLeft = "6px solid  #24b29d";
//         parentDiv.style.borderRight = "6px solid  #24b29d";
//         const img = parentDiv.querySelector(".img");
//         // const img2 = parentDiv.querySelector(".img2");
//         const img3 = parentDiv.querySelector(".img3");
//         const imgn = parentDiv.querySelector(".img-in");
//         if (img) img.style.display = "flex";
//         // if (img2) img2.style.display = "none";
//         if (img3) img3.style.display = "none";
//         setTimeout(() => {
//           if (imgn) imgn.style.display = "block";
//           }, 3000);

//     }
// };

// // دالة تطبيق التنسيق الخطأ عند الإدخال غير الصحيح
// const applyInvalidStyle = (parentDiv) => {
//     if (parentDiv) {
//       parentDiv.style.backgroundColor = " #005f663b";

//       parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
//       parentDiv.style.borderLeft = "6px solid #ffffff";
//               const img = parentDiv.querySelector(".img");
//         const img3 = parentDiv.querySelector(".img3");
//         const imgn = parentDiv.querySelector(".img-in");
//         if (img) img.style.display = "none";
//         if (img3) img3.style.display = "flex";
//         if (imgn) imgn.style.display = "none";
//     }
// };

// // إضافة حدث التحقق أثناء الكتابة (بدلًا من الانتظار للـ blur)
// Object.values(fields).forEach((field) => {
//     field.addEventListener("input", () => validateField(field));
// });

// // التحقق النهائي عند إرسال النموذج
// document.getElementById("contactForm").addEventListener("submit", async (e) => {
//     e.preventDefault();
    
//     const loader = document.getElementById("dira");
//     const thanks = document.querySelector(".thanks");
//     let allValid = true;

//     // التحقق من جميع الحقول
//     Object.values(fields).forEach((field) => {
//         validateField(field);
//         if (field.closest(".div-input").style.border.includes("red")) {
//             allValid = false;
//         }
//     });

//     if (!allValid) {
//         alert("يرجى ملء جميع الحقول بشكل صحيح!");
//         return;
//     }

//     // إعداد البيانات
//     const formData = {
//         service_name: fields.serviceName.value.trim(),
//         username: fields.username.value.trim(),
//         job: fields.job.value.trim(),
//         email: fields.email.value.trim(),
//         message: fields.message.value.trim(),
//         rating: parseInt(fields.ratingInput.value.trim()),
//         timestamp: getCairoTime()
//     };

//     if (loader) loader.style.display = "block";

//     try {
//         const response = await emailjs.send(
//             "rate-service", 
//             "template_nav13vb", 
//             formData
//         );

//         console.log("EmailJS Response:", response);

//         document.getElementById("contactForm").reset();
//         alert("تم الإرسال بنجاح!");
//     } catch (error) {
//         console.error("Submission error:", error);
//         alert("حدث خطأ أثناء الإرسال! حاول مرة أخرى.");
//     } finally {
//         if (loader) loader.style.display = "none";
//     }
// });




















// // Initialize EmailJS
// emailjs.init("3o_Ok3aG0DS4-OWJo"); // استبدل بـ EmailJS User ID الخاص بك

// // دالة الحصول على الوقت بتوقيت القاهرة
// const getCairoTime = () => {
//     const options = { timeZone: 'Africa/Cairo', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
//     return new Intl.DateTimeFormat('ar-EG', options).format(new Date());
// };

// // الحقول
// const fields = {
//     serviceName: document.getElementById("serviceName"),
//     username: document.getElementById("username"),
//     job: document.getElementById("job"),
//     email: document.getElementById("email"),
//     message: document.getElementById("message"),
//     ratingInput: document.getElementById("ratingInput")
// };

// // دالة التحقق من صحة الحقل بناءً على نوعه
// const validateField = (input) => {
//     const parentDiv = input.closest(".div-input"); 
//     let isValid = false;

//     switch (input.id) {
//         case "username":
//             isValid = input.value.trim().split(" ").length >= 2;
//             break;
//         case "email":
//             isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
//             break;
//         case "job":
//         case "serviceName":
//             isValid = input.value.trim().length > 0;
//             break;
//         case "message":
//             isValid = input.value.trim().length >= 10;
//             break;
//         case "ratingInput":
//             let rating = parseInt(input.value.trim());
//             isValid = !isNaN(rating) && rating >= 1 && rating <= 5;
//             break;
//         default:
//             isValid = input.value.trim().length > 0;
//     }

//     if (isValid) {
//         applyValidStyle(parentDiv);
//     } else {
//         applyInvalidStyle(parentDiv);
//     }
// };

// // دالة تطبيق التنسيق الصحيح عند الإدخال الصحيح
// const applyValidStyle = (parentDiv) => {
//     if (parentDiv) {
//         parentDiv.style.backgroundColor = "rgba(0, 95, 81, 0.43)";
//         parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
//         parentDiv.style.borderLeft = "6px solid #24b29d";
//         parentDiv.style.borderRight = "6px solid #24b29d";

//         const img = parentDiv.querySelector(".img");
//         const img3 = parentDiv.querySelector(".img3");
//         const imgn = parentDiv.querySelector(".img-in");

//         if (img) img.style.display = "flex";
//         if (img3) img3.style.display = "none";
//         setTimeout(() => {
//             if (imgn) imgn.style.display = "block";
//         }, 3000);
//     }
// };

// // دالة تطبيق التنسيق عند الإدخال الخاطئ
// const applyInvalidStyle = (parentDiv) => {
//     if (parentDiv) {
//         parentDiv.style.backgroundColor = " #005f663b";
//         parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
//         parentDiv.style.borderLeft = "6px solid #ffffff";

//         const img = parentDiv.querySelector(".img");
//         const img3 = parentDiv.querySelector(".img3");
//         const imgn = parentDiv.querySelector(".img-in");

//         if (img) img.style.display = "none";
//         if (img3) img3.style.display = "flex";
//         if (imgn) imgn.style.display = "none";
//     }
// };

// // إضافة حدث التحقق أثناء الكتابة
// Object.values(fields).forEach((field) => {
//     field.addEventListener("input", () => validateField(field));
// });

// // إرسال النموذج
// document.getElementById("contactForm").addEventListener("submit", async (e) => {
//     e.preventDefault();
    
//     const loader = document.getElementById("dira");
//     const thanks = document.querySelector(".thanks");
//     let allValid = true;

//     Object.values(fields).forEach((field) => {
//         validateField(field);
//         if (field.closest(".div-input").style.border.includes("red")) {
//             allValid = false;
//         }
//     });

//     if (!allValid) {
//         alert("يرجى ملء جميع الحقول بشكل صحيح!");
//         return;
//     }

//     // إعداد البيانات
//     const formData = {
//         service_name: fields.serviceName.value.trim(),
//         username: fields.username.value.trim(),
//         job: fields.job.value.trim(),
//         email: fields.email.value.trim(),
//         message: fields.message.value.trim(),
//         rating: parseInt(fields.ratingInput.value.trim()),
//         timestamp: getCairoTime()
//     };

//     if (loader) loader.style.display = "block";

//     try {
//         const response = await emailjs.send(
//             "rate-service", 
//             "template_nav13vb", 
//             formData
//         );

//         console.log("EmailJS Response:", response);

//         // **إظهار رسالة الشكر** 🟢
//         if (thanks) {
//             thanks.style.display = "block";
//             document.getElementById("backo").style.display = "none";
//             setTimeout(() => {
//                 thanks.style.display = "none";
//             }, 10000);
//         }

//         // **تمرير الشاشة تلقائيًا إلى الأعلى** 🔄
//         document.getElementById('con-1').scrollIntoView({ behavior: 'smooth' });

//         // **إعادة ضبط النموذج** 🔄
//         document.getElementById("contactForm").reset();

//     } catch (error) {
//         console.error("Submission error:", error);
//         alert("حدث خطأ أثناء الإرسال! حاول مرة أخرى.");
//     } finally {
//         if (loader) loader.style.display = "none";
//     }
// });













// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول
// يعمل جيدا ماعدا اعادة تعين الوان الحقول





// // Initialize EmailJS
// emailjs.init("3o_Ok3aG0DS4-OWJo"); // استبدل بـ EmailJS User ID الخاص بك

// // دالة الحصول على الوقت بتوقيت القاهرة
// const getCairoTime = () => {
//     const options = { timeZone: 'Africa/Cairo', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
//     return new Intl.DateTimeFormat('ar-EG', options).format(new Date());
// };

// // تحديث النجوم بناءً على التقييم
// const updateStars = (value) => {
//     const starsPreview = document.getElementById("starsPreview");
//     if (starsPreview) {
//         const stars = starsPreview.querySelectorAll("span");
//         stars.forEach((star, index) => {
//             star.style.color = index < value ? "#00c5d3" : "#ccc";
//         });
//     }
// };

// // الحقول
// const fields = {
//     serviceName: document.getElementById("serviceName"),
//     username: document.getElementById("username"),
//     job: document.getElementById("job"),
//     email: document.getElementById("email"),
//     message: document.getElementById("message"),
//     ratingInput: document.getElementById("ratingInput")
// };

// // دالة التحقق من صحة الحقل بناءً على نوعه
// const validateField = (input) => {
//     const parentDiv = input.closest(".div-input"); 
//     let isValid = false;

//     switch (input.id) {
//         case "username":
//             isValid = input.value.trim().split(" ").length >= 2;
//             break;
//         case "email":
//             isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
//             break;
//         case "job":
//         case "serviceName":
//             isValid = input.value.trim().length > 0;
//             break;
//         case "message":
//             isValid = input.value.trim().length >= 10;
//             break;
//         case "ratingInput":
//             let rating = parseInt(input.value.trim());
//             isValid = !isNaN(rating) && rating >= 1 && rating <= 5;
//             updateStars(rating); // تحديث النجوم عند إدخال التقييم
//             break;
//         default:
//             isValid = input.value.trim().length > 0;
//     }

//     if (isValid) {
//         applyValidStyle(parentDiv);
//     } else {
//         applyInvalidStyle(parentDiv);
//     }
// };

// // دالة تطبيق التنسيق الصحيح عند الإدخال الصحيح
// const applyValidStyle = (parentDiv) => {
//     if (parentDiv) {
//         parentDiv.style.backgroundColor = "rgba(0, 95, 81, 0.43)";
//         parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
//         parentDiv.style.borderLeft = "6px solid #24b29d";
//         parentDiv.style.borderRight = "6px solid #24b29d";

//         const img = parentDiv.querySelector(".img");
//                 const img3 = parentDiv.querySelector(".img3");
//                 const imgn = parentDiv.querySelector(".img-in");
        
//                 if (img) img.style.display = "flex";
//                 if (img3) img3.style.display = "none";
//                 setTimeout(() => {
//                     if (imgn) imgn.style.display = "block";
//                 }, 3000);
//     }
// };

// // دالة تطبيق التنسيق عند الإدخال الخاطئ
// const applyInvalidStyle = (parentDiv) => {
//     if (parentDiv) {
//         parentDiv.style.backgroundColor = " #005f663b";
//         parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
//         parentDiv.style.borderLeft = "6px solid #ffffff";

//         const img = parentDiv.querySelector(".img");
//                 const img3 = parentDiv.querySelector(".img3");
//                 const imgn = parentDiv.querySelector(".img-in");
        
//                 if (img) img.style.display = "none";
//                 if (img3) img3.style.display = "flex";
//                 if (imgn) imgn.style.display = "none";
//     }
// };

// // إضافة حدث التحقق أثناء الكتابة
// Object.values(fields).forEach((field) => {
//     field.addEventListener("input", () => validateField(field));
// });

// // إرسال النموذج
// document.getElementById("contactForm").addEventListener("submit", async (e) => {
//     e.preventDefault();
    
//     const loader = document.getElementById("dira");
//     const thanks = document.querySelector(".thanks");
//     let allValid = true;

//     Object.values(fields).forEach((field) => {
//         validateField(field);
//         if (field.closest(".div-input").style.border.includes("red")) {
//             allValid = false;
//         }
//     });

//     if (!allValid) {
//         alert("يرجى ملء جميع الحقول بشكل صحيح!");
//         return;
//     }

//     // إعداد البيانات
//     const formData = {
//         service_name: fields.serviceName.value.trim(),
//         username: fields.username.value.trim(),
//         job: fields.job.value.trim(),
//         email: fields.email.value.trim(),
//         message: fields.message.value.trim(),
//         rating: parseInt(fields.ratingInput.value.trim()),
//         timestamp: getCairoTime()
//     };

//     if (loader) loader.style.display = "block";

//     try {
//         const response = await emailjs.send(
//             "rate-service", 
//             "template_nav13vb", 
//             formData
//         );

//         console.log("EmailJS Response:", response);
//         document.getElementById("contactForm").reset();


//         // **إظهار رسالة الشكر** 🟢
//         if (thanks) {
//             thanks.style.display = "block";
//             // document.getElementById("backo").style.display = "none";
//             setTimeout(() => {
//                 thanks.style.display = "none";
//             }, 10000);
//                         document.getElementById('con-1').style.marginLeft = '390px';
//                         document.getElementById('sipo2').style.display = 'flex'
//                         document.getElementById('sipo').style.display = 'none'

//         }
//         updateStars(1); // إعادة تعيين النجوم إلى الحالة الافتراضية

//     } catch (error) {
//         console.error("Submission error:", error);
//         alert("حدث خطأ أثناء الإرسال! حاول مرة أخرى.");
//     } finally {
//         if (loader) loader.style.display = "none";
//     }
// });























// Initialize EmailJS
emailjs.init("3o_Ok3aG0DS4-OWJo"); // استبدل بـ EmailJS User ID الخاص بك

// دالة الحصول على الوقت بتوقيت القاهرة
const getCairoTime = () => {
    const options = { timeZone: 'Africa/Cairo', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('ar-EG', options).format(new Date());
};

// تحديث النجوم بناءً على التقييم
const updateStars = (value) => {
    const starsPreview = document.getElementById("starsPreview");
    if (starsPreview) {
        const stars = starsPreview.querySelectorAll("span");
        stars.forEach((star, index) => {
            star.style.color = index < value ? "#00c5d3" : "#ccc";
        });
    }
};

// الحقول
const fields = {
    serviceName: document.getElementById("serviceName"),
    username: document.getElementById("username"),
    job: document.getElementById("job"),
    email: document.getElementById("email"),
    message: document.getElementById("message"),
    ratingInput: document.getElementById("ratingInput")
};

// دالة التحقق من صحة الحقل بناءً على نوعه
const validateField = (input) => {
    const parentDiv = input.closest(".div-input"); 
    let isValid = false;

    switch (input.id) {
        case "username":
            isValid = input.value.trim().split(" ").length >= 2;
            break;
        case "email":
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
            break;
        case "job":
        case "serviceName":
            isValid = input.value.trim().length > 0;
            break;
        case "message":
            isValid = input.value.trim().length >= 10;
            break;
        case "ratingInput":
            let rating = parseInt(input.value.trim());
            isValid = !isNaN(rating) && rating >= 1 && rating <= 5;
            updateStars(rating);
            break;
        default:
            isValid = input.value.trim().length > 0;
    }

    if (isValid) {
        applyValidStyle(parentDiv);
    } else {
        applyInvalidStyle(parentDiv);
    }
};

// دالة تطبيق التنسيق الصحيح عند الإدخال الصحيح
const applyValidStyle = (parentDiv) => {
    if (parentDiv) {
        parentDiv.style.backgroundColor = "rgba(0, 95, 81, 0.43)";
        parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
        parentDiv.style.borderLeft = "6px solid #24b29d";
        parentDiv.style.borderRight = "6px solid #24b29d";

        const img = parentDiv.querySelector(".img");
        const img3 = parentDiv.querySelector(".img3");
        const imgn = parentDiv.querySelector(".img-in");

        if (img) img.style.display = "flex";
        if (img3) img3.style.display = "none";
        setTimeout(() => {
            if (imgn) imgn.style.display = "block";
        }, 3000);
    }
};

// دالة تطبيق التنسيق عند الإدخال الخاطئ
const applyInvalidStyle = (parentDiv) => {
    if (parentDiv) {
        parentDiv.style.backgroundColor = " #005f663b";
        parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
        parentDiv.style.borderLeft = "6px solid #ffffff";

        const img = parentDiv.querySelector(".img");
        const img3 = parentDiv.querySelector(".img3");
        const imgn = parentDiv.querySelector(".img-in");

        if (img) img.style.display = "none";
        if (img3) img3.style.display = "flex";
        if (imgn) imgn.style.display = "none";
    }
};

// إضافة حدث التحقق أثناء الكتابة
Object.values(fields).forEach((field) => {
    field.addEventListener("input", () => validateField(field));
});

// إرسال النموذج
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const loader = document.getElementById("dira");
    const thanks = document.querySelector(".thanks");
    let allValid = true;

    Object.values(fields).forEach((field) => {
        validateField(field);
        if (field.closest(".div-input").style.border.includes("red")) {
            allValid = false;
        }
    });

    if (!allValid) {
        alert("يرجى ملء جميع الحقول بشكل صحيح!");
        return;
    }

    // إعداد البيانات
    const formData = {
        service_name: fields.serviceName.value.trim(),
        username: fields.username.value.trim(),
        job: fields.job.value.trim(),
        email: fields.email.value.trim(),
        message: fields.message.value.trim(),
        rating: parseInt(fields.ratingInput.value.trim()),
        timestamp: getCairoTime()
    };

    if (loader) loader.style.display = "block";

    try {
        const response = await emailjs.send(
            "rate-service", 
            "template_nav13vb", 
            formData
        );

        console.log("EmailJS Response:", response);
        document.getElementById("contactForm").reset();

        // إعادة تعيين ألوان الحقول بعد الإرسال
        Object.values(fields).forEach((field) => {
            const parentDiv = field.closest(".div-input");
            if (parentDiv) {
                parentDiv.style.backgroundColor = "";
                parentDiv.style.border = "";
                parentDiv.style.borderLeft = "";
                parentDiv.style.borderRight = "";
                
                const img = parentDiv.querySelector(".img");
                const img3 = parentDiv.querySelector(".img3");
                const imgn = parentDiv.querySelector(".img-in");

                if (img) img.style.display = "none";
                if (img3) img3.style.display = "flex";
                if (imgn) imgn.style.display = "none";
            }
        });

        // **إظهار رسالة الشكر** 🟢
        if (thanks) {
            // thanks.style.display = "block";
            // setTimeout(() => {
            //     thanks.style.display = "none";
            // }, 10000);
            document.getElementById('con-1').style.marginLeft = '390px';
            document.getElementById('form-v-cont2').style.marginLeft = '820px';
            document.getElementById('sipo2').style.display = 'flex';
            document.getElementById('sipo').style.display = 'none';
            document.querySelector(".form-v-cont2").style.marginLeft ='820px'

        }
        updateStars(1); // إعادة تعيين النجوم إلى الحالة الافتراضية

    } catch (error) {
        console.error("Submission error:", error);
        alert("حدث خطأ أثناء الإرسال! حاول مرة أخرى.");
    } finally {
        if (loader) loader.style.display = "none";
    }
});
