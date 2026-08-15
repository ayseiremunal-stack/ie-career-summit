const dayButtons = document.querySelectorAll(".day-button");
const scheduleLists = document.querySelectorAll(".schedule-list");

dayButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedDay = button.dataset.day;

        dayButtons.forEach(function (dayButton) {
            dayButton.classList.remove("active");
        });

        scheduleLists.forEach(function (schedule) {
            schedule.classList.add("hidden");
        });

        button.classList.add("active");

        document
            .getElementById(selectedDay)
            .classList.remove("hidden");
    });
});
const applicationForm = document.getElementById("application-form");
const formMessage = document.getElementById("form-message");

applicationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document
        .getElementById("full-name")
        .value
        .trim();

    if (fullName === "") {
        formMessage.textContent =
            "Lütfen adınızı ve soyadınızı girin.";

        formMessage.classList.remove("success");
        formMessage.classList.add("error");
        formMessage.style.display = "block";

        return;
    }

    formMessage.textContent =
        "Teşekkürler " + fullName +
        "! Demo başvurunuz başarıyla oluşturuldu.";

    formMessage.classList.remove("error");
    formMessage.classList.add("success");
    formMessage.style.display = "block";

    const applicationData = {
    fullName: document.getElementById("full-name").value,
    email: document.getElementById("email").value,
    university: document.getElementById("university").value,
    department: document.getElementById("department").value,
    classYear: document.getElementById("class-year").value,
    attendanceDay: document.getElementById("attendance-day").value
};

localStorage.setItem(
    "ieCareerSummitApplication",
    JSON.stringify(applicationData)
);
    
    
    
    
    applicationForm.reset();
});
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const faqItem = question.parentElement;

        faqItem.classList.toggle("active");
    });
});