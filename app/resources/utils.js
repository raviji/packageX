function get_bbox(touches) {
    var xmin = touches[0].pageX;
    var xmax = touches[0].pageX;
    var ymin = touches[0].pageY;
    var ymax = touches[0].pageY;
    for(var i = 1; i<touches.length; i++) {
        var x = touches[i].pageX;
        var y = touches[i].pageY;
        if(x<xmin) xmin = x;
        if(xmax<x) xmax = x;
        if(y<ymin) ymin = y;
        if(ymax<y) ymax = y;
    }
    return {
        xmin:xmin, 
        xmax:xmax, 
        ymin:ymin, 
        ymax:ymax,
        width:xmax-xmin, 
        height:ymax-ymin,
        area:(xmax-xmin)*(ymax-ymin)
    };
}
function atan_degrees(x,y) {
    return 90*Math.atan2(y,x)/Math.atan2(1,0);
}

function new_point(x,y) {
    return {
        x:x, 
        y:y
    };
}
function delta_angle(ang1, ang0) {
    var delta = ang1 - ang0;
    if(360<delta) delta -= 360;
    if(delta<-360) delta += 360;
    return delta;
}

function get_line(touches) {
    var pt0 = new_point(touches[0].pageX, touches[0].pageY);
    var pt1 = new_point(touches[1].pageX, touches[1].pageY);
    var dx = pt1.x - pt0.x;
    var dy = pt1.y - pt0.y;
    return  {
        pt0:pt0, 
        pt1:pt1,
        delta:new_point(dx,dy),
        ctrpt:new_point((pt0.x+pt1.x)/2,(pt0.y+pt1.y)/2),
        angle:atan_degrees(dx,dy),
        length:Math.sqrt(dx*dx+dy*dy)
    }
}
 
THREE.Object3D.prototype.setMatrix = function () {

    var m1 = new THREE.Matrix4();

    return function ( matrix ) {

        this.matrix = matrix;

        this.position.getPositionFromMatrix( this.matrix );

        this.scale.getScaleFromMatrix( this.matrix );

        m1.extractRotation( this.matrix );

        if ( this.useQuaternion === true )  {

            this.quaternion.setFromRotationMatrix( m1 );

        } else {

            this.rotation.setEulerFromRotationMatrix( m1, this.eulerOrder );

        }

    }

}();




function proj(d, p)
{
    var D = p.a*d.x + p.b*d.y + p.c*d.z;
    d.x = -d.x/D;
    d.y = -d.y/D;
    d.z = -d.z/D;
    return new THREE.Matrix4(
        /*1 + p.a*d.x, p.b*d.x, p.c*d.x, p.d*d.x, 
                p.a*d.y, 1 + p.b*d.y, p.c*d.y, p.d*d.y, 
                p.a*d.z, p.b*d.z, 1 + p.c*d.z, p.d*d.z,*/
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 0.01, 0,
        0, 0, 0, 1);
}
         
var m_scale = new THREE.Matrix4();
m_scale.makeScale(0.1, 0.1, 0.1);
var m_proj = proj({
    x:0.1,
    y:0.1,
    z:1
}, {
    a:0, 
    b:0, 
    c:1, 
    d:0
});
            
            