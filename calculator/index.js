let string = "";

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(e) {
        let value = e.target.innerHTML;

        if (value === '=') {
            string = eval(string);
        } else if (value === 'C') {
            string = '';
        } else {
            string += value;
        }

        document.querySelector('input').value = string;
    });
});
