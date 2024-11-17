class JobsManager {
    constructor() {
        this.jobs = [
            {
                id: 1,
                title: 'Senior Frontend Developer',
                company: 'TechCorp',
                location: 'Remote',
                type: 'Full-time',
                salary: '$120,000 - $150,000',
                experience: '5+ years',
                description: 'We are looking for an experienced Frontend Developer to join our team and help build outstanding user experiences.',
                requirements: [
                    '5+ years of experience with JavaScript and modern frameworks',
                    'Strong understanding of web performance optimization',
                    'Experience with responsive design and cross-browser compatibility',
                    'Excellent problem-solving skills and attention to detail',
                    'Strong communication and collaboration abilities'
                ],
                benefits: [
                    'Competitive salary and equity package',
                    'Remote work flexibility',
                    'Health, dental, and vision insurance',
                    'Unlimited PTO',
                    'Professional development budget'
                ],
                posted: '2024-02-15',
                tags: ['JavaScript', 'React', 'CSS', 'HTML5', 'Web Performance']
            },
            {
                id: 2,
                title: 'Full Stack Developer',
                company: 'InnovateSoft',
                location: 'New York, NY',
                type: 'Full-time',
                salary: '$100,000 - $130,000',
                experience: '3+ years',
                description: 'Join our dynamic team as a Full Stack Developer and help build scalable web applications.',
                requirements: [
                    'Strong experience with Node.js and React',
                    'Proficient in database design and management',
                    'Experience with RESTful API development',
                    'Knowledge of cloud services (AWS/Azure)',
                    'Understanding of agile development practices'
                ],
                benefits: [
                    'Competitive compensation package',
                    'Flexible working hours',
                    'Health and wellness benefits',
                    '401(k) matching',
                    'Annual bonus program'
                ],
                posted: '2024-02-20',
                tags: ['Node.js', 'React', 'MongoDB', 'AWS', 'API Development']
            },
            {
                id: 3,
                title: 'AI Engineer',
                company: 'DataMinds',
                location: 'San Francisco, CA',
                type: 'Full-time',
                salary: '$140,000 - $180,000',
                experience: '4+ years',
                description: 'Help us build the next generation of AI-powered solutions that transform industries.',
                requirements: [
                    'Strong background in Machine Learning and AI',
                    'Expert-level Python programming skills',
                    'Experience with deep learning frameworks (TensorFlow/PyTorch)',
                    'Knowledge of large language models and NLP',
                    'Track record of delivering AI solutions at scale'
                ],
                benefits: [
                    'Industry-leading compensation',
                    'Comprehensive benefits package',
                    'Stock options',
                    'Learning and development stipend',
                    'Home office setup allowance'
                ],
                posted: '2024-02-18',
                tags: ['Python', 'Machine Learning', 'AI', 'TensorFlow', 'NLP']
            }
        ];
        this.appliedJobs = [];
        this.filters = {
            location: 'all',
            type: 'all',
            experience: 'all'
        };
    }

    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    getTimeAgo(dateString) {
        const now = new Date();
        const posted = new Date(dateString);
        const diffTime = Math.abs(now - posted);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        return `${Math.floor(diffDays / 30)} months ago`;
    }

    getJob(id) {
        return this.jobs.find(job => job.id === parseInt(id));
    }

    displayJobs() {
        const jobsList = document.getElementById('jobs-list');
        const filteredJobs = this.filterJobs();

        if (filteredJobs.length === 0) {
            jobsList.innerHTML = `
                <div class="no-jobs-found">
                    <img src="images/icons/no-results.svg" alt="No jobs found" class="no-results-icon">
                    <h3>No jobs found</h3>
                    <p>Try adjusting your search criteria</p>
                </div>
            `;
            return;
        }

        jobsList.innerHTML = filteredJobs.map(job => `
            <div class="job-card">
                <div class="job-card-header">
                 
                    <div class="job-card-title">
                        <h3>${job.title}</h3>
                        <div class="company-name">${job.company}</div>
                    </div>
                </div>
                
                <div class="job-card-details">
                    <div class="job-detail">
                        ${job.location}
                    </div>
                    <div class="job-detail">
                        ${job.type}
                    </div>
                    <div class="job-detail">
                        ${job.salary}
                    </div>
                </div>

                <div class="job-tags">
                    ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                </div>

                <div class="job-card-footer">
                    <span class="posted-date">Posted ${this.getTimeAgo(job.posted)}</span>
                    <button class="btn btn-primary" onclick="router.navigate('job-details', { id: ${job.id} })">
                        View Details
                    </button>
                </div>
            </div>
        `).join('');
    }

    filterJobs() {
        return this.jobs.filter(job => {
            if (this.filters.location !== 'all' && job.location !== this.filters.location) return false;
            if (this.filters.type !== 'all' && job.type !== this.filters.type) return false;
            if (this.filters.experience !== 'all') {
                const years = parseInt(job.experience);
                switch (this.filters.experience) {
                    case 'entry':
                        if (years > 2) return false;
                        break;
                    case 'mid':
                        if (years <= 2 || years > 5) return false;
                        break;
                    case 'senior':
                        if (years <= 5) return false;
                        break;
                }
            }
            return true;
        });
    }

    applyToJob(jobId) {
        if (!auth.isLoggedIn) {
            router.navigate('login');
            return;
        }

        const job = this.getJob(jobId);
        if (job && !this.appliedJobs.some(j => j.id === jobId)) {
            this.appliedJobs.push({
                ...job,
                appliedDate: new Date().toISOString(),
                status: 'Applied'
            });

            alert('Application submitted successfully!');
            

            document.body.appendChild(successMsg);
        }
    }

    displayAppliedJobs() {
        const appliedJobsList = document.getElementById('applied-jobs-list');

        if (!this.appliedJobs.length) {
            appliedJobsList.innerHTML = `
                <div class="no-jobs-found">
                    
                    <h3>No Applications Yet</h3>
                    <p>Start applying to jobs to see them here</p>
                    <button class="btn btn-primary" onclick="router.navigate('jobs')">
                        Browse Jobs
                    </button>
                </div>
            `;
            return;
        }

        appliedJobsList.innerHTML = this.appliedJobs.map(job => `
            <div class="job-card applied-job-card">
                <div class="job-card-header">
                    <div class="company-logo">
                       
                    </div>
                    <div class="job-card-title">
                        <h3>${job.title}</h3>
                        <div class="company-name">${job.company}</div>
                    </div>
                    <div class="application-status ${job.status.toLowerCase()}">
                        ${job.status}
                    </div>
                </div>
                
                <div class="job-card-details">
                    <div class="job-detail">
                        
                        ${job.location}
                    </div>
                    <div class="job-detail">
                        
                        ${job.type}
                    </div>
                    <div class="job-detail">
                       
                        Applied on ${this.formatDate(job.appliedDate)}
                    </div>
                </div>

                <div class="job-card-footer">
                    <button class="btn btn-outline" onclick="router.navigate('job-details', { id: ${job.id} })">
                        View Details
                    </button>
                </div>
            </div>
        `).join('');
    }

    setupSearchAndFilters() {
        const searchInput = document.querySelector('.search-input');
        const filterSelects = document.querySelectorAll('.filter-select');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                // Implement search functionality
                console.log('Search term:', e.target.value);
                this.displayJobs();
            });
        }

        filterSelects.forEach(select => {
            select.addEventListener('change', (e) => {
                this.filters[e.target.name] = e.target.value;
                this.displayJobs();
            });
        });
    }
}

const jobsManager = new JobsManager();