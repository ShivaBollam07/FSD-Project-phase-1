class Router {
    constructor() {
        this.routes = {
            home: this.renderHome,
            login: this.renderLogin,
            signup: this.renderSignup,
            jobs: this.renderJobs,
            'job-details': this.renderJobDetails,
            'applied-jobs': this.renderAppliedJobs,
            profile: this.renderProfile,
            about: this.renderAbout
        };

        this.mainContent = document.getElementById('main-content');
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.dataset.page) {
                e.preventDefault();
                this.navigate(e.target.dataset.page);
            }
        });

        document.getElementById('logout-btn').addEventListener('click', (e) => {
            e.preventDefault();
            auth.logout();
        });
    }

    navigate(route, params = {}) {
        if (this.routes[route]) {
            this.routes[route].call(this, params);
        }
    }

    renderHome() {
        this.mainContent.innerHTML = `
            <div class="container">
                <h1>Welcome to JobMatch</h1>
                <div class="hero-section">
                    <h2>Find Your Dream Job</h2>
                    <p>Discover opportunities matched to your skills and preferences</p>
                    <button class="btn btn-primary" data-page="jobs">Browse Jobs</button>
                </div>
                <div class="features-section">
                    <div class="feature-card">
                        <h3>Get Matching</h3>
                        <p>Get personalized job recommendations</p>
                    </div>
                    <div class="feature-card">
                        <h3>Easy Application</h3>
                        <p>Apply to multiple jobs with one click</p>
                    </div>
                    <div class="feature-card">
                        <h3>Track Progress</h3>
                        <p>Monitor your application status</p>
                    </div>
                </div>
            </div>
        `;
    }

    renderLogin() {
        this.mainContent.innerHTML = `
            <div class="auth-container">
                <h2 class="auth-title">Login</h2>
                <form id="login-form">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-input" required>
                    </div>
                    <button type="submit" class="auth-submit">Login</button>
                </form>
                <div class="auth-switch">
                    <a href="#" data-page="signup">Need an account? Sign up</a>
                </div>
            </div>
        `;

        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const [email, password] = e.target.querySelectorAll('input');
            if (auth.login(email.value, password.value)) {
                this.navigate('home');
            } else {
                alert('Invalid credentials');
            }
        });
    }

    renderSignup() {
        this.mainContent.innerHTML = `
            <div class="auth-container">
                <h2 class="auth-title">Sign Up</h2>
                <form id="signup-form">
                    <div class="form-group">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-input" required>
                    </div>
                    <button type="submit" class="auth-submit">Sign Up</button>
                </form>
                <div class="auth-switch">
                    <a href="#" data-page="login">Already have an account? Login</a>
                </div>
            </div>
        `;

        document.getElementById('signup-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const [name, email, password] = e.target.querySelectorAll('input');
            if (auth.signup(name.value, email.value, password.value)) {
                this.navigate('home');
            } else {
                alert('Email already exists');
            }
        });
    }

    renderJobs() {
        this.mainContent.innerHTML = `
            <div class="container">
                <h2>Available Jobs</h2>
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="Search jobs...">
                    <div class="filters">
                        <select class="filter-select">
                            <option value="">Location</option>
                            <option>Remote</option>
                            <option>On-site</option>
                            <option>Hybrid</option>
                        </select>
                        <select class="filter-select">
                            <option value="">Experience Level</option>
                            <option>Entry Level</option>
                            <option>Mid Level</option>
                            <option>Senior Level</option>
                        </select>
                    </div>
                </div>
                <div id="jobs-list"></div>
            </div>
        `;

        jobsManager.displayJobs();
    }

    renderJobDetails(params) {
        const job = jobsManager.getJob(params.id);
        if (!job) return this.navigate('jobs');

        this.mainContent.innerHTML = `
            <div class="container">
                <div class="job-details-card">
                    <h2>${job.title}</h2>
                    <div class="job-info">
                        <p><strong>Company:</strong> ${job.company}</p>
                        <p><strong>Location:</strong> ${job.location}</p>
                        <p><strong>Salary:</strong> ${job.salary}</p>
                    </div>
                    <div class="job-description">
                        <h3>Description</h3>
                        <p>${job.description}</p>
                    </div>
                    <div class="job-requirements">
                        <h3>Requirements</h3>
                        <ul>
                            ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                    </div>
                    <button class="btn btn-primary" onclick="jobsManager.applyToJob(${job.id})">
                        Apply Now
                    </button>
                </div>
            </div>
        `;
    }

    renderAppliedJobs() {
        if (!auth.isLoggedIn) return this.navigate('login');

        this.mainContent.innerHTML = `
            <div class="container">
                <h2>Applied Jobs</h2>
                <div id="applied-jobs-list"></div>
            </div>
        `;

        jobsManager.displayAppliedJobs();
    }

    renderProfile() {
        if (!auth.isLoggedIn) return this.navigate('login');

        this.mainContent.innerHTML = `
            <div class="container">
                <div class="profile-card">
                    <h2>Profile</h2>
                    <div class="profile-info">
                        <p><strong>Name:</strong> ${auth.currentUser.name}</p>
                        <p><strong>Email:</strong> ${auth.currentUser.email}</p>
                    </div>
                </div>
            </div>
        `;
    }

    renderAbout() {
        this.mainContent.innerHTML = `
        <div style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; color: #333;">
            <h2 style="text-align: center; color: #0056b3; margin-bottom: 20px; font-size: 2.5em;">About JobMatch </h2>
            <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">
                JobMatch  is a cutting-edge job platform 
            </p>
            <div style="display: flex; justify-content: space-around; gap: 20px; margin-top: 20px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 280px; max-width: 350px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
                    <h3 style="color: #0056b3; margin-bottom: 10px;">AI-Powered Matching</h3>
                    <p style="font-size: 0.95em; line-height: 1.5;">
                        Our advanced AI algorithms analyze your skills and preferences to find the perfect job matches.
                    </p>
                </div>
                <div style="flex: 1; min-width: 280px; max-width: 350px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
                    <h3 style="color: #0056b3; margin-bottom: 10px;">Smart Filtering</h3>
                    <p style="font-size: 0.95em; line-height: 1.5;">
                        Easily filter jobs by location, experience level, and more to find exactly what you're looking for.
                    </p>
                </div>
                <div style="flex: 1; min-width: 280px; max-width: 350px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
                    <h3 style="color: #0056b3; margin-bottom: 10px;">Application Tracking</h3>
                    <p style="font-size: 0.95em; line-height: 1.5;">
                        Keep track of all your job applications in one place.
                    </p>
                </div>
            </div>
        </div>
    `;
    }

}

const router = new Router();