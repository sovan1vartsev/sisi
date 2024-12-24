document.addEventListener('DOMContentLoaded', () => {
    const profileLogin = document.getElementById('profile-login');
    const profileTestResult = document.getElementById('profile-test-result');
    const profileAge = document.getElementById('profile-age');
    const profileGender = document.getElementById('profile-gender');
    const logoutBtnProfile = document.getElementById('logout-btn-profile');

    const storedLogin = localStorage.getItem('userLogin');
    const storedAge = localStorage.getItem('userAge');
    const storedGender = localStorage.getItem('userGender');
    const storedTestResult = localStorage.getItem('testResult');

    if (profileLogin) profileLogin.textContent = storedLogin || 'Неизвестный пользователь';
    if (profileAge) profileAge.textContent = storedAge || 'Неизвестно';
    if (profileGender) profileGender.textContent = storedGender || 'Неизвестно';
    if (profileTestResult) profileTestResult.textContent = storedTestResult || 'Не выполнено';

    if (logoutBtnProfile) {
        logoutBtnProfile.addEventListener('click', () => {
            localStorage.removeItem('userLogin');
            localStorage.removeItem('userAge');
            localStorage.removeItem('userGender');
            localStorage.removeItem('testResult');

            window.location.href = 'auth.html';
        });
    }
});
