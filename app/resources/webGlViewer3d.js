/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
// File:src/renderers/shaders/ShaderChunk/skinnormal_vertex.glsl

THREE.ShaderChunk[ 'skinnormal_vertex'] = "#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += boneMatX;\n	//skinMatrix += skinWeight.y * boneMatY;\n	//skinMatrix += skinWeight.z * boneMatZ;\n	//skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n";

THREE.ShaderLib.phong.vertexShader = [

			"#define PHONG",

			"varying vec3 vViewPosition;",

			"#ifndef FLAT_SHADED",

			"	varying vec3 vNormal;",

			"#endif",

			THREE.ShaderChunk[ "common" ],
			THREE.ShaderChunk[ "uv_pars_vertex" ],
			THREE.ShaderChunk[ "uv2_pars_vertex" ],
			THREE.ShaderChunk[ "displacementmap_pars_vertex" ],
			THREE.ShaderChunk[ "envmap_pars_vertex" ],
			THREE.ShaderChunk[ "lights_phong_pars_vertex" ],
			THREE.ShaderChunk[ "color_pars_vertex" ],
			THREE.ShaderChunk[ "morphtarget_pars_vertex" ],
			THREE.ShaderChunk[ "skinning_pars_vertex" ],
			THREE.ShaderChunk[ "shadowmap_pars_vertex" ],
			THREE.ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",

				THREE.ShaderChunk[ "uv_vertex" ],
				THREE.ShaderChunk[ "uv2_vertex" ],
				THREE.ShaderChunk[ "color_vertex" ],

				THREE.ShaderChunk[ "beginnormal_vertex" ],
				THREE.ShaderChunk[ "morphnormal_vertex" ],
				THREE.ShaderChunk[ "skinbase_vertex" ],
				THREE.ShaderChunk[ "skinnormal_vertex" ],
				THREE.ShaderChunk[ "defaultnormal_vertex" ],

			"#ifndef FLAT_SHADED", // Normal computed with derivatives when FLAT_SHADED

			"	vNormal = normalize( transformedNormal );",

			"#endif",

				THREE.ShaderChunk[ "begin_vertex" ],
				THREE.ShaderChunk[ "displacementmap_vertex" ],
				THREE.ShaderChunk[ "morphtarget_vertex" ],
				THREE.ShaderChunk[ "skinning_vertex" ],
				THREE.ShaderChunk[ "project_vertex" ],
				THREE.ShaderChunk[ "logdepthbuf_vertex" ],

			"	vViewPosition = - mvPosition.xyz;",

				THREE.ShaderChunk[ "worldpos_vertex" ],
				THREE.ShaderChunk[ "envmap_vertex" ],
				THREE.ShaderChunk[ "lights_phong_vertex" ],
				THREE.ShaderChunk[ "shadowmap_vertex" ],

			"}"

		].join( "\n" );


function webGlEnabled()
{
    if (!window.WebGLRenderingContext) {
        // Browser has no idea what WebGL is. Suggest they
        // get a new browser by presenting the user with link to
        // http://get.webgl.org
        return false;
    }
    return true;
}


// Define a class like this
function WebGlViewer3d(baseUrl) {

    // Add object properties like this
    this.baseUrl = baseUrl;

    this.loadData(null);//webGlData);

    this.webGLWidth = 800;
    this.webGLHeight = 600;

    this.postEnd = true;

    this.angularSpeed = 0.2;
    this.lastTime = 0;
    this.angle = 0;
    this.boxAngle = 0;
    this.xAutoRotate = 0;
    this.anglePrev = -1;
    this.foldIndex = 0;
    this.folding = true;
    this.foldMax = 0;
    this.nextAngle = 0;
    this.prevAngle = 0;

    this.viewAngleX = 0;
    this.viewAngleY = 0.71;
    this.mouseX = null;
    this.mouseY = null;
    this.mouseDown = false
    this.mouseDX = 0
    this.mouseDY = 0;
    this.touch_state = {};
    this.viewMomentumX = 0
    this.viewMomentumY = 0;

    this.baseScale = 1.0;
    this.targetScale = 1.5;
    this.currentScale = 1;
    this.pause = false;
    this.pauseTimer = 10000;
	this.scaleSpeed = 0.3;

    this.container = null;
    this.stats = null;
    this.camera = null;
    this.scene = null;
    this.projector = null;
    this.renderer = null;
    this.objects = [];
    this.spotlight = null;
    this.outsideTexture = null;
    this.insideTexture = null;
    this.insideSpecTexture = null;

    this.drawCanvas = null;
    this.drawContext = null;
    this.imageTest = null;

    this.center = new THREE.Vector3(0, 0, 0);
    this.centerTar = new THREE.Vector3(0, 0, 0);
    this.boundsMin = null;
    this.boundsMax = null;

    this.lastPanel = null;
    this.lastPanelColor = new THREE.Color();

    this.col_R = 0;

    this.ambientLight = null;
    this.mainLight = null;
    this.updateImage = true;


    this.imageCanvas = null;

    this.lightBack = null;

    this.finishedLoading = null;
    this.finishedLoadingCount = 0;


    this.updateImageTick = 0;

    this.animSpin = 0;
    this.animSpinAdjusted = 0;
    this.animSpinMaxSpeed = 0.01;

    this.adjustmentLag = 0.15;


    this.updateImageTick = 0;

    this.animSpin = 0;
    this.animSpinAdjusted = 0;
    this.animSpinMaxSpeed = 0.01;

    this.fullScreen = false;

    this.ignoreClick = false;

    this.animSpinPre = 0;

    this.design = null;
    this.layoutTexture = null;
    this.readyState = null;


    this.tagElement = null;

    this.restoreElement = null;

    this.restoreWidth = 10;
    this.restoreHeight = 10;

    this.updateGeometryFunc = null

    this.previewMode = false;

    this.flush = false;

    this.panels = [];


}
WebGlViewer3d.prototype.setFullscreen = function (fs) {
    this.fullScreen = fs;
};

// Add methods like this.  All Person objects will be able to invoke this
WebGlViewer3d.prototype.loadData = function (webGlData) {
    this.data = webGlData;
};


WebGlViewer3d.prototype.loadMesh = function (finishLoadingFunc)
{
    if (!this.design)
        return false;

    var viewer3d = this;

    var data = {
        action: "getWebGl3dScript"
    };

    if (this.flush)
        data.flush = true;

    /*

     this.design.serializeData(data,
     function (value) {
     eval(value.webGl3dScript)
     viewer3d._loadMesh(loadWebGlMesh);
     if (finishLoadingFunc)
     finishLoadingFunc();
     });*/

    if (finishLoadingFunc)
        finishLoadingFunc();

    return true;
}

WebGlViewer3d.prototype.clearMesh = function ()
{
    for (var i in this.objects) {
        this.scene.remove(this.objects[i]);
    }
    this.objects = [];
}

WebGlViewer3d.prototype.setUpdateGeometry = function (updateGeometryFunc)
{
    this.updateGeometryFunc = updateGeometryFunc;
}


WebGlViewer3d.prototype.useForceReload = function () {
    return false;
}


WebGlViewer3d.prototype.update = function (section, design) {
    if (section === 'geometry')
    {
        if (this.updateGeometryFunc)
            this.updateGeometryFunc();
    }
}

WebGlViewer3d.prototype._loadMesh = function (loadMeshFunc)
{
    /*
     this.clearMesh();
     loadMeshFunc(this);

     for (var i in this.objects) {
     this.objects[i].panel.foldAngle = 0;
     }

     this.updatePanel(this.panelsGeom.P0w);
     this.calcBoundary();
     this.center.x = this.centerTar.x;
     this.center.y = this.centerTar.y;
     this.center.z = this.centerTar.z;
     this.updatePanel(this.panelsGeom.P0w);
     this.calcBoundary();

     this.updatePanel(this.panelsGeom.P0w);*/

    this.design.update('loadedMesh');
}


WebGlViewer3d.prototype.restoreFullScreen = function ()
{
    this.webGLWidth = this.restoreWidth;
    this.webGLHeight = this.restoreHeight;
    if (this.renderer)
        this.renderer.setSize(this.webGLWidth, this.webGLHeight);
    this.appendTo(this.restoreElement);
    $("#full-3d-panel").hide();
}



WebGlViewer3d.prototype.showFullscreen = function ()
{
    this.restoreElement = this.tagElement;
    this.restoreWidth = this.renderer.domElement.width;
    this.restoreHeight = this.renderer.domElement.height;
    this.webGLWidth = $("#full-3d-panel").width();
    this.webGLHeight = $("#full-3d-panel").height();
    if (this.renderer)
        this.renderer.setSize(this.webGLWidth, this.webGLHeight);
    this.appendTo($("#full-3d-panel"));
    $("#full-3d-panel").show();

}


WebGlViewer3d.prototype.appendTo = function (tagElement) {
    this.tagElement = tagElement;
    this.webGLWidth = tagElement.width();
   // this.webGLHeight = tagElement.height();
     //if (this.renderer)
     //   this.renderer.setSize(this.webGLWidth, this.webGLHeight);

     //$(document).width(), $(document).height()
    var tag = $(document);//"#mainViewer3d");
    var cw = tag.width();
    var ch = tag.height();
    if (cw && ch)
    {
        this.webGLWidth = cw;
        this.webGLHeight = ch;
        if (this.renderer)
            this.renderer.setSize(this.webGLWidth, this.webGLHeight);
    }

    if (this.renderer != null)
        this.tagElement.append($(this.renderer.domElement));

}


WebGlViewer3d.prototype.initializeView = function (design, layoutTexture, finishLoadingFunc) {
    this.design = design;
    this.layoutTexture = layoutTexture;


    this.initialize();




}



WebGlViewer3d.prototype.initialize = function () {

    if (!this.layoutTexture || !this.design)
        return false;
    if (this.renderer)
        return false;

    this._loadScene(this.layoutTexture, {
        layoutTexture : this.baseUrl + '/bin_pizza.png',
        inside: this.baseUrl + '/corrugate512x512.jpg',
        insideShine: this.baseUrl + 'crate512Spec.jpg',
        side: this.baseUrl + '/corr2.png'
    }, this.readyState);

    this.loadMesh();

    return true;

}

WebGlViewer3d.prototype.callback = function (event, obj) {
    if (event === 'beforeCommit')
    {
        obj.geometrySnapshot = this.getGeometrySnapshot();
    }
    else
        this.reloadLayoutTexture();
};

WebGlViewer3d.prototype.loadLayoutTexture = function (layoutTexture)
{
    this.layoutTexture = layoutTexture;
    this.layoutTexture.subscribe('updated', this);
    this.layoutTexture.subscribe('beforeCommit', this);

    this.reloadLayoutTexture();

};

WebGlViewer3d.prototype.reloadLayoutTexture = function ()
{
    if (this.layoutTexture)
    {
        this.layoutTexture.loadInitialize();
        if (this.layoutTexture.isCanvas())
        {
            if (this.outsideTexture == null)
            {
                console.log('BB');
                this.outsideTexture = new THREE.Texture(this.layoutTexture.getCanvas());
                this.outsideTexture.needsUpdate = true;
            }
        }
        else if (this.layoutTexture.isFile())
        {
            console.log('CC');
            this.outsideTexture = new THREE.Texture(this.layoutTexture.getFile());
            this.outsideTexture.needsUpdate = true;
        }
        else
        {
            console.log('DD');
            this.outsideTexture = this.insideTexture;
        }
        this.updateImage = true;

    }
    else
    {
        this.outsideTexture = this.insideTexture;
    }/*
     this.outsideTexture.magFilter = THREE.NearestFilter;
     this.outsideTexture.minFilter = THREE.LinearMipMapLinearFilter;
     this.insideTexture.magFilter = THREE.NearestFilter;
     this.insideTexture.minFilter = THREE.LinearMipMapLinearFilter;*/
};

WebGlViewer3d.prototype._loadScene = function (layoutTexture, texturePaths, readyState) {

    if (this.outsideTexture)
        return;

    // canvas contents will be used for a texture





    this.insideTexture = THREE.ImageUtils.loadTexture(texturePaths.inside, null, function () {
    });


    this.outsideTexture = THREE.ImageUtils.loadTexture(texturePaths.layoutTexture, null, function () {
    });
    //this.loadLayoutTexture(layoutTexture);

    this.insideTexture.wrapS = this.insideTexture.wrapT = THREE.MirroredRepeatWrapping;
    //path+'crate512Spec.jpg'
    this.insideSpecTexture = THREE.ImageUtils.loadTexture(texturePaths.insideShine, null, function () {
    });
    this.insideSpecTexture.wrapS = this.insideSpecTexture.wrapT = THREE.MirroredRepeatWrapping;

     this.sideTexture = THREE.ImageUtils.loadTexture(texturePaths.side, null, function () {
    });


    this.sideTexture.wrapS = THREE.RepeatWrapping;
this.sideTexture.wrapT = THREE.RepeatWrapping;
    //this.projector = new THREE.Projector();

    // renderer
    this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialiasing: true,
        antialias: true,
        preserveDrawingBuffer: true
    });
    this.renderer.setSize(this.webGLWidth, this.webGLHeight);
    //this.renderer.setClearColorHex(0x000000, 0);
    this.renderer.shadowMapEnabled = false;

    //this.renderer.domElement.className = "noBg";

    //alert(this.tagElement);
    if (this.tagElement != null)
        this.tagElement.append($(this.renderer.domElement));

    this.initInput(this.renderer.domElement);

    this.scene = new THREE.Scene();


	// bottom angle light
    this.lightBack = new THREE.DirectionalLight(0x333333);
    this.lightBack.position.set(-20, 80, 100);
    this.lightBack.target.position.copy(this.scene.position);
   	this.lightBack.intensity = 1.5
    this.scene.add(this.lightBack);

    // ambient light.
    this.ambientLight = new THREE.AmbientLight(0xaaaaaa);
    this.scene.add(this.ambientLight);

    // spotlight #1 -- yellow, dark shadow
    this.spotlight = new THREE.DirectionalLight(0xaaaaaa);
    this.spotlight.position.set(660, 350, 1000);
    this.spotlight.target.position.copy(this.scene.position);
    this.spotlight.shadowDarkness = 0.5;
    this.spotlight.intensity = 1.5;

    // must enable shadow casting ability for the light
    this.spotlight.castShadow = true;
    //spotlight.target = scene;
    this.scene.add(this.spotlight);


};


WebGlViewer3d.prototype.loadJson = function (parts) {

    if (!parts.panels)
        return;

    var allowanceObj = document.getElementById('Params_Allowance');


    var tx1 = (0.18);
    var tx2 = (0.1);


    var realScale = parts.parameters.Scale;

    var allowance = -parts.parameters.Allowance * worldScale / realScale;// -3.125;


    if (allowanceObj)
    {
        allowance = -allowanceObj.value * worldScale / realScale;

        var matObj = document.getElementById('material');
        console.log(matObj.value);
        console.log(matName[matObj.value]);

        var name = matName[matObj.value];
        if (name)
        if (name.indexOf("/") > -1)
        {
            tx1 = 0.27;
        }


        //alert(matObj.name);
        //alert(allowanceObj.value);
    }

 //var allowanceIndex = document.getElementById('Params_Allowance').value
 //alert(materialDDContents[allowanceIndex]);

    allowance *= 1.25;

    if (parts.panels)
    {
        for (var j = 0; j < this.objects.length; j++)
        {
            this.scene.remove(this.objects[j]);
        }
        this.panels = [];
        this.objects = [];


        var outsideGeom = new THREE.Geometry();
        //var insideGeom = new THREE.Geometry();

        var vertex_count = 0;

        this.bones = [];
        for (var j = 0; j < parts.panels.length; j++)
        {
            var panel = parts.panels[j];
            var bone = new THREE.Bone();
            var bone2 = new THREE.Bone();
            bone.x = (panel.joint_point1.x + panel.joint_point2.x) * worldScale * 0.5;
            bone.y = (panel.joint_point1.y + panel.joint_point2.y) * worldScale * 0.5;


            var cx = 0;
            var cy = 0;
            for (var k = 0; k < panel.vertices.length; k += 1)
            {
                cx += panel.vertices[k].x * worldScale;
                cy += panel.vertices[k].y * worldScale;
            }
            cx /= panel.vertices.length;
            cy /= panel.vertices.length;

            bone.cx = cx;
            bone.cy = cy;

            //bone.x = cx;
            //bone.y = cy;

            bone.position.x = bone.x;
            bone.position.y = bone.y;

            bone.add(bone2);
            panel.bone = bone2;
            this.bones.push(bone);
            this.bones.push(bone2);
            // if (j != panel.id)
            //    throw "FFEFEFE";
        }
        console.log('panels')
        console.log(parts.panels);
        console.log(this.bones[0].position);

        this.bones[0].position.x = this.bones[0].cx;
        this.bones[0].position.y = this.bones[0].cy;
        /* var cc = 0;
         for (var j = 0; j < parts.panels.length; j++)
         {
         var panel = parts.panels[j];

         if (panel.parent == 0)
         {
         this.bones[0].position.x += this.bones[j].position.x;
         this.bones[0].position.y += this.bones[j].position.x;
         cc++;
         }
         }
         console.log(this.bones[0].position);
         this.bones[0].position.x /= cc;
         this.bones[0].position.y /= cc;
         */
        this.bones[0].x = this.bones[0].position.x;
        this.bones[0].y = this.bones[0].position.y;
        console.log(this.bones[0].position);
        console.log(this.bones);

        for (var j = 0; j < parts.panels.length; j++)
        {
            var panel = parts.panels[j];

            var shared = [];
            var info = [];

            for (var k = 0; k < panel.vertices.length; k += 1)
            {
                shared[k] = [];
            }

            for (var k = 0; k < panel.mapping.length; k += 1)
            {
                var map = panel.mapping[k];
                shared[map.target_vertex].push(map.panel);
            }

            for (var k = 0; k < panel.vertices.length; k += 1)
            {
                var g = shared[k];
                var val = 1 / (1 + g.length);
                var vert = {};
                vert.i = new THREE.Vector4(j * 2 + 1, 0, 0, 0);
                vert.w = new THREE.Vector4(val, 0, 0, 0);

                if (g.length === 1)
                {
                    vert.i = new THREE.Vector4(j * 2 + 1, g[0] * 2 + 1, 0, 0);
                    vert.w = new THREE.Vector4(val, val, 0, 0);
                }
                else if (g.length === 2)
                {
                    vert.i = new THREE.Vector4(j * 2 + 1, g[0] * 2 + 1, g[1] * 2 + 1, 0);
                    vert.w = new THREE.Vector4(val, val, val, 0);
                }
                else if (g.length === 3)
                {
                    vert.i = new THREE.Vector4(j * 2 + 1, g[0] * 2 + 1, g[1] * 2 + 1, g[2] * 2 + 1);
                    vert.w = new THREE.Vector4(val, val, val, val);
                }
                if (g.length > 3)
                    throw "ERROR";

                info[k] = vert;
            }

            panel.shared = shared;
            panel.info = info;

        }

        var thickness = 0.5 * allowance;


        for (var j = 0; j < parts.panels.length; j++)
        {
            var panel = parts.panels[j];

            if (panel.parent >= 0)
            {

                this.bones[j * 2].position.x -= this.bones[panel.parent * 2].x;
                this.bones[j * 2].position.y -= this.bones[panel.parent * 2].y;
                this.bones[panel.parent * 2 + 1].add(this.bones[j * 2]);
            }

            //panelObj.foldPt0 = new THREE.Vector3(panel.joint_point1.x * worldScale, panel.joint_point1.y * worldScale, 0);
            //panelObj.foldPt1 = new THREE.Vector3(panel.joint_point2.x * worldScale, panel.joint_point2.y * worldScale, 0);

            for (var k = 0; k < panel.vertices.length; k += 1)
            {
                var v1 = panel.vertices[k];
                var info = panel.info[k];

                outsideGeom.vertices.push(new THREE.Vector3(v1.x * worldScale, v1.y * worldScale, -thickness));
                outsideGeom.skinIndices.push(info.i);
                outsideGeom.skinWeights.push(info.w);
            }
            for (var k = 0; k < panel.vertices.length; k += 1)
            {
                var v1 = panel.vertices[k];
                var info = panel.info[k];

                outsideGeom.vertices.push(new THREE.Vector3(v1.x * worldScale, v1.y * worldScale, thickness));
                outsideGeom.skinIndices.push(info.i);
                outsideGeom.skinWeights.push(info.w);
            }

            for (var k = 0; k < panel.indices.length; k += 3)
            {
                var v1 = panel.vertices[panel.indices[k + 0]];
                var v2 = panel.vertices[panel.indices[k + 1]];
                var v3 = panel.vertices[panel.indices[k + 2]];

                var face1 = new THREE.Face3(
                        panel.indices[k + 0] + vertex_count,
                        panel.indices[k + 1] + vertex_count,
                        panel.indices[k + 2] + vertex_count, undefined, undefined, 1);
                outsideGeom.faces.push(face1);
                outsideGeom.faceVertexUvs[0].push([
                    new THREE.Vector2(v1.x, 1 - v1.y),
                    new THREE.Vector2(v2.x, 1 - v2.y),
                    new THREE.Vector2(v3.x, 1 - v3.y)]);
                var face2 = new THREE.Face3(
                        panel.indices[k + 0] + vertex_count + panel.vertices.length,
                        panel.indices[k + 1] + vertex_count + panel.vertices.length,
                        panel.indices[k + 2] + vertex_count + panel.vertices.length, undefined, undefined, 0);
                outsideGeom.faces.push(face2);
                outsideGeom.faceVertexUvs[0].push([
                    new THREE.Vector2(v1.x, 1 - v1.y),
                    new THREE.Vector2(v2.x, 1 - v2.y),
                    new THREE.Vector2(v3.x, 1 - v3.y)]);

            }

            vertex_count += panel.vertices.length * 2;



            for (var k = 0; k < panel.vertices.length; k += 1)
            {
                var l = (k + 1) % panel.vertices.length;
                var v1 = panel.vertices[k];
                var v2 = panel.vertices[l];
                var info = panel.info[k];

                outsideGeom.vertices.push(new THREE.Vector3(v1.x * worldScale, v1.y * worldScale, thickness));
                outsideGeom.vertices.push(new THREE.Vector3(v1.x * worldScale, v1.y * worldScale, -thickness));
                outsideGeom.skinIndices.push(info.i);
                outsideGeom.skinWeights.push(info.w);
                outsideGeom.skinIndices.push(info.i);
                outsideGeom.skinWeights.push(info.w);
            }

            var ty = 0;

            for (var k = 0; k < panel.vertices.length; k += 1)
            {
                var l = (k + 1) % panel.vertices.length;
                var v1 = panel.vertices[k];
                var v2 = panel.vertices[l];

                var dx2 = v1.x - v2.x;
                var dy2 = v1.y - v2.y;
                var ll = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                var v11 = vertex_count + l * 2;
                var v21 = vertex_count + l * 2 + 1;
                var v22 = vertex_count + k * 2 + 1;
                var v12 = vertex_count + k * 2;



                //var ty2 = (ty);// (v2.x)*10;//1000;
                //var ty1 = (ty+ll);//(v1.x)*10;//1000;

                var ty2 = v1.x;
                var ty1 = v2.x;

                ty1 *= 15;
                ty2 *= 15;

                var face1 = new THREE.Face3(
                        v11,
                        v21,
                        v22, [new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0)], undefined, 2);
                outsideGeom.faces.push(face1);
                outsideGeom.faceVertexUvs[0].push([
                    new THREE.Vector2(tx1, ty1),
                    new THREE.Vector2(tx2, ty1),
                    new THREE.Vector2(tx2, ty2)]);
                var face2 = new THREE.Face3(
                        v22,
                        v12,
                        v11, [new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0)], undefined, 2);
                outsideGeom.faces.push(face2);
                outsideGeom.faceVertexUvs[0].push([
                    new THREE.Vector2(tx2, ty2),
                    new THREE.Vector2(tx1, ty2),
                    new THREE.Vector2(tx1, ty1)]);

                ty += ll;
            }

            vertex_count += panel.vertices.length * 2;


        }
        /* outsideGeom.computeBoundingSphere();
         outsideGeom.normalsNeedUpdate = true;
         outsideGeom.computeFaceNormals();*/

        /*insideGeom.computeBoundingSphere();
         insideGeom.normalsNeedUpdate = true;
         insideGeom.computeFaceNormals();*/

outsideGeom.computeFaceNormals();
        outsideGeom.computeVertexNormals();


//FlatShading

//0xc0bbb3
//0xb0aaa3 shading: THREE.FlatShading,
        var materialOutside = new THREE.MeshPhongMaterial({skinning: true, color: 0xc0bbb3,side: THREE.FrontSide, map: this.outsideTexture, specularMap: this.insideSpecTexture});
        var materialInside = new THREE.MeshPhongMaterial({skinning: true, color: 0xb0aaa3, side: THREE.BackSide, map: this.insideTexture, specularMap: this.insideSpecTexture});
        var materialSide = new THREE.MeshPhongMaterial({skinning: true, color: 0xb0aaa3, side: THREE.BackSide, map: this.sideTexture, specularMap: this.sideTexture});

        this.meshOutside = new THREE.SkinnedMesh(outsideGeom, new THREE.MeshFaceMaterial([materialOutside, materialInside, materialSide]));
        this.skeleton = new THREE.Skeleton(this.bones);
        this.meshOutside.add(this.bones[ 0 ]);
        this.meshOutside.bind(this.skeleton);//this.bones[ 0 ]);//this.skeleton);

        //this.meshInside.add(this.bones[ 0 ]);
        // this.meshInside.bind(this.skeleton);

        /*
         this.skeletonHelper = new THREE.SkeletonHelper(this.meshOutside);
         this.skeletonHelper.material.linewidth = 4;
         this.scene.add(this.skeletonHelper);
         */
        //   this.scene.add(this.meshInside);
        //   this.objects.push(this.meshInside);
        this.scene.add(this.meshOutside);
        this.objects.push(this.meshOutside);

        for (var j = 0; j < parts.panels.length; j++)
        {
            var panelObj = new THREE.Geometry();
            var panel = parts.panels[j];
               panelObj.children = [];
            panelObj.parent = null;
            panelObj.foldManual = false;
            panelObj.foldPt0 = new THREE.Vector3(panel.joint_point1.x * worldScale, panel.joint_point1.y * worldScale, 0);
            panelObj.foldPt1 = new THREE.Vector3(panel.joint_point2.x * worldScale, panel.joint_point2.y * worldScale, 0);

            var dx = panel.joint_point1.x - panel.joint_point2.x;
            var dy = panel.joint_point1.y - panel.joint_point2.y;
            var dl = Math.sqrt(dx * dx + dy * dy);

            panelObj.foldDir = new THREE.Vector3(dx / dl, dy / dl, 0);

            panelObj.foldAngle = 0;
            panelObj.fold = [];
            //panelObj.fold.push({order: 1, angle: 0});
            //panelObj.fold.push({order: j, angle: ((90 - Math.random())) * (Math.PI / 180)});
            //panelObj.fold.push({order: j, angle: ((90 - Math.random())) * (Math.PI / 180)});
            panelObj.fold = panel.folds;
            for (var k = 0; k < panelObj.fold.length; k += 1)
            {
                panelObj.fold[k].angle = panelObj.fold[k].angle * (Math.PI / 180);// + Math.random() * 0.25) * (Math.PI / 180);
            }

            for (var k = 0; k < panel.vertices.length; k += 1)
            {
                var v1 = panel.vertices[k];
                panelObj.vertices.push(new THREE.Vector3(v1.x * worldScale, v1.y * worldScale, 0.5 * allowance));
                panelObj.vertices.push(new THREE.Vector3(v1.x * worldScale, v1.y * worldScale, -0.5 * allowance));
            }

            panelObj.mainMatrix = new THREE.Matrix4();

            this.panels[panel.id] = panelObj;
        }

        for (var j = 0; j < parts.panels.length; j++)
        {
            var panel = parts.panels[j];
            if (panel.parent >= 0)
            {
                this.panels[panel.id].parent = this.panels[panel.parent];
                this.panels[panel.parent].children.push(this.panels[panel.id]);
            }
        }

/*
        this.angle = 0;
        this.boxAngle = 0;
        this.anglePrev = -1;
        this.nextAngle = 0;
        this.prevAngle = 0;
*/

        var al = this.adjustmentLag;
        this.adjustmentLag =1 ;
        this.calcBoundary();

        this.center.x = this.centerTar.x;
        this.center.y = this.centerTar.y;
        this.center.z = this.centerTar.z;

        this.updatePanel(this.panels[0]);


          this.meshOutside.position.x = -this.center.x;
        this.meshOutside.position.y = -this.center.y;
        this.meshOutside.position.z = -this.center.z;

        for (var i = 1; i < this.skeleton.bones.length / 2; i++) {
            var panel = this.panels[i];
            var rot = panel.foldAngle;//  (1+Math.sin(time * 0.0009))*0.25*Math.PI;
            foldDir = {x: 1, y: 0};
            //  if (this.panels[i].foldDir);
            var foldDir = panel.foldDir;

            //this.skeleton.bones[ i * 2 + 1].rotation.y = foldDir.y * rot;
            //this.skeleton.bones[ i * 2 + 1].rotation.x = foldDir.x * rot;
            var axis = new THREE.Vector3(0, 0, 0);
            axis.subVectors(panel.foldPt0, panel.foldPt1);
            axis.normalize();
            this.skeleton.bones[ i * 2 + 1].setRotationFromAxisAngle(axis, panel.foldAngle);
        }


        this.adjustmentLag = al;
    }
}

// this function is executed on each animation frame
WebGlViewer3d.prototype.animate = function () {



    // update
    var time = (new Date()).getTime();
    var timeDiff = time - this.lastTime;
    this.pauseTimer += timeDiff;
    var angleChange = this.angularSpeed * timeDiff * 2 * Math.PI / 1000;// * 20;
    if (angleChange > 1)
        angleChange = 0;

    // if (!pause)
    this.angle += angleChange;


    var m1 = new THREE.Matrix4();
    m1.makeRotationZ(this.angle);

    var m2 = new THREE.Matrix4();
    m2.makeTranslation(-400, -300, 0);


    this.lastTime = time;

    if (this.panels.length > 0)
    {
        this.updatePanel(this.panels[0]);
        this.anglePrev = this.angle;
        if (this.angle >= this.nextAngle)
        {
            this.nextAngle = Math.floor(this.angle) + 1;
            this.prevAngle = this.nextAngle - 1;
        }
        if (this.angle < this.prevAngle)
        {
            this.prevAngle = Math.floor(this.angle);
            this.nextAngle = this.prevAngle + 1;
        }
        this.calcBoundary();
        this.center.x = this.centerTar.x;
        this.center.y = this.centerTar.y;
        this.center.z = this.centerTar.z;
        this.updatePanel(this.panels[0]);

    }

    /*if (this.panelsGeom)//angle<foldMax+1 )
     {
     this.updatePanel(this.panelsGeom.P0w);
     this.anglePrev = this.angle;
     if (true)
     {
     if (this.angle >= this.nextAngle)
     {
     this.nextAngle = Math.floor(this.angle) + 1;
     this.prevAngle = this.nextAngle - 1;
     this.calcBoundary();
     }
     if (this.angle < this.prevAngle)
     {
     this.prevAngle = Math.floor(this.angle);
     this.nextAngle = this.prevAngle + 1;
     this.calcBoundary();
     }

     }
     }*/

    this.center.x += (this.centerTar.x - this.center.x) * 0.025;
    this.center.y += (this.centerTar.y - this.center.y) * 0.025;
    this.center.z += (this.centerTar.z - this.center.z) * 0.025;

    if (this.lastPanel != null)
    {
        this.lastPanel.panel.foldAngle += this.viewMomentumX * 0.25;
        this.lastPanel.panel.foldManual = true;
        this.viewMomentumX *= 0.6;
        this.viewMomentumY *= 0.6;
    }
    else
    {
        if (!this.fullScreen)
            this.animSpinAdjusted = 0;
        this.viewAngleX += this.viewMomentumX + this.animSpinAdjusted + this.xAutoRotate;
        this.boxAngle += this.viewMomentumX + this.animSpinAdjusted + this.xAutoRotate;
        this.viewAngleY += this.viewMomentumY;

        this.animSpinAdjusted += (this.animSpin - this.animSpinAdjusted) * 0.1;

        if (this.updateImage) //&& this.updateImageTick > 3
        {
            this.updateImage = false;
            this.updateImageTick = 0;
        }
        this.updateImageTick++;

    }

    if (this.mouseDown)
    {
        this.viewMomentumX *= 0.0;
        this.viewMomentumY *= 0.0;
    }
    else
    {
        this.viewMomentumX *= 0.696;
        this.viewMomentumY *= 0.696;
    }
    this.currentScale += (this.targetScale - this.currentScale) * this.scaleSpeed;
    //alert(this.currentScale);

    if (this.viewAngleY < -Math.PI / 2)
        this.viewAngleY = -Math.PI / 2;
    if (this.viewAngleY > Math.PI / 2)
        this.viewAngleY = Math.PI / 2;

    // camera


    this.camera = new THREE.PerspectiveCamera(40, this.webGLWidth / this.webGLHeight, 2 * this.currentScale, 2500 * Math.max(1, this.currentScale));

    //preview();


    this.camera.up = new THREE.Vector3(0, 0, 1);

    var boxAngle2 = this.boxAngle;// + Math.PI / 2;

    this.spotlight.position.set((760 * Math.cos(boxAngle2) - 450 * Math.sin(boxAngle2)) * Math.cos(this.viewAngleY), (-450 * Math.cos(boxAngle2) + 760 * Math.sin(boxAngle2)) * Math.cos(this.viewAngleY), 1000 * Math.sin(this.viewAngleY) + 400);

    this.camera.position.y =  ((-450 * Math.cos(this.viewAngleX) + 400 * Math.sin(this.viewAngleX)) * Math.cos(this.viewAngleY)) * this.currentScale;
    this.camera.position.x = ((400 * Math.cos(this.viewAngleX) + 450 * Math.sin(this.viewAngleX)) * Math.cos(this.viewAngleY)) * this.currentScale;
    this.camera.position.z = 600 * Math.sin(this.viewAngleY) * this.currentScale;

    this.camera.lookAt(new THREE.Vector3(0, 0, this.center.z));

    this.camera.near = 2 * this.currentScale;
    this.camera.far = 1500 * Math.max(1, this.currentScale);

    if (this.skeleton)
    {
        this.meshOutside.position.x = -this.center.x;
        this.meshOutside.position.y = -this.center.y;
      //  this.meshOutside.position.z = -this.center.z;

        for (var i = 1; i < this.skeleton.bones.length / 2; i++) {
            var panel = this.panels[i];
            var rot = panel.foldAngle;//  (1+Math.sin(time * 0.0009))*0.25*Math.PI;
            foldDir = {x: 1, y: 0};
            //  if (this.panels[i].foldDir);
            var foldDir = panel.foldDir;

            //this.skeleton.bones[ i * 2 + 1].rotation.y = foldDir.y * rot;
            //this.skeleton.bones[ i * 2 + 1].rotation.x = foldDir.x * rot;
            var axis = new THREE.Vector3(0, 0, 0);
            axis.subVectors(panel.foldPt0, panel.foldPt1);
            axis.normalize();
            this.skeleton.bones[ i * 2 + 1].setRotationFromAxisAngle(axis, panel.foldAngle);
        }
    }
    if (this.skeletonHelper)
    {
        this.skeletonHelper.update();
    }

    this.renderer.render(this.scene, this.camera);
    var __webglObj = this;
    requestAnimationFrame(function () {
        __webglObj.animate();
    });
};



WebGlViewer3d.prototype.boundCheck = function (p, m) {

    var v = new THREE.Vector3(p.x, p.y, p.z);
    v.applyMatrix4(m);
    if (this.boundsMin == null)
    {
        this.boundsMin = new THREE.Vector3(v.x, v.y, v.z);
        this.boundsMax = new THREE.Vector3(v.x, v.y, v.z);
    }
    else
    {
        this.boundsMin.min(v);
        this.boundsMax.max(v);

    }
};

WebGlViewer3d.prototype.calcBoundary = function () {
    this.boundsMin = null;
    this.boundsMax = null;

    for (var i = 0; i < this.panels.length; i++) {
        var panel = this.panels[i];
        for (var j in panel.vertices) {
            this.boundCheck(panel.vertices[j], panel.mainMatrix);
        }
    }

    this.centerTar.addVectors(this.boundsMax, this.boundsMin);
    this.centerTar.multiplyScalar(0.5);
    //this.centerTar.z += 40;
    // console.log(this.centerTar);
};

WebGlViewer3d.prototype.resetFold = function () {
    for (var i in this.objects) {
// this.objects[i].panel.foldManual = false;
    }

    this.angle = Math.min(this.angle, this.foldMax + 1);
    this.angle = Math.max(this.angle, 0);
};

//m_proj.transpose();
WebGlViewer3d.prototype.updatePanel = function (panel) {
    if (panel == null)
        return;
    var p = new THREE.Vector3(0, 0, 0);
    if (panel.parent != null && panel.parent.foldPt0 != null)
        p = panel.parent.foldPt0;
    var p2 = new THREE.Vector3(0, 0, 0);
    var rot = new THREE.Matrix4();

    if (panel.foldAngle == null)
        panel.foldAngle = 0;

    var t1 = new THREE.Matrix4();
    var t2 = new THREE.Matrix4();

    if (panel.foldPt0 != null)
    {
        p2 = panel.foldPt0;

        var axis = new THREE.Vector3(0, 0, 1);
        axis.subVectors(panel.foldPt0, panel.foldPt1);
        axis.normalize();


        if (!panel.foldManual) {

            this.foldMax = Math.max(this.foldMax, panel.fold[this.foldIndex].order);
            var fa = 0;
            if (this.angle >= panel.fold[this.foldIndex].order)
                fa = panel.fold[this.foldIndex].angle;


            var fn = 0;
            if (this.angle - this.anglePrev > 0)
            {
                if (this.angle + 1 >= panel.fold[this.foldIndex].order)
                    fn = panel.fold[this.foldIndex].angle;
            }
            else
            {
                fn = fa;
                fa = panel.fold[this.foldIndex].angle;
                if (this.angle - 1 <= panel.fold[this.foldIndex].order)
                    fa = 0;

            }
            var dif = 0;//angle - (panel.foldCur-1);
            if (fn != fa)
                dif = this.angle - Math.floor(this.angle);
            panel.foldAngle += (fa * (1 - dif) + fn * dif - panel.foldAngle) * this.adjustmentLag;
        }
        else
        {
            if (panel.fold[this.foldIndex].angle > 0)
            {
                panel.foldAngle = Math.max(0, panel.foldAngle);
                panel.foldAngle = Math.min(Math.max(panel.fold[1].angle, panel.fold[0].angle), panel.foldAngle);
            }
            else
            {
                panel.foldAngle = Math.max(panel.fold[this.foldIndex].angle, panel.foldAngle);
                panel.foldAngle = Math.min(0, panel.foldAngle);
            }
        }
        //Math.abs(Math.sin(angle)) * panel.foldAngle

        rot.makeRotationAxis(axis, panel.foldAngle);
        //var p2 = new THREE.Vector3(0, 0, 0);

        //p2.addVectors(panel.foldPt0,panel.foldPt1);
        //p2.multiplyScalar(0.5);

        t1.makeTranslation(-p2.x, -p2.y, -p2.z);
        t2.makeTranslation(p2.x, p2.y, p2.z);
    }
    else
    {
        rot.makeRotationX(Math.PI);
        t1.makeTranslation(-0, -0, 90);
    }

    // p2 = panel.vertices[0];

    var m3 = new THREE.Matrix4();
    m3.multiplyMatrices(t2, rot);
    m3.multiplyMatrices(m3, t1);
    if (panel.parent != null)
        m3.multiplyMatrices(panel.parent.mainMatrix, m3);
    //else


    panel.mainMatrix = new THREE.Matrix4();
    panel.mainMatrix.copy(m3);

    t1.makeTranslation(-this.center.x, -this.center.y, -this.center.z);

    // var m1 = new THREE.Matrix4();
    //  m1.makeRotationZ( boxAngle );

    m3.multiplyMatrices(t1, m3);
    //  m3.multiplyMatrices(m1, m3);


   // panel.meshOutside.matrix = m3;
    //panel.meshOutside.setMatrix(panel.meshOutside.matrix);

  //  panel.meshInside.matrix = m3;
  //  panel.meshInside.setMatrix(panel.meshInside.matrix);

    for (var i in panel.children) {
        var pan = panel.children[i];
        this.updatePanel(pan);
        // Shows only the explicitly set index of "5", and ignores 0-4
    }
};

WebGlViewer3d.prototype.initInput = function (element) {

    this.hasMouseCtx = false;

    element.viewer3d = this;
    element.onmousedown = this.mousedown;//"mousedown(event);"
    element.onmouseout = this.mouseout;//"mouseup(event);"
    element.onmouseup = this.mouseup;//"mouseup(event);"
    element.onmousemove = this.mousemove;//"mousemove(event);"
    element.ontouchend = this.do_touchend;//"do_touchend(event);"
    element.ontouchstart = this.do_touchstart;//"do_touchstart(event);"
    element.ontouchmove = this.do_touchmove;//"do_touchmove(event);"
    element.onclick = this.mouseclick;
    if (window.addEventListener)
        document.addEventListener('DOMMouseScroll', this.moveObject, false);

    this.viewer3d = this;
    //for IE/OPERA etc
    element.onmousewheel = this.moveObject;

};


WebGlViewer3d.prototype.moveObject = function (event) {
    if (this.viewer3d == null)
        return;

    if (!this.viewer3d.hasMouseCtx)
        return;
    event.preventDefault();
    var delta = 0;

    if (!event)
        event = window.event;
    // normalize the delta
    if (event.wheelDelta) {

        // IE and Opera
        delta = event.wheelDelta / 60;

    } else if (event.detail) {

// W3C
        delta = -event.detail / 2;
    }

    var scale = Math.pow(1.1, delta);
    this.viewer3d.targetScale = scale * this.viewer3d.targetScale;
};

WebGlViewer3d.prototype.mouseout = function (event) {
    this.viewer3d.mouseup(event);
    this.viewer3d.hasMouseCtx = false;
};

WebGlViewer3d.prototype.mouseclick = function (event) {
    event.preventDefault();


    if (this.viewer3d.ignoreClick) {
        this.viewer3d.ignoreClick = false;
        return;
    }
    if (this.viewer3d.animSpin == 0)
        this.viewer3d.animSpin = this.animSpinMaxSpeed;
    else
        this.viewer3d.animSpin = 0;
};

WebGlViewer3d.prototype.mouseup = function (event) {
    var viewer = this.viewer3d;
    if (viewer == null)
        viewer = this;
    event.preventDefault();
    viewer.mouseDown = false;
    viewer.animSpin = viewer.animSpinPre;
};
WebGlViewer3d.prototype.mousedown = function (event) {
    event.preventDefault();
    this.viewer3d.mouseX = event.pageX;
    this.viewer3d.mouseY = event.pageY;
    this.viewer3d.mouseDown = true;
    this.viewer3d.baseScale = this.viewer3d.targetScale;
    if (this.viewer3d.pauseTimer < 500)
    {
        this.viewer3d.resetFold();
        this.viewer3d.angularSpeed = -this.viewer3d.angularSpeed;
//pause = !pause;
    }
    this.viewer3d.pauseTimer = 0;
    this.viewer3d.animSpinPre = this.viewer3d.animSpin;

    this.viewer3d.animSpin = 0;
//   down(event);

}

WebGlViewer3d.prototype.down = function (event) {
    // if (angle>0 && angle <foldMax )
    //return;
    var obj = $(this.viewer3d.renderer.domElement);
    var px = event.clientX - obj.offset().left + document.body.scrollLeft;
    var py = event.clientY - obj.offset().top + document.body.scrollTop;
    var vector = new THREE.Vector3((px / this.viewer3d.renderer.domElement.width) * 2 - 1, -(py / this.viewer3d.renderer.domElement.height) * 2 + 1, 0.5);
    this.projector.unprojectVector(vector, this.viewer3d.camera);
    var raycaster = new THREE.Raycaster(this.viewer3d.camera.position, vector.sub(this.viewer3d.camera.position).normalize());

    var intersects = raycaster.intersectObjects(this.viewer3d.objects);

    if (this.viewer3d.lastPanel != null)
        this.viewer3d.lastPanel.material.color.copy(this.viewer3d.lastPanelColor);
    this.viewer3d.lastPanel = null;
    //this.scene.remove( grabPart );
    if (intersects.length > 0) {


        this.viewer3d.lastPanel = intersects[ 0 ].object;
        this.viewer3d.lastPanelColor.copy(lastPanel.material.color);
        this.viewer3d.lastPanel.material.color.setHex(0xffffff);

        //var particle = new THREE.Particle( particleMaterial );
        // particle.position = intersects[ 0 ].point;
        // particle.scale.x = particle.scale.y = 8;
//scene.add( particle );
        //grabPart.position = intersects[ 0 ].point;
        //scene.add( grabPart );
        /*

         */

    }
};

WebGlViewer3d.prototype.do_touchend = function (event) {
    event.preventDefault();
    this.viewer3d.mouseDown = false;
    this.viewer3d.animSpin = this.viewer3d.animSpinPre;
};

WebGlViewer3d.prototype.mousemove = function (event) {

    event.preventDefault();
    if (this.viewer3d.mouseDown)
    {
        this.viewer3d.ignoreClick = true;

        this.viewer3d.mouseDX = event.pageX - this.viewer3d.mouseX;
        this.viewer3d.mouseDY = event.pageY - this.viewer3d.mouseY;
        this.viewer3d.mouseX = event.pageX;
        this.viewer3d.mouseY = event.pageY;
        this.viewer3d.viewMomentumX = -this.viewer3d.mouseDX * 0.015;//(mouseDX*0.01 - viewMomentumX)*0.2;
        this.viewer3d.viewMomentumY = this.viewer3d.mouseDY * 0.015;         //   animSpin = 0;


    }
    this.viewer3d.hasMouseCtx = true;
};
var touch_state = {};

WebGlViewer3d.prototype.do_touchstart = function (event) {
    event.preventDefault();
    try
    {
        touch_state.nlast = event.touches.length;
        if (event.touches.length === 1) {
            var touch = event.touches[0];
            touch_state.xlast = touch.pageX;
            touch_state.ylast = touch.pageY;
            if (this.viewer3d.pauseTimer < 500)
                this.viewer3d.pause = !this.viewer3d.pause;
            this.viewer3d.pauseTimer = 0;
            this.viewer3d.mouseDown = true;

            if (!event.clientX)
            {
                event.clientX = touch.pageX;
                event.clientY = touch.pageY;
            }
            //  down(event);
        }
        if (event.touches.length === 2) {
            touch_state.line = get_line(event.touches);
            this.viewer3d.baseScale = this.viewer3d.targetScale;
        }
        if (event.touches.length === 3) {
            touch_state.bbox = get_bbox(event.touches);
            touch_state.done = 0;
        }

        this.viewer3d.animSpinPre = this.viewer3d.animSpin;

        this.viewer3d.animSpin = 0;
    }
    catch (e)
    {
        alert(e);
    }

};

WebGlViewer3d.prototype.do_touchmove = function (event) {
    event.preventDefault();
    try
    {
        if (event.touches.length != touch_state.nlast) {
            this.viewer3d.do_touchstart(event);
            return;
        }
        if (event.touches.length === 1) {


            var touch = event.touches[0];

            this.viewer3d.viewMomentumX = -(touch.pageX - touch_state.xlast) * 0.015;//(mouseDX*0.01 - viewMomentumX)*0.2;
            this.viewer3d.viewMomentumY = (touch.pageY - touch_state.ylast) * 0.015;

            touch_state.xlast = touch.pageX;
            touch_state.ylast = touch.pageY;

        }
        if (event.touches.length === 2) {
            var line = get_line(event.touches);
            var scale = line.length / touch_state.line.length;
            if (scale != 1) {
                this.viewer3d.targetScale = this.viewer3d.targetScale / scale;                 //scale_scene(scale);
            }
            // rotscene(0,0,delta_angle(line.angle,touch_state.line.angle));
            var dx = touch_state.line.pt1.x - touch_state.line.pt0.x;
            var dy = touch_state.line.pt1.y - touch_state.line.pt0.y;
            var dlen = Math.sqrt(dx * dx + dy * dy);
            dx /= dlen;
            dy /= dlen;
            var a = -dy;
            var b = dx;
            var c = -(a * touch_state.line.ctrpt.x + b * touch_state.line.ctrpt.y);
            var d = a * line.ctrpt.x + b * line.ctrpt.y + c;

            touch_state.line = line;
            //  update_scene();
        }
        if (event.touches.length === 3) {
            bbox = get_bbox(event.touches);
            if (touch_state.done)
                return;


            if (touch_state.bbox.area * 2 < bbox.area) {
                //fold(-1);
                this.viewer3d.resetFold();
                if (this.viewer3d.angularSpeed < 0)
                    this.viewer3d.angle = 0;

                this.viewer3d.angularSpeed = -Math.abs(this.viewer3d.angularSpeed);
                touch_state.done = 1;
            }
            if (bbox.area * 2 < touch_state.bbox.area) {
                //fold(1);

                this.viewer3d.resetFold();
                if (this.viewer3d.angularSpeed > 0)
                    this.viewer3d.angle = this.viewer3d.foldMax;
                touch_state.done = 1;
                this.viewer3d.angularSpeed = Math.abs(this.viewer3d.angularSpeed);
            }
        }
    }
    catch (e)
    {
        alert(e);
    }
};




function get_bbox(touches) {
    var xmin = touches[0].pageX;
    var xmax = touches[0].pageX;
    var ymin = touches[0].pageY;
    var ymax = touches[0].pageY;
    for (var i = 1; i < touches.length; i++) {
        var x = touches[i].pageX;
        var y = touches[i].pageY;
        if (x < xmin)
            xmin = x;
        if (xmax < x)
            xmax = x;
        if (y < ymin)
            ymin = y;
        if (ymax < y)
            ymax = y;
    }
    return {
        xmin: xmin,
        xmax: xmax,
        ymin: ymin,
        ymax: ymax,
        width: xmax - xmin,
        height: ymax - ymin,
        area: (xmax - xmin) * (ymax - ymin)
    };
}
function atan_degrees(x, y) {
    return 90 * Math.atan2(y, x) / Math.atan2(1, 0);
}

function new_point(x, y) {
    return {x: x,
        y: y
    };
}
function delta_angle(ang1, ang0) {
    var delta = ang1 - ang0;
    if (360 < delta)
        delta -= 360;
    if (delta < -360)
        delta += 360;
    return delta;
}

function get_line(touches) {
    var pt0 = new_point(touches[0].pageX, touches[0].pageY);
    var pt1 = new_point(touches[1].pageX, touches[1].pageY);
    var dx = pt1.x - pt0.x;
    var dy = pt1.y - pt0.y;
    return  {
        pt0: pt0,
        pt1: pt1,
        delta: new_point(dx, dy),
        ctrpt: new_point((pt0.x + pt1.x) / 2, (pt0.y + pt1.y) / 2),
        angle: atan_degrees(dx, dy),
        length: Math.sqrt(dx * dx + dy * dy)}
}

THREE.Object3D.prototype.setMatrix = function () {

    var m1 = new THREE.Matrix4();

    return function (matrix) {

        this.matrix = matrix;

        this.position.setFromMatrixPosition(this.matrix);

        this.scale.setFromMatrixScale(this.matrix);
        m1.extractRotation(this.matrix);

        this.setRotationFromMatrix(m1);

    }

}();


WebGlViewer3d.prototype.generateGeomData = function ()
{
    this.centerTar.addVectors(this.boundsMax, this.boundsMin);
    this.centerTar.multiplyScalar(0.5);
    this.centerTar.z -= 0;

    var data = {
        vecData: "",
        texData: "",
        faceData: "",
        vertices: 0, faces: 0,
        center: this.centerTar
    };
    this._generateGeomData(this.panelsGeom.P0w, data);

    return "#design " + data.vertices + " " + data.faces + "\n" + data.vecData + data.texData + data.faceData;
};

WebGlViewer3d.prototype._generateGeomData = function (panel, data)
{
    var sc = 1.0 / 700.0;
    var sc1 = 0.03;
    var ox = -data.center.x;
    var oy = -data.center.y;
    var oz = -data.center.z;
    for (var i in panel.vertices) {
        var p = panel.vertices[i];
        var v = new THREE.Vector3((p.x), (p.y), (p.z));
        v.applyMatrix4(panel.mainMatrix);
        //data.vecData += ((v.x+ox)*sc1)+" "+((v.z+oz)*sc1)+" "+((v.y+oy)*sc1)+" "+(-p.x*sc)+" "+(p.y*sc)+"\n";
        data.vecData += "v " + ((v.x + ox) * sc1) + " " + ((-v.y - oy) * sc1) + " " + ((v.z + oz) * sc1) + "\n";
        data.texData += "t " + (-(p.x) * sc) + " " + (p.y * sc) + "\n";
    }
    for (var i in panel.faces) {
        var f = panel.faces[i];
        var a = (f.a + data.vertices);
        var b = (f.b + data.vertices);
        var c = (f.c + data.vertices);
        //data.faceData += "0xd0f0 3 "+(f.a+data.vertices)+" "+(f.b+data.vertices)+" "+(f.c+data.vertices)+" "+(f.a+data.vertices)+" "+(f.b+data.vertices)+" "+(f.c+data.vertices)+"\n";
        data.faceData += "f " + b + "/" + b + " " + a + "/" + a + " " + c + "/" + c + "\n";
        // data.faceData += "0xd0f0 3 "+(f.a+data.vertices)+" "+(f.c+data.vertices)+" "+(f.b+data.vertices)+" "+(f.a+data.vertices)+" "+(f.c+data.vertices)+" "+(f.b+data.vertices)+"\n";
    }
    data.vertices += panel.vertices.length;
    data.faces += panel.faces.length;
    for (var i in panel.childPanels) {
        var pan = panel.childPanels[i];
        this._generateGeomData(pan, data);         // Shows only the explicitly set index of "5", and ignores 0-4
    }
};



WebGlViewer3d.prototype.getGeometrySnapshot = function ()
{
    if (this.panelsGeom) {
    } else
        return null;
    var t_viewAngleX = this.viewAngleX;
    var t_viewAngleY = this.viewAngleY;
    var t_boxAngle = this.boxAngle;
    var t_currentScale = this.currentScale;

    var t_width = this.renderer.domElement.width;
    var t_height = this.renderer.domElement.height;


    var t_adjustmentLag = this.adjustmentLag;
    var t_angle = this.angle;
    var t_nextAngle = this.nextAngle;
    var t_anglePrev = this.anglePrev;


    this.adjustmentLag = 1;
    this.angle = nextAngle = this.foldMax;
    this.anglePrev = this.foldMax - 1;

    var t_centerX = this.center.x;
    var t_centerY = this.center.y;
    var t_centerZ = this.center.z;

    this.updatePanel(this.panelsGeom.P0w);
    this.calcBoundary();

    this.center.x = this.centerTar.x;
    this.center.y = this.centerTar.y;
    this.center.z = this.centerTar.z;

    /*webGLWidth = 400;
     webGLHeight = 300;
     renderer.setSize(webGLWidth, webGLHeight);*/
    this.viewAngleX = 0;//-Math.PI/2;
    this.viewAngleY = Math.PI / 4;
    this.boxAngle = 3 * Math.PI / 2;
    this.currentScale = 1.2;
    this.width = this.webGLWidth * 1.6 * this.currentScale;
    this.height = this.webGLHeight * 1.6 * this.currentScale;

    this.previewMode = true;
    this.animate();
    var imgData = this.generateGeomData();//renderer.domElement.toDataURL("image/png");//.replace("image/png", "image/octet-stream");


    //this.webGLWidth = t_width;
    //this.webGLHeight = t_height;
    //this.renderer.setSize(t_width, t_height);
    this.viewAngleX = t_viewAngleX;
    this.viewAngleY = t_viewAngleY;
    this.boxAngle = t_boxAngle;
    this.currentScale = t_currentScale;

    this.angle = t_angle;
    this.nextAngle = t_nextAngle;
    this.anglePrev = t_anglePrev;

    this.center.x = t_centerX;
    this.center.y = t_centerY;
    this.center.z = t_centerZ;

    this.updatePanel(this.panelsGeom.P0w);
    this.calcBoundary();

    this.adjustmentLag = t_adjustmentLag;

    this.previewMode = false;

    return imgData;
};

