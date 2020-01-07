const questions = [
  {
    question: "一番美味しいお肉の部分は？",
    options: ["ロース", "タン", "スネ", "バラ"],
    answer: "ロース"
  },
  {
    question: "クリスマスに休みに行ったら最高の場所は？",
    options: ["沖縄", "福岡", "ロシア", "アフリカ", "無人島"],
    answer: "沖縄"
  },
  {
    question: "普通のコーラとダイエットコーラどちらを飲みますか？",
    options: ["普通", "ダイエット"],
    answer: "普通"
  },
  {
    question: "一番可愛い動物は？",
    options: ["ペンギン", "カワウソ", "猫", "ゴールデンレトリバー"],
    answer: "ゴールデンレトリバー"
  }
];

let questionNumber = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", function() {
  loadQuestion();
});

function loadQuestion() {
  if (questions.length == 0) {
    return alert("全ての問題を付けました！お疲れさまでした！");
  }
  let q = Math.floor(Math.random() * questions.length);
  questionNumber++;

  console.log(q);

  const question_h2 = document.getElementById("question");
  const option_div = document.getElementById("options");
  const correct_span = document.getElementById("correct");

  question_h2.textContent = questions[q].question;

  let questionAnswer = questions[q].answer;
  for (item of questions[q].options) {
    const div = document.createElement("div");
    div.textContent = item;
    console.log(item);
    option_div.appendChild(div);

    div.addEventListener("click", function(e) {
      console.log(e.target.textContent);
      if (e.target.textContent == questionAnswer) {
        correct++;
        correct_span.textContent = `${correct} of ${questionNumber}`;
      } else {
        alert("ohhhh, noooo");
        correct_span.textContent = `${correct} of ${questionNumber}`;
      }
    });
  }

  questions.splice(q, 1);
}
