$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors: ['HOME', 'ABOUTME', 'PUBLISING', 'WEBACCESSIBILITY', 'DESIGN'],
    menu: '#gnbList',
    sectionsColor: ['transparent', 'transparent', 'transparent', 'red', 'transparent'],
    onLeave: function (origin, destination, direction) {
        /* 현재 구역을 떠나서 새로운 구역으로 이동하는 와중에 실행되는 이벤트
        origin : 출발구역
        destination : 목적지 구역
        direction : 스크롤 방향에 따라 up, down
        출발구역의 인덱스 번호 origin.index (0부터 카운트)
        어디에서 출발하든 본문 1으로 이동하고, up방향일 경우 mainTextEffect() 함수 호출하기
        */
        if (destination.index === 0 && direction === 'up') {
          console.log(origin.index);
          mainTextEffect();
        }
      },
  });

  window.addEventListener('load', function () {
    var size = document.querySelector('.shape').getTotalLength();
    console.log(size);
  });

  function mainTextEffect() {
    // 본문1 .main_txt 한글자씩 fade 시키기
    $('#cnt1 .main_txt div').each(function () {
      var splitTxt = $(this).text().split(''); //한글자씩 잘라서 배열에 저장
      console.log(splitTxt);
      $(this).text('');  //기존 텍스트 우선 지우기

      // 반복문을 통해 각 div 부모 안에 막내 자식으로 동적생성
      for (var i=0; i<splitTxt.length;i++) {
        $(this).append('<span class="fade-in-box">' + splitTxt[i] + '</span>');

        // var randomSec = Math.ceil(Math.random() * splitTxt.length);
        // randomSec = randomSec * 0.3
        // console.log(randomSec);
        // $(this).children().addClass('fade-in-box').css('animationDelay', randomSec + 's');
      }
    });
    // 21글자를 random() 메서드로 지연시간 주기
    $('#cnt1 .main_txt span').each(function () {
      var randomSec = Math.ceil(Math.random() * 10);
      $(this).css('animationDelay', randomSec * 0.2 + 's');
    });
  }
  // 로딩시 한번 호출
  mainTextEffect();

});
