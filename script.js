document.getElementById('regForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    // send the request  to server

    const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    // Fix: response.json is a method, needs to be called with ()
    const data = await response.json();

    console.log('Server response:', data);
    alert(data.message);
})


document.getElementById('frm-login').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //send the request to the server
    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    alert(data.message + 'Welcome ' + data.name + ' of email address: ' + data.email);


});

