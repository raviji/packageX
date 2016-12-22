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
        var total = $("svg image").length;
        //console.log($("svg image").length)
        var random = randomXToY(1,total);
           // console.log(random)
          var d = document.getElementById(random);
          var x =d.classList;
          var parentClass=$(d).parent().parent().prop('className');
          //console.log(parentClass,random);
          if(parentClass="ne"){
         
         if(x==0){
             d.classList.remove("hover1");
         d.classList.add("hover1");
        d.classList.remove("hover1");}
         else{
             d.classList.remove("hover1");
         d.classList.remove("a");
         d.classList.remove("hover1")
         }
          }
          else{
             // toggleSomething2();
          }
         //console.log(d.classList)
          //console.log(x.length)
      
   
}

    function  toggleSomething2(){
        var total = $("svg image").length-2;
        //console.log(total)
        var random = randomXToY(1,total);
          var d = document.getElementById(random);
          var parentClass=$(d).parent().parent().prop('className');
          //console.log(parentClass,random);
         
          if(parentClass=="ns"){
         var x =d.classList;
        
         if(x==0){
         d.classList.add("hover2");}
         else{
         d.classList.remove("a");
         d.classList.remove("hover2")
         }
          }
           else{
             // toggleSomething1();
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