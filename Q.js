const quiz = [
    {
        ques: '王貞治の通算本塁打数は?',
        cho: [
            '444本',
            '562本',
            '787本',
            '868本'
        ],
        ans: '868本'
    },
    {
        ques: ' シンガーソングライターの幾田りらがボーカルを務める、代表曲「夜に駆ける」を歌っている音楽ユニットは？',
        cho: [
            'ASAASOBI',
            'HIRUASOBI',
            'YOASOBI',
            'SHINYAASOBI'
        ],
        ans: 'YOASOBI'
    },
    {
        ques: '原子核を構成している中性子と陽子を強く結び付けている素粒子は？',
        cho: [
            'グルーオン',
            'ボソン',
            'フェルミオン',
            'クォーク'
        ],
        ans: 'グルーオン'
    },
    {
        ques: 'イギリスと中国の間で起こった第一次アヘン戦争は西暦何年の出来事？',
        cho: [
            '1562年',
            '1724年',
            '1840年',
            '1901年'
        ],
        ans: '1840年'
    },
    {
        ques: 'Facebookが発行予定の暗号通貨は「Libra」から何という名前に変更されたか？',
        cho: [
            'イーサリアム',
            'ダイ',
            'ディエム',
            'ビットコイン'
        ],
        ans: 'ディエム'
    }
];

const $ques = document.getElementById('js-ques');
const $button = document.getElementsByTagName('button');
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
    };
};

let handlerIndex = 0;
while(handlerIndex < buttonLen){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};
