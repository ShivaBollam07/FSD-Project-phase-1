document.addEventListener('DOMContentLoaded', () => {
    router.navigate('home');
    document.addEventListener('input', (e) => {
        if (e.target.classList.contains('search-input')) {
            console.log('Searching:', e.target.value);
        }
    });

    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('filter-select')) {
            console.log('Filter changed:', e.target.value);
        }
    });
});