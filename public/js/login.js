document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById('username');
    const userpasswordInput = document.getElementById('password');
    const usernameValue = usernameInput.value; 

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: usernameValue, password: userpasswordInput.value })
        });

        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            if (response.ok) {
                window.location.href = '/dashboard.html';
            } else {
                document.getElementById('error-message').innerText = data.message || 'Erro ao fazer login';
            }
        } else {
            document.getElementById('error-message').innerText = 'Resposta inválida do servidor';
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        document.getElementById('error-message').innerText = 'Erro ao fazer login';
    }

    setTimeout(function() {
        window.location.href = "/login.html"; 
    }, 3000);
});
