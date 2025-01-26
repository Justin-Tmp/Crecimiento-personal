document.querySelector('.btn-fisic').onclick = function() {
    
    window.location.href = 'fisic.html';
};

document.querySelector('.btn-mind').onclick = function() {
    window.location.href = 'mind.html';

};  

document.querySelectorAll('.acordeon-button').forEach(button => {
    alert("helloo")
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    });
});