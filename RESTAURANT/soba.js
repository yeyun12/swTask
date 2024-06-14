//언어 변경
document.getElementById('ko-btn').addEventListener('click', function() {
    changeLanguage('ko');
});

document.getElementById('en-btn').addEventListener('click', function() {
    changeLanguage('en');
});

document.getElementById('jp-btn').addEventListener('click', function() {
    changeLanguage('jp');
});

document.getElementById('cn-btn').addEventListener('click', function() {
    changeLanguage('cn');
});

//폰트사이즈
function 한국어폰트(){
        document.getElementById('경컵').style.fontSize = '18.72px'
        document.getElementById('주소지').style.fontSize = '18.72px';
    
}function 영어폰트(){
        document.getElementById('경컵').style.fontSize = '18.72px'
        document.getElementById('주소지').style.fontSize = '17px';
    
}function 일본어폰트(){
        document.getElementById('경컵').style.fontSize = '18.72px'
        document.getElementById('주소지').style.fontSize = '17px';
    
}
function 중국어폰트(){
        document.getElementById('경컵').style.fontSize = '18.72px'
        document.getElementById('주소지').style.fontSize = '17px';
    
}