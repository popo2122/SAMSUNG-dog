# 삼성화재 안내견 사이트 리뉴얼  
### *💛 작업툴*
- 와이어프레이밍 및 디자인 : Photoshop, Illustrator
- Bracket, Visual Studio code, jQuery

### *💛 How to Design*
 - 삼성을 상징하는 색깔인 파란색과, 안내견을 나타내는 색인 노란색을 사용. 
   사이트 전체적으로 상징적인 색을 사용하여 눈길을 끌고자 함.
 - 로고 아이콘은 일러스트레이터로 직접 제작
 - 메인 페이지는 안내견과 함께하는 따뜻한 느낌을 주고자 안내견과 사람이 함께 있는 
   이미지를 선택하여 배치
 - 물결 무늬를 중간중간 사용하여, 안내견에 맞는 부드러운 느낌 주고자 함
- 사용자의 편의를 고려하여, 안내견 신청에 관련된 'fixed button'디자인           

  
### *💛 Code*

- PC~MOBILE 반응형 지원 (pc는 1920＊1080에서 최적화)
- 메인 레이아웃은 jQuery로 자연스럽게 resize될 수 있도록 반응형 구현하였습니다.
    + window width값 및 resize 이벤트 사용하여 구현
- fixed button은 메인에서 내려왔을 때 자연스럽게 생기도록 구현하였으며, 사용자의 페이지 사용 편의성을 고려하여   
클릭 시 나타나고 스크롤 시 사라지도록 하였습니다.
- 스크롤 시 이미지가 자연스럽게 올라오는 효과는 jQuery scroll 이벤트와, AOS 라이브러리를 사용하였습니다.
    - 참고 링크 : [AOS](https://michalsnik.github.io/aos/)
- 이미지 슬라이드는 Swiper 라이브러리를 활용하였습니다.
    - 참고 링크 : [swiper](https://swiperjs.com/demos)



### 💛 PC ver. 디자인
<p align="center"><img src="https://user-images.githubusercontent.com/75009488/111438135-4087c700-8747-11eb-877a-f60992004f31.jpg" width="50%" height="50%"/></p>          
        
        
### 💛 Mobile ver. 디자인
<p align="center"><img src="https://user-images.githubusercontent.com/75009488/111438180-49789880-8747-11eb-8e52-de87c5b813f2.jpg" width="50%" height="50%"/></p>
