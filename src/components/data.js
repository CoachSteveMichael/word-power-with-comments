import { v4 as uuidv4 } from "uuid";
//array of wrong answers using a sting and split
const wrong = "짜다, 갔다, 우전하다, 타다, 크다, 작다, 줍다, 톱다, 쓰다".split(
  ","
);

//object with an array of english and korean vocab
let data = {
  problems: [
    "in the morning",
    "아침에",
    "brush her teeth",
    "이를 닭다",
    "eat breakfast	",
    "아침을 먹다",
    "get dressed",
    "옷을 입다",
    "get up",
    "일어나다",
    "go to school",
    "학교에 가다",
    "wash his face",
    "얼굴을 씻다",
    "in the afternoon",
    "오후에",
    "in the evening",
    "저녁에",
    "at night	",
    "밤에",
    "do homework",
    "숙제를 하다",
    "eat dinner",
    "저녁을 먹다",
    "go to bed",
    "자다",
    "have a snack",
    "간식을 먹다",
    "read a book",
    "책을 읽다",
    "watch TV",
    "텔레비전을 보다",
    "dress",
    "드레스, 원피스",
    "jeans",
    "청바지",
    "shorts",
    "반바지",
    "skirt",
    "치마",
    "sneakers",
    "운동화",
    "sweatshirt",
    "운동복 상의",
    " T-shirt	",
    "티셔츠",
    " drawing pictures",
    "그림 그리기",
    "  in-line skating",
    "스케이트 타기",
    " listening to music",
    "음악 감상",
    "playing badminton",
    "배드민턴 하기",
    "riding a bike	",
    "자전거 타기",
    "taking pictures",
    "사진 찍기",
    "bank",
    "은행",
    "hospital",
    "병원",
    "library",
    "도서관",
    "post office",
    "우체국",
    "restaurant",
    "식당",
    "shopping mall",
    "쇼핑몰",
    "across from",
    "맞은 편에",
    "behind",
    "뒤에",
    "  between",
    "사이(중간)에",
    "in front of",
    "앞에",
    " next to",
    "옆에",
    "bakery",
    "빵집",
    "bookstore",
    "서점",
    " clothing store",
    "옷가게",
    " pet store	",
    "애완동물 가게",
    "shoe store",
    "신발 가게",
    "parking lot	",
    "주차장",
    " Sunday ",
    "일요일",
    "Monday",
    "월요일",
    "Tuesday",
    "화요일",
    "Wednesday",
    "수요일",
    "Thursday",
    "목요일",
    "Friday",
    "금요일",
    "Saturday",
    "토요일",
    "art",
    "미술",
    "English",
    "영어",
    "math",
    "수학",
    "music",
    "음악 감상",
    "PE",
    "체육",
    "science",
    "과학",
    "social studies",
    "사회",
    "always",
    "항상",
    " usually",
    "보통, 대개",
    " sometimes	",
    "때때로, 가끔",
    "never",
    "결코(절대) ~않다",
    " go shopping ",
    "쇼핑 가다",
    "go swimming	",
    "수영하러 가다",
    " go to the movies",
    "영화보러 가다",
    " practice the piano",
    "피아노를 연습하다",
    "take a nap	",
    "낮잠 자다",
    "take a walk",
    "산책 하다",
    "walk the dog",
    "강아지를 산책시키다",
    "write stories",
    "이야기를 쓰다",
    "backyard",
    "뒷마당",
    "bathroom",
    "화장실",
    "bedroom",
    "침실",
    "dining room",
    "식당",
    "kitchen",
    "주방",
    "living room",
    "거실",
    "bathtub",
    "욕조",
    "dining table",
    "식탁",
    "dresser",
    "서랍장",
    "mirror",
    "거울",
    "refrigerator",
    "냉장고",
    "sink",
    "싱크대",
    "stove",
    "가스레인지",
    "toilet",
    "변기",
    "cleaning the desk",
    "책상 정리",
    "feeding the dog",
    "강아지 먹이 주기",
    "making dinner",
    "저녁 만들기",
    "taking a bath",
    "목욕하기",
    "talking on the phone",
    "통화하기",
    " working on the computer",
    "컴퓨터 작업 하기",
    "at home	",
    "집에서",
    "at school",
    "학교에서",
    "at work",
    "직장에서",
    "airport",
    "공항",
    "amusement park",
    "놀이공원",
    "beach",
    "해변",
    "movie theater",
    "영화관",
    "musuem",
    "박물관"
  ]
};

//loop that takes in the data array and transforms them into objects
let result = [];
for (let i = 0; i < data.problems.length; i++) {
  if (i % 2 === 0) {
    result.push({
      korean: data.problems[i + 1],
      english: data.problems[i],
      points: 10,
      id: uuidv4()
    });
  }
}

export { result, wrong };
