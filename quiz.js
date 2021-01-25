var quiz = [
    ["5月生まれなのは？", "石井　建世さん", "池田　悧沙さん", "小林　奎太さん", "山﨑　隆弘さん", 3],
    ["AB型なのは？", "宮田　果歩さん", "森　慶太さん", "屋山　司龍さん", "小野　義基さん", 4],
    ["教育学部なのは？", "三谷　樹さん", "夏目　悠希さん", "浜谷　巴菜さん", "山﨑　萌里さん", 4],
    ["青山学院大学ではないのは？", "柏木　孝太さん", "引地　乃梨子さん", "牧野　未侑さん", "松本　哉人さん", 2]
  ];
  var counter = 0;
  var score = 0;

  function set(){
    var order = document.getElementById("order");
    var question = document.getElementById("question");
   

    order.innerHTML = "【第" + (counter + 1) + "問】";
    question.innerHTML = quiz[counter][0];
   
    for(var i = 1; i < 5; i ++){
        var answer = document.getElementById("answer" + i);
        answer.innerHTML = quiz[counter][i];
      }
  }
  function judge(num){
    var result = document.getElementById("result");
    var answer = quiz[counter][5];
      if(answer == num){
        result.innerHTML = "正解です！";
        score += 1;
      }
      else{
        result.innerHTML = "残念！不正解です...";
      }
      
      if(counter == quiz.length - 1){
        result.innerHTML += quiz.length + "問中" + score + "問正解！";
      }
      else{counter += 1;
      set();
      }
  }