







// Initialize EmailJS
emailjs.init("3o_Ok3aG0DS4-OWJo"); // استبدل بـ EmailJS User ID الخاص بك

// تعريف دالة updateStars في نطاق عام
const updateStars = (value) => {
    const starsPreview = document.getElementById("starsPreview");
    if (starsPreview) {
        const stars = starsPreview.querySelectorAll("span");
        stars.forEach((star, index) => {
            star.style.color = index < value ? "#00c5d3" : "#ccc";
        });
    }
};

// دالة للحصول على الوقت بتوقيت القاهرة بصيغة 12 ساعة
const getCairoTime = () => {
    const options = {
        timeZone: 'Africa/Cairo', // توقيت القاهرة
        hour12: true, // استخدام صيغة 12 ساعة
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat('ar-EG', options); // تنسيق الوقت بتوقيت القاهرة
    return formatter.format(new Date());
};

// Handle the form submission
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Form elements
    const serviceName = document.getElementById("serviceName");
    const username = document.getElementById("username");
    const job = document.getElementById("job");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const ratingInput = document.getElementById("ratingInput");
    const loader = document.getElementById("dira");
    const thanks = document.querySelector(".thanks");

    // Prepare form data
    const formData = {
        service_name: serviceName.value.trim(),
        username: username.value.trim(), 
        job: job.value.trim(), 
        email: email.value.trim(), 
        message: message.value.trim(),
        rating: parseInt(ratingInput.value.trim()), 
        timestamp: getCairoTime() 
    };

    console.log("Form Data:", formData); 

    // Validate required fields
    if (!formData.service_name || !formData.username || !formData.job || !formData.email || !formData.rating || !formData.message) {
        alert("Please fill in all required fields!");
        return;
    }

    // Validate rating
    if (formData.rating < 1 || formData.rating > 5) {
        alert("Rating must be between 1 and 5!");
        ratingInput.focus();
        return;
    }

    // Show loading indicator
    if (loader) loader.style.display = "block";

    try {
        // Send email via EmailJS
        const response = await emailjs.send(
            "rate-service", // استبدل بـ Service ID الخاص بك
            "template_nav13vb", // استبدل بـ Template ID الخاص بك
            formData
        );

        console.log("EmailJS Response:", response); // تصحيح: عرض استجابة EmailJS

        // Reset form
        document.getElementById("contactForm").reset();
        updateStars(1); // إعادة تعيين النجوم إلى الحالة الافتراضية

        // Show success message
        if (thanks) {
            thanks.style.display = "block";
            document.getElementById("backo").style.display="none"
            setTimeout(() => {
                thanks.style.display = "none";
            }, 10000); // إخفاء الرسالة بعد 10 ثوانٍ
            document.getElementById('con-1').style.marginLeft ='390px'
        }
    } catch (error) {
        console.error("Submission error:", error); // تصحيح: عرض الخطأ بالتفصيل
        alert("Error submitting form! Please try again.");
    } finally {
        // Hide loading indicator
        if (loader) loader.style.display = "none";
    }
});

// Star rating handling
const ratingInput = document.getElementById("ratingInput");
const starsPreview = document.getElementById("starsPreview");
let currentRating = 1;

if (ratingInput && starsPreview) {
    const stars = starsPreview.querySelectorAll("span");

    // Input validation
    const validateRating = (value) => {
        if (isNaN(value)) return 1;
        return Math.min(5, Math.max(1, value));
    };

    // Input event handling
    ratingInput.addEventListener("input", (e) => {
        let value = parseInt(e.target.value);

        if (isNaN(value)) {
            currentRating = 1;
            updateStars(0);
            return;
        }

        currentRating = validateRating(value);
        e.target.value = currentRating;
        updateStars(currentRating);
    });

    // Blur event handling
    ratingInput.addEventListener("blur", () => {
        if (ratingInput.value === "" || isNaN(ratingInput.value)) {
            currentRating = 1;
            ratingInput.value = currentRating;
            updateStars(currentRating);
        }
    });

    // Initial setup
    updateStars(1);
}

