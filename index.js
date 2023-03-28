//Auto

document.addEventListener('keydown', (event) => {
     if (event.key === 'ArrowRight'){ 
       document.getElementById('auto').style.marginLeft = '200px';
    } 
     else if (event.key === 'ArrowLeft') document.getElementById('auto').style.marginLeft = '0px';
    })


//Přihlášení
const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

document.querySelector('#login-form').addEventListener('submit', (event) => {
	event.preventDefault()

	const emailInput = document.querySelector('#email-input')
	const passwordInput = document.querySelector('#password-input')
	const container = document.querySelector('.container')
	const status = document.querySelector('#status')

	if (
		emailInput.value === user.email &&
		passwordInput.value === user.password
	) {
		container.innerHTML = `<h1>Přihlášený uživatel: ${user.name}</h1>`
	} else {
		status.textContent = 'Neplatné přihlašovací údaje'
		passwordInput.value = ''
	}
})

//Newsletter, kontrola

