(function(){
  'use strict'
  var btn = document.getElementById('btn');
  var taskList = document.getElementById('task-list'); /*olタグ*/
  var tasks = [];
  var radioWork = document.getElementById('radio-work'); /*ラジオボタン作業中のid*/
  var radioDone = document.getElementById('radio-done'); /*ラジオボタン完了のid*/
  var radioAll = document.getElementById('radio-all');

  /*作業中ボタン作成処理*/
  var createWorkBtn = function(){
    var WorkBtn = document.createElement('button');
    var WorkText = document.createTextNode('作業中');
    WorkBtn.appendChild(WorkText);
    // 作業ボタン押下処理
    WorkBtn.addEventListener('click',function(){
      if(this.textContent == "作業中"){
        this.textContent = "完了";
        // 親要素へclassNameをつける処理
        var doneParent = this.parentNode;
        doneParent.className = 'toggleTarget workDone';/*完了class*/
      }else{
        this.textContent = "作業中";
        // ボタン押下で生成されたdomの中の親要素へclassNameをつける処理
        var workParent = this.parentNode;
        workParent.className = 'toggleTarget work';/*作業中class*/
      }
    })
    return WorkBtn;
  }

  // 削除ボタン作成処理
  var createDelBtn = function(){
    var delBtn = document.createElement('button');
    var delText = document.createTextNode('削除');
    delBtn.appendChild(delText);
    delBtn.id = 'delId';
    // 削除ボタン押下処理
    delBtn.addEventListener('click',function(){
      var li = this.parentNode;
      var result = confirm('タスクを削除しますか？');
      if(result){
        li.remove();
        alert('削除しました。')
      }
    })
    return delBtn;
  }



  /*追加ボタン押下時処理 タスクを追加する*/
 btn.addEventListener('click',function(){

   var task = document.getElementById('new-task').value;
   if(task==""){
     alert("タスクを入力して下さい");
     return;
   }
   tasks.push(task); /*new-taskの値を配列tasksへpush */
   //liタグ作成処理
   var li = document.createElement('li');
   li.className = 'toggleTarget work';
   taskList.appendChild(li); /*taskList(olタグ)の子要素へ変数liを入れる*/
   tasks.forEach(function(){
     li.textContent = task;
   })
   li.appendChild(createWorkBtn()); /*returnで帰ってきたworkBtn*/
   li.appendChild(createDelBtn());/*returnで帰ってきたDelBtn*/
 })


  /*ラジオボタン完了が選択された時*/
  radioWork.addEventListener('click',function(){
    var workTsks = document.getElementsByClassName('toggleTarget work');
    workTsks = Array.from(workTsks);
    workTsks.forEach(function(workTsks){
      workTsks.style.display = "block";
    })
    var doneTsks = document.getElementsByClassName('toggleTarget workDone');
    doneTsks = Array.from(doneTsks);
    doneTsks.forEach(function(doneTsks){
      doneTsks.style.display = "none";
    })
  })

  // // ラジオボタン作業中が選択された時
  radioDone.addEventListener('click',function(){
    var doneTsks = document.getElementsByClassName('toggleTarget workDone');
    doneTsks = Array.from(doneTsks);
    doneTsks.forEach(function(doneTsks){
      doneTsks.style.display = "block";
    })
    var workTsks = document.getElementsByClassName('toggleTarget work');
    workTsks = Array.from(workTsks);
    workTsks.forEach(function(workTsks){
      workTsks.style.display = "none";
    })
  })

  // ラジオボタンすべてが選択された時
  radioAll.addEventListener('click',function(){
    var AllTsks = document.getElementsByClassName('toggleTarget');
    AllTsks = Array.from(AllTsks);
    AllTsks.forEach(function(AllTsks){
      AllTsks.style.display = "block";
    })
  })
})();
