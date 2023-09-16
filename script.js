const en_div = document.querySelector('#en');
const vn_div = document.querySelector('#vn');
const vn_flag = document.querySelector('#en .resume .lang');
const en_flag = document.querySelector('#vn .resume .lang');
let lang = 'en';

showCV = () => {
    // console.log(lang);
    if (lang == 'en'){
        en_div.classList.remove('hide');
        vn_div.classList.add('hide');
    } else {
        vn_div.classList.remove('hide');
        en_div.classList.add('hide');
    }
}

showCV();

vn_flag.addEventListener('click', () => {
    lang = 'vi';
    showCV();
});

en_flag.addEventListener('click', () => {
    lang = 'en';
    showCV();
});
