


function initInput(element)
{
    element.onmousedown=mousedown;//"mousedown(event);"
    element.onmouseout=mouseout;//"mouseup(event);"
    element.onmouseup=mouseup;//"mouseup(event);"
    element.onmousemove=mousemove;//"mousemove(event);"
    element.ontouchend=do_touchend;//"do_touchend(event);"
    element.ontouchstart=do_touchstart;//"do_touchstart(event);"
    element.ontouchmove=do_touchmove;//"do_touchmove(event);"

    if(window.addEventListener)
        document.addEventListener('DOMMouseScroll', moveObject, false);

    //for IE/OPERA etc
    element.onmousewheel = moveObject;
}

var hasMouseCtx = false;

function mouseout(event)
{
    mouseup(event);
    hasMouseCtx = false;
}


function moveObject(event)
{
     if (!hasMouseCtx) return;
     event.preventDefault();
    var delta = 0;

    if (!event) event = window.event;

    // normalize the delta
    if (event.wheelDelta) {

        // IE and Opera
        delta = event.wheelDelta / 60;

    } else if (event.detail) {

        // W3C
        delta = -event.detail / 2;
    }

    var scale = Math.pow(1.1, delta);
    targetScale = scale * targetScale;
}
function mousedown(event)
{
    event.preventDefault();
   mouseX = event.pageX;
    mouseY = event.pageY;
    mouseDown = true;
    baseScale = targetScale;
    if (pauseTimer < 500)
    {
        resetFold();
        angularSpeed = -angularSpeed;

    //pause = !pause;
    }
    pauseTimer = 0;


    down(event);


}

function down(event)
{
    // if (angle>0 && angle <foldMax )
    return;
    var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
    projector.unprojectVector( vector, camera );

    var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

    var intersects = raycaster.intersectObjects( objects );

    if (lastPanel != null)
        lastPanel.material.color.copy(lastPanelColor);
    lastPanel = null;
    scene.remove( grabPart );
    if ( intersects.length > 0 ) {


        lastPanel = intersects[ 0 ].object;
        lastPanelColor.copy(lastPanel.material.color);
        lastPanel.material.color.setHex( 0xffffff );

        //var particle = new THREE.Particle( particleMaterial );
        // particle.position = intersects[ 0 ].point;
        // particle.scale.x = particle.scale.y = 8;
        //scene.add( particle );
        grabPart.position = intersects[ 0 ].point;
    //scene.add( grabPart );
    /*

                     */

    }
}
function mouseup(event)
{
    event.preventDefault();
    mouseDown = false

}
function do_touchend(event)
{
    event.preventDefault();
    mouseDown = false

}
function mousemove(event)
{
    event.preventDefault();
    if (mouseDown)
    {
         mouseDX = event.pageX - mouseX;
        mouseDY = event.pageY - mouseY;
        mouseX = event.pageX;
        mouseY = event.pageY;
        viewMomentumX = -mouseDX*0.015;//(mouseDX*0.01 - viewMomentumX)*0.2;
        viewMomentumY = mouseDY*0.015;

    }
    hasMouseCtx = true;
}

function do_touchstart(event)
{
    event.preventDefault();

    touch_state.nlast = event.touches.length;
    if(event.touches.length == 1){
        var touch = event.touches[0];
        touch_state.xlast = touch.pageX;
        touch_state.ylast = touch.pageY;
        if (pauseTimer < 500) pause = !pause;
        pauseTimer = 0;
        mouseDown= true;

        if (!event.clientX)
        {
            event.clientX = touch.pageX;
            event.clientY = touch.pageY;
        }
        down(event);
    }
    if(event.touches.length == 2){
        touch_state.line = get_line(event.touches);
        baseScale = targetScale;
    }
    if(event.touches.length == 3){
        touch_state.bbox = get_bbox(event.touches);
        touch_state.done = 0;
    }
}


function do_touchmove(event) {
    if(event.touches.length != touch_state.nlast) {
        do_touchtart(event);
        return;
    }
    if(event.touches.length == 1){
        var touch = event.touches[0];

        viewMomentumX = -(touch.pageX - touch_state.xlast)*0.015;//(mouseDX*0.01 - viewMomentumX)*0.2;
        viewMomentumY = (touch.pageY - touch_state.ylast)*0.015;

        touch_state.xlast = touch.pageX;
        touch_state.ylast = touch.pageY;
    }
    if(event.touches.length == 2){
        var line = get_line(event.touches);
        var scale = line.length/touch_state.line.length;
        if(scale!=1) {
            targetScale = targetScale/scale;
        //scale_scene(scale);
        }
        // rotscene(0,0,delta_angle(line.angle,touch_state.line.angle));
        var dx = touch_state.line.pt1.x - touch_state.line.pt0.x;
        var dy = touch_state.line.pt1.y - touch_state.line.pt0.y;
        var dlen = Math.sqrt(dx*dx + dy*dy);
        dx /= dlen;
        dy /= dlen;
        var a = -dy;
        var b =  dx;
        var c = -(a*touch_state.line.ctrpt.x + b*touch_state.line.ctrpt.y);
        var d = a*line.ctrpt.x + b*line.ctrpt.y + c;

        touch_state.line = line;
    //  update_scene();
    }
    if(event.touches.length == 3){
        bbox = get_bbox(event.touches);
        if(touch_state.done) return;


        if(touch_state.bbox.area*2<bbox.area) {
            //fold(-1);
            resetFold();
            if (angularSpeed < 0)
                angle = 0;

            angularSpeed = -Math.abs(angularSpeed);
            touch_state.done = 1;
        }
        if(bbox.area*2<touch_state.bbox.area) {
            //fold(1);

            resetFold();
            if (angularSpeed > 0)
                angle = foldMax;

            touch_state.done = 1;
            angularSpeed = Math.abs(angularSpeed);
        }
    }
}
