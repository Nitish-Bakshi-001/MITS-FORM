// Course data
const courses = [
  {
    name: "Full Stack Development (JAVA)",
    icon: "fas fa-code",
    description: "Complete Java-based web development",
    image: "https://wallpapercave.com/wp/wp6599799.jpg",
  },
  {
    name: "Full Stack Development (Python)",
    icon: "fas fa-code",
    description: "Python web development with modern frameworks",
    image: "https://wallpapercave.com/wp/wp12448213.png",
  },
  {
    name: "Data Science",
    icon: "fas fa-chart-bar",
    description: "Analytics and data-driven insights",
    image: "https://wallpapercave.com/wp/wp12624870.jpg",
  },
  {
    name: "Machine Learning & AI",
    icon: "fas fa-brain",
    description: "Artificial Intelligence and ML algorithms",
    image: "https://wallpapercave.com/wp/wp13664558.jpg",
  },
  {
    name: "Digital Marketing",
    icon: "fas fa-chart-line",
    description: "Online marketing strategies and tools",
    image: "https://wallpapercave.com/wp/wp3950063.jpg",
  },
  {
    name: "Graphic Designing",
    icon: "fas fa-palette",
    description: "Visual design and creative skills",
    image: "https://wallpapercave.com/wp/wp12541709.jpg",
  },
  {
    name: "Basic Computer Course",
    icon: "fas fa-desktop",
    description: "Fundamental computer skills",
    image: "https://wallpapercave.com/wp/wp12541709.jpg",
  },
  {
    name: "Indian & International Accounting",
    icon: "fas fa-calculator",
    description: "Accounting principles and practices",
    image: "https://wallpapercave.com/wp/wp13083567.jpg",
  },
  {
    name: "Spoken English & Personality Development",
    icon: "fas fa-comments",
    description: "Communication and soft skills",
    image: "https://5.imimg.com/data5/ANDROID/Default/2023/4/299408030/VS/AQ/LD/143612158/product-jpeg.jpg",
  },
  {
    name: "Data Visualization",
    icon: "fas fa-chart-bar",
    description: "Visual representation of data",
    image: "https://wallpapercave.com/wp/wp12337162.jpg",
  },
  {
    name: "C / C++",
    icon: "fas fa-file-code",
    description: "Programming fundamentals",
    image: "https://user-images.githubusercontent.com/79866006/236609770-d36c7858-a686-43f0-be41-250ac679f836.png",
  },
]

// Features data
const features = [
  {
    icon: "fas fa-book-open",
    title: "Industry-relevant curriculum",
    description: "Updated courses matching current market demands",
  },
  {
    icon: "fas fa-users",
    title: "Experienced instructors",
    description: "Learn from industry professionals",
  },
  {
    icon: "fas fa-bullseye",
    title: "Practical, hands-on learning",
    description: "Real projects and practical experience",
  },
  {
    icon: "fas fa-award",
    title: "Placement assistance",
    description: "Career support and job placement help",
  },
  {
    icon: "fas fa-dollar-sign",
    title: "Affordable course options",
    description: "Quality education at competitive prices",
  },
]

// Slider functionality
let slideIndex = 1
let slideInterval

function showSlides(n) {
  const slides = document.querySelectorAll(".slide")
  const indicators = document.querySelectorAll(".indicator")

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  slides.forEach((slide) => slide.classList.remove("active"))
  indicators.forEach((indicator) => indicator.classList.remove("active"))

  slides[slideIndex - 1].classList.add("active")
  indicators[slideIndex - 1].classList.add("active")
}

function currentSlide(n) {
  clearInterval(slideInterval)
  slideIndex = n
  showSlides(slideIndex)
  startSlideShow()
}

function nextSlide() {
  slideIndex++
  showSlides(slideIndex)
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 4000)
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex)
  startSlideShow()
})


// Navigation functionality
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
  // Close mobile menu if open
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("active")
}

// Mobile menu toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.toggle("active")
}

// Populate courses grid
function populateCoursesGrid() {
  const coursesGrid = document.getElementById("courses-grid")
  coursesGrid.innerHTML = ""

  courses.forEach((course) => {
    const courseCard = document.createElement("div")
    courseCard.className = "course-card"
    courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.name}">
                <div class="course-image-overlay"></div>
            </div>
            <div class="course-content">
                <div class="course-icon">
                    <i class="${course.icon}"></i>
                </div>
                <h3 class="course-title">${course.name}</h3>
                <p class="course-description">${course.description}</p>
            </div>
        `
    coursesGrid.appendChild(courseCard)
  })
}

// Populate features grid
function populateFeaturesGrid() {
  const featuresGrid = document.getElementById("features-grid")
  featuresGrid.innerHTML = ""

  features.forEach((feature) => {
    const featureItem = document.createElement("div")
    featureItem.className = "feature-item"
    featureItem.innerHTML = `
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>
            <h4 class="feature-title">${feature.title}</h4>
            <p class="feature-description">${feature.description}</p>
        `
    featuresGrid.appendChild(featureItem)
  })
}

// Populate course options in contact form
function populateCourseOptions() {
  const courseSelect = document.getElementById("course")
  courses.forEach((course) => {
    const option = document.createElement("option")
    option.value = course.name.toLowerCase().replace(/\s+/g, "-")
    option.textContent = course.name
    courseSelect.appendChild(option)
  })
}

// Form submission handler
function handleFormSubmission(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to a server
  console.log("Form submitted:", data)

  // Show success message
  alert("Thank you for your message! We will get back to you soon.")

  // Reset form
  event.target.reset()
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href").substring(1)
      scrollToSection(targetId)
    })
  })
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(26, 26, 26, 0.95)"
    navbar.style.backdropFilter = "blur(10px)"
  } else {
    navbar.style.backgroundColor = "var(--matte-black)"
    navbar.style.backdropFilter = "none"
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Populate dynamic content
  populateCoursesGrid()
  populateFeaturesGrid()
  populateCourseOptions()

  // Setup event listeners
  setupSmoothScrolling()

  // Mobile menu toggle
  const navToggle = document.getElementById("nav-toggle")
  navToggle.addEventListener("click", toggleMobileMenu)

  // Form submission
  const contactForm = document.getElementById("contact-form")
  contactForm.addEventListener("submit", handleFormSubmission)

  // Navbar scroll effect
  window.addEventListener("scroll", handleNavbarScroll)

  // Start slideshow
  showSlides(slideIndex)
  startSlideShow()

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const navMenu = document.getElementById("nav-menu")
      navMenu.classList.remove("active")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    const navMenu = document.getElementById("nav-menu")
    const navToggle = document.getElementById("nav-toggle")

    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove("active")
    }
  })
})

// Handle window resize
window.addEventListener("resize", () => {
  const navMenu = document.getElementById("nav-menu")
  if (window.innerWidth > 1024) {
    navMenu.classList.remove("active")
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const animatedElements = document.querySelectorAll(".course-card, .feature-item")
    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  }, 100)
})

document.addEventListener("DOMContentLoaded", function () {
  hbspt.forms.create({
    region: "na1",
    portalId: "46403661",
    formId: "68b94eab-1a12-450f-b532-6b6a8eb3bdc0",
    target: "#hubspot-form"
  });
});

    

      