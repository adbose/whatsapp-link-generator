const form = document.getElementById('form');
const phoneNumber = document.getElementById('phone-number');
const message = document.getElementById('message');
const link = document.getElementById('link');


form.addEventListener('submit', e => {
	e.preventDefault();
	console.log('sumbit event triggered');
	const phoneNumberValue = phoneNumber.value.trim();
	const messageValue = message.value.trim();
	if(messageValue){
		showValid(message);
	}
	const formattedNumber = formatNumber(phoneNumberValue);
	console.log(formattedNumber);

	if(formattedNumber){
		generateLink(formattedNumber, messageValue);
	}
});

function formatNumber(phoneNumberValue){
	if(phoneNumberValue === ''){
		setErrorFor(phoneNumber, 'Mobile number cannot be blank');
	} else if(phoneNumberValue.startsWith('+')){
		setErrorFor(phoneNumber, 'Mobile number cannot start with +');
	} else if(isNaN(phoneNumberValue)){
		setErrorFor(phoneNumber, 'Mobile number invalid')
	} else if(!isNaN(phoneNumberValue)){
		showValid(phoneNumber);
		return phoneNumberValue;
	}
	return null;
}

function showValid(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function setErrorFor(input, msg){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = msg;
}

function generateLink(number, message){
	let url = "https://wa.me/";
	let endUrl = `${url}${number}?text=${encodeURIComponent(message)}`;
	document.getElementById('link').innerText = endUrl;
	document.getElementById('msg').innerText = 'Share the link below to let others message you on WhatsApp';
}

