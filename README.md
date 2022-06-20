# team_L
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>JEJU</title>
    <link href="css/style.css" type="text/css" rel="stylesheet">
    <link href="https://unpkg.com/swiper@8/swiper-bundle.min.css" rel="stylesheet">
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
</head>

<body>
    <header>
        <a href="team.html">
            <img src="media/로고.jpg" height="75px" width="75px"></a>
        <nav>
            <a href=team.html#><span>제주의 풍경</span></a>
            <a href=team.html#textBox><span>제주지도</span></a>
            <a href=team.html#festa><span>축제와 행사</span></a>
        </nav>
    </header>

    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <p>구좌 하도해변</p><img src="media/구좌/하도.jpg">
            </div>
            <div class="swiper-slide">
                <p>남원 가뫼물</p><img src="media/남원/가뫼물.jpg">
            </div>
            <div class="swiper-slide">
                <p>대정 노리매</p><img src="media/대정안덕/노리매.jpeg">
            </div>
            <div class="swiper-slide">
                <p>안덕 트로이테마농원</p><img src="media/대정안덕/트로이테마농업.jpeg">
            </div>
            <div class="swiper-slide">
                <p>성산일출봉</p><img src="media/성산/성산일출봉1.jpg">
            </div>
            <div class="swiper-slide">
                <p>애월 새별오름</p><img src="media/애월/새별오름.jpg">
            </div>
            <div class="swiper-slide">
                <p>제주시 용연</p><img src="media/제주시/용연.jpg">
            </div>
            <div class="swiper-slide">
                <p>조천 닭머르해안길</p><img src="media/조천/닭머르2.jpg">
            </div>
            <div class="swiper-slide">
                <p>중문 주상절리대</p><img src="media/중문/주상절리대.png">
            </div>
            <div class="swiper-slide">
                <p>표선 성읍녹차마을</p><img src="media/표선/성읍녹차마을.jpg">
            </div>
            <div class="swiper-slide">
                <p>한경 산양큰엉곶</p><img src="media/한경한림/산양큰엉곶.jpg">
            </div>
            <div class="swiper-slide">
                <p>한림 쌍용동굴</p><img src="media/한경한림/쌍용동굴.jpg">
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
        var swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: true,
            autoplay: {
                delay: 3000,
            }
        });
    </script>

    <div class="slide">
        <a class="slide_con" href="https://www.weather.go.kr/w/weather/forecast/short-term.do?stnId=184" target="_blank">날씨 확인하기</a>
        <a class="slide_con" href="https://www.siksinhot.com/taste?hpAreaId=385&upHpAreaId=15" target="_blank">제주도 맛집</a>
        <a class="slide_con" href="checklist.html" target="_blank">떠나기 전에 챙기셨나요?</a>
    </div>

    <script src="js/upslide.js"></script>

    <div>
        <div id="box2"></div>
        <div id="textBox">
            <br><br>
        </div>
        <div id="textBox2">
            <h2></h2>
        </div>
        <br><br><br>
        <div style="display:table; width:100%; height:100%;">
            <div style="display:table-cell; text-align: center; vertical-align: middle;">
                <img src="media/지도.png" usemap="#image-map">
            </div>
        </div>
    </div>
    <script src="http://code.jquery.com/jquery-3.1.0.js"></script>
    <script src="js/team.js"></script>
    <map name="image-map">
        <area target="_self" alt="" title="" href="애월.html" coords="147,170,151,208,158,229,174,235,173,256,227,289,249,296,264,290,272,295,296,296,300,275,327,274,359,277,391,273,397,262,368,242,337,245,307,207,306,165,300,128,277,133,276,116,254,112,238,121,221,121,199,139,193,135,179,142,170,137,168,152" shape="poly">
        <area target="_self" alt="" title="" href="한경,한림.html" coords="8,309,9,326,11,337,4,347,10,361,26,352,73,379,73,368,120,352,140,324,165,317,185,294,220,295,165,257,161,244,148,235,146,220,138,171,118,184,117,212,87,239,72,242,57,261,33,283" shape="poly">
        <area target="_self" alt="" title="" href="대정,안덕.html" coords="5,371,10,380,29,420,39,426,50,441,78,440,107,482,120,489,121,501,139,493,143,503,140,486,149,468,188,443,213,446,219,438,220,419,223,403,218,369,236,345,255,364,258,349,277,341,280,311,291,308,258,299,232,299,225,305,191,302,178,323,146,331,135,350,120,358,86,371,78,391,40,366,27,357" shape="poly">
        <area target="_self" alt="" title="" href="중문.html" coords="234,361,226,374,228,402,228,423,226,442,229,451,287,443,301,456,330,439,348,468,387,454,406,441,396,392,396,356,392,331,395,318,392,302,398,277,378,280,362,284,329,281,306,288,300,299,301,310,289,318,286,328,284,344,265,355,257,374" shape="poly">
        <area target="_self" alt="" title="" href="서귀포.html" coords="408,277,403,303,407,320,402,336,407,352,404,394,413,421,419,440,427,441,449,438,478,437,488,446,504,440,510,430,506,390,486,368,477,332,464,312,446,296,428,275" shape="poly">
        <area target="_self" alt="" title="" href="남원.html" coords="432,268,459,297,476,313,485,326,494,357,496,371,514,390,520,420,517,430,529,418,536,408,549,404,558,400,600,405,648,389,688,357,676,343,662,329,663,314,642,280,616,265,601,258,592,261,577,262,567,254,562,247,543,233,527,237,520,247,504,252,488,252,476,262,435,262" shape="poly">
        <area target="_self" alt="" title="" href="표선.html" coords="558,227,562,233,576,243,578,249,592,249,596,254,606,250,651,272,661,294,678,315,676,329,692,342,706,358,724,356,749,349,756,336,750,324,768,311,746,274,729,264,716,258,713,244,725,232,725,210,740,192,726,177,717,172,709,174,703,180,687,192,655,202,631,194,609,200,584,218" shape="poly">
        <area target="_self" alt="" title="" href="성산.html" coords="730,171,742,185,747,197,741,205,732,218,736,231,729,241,722,249,731,261,750,269,761,281,768,291,775,304,783,287,788,274,799,255,816,240,826,232,826,212,842,183,859,195,864,187,849,176,847,158,861,146,873,152,877,145,861,129,857,149,841,147,839,136,847,134,823,122,805,128,796,138,783,142,767,151" shape="poly">
        <area target="_self" alt="" title="" href="구좌.html" coords="603,24,610,48,622,60,624,71,640,88,638,111,631,134,631,150,626,168,631,177,638,187,651,190,660,191,682,183,710,165,732,158,752,146,776,139,785,128,799,123,820,111,834,97,832,82,820,72,820,61,806,55,790,54,781,58,764,48,742,36,739,26,737,16,736,10,731,7,711,20,690,8,674,3,669,15,647,13,632,13" shape="poly">
        <area target="_self" alt="" title="" href="조천.html" coords="490,39,483,50,489,67,506,70,509,93,517,103,526,116,527,133,535,152,534,170,534,181,515,194,507,213,489,235,478,239,463,248,447,254,471,253,489,245,508,242,525,224,546,221,563,210,572,210,597,190,628,185,618,171,618,154,624,137,624,126,632,99,631,82,612,70,606,52,595,49,595,38,594,26,583,20,577,27,569,34,553,27,543,22,539,34,521,37" shape="poly">
        <area target="_self" alt="" title="" href="제주시.html" coords="279,108,284,120,304,116,309,139,314,162,314,182,317,205,327,222,341,237,371,234,397,250,406,267,422,258,446,243,461,240,472,229,489,225,508,193,525,178,527,150,517,130,520,118,500,102,499,80,486,74,477,68,473,58,454,57,441,62,424,61,415,71,371,63,358,75,353,78,351,84,337,91" shape="poly">  
    </map>
    

    <div id="box2"></div>
    <span id="festa"></span>
    <br><br><br><br><br><br>
    <h1  style="background-color: #ffffffb9;">
        <span>진행중인 축제</span>
    </h1>
    <br><br>
    <table cellpadding="0">
        <tr>
            <td class="cell">
                <a href="http://www.cheongsuri.kr/index.php" target="_blank">
                    <img src="media/행사/반딧불이.jpg" width="300" height="200">
                </a>
            </td>
            <td class="cell2">
                <strong>
                    청수 곶자왈 반딧불이 축제
                </strong><br><br>
                별 흐르는 마을 청수리에서 개최되는 곶자왈 반딧불이 축제
                <br><br><br><br>
                2022.06.11~2022.07.10
                <br>
                제주시 > 한경
            </td>
            <td width="5%px"></td>
            <td class="cell">
                <a href="https://manorblanc.modoo.at/" target="_blank">
                    <img src="media/행사/마노르블랑.jpg" width="300" height="200">
                </a>
            </td>
            <td class="cell2">
                <strong>
                    마노르블랑 수국축제
                </strong><br><br>
                "수국축제의 향연, 전세계 30여종 7천여본 수국들을 만나다 "
                <br><br><br><br>
                2022.04.18~2022.08.31
                <br>
                서귀포시 > 안덕
            </td>
        </tr>
        <tr style="height: 10px"></tr>
        <tr>
            <td class="cell">
                <a href="http://www.jejusong.or.kr/" target="_blank">
                    <img src="media/행사/일노래.jpg" width="300" height="200">
                </a>
            </td>
            <td class="cell2">
                <strong>
                    제주 일노래 상설 공연
                </strong><br><br>
                제주의 진솔한 모습을 만날 수 있는 음악 축제
                <br><br><br><br>
                2022.06.11~2022.08.27
                <br>
                제주시 > 제주시내
            </td>
            <td width="5%px"></td>
            <td class="cell">
                <a href="https://www.instagram.com/jeju_erun_trip/" target="_blank">
                    <img src="media/행사/erun.jpg" width="300" height="200">
                </a>
            </td>
            <td class="cell2">
                <strong>
                    세상에 이런(E-RUN) 트립
                </strong><br><br>
                '제로를 외쳐봐, 세상에 E-RUN 트립' 제로탄소! 제로플라스틱! 제로일회용품! 쓰레기 없는 여행을 떠나요!
                <br><br><br>
                2022.06.30~2022.07.02
                <br>
                서귀포시 > 성산
            </td>
        </tr>
        <tr style="height: 10px"></tr>
        <tr>
            <td class="cell">
                <a href="http://www.snoopygarden.com/" target="_blank">
                    <img src="media/행사/스누피.jpg" width="300" height="200">
                </a>
            </td>
            <td class="cell2">
                <strong>
                    SNOOPY GARDEN
                </strong><br><br>
                여름을 맞아 해변에서 서핑을 즐기는 스누피와 모래성을 쌓고 있는 피너츠 친구들의 모습을 볼 수 있다.
                <br><br><br>
                2022.06.09~2022.08.31
                <br>
                제주시 > 구좌
            </td>
            <td width="5%px"></td>
            <td class="cell">
                <a href="http://hueree.com/index.php" target="_blank">
                    <img src="media/행사/휴애리.jpg" width="300" height="200">
                </a>
            </td>
            <td class="cell2">
                <strong>
                    휴애리 여름수국 축제
                </strong><br><br>
                정성스럽게 키운 다양한 수국을 온실, 수국정원, 수국오름 등 공원 곳곳에서 감상할 수 있는 축제
                <br><br><br>
                2022.06.10~2022.07.20
                <br>
                서귀포시 > 남원
            </td>
        </tr>
        <tr style="height: 10px"></tr>
        <tr>
            <td class="cell">
                <a href="https://www.jejucafeshow.com/" target="_blank">
                    <img src="media/행사/카페.jpg" width="300" height="200">
                </a>
            </td>
            <td class="cell2">
                <strong>
                    제주카페스타
                </strong><br><br>
                제주 유일의 전시인증 카페박람회! 원두부터 차, 디저트와 머신까지 카페에 관한 모든 것을 한 자리에서 만나볼 수 있다.
                <br><br><br>
                2022.06.23~2022.06.26
                <br>
                서귀포시 > 중문
            </td>
            <td width="5%px"></td>
            <td class="cell">
                <a href="http://www.jejumarathon.com/" target="_blank">
                    <img src="media/행사/마라톤.png" width="300" height="200">
                </a>
            </td>
            <td class="cell2">
                <strong>
                    제주국제관광마라톤축제
                </strong><br><br>
                제주의 파란 바닷빛과 함께 천혜의 자연 에너지를 만끽할 수 있는 "제주국제관광마라톤축제"
                <br><br><br>
                2022.06.19~2022.06.19
                <br>
                제주시 > 구좌
            </td>
        </tr>
        <tr style="height: 10px"></tr>
        <tr>
            <td class="cell">
                <a href="http://www.hallimpark.com/" target="_blank">
                    <img src="media/행사/한림공원.jpg" width="300" height="200">
                </a>
            </td>
            <td class="cell2">
                <strong>
                    한림공원 부겐빌레아축제
                </strong><br><br>
                열대지방에서만 볼 수 있는 부겐빌레아 꽃을 제주에서 만나볼 수 있는 축제.
                <br><br><br><br>
                2022.05.20~2022.06.19
                <br>
                제주시 > 한림
            </td>
            <td width="5%px"></td>
            <td class="cell">
                <a href="http://www.sanghyowon.com/" target="_blank">
                    <img src="media/행사/상효원.jpg" width="300" height="200">
                </a>
            </td>
            <td class="cell2">
                <strong>
                    상효원수목원 수국축제
                </strong><br><br>
                서귀포시 돈내코 인근 중산간에 위치한 힐링 수목원 상효원에서 여름을 맞이하여 개최하는 여름꽃 축제
                <br><br><br>
                2022.06.04~202207.03
                <br>
                서귀포시 > 서귀포시내
            </td>
        </tr>
    </table>
    <div id="box2"></div><hr><br>
    <div style="text-align: center; color: gray;">
        사진출처<br><br>
        [나무위키]
        https://namu.moe/w/%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84/%EA%B4%80%EA%B4%91?from=%EC%A0%9C%EC%A3%BC%EC%97%AC%ED%96%89<br>
        [VISIT JEJU]
        https://www.visitjeju.net/kr/festival/list?menuId=DOM_000001718007000000&cate1cd=cate0000001360#p1&month=06
        <br><br>
    </div>
</body>

</html>
