
var angularSpeed = 0.2;
var lastTime = 0;
var angle = 0;
var boxAngle = 0;
var anglePrev = -1;
var foldIndex = 0;
var folding = true;
var foldMax = 0;
var nextAngle = 0;
var prevAngle = 0;

var xAutoRotate = 0;
var yAutoRotate = 0;
var boxAutoRotate = 0;

var viewAngleX=0, viewAngleY=0;
var mouseX, mouseY, mouseDown=false, mouseDX=0, mouseDY=0;
var touch_state = {};
var viewMomentumX = 0, viewMomentumY =0;

var baseScale = 1;
var targetScale = 1.5;
var currentScale = 10;
var pause = false;
var pauseTimer = 10000;

var container, stats;
var camera, scene, projector, renderer;
var objects = [];
var spotlight;
var outsideTexture, insideTexture, insideSpecTexture;

var drawCanvas, drawContext;
var imageTest;

var center = new THREE.Vector3(0, 0, 0);
var centerTar = new THREE.Vector3(0, 0, 0);
var boundsMin = null;
var boundsMax = null;

var lastPanel = null;
var lastPanelColor = new THREE.Color();
var grabPart;

var col_R = 0;

var ambientLight;

function init( path)
{
    var ele =  document.getElementById("outres");
    var ele1 =  document.getElementById("outres1");

    imageTest = document.getElementById("imageTest");

    // canvas contents will be used for a texture
    outsideTexture = new THREE.Texture(imageTest)
    outsideTexture.needsUpdate = true;

    insideTexture = THREE.ImageUtils.loadTexture(path+'corrugate512x512.jpg');
    insideTexture.wrapS = insideTexture.wrapT = THREE.MirroredRepeatWrapping;
    insideSpecTexture = THREE.ImageUtils.loadTexture(path+'crate512Spec.jpg');
    insideTexture.wrapS = insideTexture.wrapT = THREE.MirroredRepeatWrapping;

    initInput(ele);
    initInput(ele1);
    projector = new THREE.Projector();

    // renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize($(document).width(), $(document).height());
    renderer.setClearColorHex(0x000000, 0);
    renderer.shadowMapEnabled = false;

    renderer.domElement.className = "noBg";

    ele.appendChild(renderer.domElement);
    ele1.appendChild(renderer.domElement);

    // camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 2*currentScale, 2500*Math.max(1, currentScale));
    camera.up = new THREE.Vector3( 0, 0, 1 );

    // scene
    scene = new THREE.Scene();

    loadWebGLMesh();

    for (var i in objects) {
        objects[i].panel.foldAngle = 0;
    }

    var m2 = new THREE.Matrix4();
    m2.makeTranslation( -400,-300,0 );

    updatePanel(panelsGeom.P0w);
    calcBoundary();
    center.x = centerTar.x;
    center.y = centerTar.y;
    center.z = centerTar.z;
    updatePanel(panelsGeom.P0w);
    calcBoundary();

    var PI2 = Math.PI * 2;

    grabPart = new THREE.Mesh(
        new THREE.CubeGeometry(10,10,10),
        new THREE.MeshLambertMaterial({
            color: 0xeeeeee
        }));


    lightBack = new THREE.DirectionalLight( 0x222255 );
    lightBack.position.set( -20, 80, 100 );
    lightBack.target.position.copy( scene.position );
    scene.add( lightBack );

	// ambient light
    ambientLight = new THREE.AmbientLight(0x444455);
    scene.add(ambientLight);

    // spotlight #1 -- yellow, dark shadow
    spotlight = new THREE.DirectionalLight(0xD4EBFF);
    spotlight.position.set(660,350,1000);
     spotlight.target.position.copy( scene.position );
    spotlight.shadowDarkness = 0.5;
    spotlight.intensity = 2;
    // must enable shadow casting ability for the light
    spotlight.castShadow = true;
    scene.add(spotlight);

    ground = new THREE.Mesh(
        new THREE.PlaneGeometry(10000, 10000, 50, 50),
        new THREE.MeshLambertMaterial({
            color: 0x888888,
            side:THREE.FontSide
        }));
    ground.position.set( 0, 0, -95 );
    ground.receiveShadow = true;

    updatePanel(panelsGeom.P0w);

}

// this function is executed on each animation frame
function animate(){
    // update
    var time = (new Date()).getTime();
    var timeDiff = time - lastTime;
    pauseTimer += timeDiff;
    var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
    if (angleChange>1)
        angleChange = 0;

    //if (!pause)
        angle += angleChange;

    var m1 = new THREE.Matrix4();
    m1.makeRotationZ( angle );

    var m2 = new THREE.Matrix4();
    m2.makeTranslation( -400,-300,0 );

    lastTime = time;

    if (true)//angle<foldMax+1 )
    {
        updatePanel(panelsGeom.P0w);
        anglePrev = angle;
        if (true)
        {
            if (angle>=nextAngle)
            {
                nextAngle = Math.floor(angle)+1;
                prevAngle = nextAngle-1;
                calcBoundary();
            }
            if (angle<prevAngle)
            {
                prevAngle = Math.floor(angle);
                nextAngle = prevAngle+1;
                calcBoundary();
            }

        }
    }

    center.x += (centerTar.x - center.x)*0.05;
    center.y += (centerTar.y - center.y)*0.05;
    center.z += (centerTar.z - center.z)*0.05;

    if (lastPanel!=null)
    {
        lastPanel.panel.foldAngle += viewMomentumX*0.25;
        lastPanel.panel.foldManual = true;
        viewMomentumX *= 0.6;
        viewMomentumY *= 0.6;
    }
    else
    {
        viewAngleX += viewMomentumX + xAutoRotate;
        boxAngle += viewMomentumX + boxAutoRotate;
        viewAngleY += viewMomentumY + yAutoRotate;
      //  if (!pause)
      //      outsideTexture.needsUpdate = true;

    }

    if (mouseDown)
    {
        viewMomentumX *= 0.6;
        viewMomentumY *= 0.6;
    }
    else
    {
        viewMomentumX *= 0.96;
        viewMomentumY *= 0.96;
    }
    currentScale += (targetScale - currentScale) * 0.3;

    if (viewAngleY<-Math.PI/2) viewAngleY= -Math.PI/2;
    if (viewAngleY>Math.PI/2) viewAngleY= Math.PI/2;

    // camera

    camera = new THREE.PerspectiveCamera(40,800 / 600, 2*currentScale, 2500*Math.max(1, currentScale));

     preview();


    camera.up = new THREE.Vector3( 0, 0, 1 );

    var boxAngle2 = boxAngle;// + Math.PI / 2;

    spotlight.position.set((760* Math.cos(boxAngle2) - 450*Math.sin(boxAngle2))* Math.cos(viewAngleY),(-450* Math.cos(boxAngle2) + 760*Math.sin(boxAngle2))* Math.cos(viewAngleY),1000* Math.sin(viewAngleY)+400);

    camera.position.y = ((-450 * Math.cos(viewAngleX) + 400 *Math.sin(viewAngleX)) * Math.cos(viewAngleY))*currentScale;
    camera.position.x = ((400 * Math.cos(viewAngleX) + 450 * Math.sin(viewAngleX)) * Math.cos(viewAngleY))*currentScale;
    camera.position.z = 600 * Math.sin(viewAngleY)*currentScale;

    camera.lookAt(new THREE.Vector3(0, 0, center.z));

    camera.near = 2*currentScale;
    camera.far = 1500*Math.max(1, currentScale);

    renderer.render(scene, camera);

    requestAnimationFrame(function(){
        animate();
    });
}


function preview()
{
   // viewAngleX = 0;//-Math.PI/2;
   // viewAngleY = Math.PI/4;
   // boxAngle = 3*Math.PI/2;
    //currentScale = 1.6;
    width = 800*1.6*currentScale;
    height = 600*1.6*currentScale;
   //  camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 2*currentScale, 2500*Math.max(1, currentScale));

}