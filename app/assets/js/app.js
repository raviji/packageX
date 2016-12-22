var App = angular.module("GPApp", []);

App.controller("mainCtrl", function($scope,$timeout) {


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
    
    function  toggleFirstSet(){
        var total = $("svg image").length;
        ////console.log($("svg image").length)
        var random = randomXToY(1,total);
           // //console.log(random)
          var d = document.getElementById(random);
          var x =d.classList;
          var parentClass=$(d).parent().parent().prop('className');
          //console.log(parentClass);
          if(parentClass=="ne"){
         
            if(x==0)
            {         
               d.classList.add("hover1"); 
                $timeout(function(){
                    d.classList.remove("hover1"); 
                    console.log("flip")       
                },2000);
            }         
        }else if(parentClass=="ns"){
        
         if(x==0){
              
         d.classList.add("hover2");
        $timeout(function(){
                d.classList.remove("hover2")
            }, 2000);
      
         }
    }
    };
   



var check;
var id;
function startstop(check){
       if(!check){
      id=  window.setInterval(function(){
           
  toggleFirstSet();
  console.log("interval")
  
},2000);      
          }
          else{
               clearInterval(id);
               var arr;
               for(var i=1;i<=24;i++){
                   arr=document.getElementById(i);
                   arr.classList.remove("hover1","hover2");
               }
               
              //console.log("stopped");
          }

}

    $(".box").mouseenter(function(){
        check=true;
       
        
         startstop(check);

    });
    $(".box").mouseleave(function(){
        
       check=false;
        //console.log(check);
        //console.log("left");
        var count=0;
        startstop(check);
          
   
      
    });
});