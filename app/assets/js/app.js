var App = angular.module("GPApp", []);

App.controller("mainCtrl", function($scope) {


    var polygon = $("svg polygon");

    var i = polygon.length;
    while (i--) {
        $(polygon).mouseenter(function(e) {
            $(e.target).parent().append(e.target);
        });
    }
/** random */
function randomXToY(minVal,maxVal)
{
  var randVal = minVal+(Math.random()*(maxVal-minVal));
  return Math.round(randVal);
}
    
    function  toggleSomething1(){
        var random = randomXToY(1,12);
          var d = document.getElementById(random);
         var x =d.classList;
         if(x==0){
         d.classList.add("hover1");}
         else{
         d.classList.remove("a");
         d.classList.remove("hover1")
         }
         //console.log(d.classList)
          //console.log(x.length)
      
   
}

    function  toggleSomething2(){
        var random = randomXToY(13,24);
          var d = document.getElementById(random);
         var x =d.classList;
        
         if(x==0){
         d.classList.add("hover2");}
         else{
         d.classList.remove("a");
         d.classList.remove("hover2")
         }
         //console.log(d.classList)
          //console.log(x.length)
      
    
}
var check;
var id;
function startstop(check){
       if(!check){
      id=  window.setInterval(function(){
  toggleSomething1();
            toggleSomething2();
},1000);      
          }
          else{
               clearInterval(id);
               var arr;
               for(var i=1;i<=24;i++){
                   arr=document.getElementById(i);
                   arr.classList.remove("hover1","hover2");
               }
               
              console.log("stopped");
          }

}

    $(".box").mouseenter(function(){
        check=true;
       
        
         startstop(check);

    });
    $(".box").mouseleave(function(){
        
       check=false;
        console.log(check);
        console.log("left");
        var count=0;
        startstop(check);
          
   
      
    });
});