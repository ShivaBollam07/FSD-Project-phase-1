class JobsManager {
    constructor() {
        this.jobs = [
            {
                id: 1,
                title: 'Senior Frontend Developer',
                company: 'TechCorp',
                location: 'Remote',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69ZO7Ybg5ck3o_D0dfyg-_LKNNCrp-jfJzA&s',
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
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AG0VUSve44vsAB4p1UVYSU1OMVJ7r31zdQ&s',
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
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgyGqFm8Wd1TaxFYSqaBo92Speg_ZBkBXtA&s',
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
            },
            {
                id: 4,
                title: 'Backend Developer',
                company: 'CodeWorks',
                location: 'Austin, TX',
                type: 'Full-time',
                image: 'https://mliv6plxtvjb.i.optimole.com/cb:dmZG.45163/w:630/h:165/q:mauto/f:best/ig:avif/https://codeworks.me/wp-content/uploads/2019/07/logo-horizontal-orange.svg',
                salary: '$110,000 - $140,000',
                experience: '4+ years',
                description: 'Seeking a skilled Backend Developer to design and implement server-side components.',
                requirements: [
                    'Strong experience with Node.js and Express.js',
                    'Proficient in database systems like PostgreSQL or MySQL',
                    'Experience with microservices architecture',
                    'Knowledge of API design and development',
                    'Excellent debugging and optimization skills'
                ],
                benefits: [
                    'Competitive salary',
                    'Health and dental insurance',
                    'Paid parental leave',
                    'Gym membership reimbursement',
                    'Career growth opportunities'
                ],
                posted: '2024-02-22',
                tags: ['Node.js', 'Express.js', 'PostgreSQL', 'API Development', 'Microservices']
            },
            {
                id: 5,
                title: 'DevOps Engineer',
                company: 'CloudSync',
                location: 'Remote',
                type: 'Contract',
                image: 'https://global.synologydownload.com/download/Package/img/CloudSync/2.7.1-2657/thumb_256.png',
                salary: '$90,000 - $120,000',
                experience: '3+ years',
                description: 'Join us as a DevOps Engineer to build and maintain our CI/CD pipelines.',
                requirements: [
                    'Experience with AWS and Docker',
                    'Knowledge of CI/CD tools like Jenkins or GitHub Actions',
                    'Strong scripting skills (Bash, Python)',
                    'Familiarity with Kubernetes and container orchestration',
                    'Understanding of networking and security principles'
                ],
                benefits: [
                    'Remote work setup',
                    'Flexible work hours',
                    'Access to premium tools and resources',
                    'Professional development support',
                    'Opportunity to work on cutting-edge technology'
                ],
                posted: '2024-02-21',
                tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Networking']
            },
            {
                id: 6,
                title: 'UI/UX Designer',
                company: 'CreativePixels',
                location: 'Los Angeles, CA',
                type: 'Full-time',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqSBqd7nCcjacUV84w6I3yddY7UQ39y5q0A&s',
                salary: '$80,000 - $100,000',
                experience: '2+ years',
                description: 'We are looking for a creative UI/UX Designer to craft user-centered designs.',
                requirements: [
                    'Proven experience with design tools like Figma or Adobe XD',
                    'Strong portfolio showcasing UI/UX work',
                    'Understanding of user research and usability testing',
                    'Knowledge of HTML/CSS for design implementation',
                    'Excellent communication and teamwork skills'
                ],
                benefits: [
                    'Competitive pay',
                    'Health and wellness benefits',
                    'Flexible work environment',
                    'Creative freedom',
                    'Collaborative culture'
                ],
                posted: '2024-02-19',
                tags: ['Figma', 'Adobe XD', 'UI/UX Design', 'HTML/CSS', 'User Research']
            },
            {
                id: 7,
                title: 'Data Scientist',
                company: 'InsightAI',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJn1UDLJTiKdTMFk06r4a1Ilsw7H5VXgdr4Q&s',
                location: 'Boston, MA',
                type: 'Full-time',
                salary: '$130,000 - $160,000',
                experience: '3+ years',
                description: 'Work on data-driven solutions that power our business insights.',
                requirements: [
                    'Strong knowledge of statistical modeling and machine learning',
                    'Proficiency in Python or R',
                    'Experience with data visualization tools like Tableau',
                    'Expertise in SQL for data extraction and manipulation',
                    'Strong analytical and problem-solving skills'
                ],
                benefits: [
                    'Market-competitive salary',
                    'Comprehensive insurance',
                    'Team retreats',
                    'Education reimbursement',
                    'Hybrid work model'
                ],
                posted: '2024-02-17',
                tags: ['Python', 'SQL', 'Machine Learning', 'Data Visualization', 'Tableau']
            },
            {
                id: 8,
                title: 'Mobile App Developer',
                company: 'AppVentures',
                location: 'Seattle, WA',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-7QJV6b_xPpTsvWrrxIcT572luMVFjWkvw&s',
                type: 'Full-time',
                salary: '$95,000 - $125,000',
                experience: '2+ years',
                description: 'Develop and maintain high-performance mobile applications.',
                requirements: [
                    'Proficient in React Native or Flutter',
                    'Experience with RESTful APIs',
                    'Knowledge of app store submission processes',
                    'Understanding of mobile app architecture',
                    'Strong debugging skills'
                ],
                benefits: [
                    'Competitive salary',
                    'Medical and dental benefits',
                    'Stock options',
                    'Annual performance bonus',
                    'Remote work options'
                ],
                posted: '2024-02-16',
                tags: ['React Native', 'Flutter', 'Mobile Development', 'API Integration', 'Debugging']
            },
            {
                id: 9,
                title: 'Cloud Architect',
                company: 'SkyTech',
                image: 'https://media.licdn.com/dms/image/v2/C560BAQE7VJMPe_PoWw/company-logo_200_200/company-logo_200_200/0/1631391331032?e=2147483647&v=beta&t=pkvLcBoFjloYRgWS-8OjAWdh4Psi9xq4_YrMyAI21RU',

                location: 'Dallas, TX',
                type: 'Full-time',
                salary: '$150,000 - $180,000',
                experience: '6+ years',
                description: 'Lead the design and implementation of scalable cloud solutions.',
                requirements: [
                    'Expertise in cloud platforms (AWS, Azure, or GCP)',
                    'Strong understanding of infrastructure as code',
                    'Experience with cloud security and compliance',
                    'Knowledge of hybrid cloud architectures',
                    'Strong leadership and project management skills'
                ],
                benefits: [
                    'Industry-leading salary',
                    'Health benefits',
                    'Paid vacation',
                    'Learning opportunities',
                    'Collaborative culture'
                ],
                posted: '2024-02-20',
                tags: ['AWS', 'Azure', 'GCP', 'Cloud Architecture', 'Security']
            },
            {
                id: 10,
                title: 'Product Manager',
                company: 'BuildIt',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZkCVM8CGeGng9FtWrADV01mXjjZyZR9Bgg&s',
                location: 'Chicago, IL',
                type: 'Full-time',
                salary: '$120,000 - $150,000',
                experience: '5+ years',
                description: 'Own the product vision and work with teams to deliver innovative solutions.',
                requirements: [
                    'Proven experience in product management',
                    'Strong understanding of agile methodologies',
                    'Excellent communication and presentation skills',
                    'Ability to gather and analyze customer feedback',
                    'Experience with roadmap planning and prioritization'
                ],
                benefits: [
                    'Competitive compensation',
                    '401(k) plan',
                    'Health insurance',
                    'Annual bonus',
                    'Employee wellness programs'
                ],
                posted: '2024-02-15',
                tags: ['Agile', 'Product Management', 'Roadmap Planning', 'Customer Focus', 'Leadership']
            }
        ];
        this.appliedJobs = [];
        this.filters = {
            location: 'all',
            type: 'all',
            experience: 'all',
            search: ''
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
                            <img src=${job.image} alt="Company Logo" class="company-logo" 
                            style="width: 50px; height: 50px; border-radius: 50%; margin-right: 1rem;" /
                            >
                            
                        <h3>${job.title}</h3>
                        <div class="company-name">${job.company}</div>
                    </div>
                </div>
                
                <div class="job-card-details">
                    <div class="job-detail">
                        <i class="fas fa-map-marker-alt"></i> ${job.location}
                    </div>
                    <div class="job-detail">
                        <i class="fas fa-briefcase"></i> ${job.type}
                    </div>
                    <div class="job-detail">
                        <i class="fas fa-dollar-sign"></i> ${job.salary}
                    </div>
                </div>
    
                <div class="job-tags">
                <h4>Requirements</h4>
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
            if (this.filters.search && !job.title.toLowerCase().includes(this.filters.search.toLowerCase())) {
                return false;
            }
            return true;
        });
    }

    applyFilters(filters) {
        this.filters = { ...this.filters, ...filters };
        this.displayJobs();
    }

    applySearch(searchTerm) {
        this.filters.search = searchTerm;
        this.displayJobs();
    }

    clearFilters() {
        this.filters = {
            location: 'all',
            type: 'all',
            experience: 'all',
            search: ''
        };
        this.displayJobs();
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
<img src=${job.image} alt="Company Logo" class="company-logo" 
                            style="width: 50px; height: 50px; border-radius: 50%; margin-right: 1rem;" /
                            >                    </div>
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
        const filterButton = document.getElementById('filter-button');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                // Update search term for filtering
                this.filters.search = e.target.value.toLowerCase();
                this.displayJobs();
            });
        }

        if (filterButton) {
            filterButton.addEventListener('click', () => {
                this.displayJobs(); // Apply filters and re-render the job list
            });
        }

        filterSelects.forEach(select => {
            select.addEventListener('change', (e) => {
                this.filters[e.target.name] = e.target.value;
            });
        });
    }

}

const jobsManager = new JobsManager();