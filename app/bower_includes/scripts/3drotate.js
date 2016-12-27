//auto rotate is still a little buggy.. clicking should pause rotation for 5 seconds after mouse up, then return
        // the autorotation to whatever it was before.. ie; if it was rotating, it will restart rotation, if it was stopped
        // then it will stay stopped.

        var autoRotate = true;
        var viewer3dObject = new WebGlViewer3d("resources/");
        var viewer3dObject1 = new WebGlViewer3d("resources/");
        function load(){
            viewer3dObject.appendTo($("#outres"));
            viewer3dObject.initializeView({}, {}, function(){})
            viewer3dObject.loadJson(itemData);

            viewer3dObject.targetScale = 1.4;
            viewer3dObject.viewAngleY = .2
            //init("resources/");
            viewer3dObject.animate();

            //modal2 starts
            viewer3dObject1.appendTo($("#outres1"));
            viewer3dObject1.initializeView({}, {}, function(){})
            viewer3dObject1.loadJson(itemData);

            viewer3dObject1.targetScale = 1.4;
            viewer3dObject1.viewAngleY = .2
            //init("resources/");
            viewer3dObject1.animate();

            setTimeout(function(){ zoomToFit()}, 10 * 1000);
            setTimeout(function(){ startRotate()}, 13 * 1000);
        }

        function startRotate(temp){
            //alert("start rotate");
            viewer3dObject.xAutoRotate = .005;
            viewer3dObject.boxAutoRotate = .005;

            //modal2 starts
            viewer3dObject1.xAutoRotate = .005;
            viewer3dObject1.boxAutoRotate = .005;
            if(!temp){
                autoRotate = true;
            } else {
                autoRotate = temp;
            }
        }

        function stopRotate(temp){
            //alert("stop rotate");
            viewer3dObject.xAutoRotate = 0;
            viewer3dObject.boxAutoRotate = 0;
            //modal2 starts
            viewer3dObject1.xAutoRotate = 0;
            viewer3dObject1.boxAutoRotate = 0;
            if(!temp){
                autoRotate = false;
            } else {
                autoRotate = true;
            }
        }

        function zoomToFit() {
            //alert("zoom to fit");
            var origScaleSpeed = viewer3dObject.scaleSpeed;
            viewer3dObject.scaleSpeed = .4;
            viewer3dObject.targetScale = 1.2;
            viewer3dObject.scaleSpeed = origScaleSpeed;
            //modal2 starts

            var origScaleSpeed = viewer3dObject1.scaleSpeed;
            viewer3dObject1.scaleSpeed = .4;
            viewer3dObject1.targetScale = 1.2;
            viewer3dObject1.scaleSpeed = origScaleSpeed;
        }

        $('#outres').mousedown(function(){
            stopRotate(true);
        });
        $('#outres1').mousedown(function(){
            stopRotate(true);
        });

        $('#outres').on("touchstart", function(){
            stopRotate(true);
        });
        $('#outres1').on("touchstart", function(){
            stopRotate(true);
        });

        $('#outres').mouseup(function(){
            if(autoRotate){
                setTimeout(function(){ startRotate(true)}, 5 * 1000);
            }
        });
        $('#outres1').mouseup(function(){
            if(autoRotate){
                setTimeout(function(){ startRotate(true)}, 5 * 1000);
            }
        });

        $('#outres').on("touchend", function(){
            if(autoRotate){
                setTimeout(function(){ startRotate(true)}, 5 * 1000);
            }
        });
        $('#outres1').on("touchend", function(){
            if(autoRotate){
                setTimeout(function(){ startRotate(true)}, 5 * 1000);
            }
        });