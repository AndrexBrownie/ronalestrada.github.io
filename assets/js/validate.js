
    const $form = document.querySelector('#php-email-form');
    const $buttonmailto = document.querySelector('#trucazo');

    $form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();

    const form = new FormData(this);
    $buttonmailto.setAttribute('href',`mailto:ronal.estradam@gmail.com?subject=${form.get('subject')} correo: ${form.get('email')}&body=${form.get('message')}`);
    $buttonmailto.click();
    }
