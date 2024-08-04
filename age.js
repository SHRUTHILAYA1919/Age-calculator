document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const dobInput = document.getElementById('dob');
    const ageResult = document.getElementById('age-result');

    calculateBtn.addEventListener('click', () => {
        const dob = new Date(dobInput.value);
        if (isNaN(dob.getTime())) {
            ageResult.textContent = 'Invalid date';
            return;
        }
        
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        
        ageResult.textContent = age;
    });
});
