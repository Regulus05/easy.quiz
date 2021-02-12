const quiz = [
    {
        ques: '「一周回ってオシャレ！」と言うモデルさんの服のセンスは全く分からないけど、敢えて俺が「一周回ってかっこいい！」と思っている数字は？',
        cho: [
            '13',
            '37',
            '108',
            '666'
        ],
        ans: '13'
    },
    {
        ques: '一つだけ願い事が叶うなら、俺は何を願う？',
        cho: [
            '猫になる',
            '透明人間になる',
            '箸置き職人になる',
            '願い事が無数に叶うようにする'
        ],
        ans: '願い事が無数に叶うようにする'
    },
    {
        ques: 'こんなおじいちゃんにはなりたくない、どんなおじいちゃん？',
        cho: [
            '過去の栄光を語る',
            '素手で味噌汁を飲む',
            '「好きな人」を「相方」と呼ぶ',
            '虫眼鏡を使ってコンビニで立ち読み'
        ],
        ans: '虫眼鏡を使ってコンビニで立ち読み'
    },
    {
        ques: '俺が思う邦楽あるあるは？',
        cho: [
            'ラブソングはもうお腹いっぱい',
            '「あの夜越える」ってどういう事？',
            '48グループは質の高いお遊戯会に見える',
            'みんな「過ぎゆく街並み」見過ぎ'
        ],
        ans: 'みんな「過ぎゆく街並み」見過ぎ'
    },
    {
        ques: 'スピードワゴンの小沢一敬の名言で俺が一番好きなのは？',
        cho: [
            '四季の中に梅雨が入れてもらえなくて泣いてる',
            '雨には音があるんだね',
            '返してよ！俺の唇に少しずつ',
            '地球には70憶人の人がいる。1人に1秒しか会わなくても220年はかかる。でも君と僕は出会って5分以上経ってる。奇跡だね。乾杯。'
        ],
        ans: '四季の中に梅雨が入れてもらえなくて泣いてる'
    }
];


const $ques = document.getElementById('js-ques');
const $button = document.getElementsByTagName('button');
const $return = document.getElementById('js-return');
const buttonLen = $button.length;
const quizLen = quiz.length;
let quizIndex = 0;
let score = 0;


const setupQuiz = () => {
    let buttonIndex = 0;
    $ques.textContent = quiz[quizIndex].ques;
    while(buttonIndex < buttonLen){
        $button[buttonIndex].textContent = quiz[quizIndex].cho[buttonIndex];
        buttonIndex++;
    };
};

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].ans === e.target.textContent){
        alert('正解(^^♪');
        score++;
    } else {
        alert('はい、間違い…( *´艸｀)ﾌﾟｯ');
    };

    quizIndex++;
    
    if(quizIndex < quizLen){
        setupQuiz();
    } else {
        alert('終了！おつかれちゃ～ん(*^^)v');
        $ques.textContent = 'あなたは'+ quizLen +'問中【'+ score +'問】正解でした★';
        if(score === quizLen){
            $button[0].textContent = '全';
            $button[1].textContent = '問';
            $button[2].textContent = '正';
            $button[3].textContent = '解';
        }else{
            if(score === quizLen-1){
                $button[0].textContent = 'お';
                $button[1].textContent = 'し';
                $button[2].textContent = 'い';
                $button[3].textContent = '！';                
            }else{
                $button[0].textContent = 'まだ';
                $button[1].textContent = 'まだ';
                $button[2].textContent = 'これ';
                $button[3].textContent = 'から！';
            };
        };
        $return.style.display = 'block';
        $return.addEventListener('click' , () => {
            location.reload();
        });
    };
};

let handlerIndex = 0;
while(handlerIndex < buttonLen){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};
