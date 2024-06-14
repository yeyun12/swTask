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
function changeLanguage(lang) {
    var languageText = document.getElementById('language-text');
    var searchPlaceholder = document.getElementById('search-placeholder');
    var mainName = document.getElementById('main-name');
    var 소개 = document.getElementById('소개');
    var subName = document.getElementById('sub-name');
    var 설명 = document.getElementById('설명');
    var 영업 = document.getElementById('영업');
    var 시간 = document.getElementById('시간');
    var 주차 = document.getElementById('주차');
    var 가능 = document.getElementById('가능');
    var 메뉴 = document.getElementById('메뉴');
    var 경컵 = document.getElementById('경컵');
    var 치즈 = document.getElementById('치즈');
    var 제육 = document.getElementById('제육');
    var 주소 = document.getElementById('주소');
    var 주소지 = document.getElementById('주소지');
    var 전화번호 = document.getElementById('전화번호');
    var 길안내 = document.getElementById('길안내');
}