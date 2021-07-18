var time = 0
var isStopped = 0
function onClickStart() {



    let i = 0;
    while (true) {
      task(i);
       i++;
    }
    function task(i) {
      setTimeout(function() {
          console.log(i)
      }, 2000 * i);
    }


}