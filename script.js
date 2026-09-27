// ==========================================
// SHOW DIFFERENT SECTIONS
// ==========================================

function showSection(sectionId, clickedElement) {

    // Hide all sections
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active-section");
    });


    // Show selected section
    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active-section");
    }


    // Remove active class from navigation
    const navLinks =
        document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.classList.remove("active");
    });


    // Add active class
    if (clickedElement) {
        clickedElement.classList.add("active");
    }


    // Close mobile sidebar
    document.querySelector(".sidebar")
        .classList.remove("mobile-open");
}


// ==========================================
// MOBILE SIDEBAR
// ==========================================

function toggleSidebar() {

    document.querySelector(".sidebar")
        .classList.toggle("mobile-open");

}


// ==========================================
// DARK MODE
// ==========================================

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button =
        document.querySelector(".theme-btn span");

    if (document.body.classList.contains("dark")) {

        button.textContent = "Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        button.textContent = "Dark Mode";

        localStorage.setItem("theme", "light");

    }

}


// ==========================================
// REMEMBER THEME
// ==========================================

window.addEventListener("load", function () {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        document.querySelector(".theme-btn span")
            .textContent = "Light Mode";
    }

});


// ==========================================
// COURSE START
// ==========================================

function startCourse(courseName) {

    showToast(
        "Opening " + courseName + "..."
    );

}


// ==========================================
// TOAST MESSAGE
// ==========================================

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


// ==========================================
// TASK UPDATE
// ==========================================

function updateTasks(checkbox) {

    const task =
        checkbox.closest(".task");

    const text =
        task.querySelector("span");


    if (checkbox.checked) {

        task.classList.add("completed-task");

        showToast("Task completed successfully!");

    } else {

        task.classList.remove("completed-task");

        showToast("Task marked as pending.");

    }


    updatePendingCount();

}


// ==========================================
// UPDATE PENDING TASK COUNT
// ==========================================

function updatePendingCount() {

    const checkboxes =
        document.querySelectorAll(".task input");

    let pending = 0;


    checkboxes.forEach(function (checkbox) {

        if (!checkbox.checked) {
            pending++;
        }

    });


    document.getElementById("pendingCount")
        .textContent = pending;

}


// ==========================================
// COURSE SEARCH
// ==========================================

function searchCourses() {

    const input =
        document.getElementById("courseSearch");

    const searchValue =
        input.value.toLowerCase();


    const courses =
        document.querySelectorAll(".course-card");


    courses.forEach(function (course) {

        const courseText =
            course.innerText.toLowerCase();


        if (courseText.includes(searchValue)) {

            course.style.display = "block";

        } else {

            course.style.display = "none";

        }

    });

}


// ==========================================
// OPEN COURSE MODAL
// ==========================================

function openCourseModal() {

    document
        .getElementById("courseModal")
        .classList.add("show");

}


// ==========================================
// CLOSE COURSE MODAL
// ==========================================

function closeCourseModal() {

    document
        .getElementById("courseModal")
        .classList.remove("show");

}


// ==========================================
// ADD NEW COURSE
// ==========================================

function addCourse() {

    const input =
        document.getElementById("newCourse");

    const courseName =
        input.value.trim();


    if (courseName === "") {

        showToast("Please enter a course name.");

        return;
    }


    const courseGrid =
        document.getElementById("courseGrid");


    const newCard =
        document.createElement("div");

    newCard.className = "course-card";


    newCard.innerHTML = `

        <div class="course-top react">
            New Course
        </div>

        <div class="course-content">

            <span class="level">
                Beginner
            </span>

            <h3>${courseName}</h3>

            <p>
                Your newly added learning course.
            </p>

            <div class="course-progress">

                <span>
                    0% Complete
                </span>

                <div class="progress-bar">

                    <div
                        class="progress-value"
                        style="width:0%">
                    </div>

                </div>

            </div>

            <button
                class="primary-btn"
                onclick="startCourse('${courseName}')">

                Start Learning

            </button>

        </div>
    `;


    courseGrid.appendChild(newCard);


    // Update course count
    const count =
        document.querySelectorAll(".course-card").length;

    document.getElementById("courseCount")
        .textContent = count;


    input.value = "";

    closeCourseModal();

    showToast(
        courseName + " added successfully!"
    );

}


// ==========================================
// SUBMIT ASSIGNMENT
// ==========================================

function submitAssignment(button) {

    const row =
        button.closest(".table-row");

    const status =
        row.querySelector(".status");


    status.textContent = "Completed";

    status.classList.remove("pending");

    status.classList.add("completed");


    button.textContent = "Submitted";

    button.disabled = true;


    showToast(
        "Assignment submitted successfully!"
    );

}


// ==========================================
// NOTIFICATION
// ==========================================

function showNotification() {

    showToast(
        "You have 3 pending assignments."
    );

}


// ==========================================
// EDIT PROFILE
// ==========================================

function editProfile() {

    const name =
        prompt(
            "Enter your name:",
            "Chandini"
        );


    if (name && name.trim() !== "") {

        document.querySelector(
            ".student-mini strong"
        ).textContent = name;


        document.querySelector(
            ".profile-card h2"
        ).textContent = name;


        showToast(
            "Profile updated successfully!"
        );

    }

}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

    const confirmation =
        confirm(
            "Are you sure you want to logout?"
        );


    if (confirmation) {

        showToast(
            "Logged out successfully."
        );

    }

}