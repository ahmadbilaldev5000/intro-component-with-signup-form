const validateForm = () => {
    const inputElements = document.querySelectorAll('input');
    inputElements.forEach(el => {
        if (el.classList.contains('invalid')) {
            el.classList.remove('invalid');
            el.parentElement.querySelector('.warning-text').remove();
        }

        if (el.value.length === 0) {
            setInvalid(el, `${el.placeholder} cannot be empty`);
        }

        else if (el.type === 'email' && !validateEmail(el.value)) {
            setInvalid(el, 'Looks like this is not an email')
        }
    })
}

const setInvalid = (el, text) => {
    if (!el.classList.contains('invalid')) {
        const node = document.createElement('div');
        const textNode = document.createTextNode(text);
        node.appendChild(textNode);
        node.classList.add('warning-text');
        el.parentElement.appendChild(node);
        el.classList.add('invalid');
    }
}

const validateEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
