$(function () {
  /*로그인 버튼*/
  $(`.login_wrap > a`).on(`click`, function () {
    $(`#login_f`).animate({ top: "20px" }, 500);
    return false;
    // a태그가 가지고 있는 기능인 링크기능 없애주기.
  });
  // 클로즈 버튼 눌렀을 때와 로그인 버튼을 눌렀을때, 로그인 창이 사라지게 하기.
  $(".login_close_btn, input[alt = '로그인 버튼']").on(`click`, function () {
    $(`#login_f`).animate({ top: "-500px" }, 500);
    return false;
  });

  // user_id, pw label 을 포커스 하면 gif 없어지게 구현하기.
  $(`#user_id, #user_pw`).on(`focus`, function () {
    $(this).prev().css(`left`, `-9999px`);
  });

  // 포커스가 사라지면 다시 돌아오게 구현하기.
  $(`#user_id, #user_pw`).on(`blur`, function () {
    // if 문으로 포커스 내부에 값이 존재하면 사라지지 않게구현함.
    if ($(this).val() == "") $(this).prev().css(`left`, `2px`);
  });

  /*zoom 버튼*/
  var base = 100;
  var mybody = $("body");
  $(`#zoom a`).on(`click`, function () {
    // 지금 선택한 인덱스 값을 대입한것.
    // zoom안에 a태그가 3개 존재하기 때문
    var zNum = $(`#zoom a`).index(this);
    if (zNum == 0) {
      // +버튼임
      base += 10;
    } else if (zNum == 1) {
      // 100버튼 누를시
      base = 100;
    } // -버튼
    else {
      base -= 10;
    }

    mybody
      .css("overflow-x", `auto`)
      .css(`transform-origin`, `0 0`)
      .css(`transform`, `scale(` + base / 100 + `)`) //css(`transform`,`scale(1)`)
      .css(`zoom`, base + `%`); // css(`zoom1`, 100%)
    return false;
    // a태그 링크기능 삭제
  });

  /*프린트 버튼*/
  $(`.print_btn`).on(`click`, function () {
    window.print();
    return false; // a태그가 가진 링크기능 삭제
  });

  /*검색 창 안내 가이드*/
  $(`#keyword`)
    .on(`focus`, function () {
      $(this).css(`background-position`, `0 -999px`);
    }) // 이어서 쓴거.. 검색창 안에 포커스 잡으면 gif 날라가고
    // 창안에 값이 비어있으면 다시 이미지 불러오고
    .on(`blur`, function () {
      if ($(this).val() == "") $(this).css(`background-position`, `0 0px`);
    });
  /*GNB메뉴*/
  var beforeEl;
  //마우스 올리면 색이 바뀌게 하기
  $(`#gnb>li> a`).on(`mouseover focus`, function () {
    if (beforeEl)
      beforeEl
        .children(`img`)
        .attr(
          `src`,
          beforeEl.children(`img`).attr(`src`).replace(`over.gif`, `out.gif`)
        );
    // 여기서 this는 a태그 밑에있는 이미지를 나타냄.
    $(`img`, this).attr(
      `src`,
      $(`img`, this).attr(`src`).replace(`out.gif`, `over.gif`)
    );
    //images/gnb_1_out.gif 이src를 out -> over로 바꿔라

    // 마우스 올리면 밑의 서브메뉴 보이게 하기

    $(`#gnb ul:visible`).slideUp(`fast`);
    // 얘는 기존 마우스 포인터 올려서 상세메뉴 나왔던 것을 다시 올리는것!

    $(this).next().stop().slideDown(`normal`);

    beforeEl = $(this);
  });

  $(`#gnb>li>a`).on(`mouseleave`, function () {
    $(`#gnb ul:visible`).slideUp(`fast`);

    if (beforeEl)
      beforeEl
        .children(`img`)
        .attr(
          `src`,
          beforeEl.children(`img`).attr(`src`).replace(`over.gif`, `out.gif`)
        );
  });

  /*전체메뉴*/
  $(`#total_btn a`).on(`click`, function () {
    $(`#total_menu`).slideDown(`normal`);
    $(`img`, this).attr(
      `src`,
      $(`img`, this).attr(`src`).replace(`out.gif`, `over.gif`)
    );
  });

  /*전체 메뉴 닫기 버튼*/

  $(`#total_close a`).on(`click`, function () {
    $(`#total_menu`).slideUp(`fast`);
    $(`#total_btn a img`).attr(
      `src`,
      $(`#total_btn a img`).attr(`src`).replace(`over.gif`, `out.gif`)
    );
    return false;
  });

  /*날짜 표기*/
  var t = new Date();
  var y = t.getFullYear();
  var m = t.getMonth(); // 오늘이 1월 달이면 month는 0이 된다.. 현재 달보다 하나 작음
  var d = t.getDate();

  $(`#date_wrap .year`).text(y);
  $(`#date_wrap .month`).text(m + 1);
  $(`#date_wrap .date`).text(d);

  /*관련 사이트 이동*/

  /*퀵메뉴*/
});
