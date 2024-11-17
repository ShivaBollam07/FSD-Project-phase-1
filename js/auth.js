const MOCK_USERS = [
    { email: 'demo@example.com', password: 'demo123', name: 'Demo User' }
];

class Auth {
    constructor() {
        this.currentUser = null;
        this.isLoggedIn = false;
    }

    login(email, password) {
        const user = MOCK_USERS.find(u => u.email === email && u.password === password);
        if (user) {
            this.currentUser = user;
            this.isLoggedIn = true;
            this.updateUI();
            return true;
        }
        return false;
    }

    signup(name, email, password) {
        if (MOCK_USERS.some(u => u.email === email)) {
            return false;
        }
        const newUser = { name, email, password };
        MOCK_USERS.push(newUser);
        this.currentUser = newUser;
        this.isLoggedIn = true;
        this.updateUI();
        return true;
    }

    logout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.updateUI();
        router.navigate('home');
    }

    updateUI() {
        const authButtons = document.querySelector('.auth-buttons');
        const profileSection = document.querySelector('.profile-section');
        const usernameDisplay = document.querySelector('.username-display');

        if (this.isLoggedIn) {
            authButtons.classList.add('hidden');
            profileSection.classList.remove('hidden');
            usernameDisplay.textContent = this.currentUser.name;
        } else {
            authButtons.classList.remove('hidden');
            profileSection.classList.add('hidden');
            usernameDisplay.textContent = '';
        }
    }
}

const auth = new Auth();