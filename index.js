const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
    btn.style.display = 'none';

    const box = document.getElementById('box');
    box.style.display = 'block';
});
