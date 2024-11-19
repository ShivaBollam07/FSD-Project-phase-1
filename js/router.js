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
        this.mainContent.innerHTML = 
            `<div class="container">
                <h2>Available Jobs</h2>
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="Search jobs...">
                    <div class="filters">
                        <select name="location" class="filter-select">
                            <option value="all">Location</option>
                            <option value="Remote">Remote</option>
                            <option value="On-site">On-site</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                        <select name="type" class="filter-select">
                            <option value="all">Job Type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                        </select>
                        <select name="experience" class="filter-select">
                            <option value="all">Experience Level</option>
                            <option value="entry">Entry Level</option>
                            <option value="mid">Mid Level</option>
                            <option value="senior">Senior Level</option>
                        </select>
                    </div>
                    <button id="filter-button" class="filter-button" class="btn btn-primary" >Filter Results</button>
                </div>
                <div id="jobs-list"></div>
            </div>`;
    
        jobsManager.displayJobs();
        jobsManager.setupSearchAndFilters(); // Re-setup the event listeners for filters
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
                <h2 style="text-align: center; color: #0056b3; margin-bottom: 20px; font-size: 2.5em;">About JobMatch</h2>
                <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">
                    JobMatch is a modern job platform designed to seamlessly connect job seekers with employers. Our mission is to
                    simplify the job search process, making it easier and faster for candidates to find their perfect job, and for
                    companies to hire top talent with ease.
                </p>
                <div style="display: flex; justify-content: space-around; gap: 20px; margin-top: 20px; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 280px; max-width: 350px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
                        <h3 style="color: #0056b3; margin-bottom: 10px;">Smart Filtering</h3>
                        <p style="font-size: 0.95em; line-height: 1.5;">
                            Easily filter jobs by location, job type, experience level, salary range, and more. Whether you’re looking
                            for a remote role or a specific industry, our filters help you find exactly what you need.
                        </p>
                    </div>
                    <div style="flex: 1; min-width: 280px; max-width: 350px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
                        <h3 style="color: #0056b3; margin-bottom: 10px;">Job Alerts</h3>
                        <p style="font-size: 0.95em; line-height: 1.5;">
                            Stay ahead of the game with our customizable job alerts. Set up alerts for new opportunities and get notified
                            immediately when a job matching your criteria becomes available.
                        </p>
                    </div>
                    <div style="flex: 1; min-width: 280px; max-width: 350px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
                        <h3 style="color: #0056b3; margin-bottom: 10px;">Application Tracking</h3>
                        <p style="font-size: 0.95em; line-height: 1.5;">
                            Keep track of all your job applications in one place. Monitor your application status, view deadlines, and
                            stay organized with our intuitive dashboard.
                        </p>
                    </div>
                </div>
    
                <div style="margin-top: 40px; text-align: center;">
                    <h3 style="color: #0056b3; margin-bottom: 20px;">Why Choose JobMatch?</h3>
                    <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">
                        JobMatch is more than just a job board. We are committed to providing job seekers with the resources and
                        tools they need to succeed in their career journey. Here’s why you should choose us:
                    </p>
                    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 280px; max-width: 350px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
                            <h4 style="color: #0056b3; margin-bottom: 10px;">Wide Variety of Jobs</h4>
                            <p style="font-size: 0.95em; line-height: 1.5;">
                                Whether you’re looking for full-time, part-time, freelance, or contract work, we offer a wide range of job
                                categories across industries.
                            </p>
                        </div>
                        <div style="flex: 1; min-width: 280px; max-width: 350px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
                            <h4 style="color: #0056b3; margin-bottom: 10px;">Real-Time Job Listings</h4>
                            <p style="font-size: 0.95em; line-height: 1.5;">
                                We update our job listings regularly to ensure that you have access to the latest job opportunities. Don’t
                                miss out on the next big career move!
                            </p>
                        </div>
                        <div style="flex: 1; min-width: 280px; max-width: 350px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
                            <h4 style="color: #0056b3; margin-bottom: 10px;">Career Resources</h4>
                            <p style="font-size: 0.95em; line-height: 1.5;">
                                Access valuable career resources, such as resume templates, interview tips, and more to help you land your
                                dream job.
                            </p>
                        </div>
                    </div>
                </div>
    
                <div style="margin-top: 40px; text-align: center;">
                    <h3 style="color: #0056b3; margin-bottom: 20px;">Join the JobMatch Community</h3>
                    <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">
                        At JobMatch, we believe in creating a supportive and engaging community for job seekers. Connect with others,
                        share tips, and get motivated throughout your job search journey.
                    </p>
                    <button data-page="login" style="background-color: #0056b3; color: #fff; padding: 12px 30px; font-size: 1em; border: none; border-radius: 5px; cursor: pointer;">
                        Sign Up Now
                    </button>
                </div>
            </div>
        `;
    }
    

}

const router = new Router();