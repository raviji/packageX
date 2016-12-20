var panelsGeom=new  Array(); 

 function loadWebGLMesh() {



var P3w = new THREE.Geometry();
panelsGeom["P3w"] = P3w;
panelsGeom.P3w = P3w;
P3w.childPanels = new Array();

P3w.foldPt0 = new THREE.Vector3(1-342.35294117647, 303.52941176471, 0);
P3w.foldPt1 = new THREE.Vector3(1-342.35294117647, 37.647058823529, 0);
P3w.fold = new Array();
P3w.fold.push({order:11, angle:(-(90)) * (Math.PI / 180)});
P3w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P3w.foldAngle = P3w.fold[0].angle;

P3w.foldIdeal = -(90) * (Math.PI / 180);

P3w.foldCur = 0;

P3w.vertices = new Array();

P3w.normals = new Array();

P3w.vertices.push( new THREE.Vector3(-361.176468,298.485672, 0));P3w.normals.push(new THREE.Vector3(-0.038794,-0.001513, 0.999246));
P3w.vertices.push( new THREE.Vector3(-380.000000,258.681747, 0));P3w.normals.push(new THREE.Vector3(-0.019979,-0.041275, 0.998948));
P3w.vertices.push( new THREE.Vector3(-342.352936,303.529419, 0));P3w.normals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
P3w.vertices.push( new THREE.Vector3(-361.176468,298.485672, 0));P3w.normals.push(new THREE.Vector3(-0.038794,-0.001513, 0.999246));
P3w.vertices.push( new THREE.Vector3(-380.000000,293.441925, 0));P3w.normals.push(new THREE.Vector3(-0.019996,-0.006557, 0.999779));
P3w.vertices.push( new THREE.Vector3(-380.000000,258.681747, 0));P3w.normals.push(new THREE.Vector3(-0.019979,-0.041275, 0.998948));
P3w.vertices.push( new THREE.Vector3(-380.000000,258.681747, 0));P3w.normals.push(new THREE.Vector3(-0.019979,-0.041275, 0.998948));
P3w.vertices.push( new THREE.Vector3(-370.588226,214.509811, 0));P3w.normals.push(new THREE.Vector3(-0.029292,-0.085143, 0.995938));
P3w.vertices.push( new THREE.Vector3(-342.352936,303.529419, 0));P3w.normals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
P3w.vertices.push( new THREE.Vector3(-370.588226,214.509811, 0));P3w.normals.push(new THREE.Vector3(-0.029292,-0.085143, 0.995938));
P3w.vertices.push( new THREE.Vector3(-380.000000,258.681747, 0));P3w.normals.push(new THREE.Vector3(-0.019979,-0.041275, 0.998948));
P3w.vertices.push( new THREE.Vector3(-375.294113,219.215691, 0));P3w.normals.push(new THREE.Vector3(-0.024618,-0.080498, 0.996451));
P3w.vertices.push( new THREE.Vector3(-380.000000,223.921570, 0));P3w.normals.push(new THREE.Vector3(-0.019938,-0.075844, 0.996920));
P3w.vertices.push( new THREE.Vector3(-375.294113,219.215691, 0));P3w.normals.push(new THREE.Vector3(-0.024618,-0.080498, 0.996451));
P3w.vertices.push( new THREE.Vector3(-380.000000,258.681747, 0));P3w.normals.push(new THREE.Vector3(-0.019979,-0.041275, 0.998948));
P3w.vertices.push( new THREE.Vector3(-342.352936,303.529419, 0));P3w.normals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
P3w.vertices.push( new THREE.Vector3(-370.588226,214.509811, 0));P3w.normals.push(new THREE.Vector3(-0.029292,-0.085143, 0.995938));
P3w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P3w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P3w.vertices.push( new THREE.Vector3(-370.588226,170.588238, 0));P3w.normals.push(new THREE.Vector3(-0.029156,-0.128287, 0.991308));
P3w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P3w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P3w.vertices.push( new THREE.Vector3(-370.588226,214.509811, 0));P3w.normals.push(new THREE.Vector3(-0.029292,-0.085143, 0.995938));
P3w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P3w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P3w.vertices.push( new THREE.Vector3(-370.588226,170.588238, 0));P3w.normals.push(new THREE.Vector3(-0.029156,-0.128287, 0.991308));
P3w.vertices.push( new THREE.Vector3(-370.588226,126.666664, 0));P3w.normals.push(new THREE.Vector3(-0.028967,-0.170715, 0.984895));
P3w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P3w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P3w.vertices.push( new THREE.Vector3(-370.588226,126.666664, 0));P3w.normals.push(new THREE.Vector3(-0.028967,-0.170715, 0.984895));
P3w.vertices.push( new THREE.Vector3(-342.352936,37.647060, 0));P3w.normals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
P3w.vertices.push( new THREE.Vector3(-370.588226,126.666664, 0));P3w.normals.push(new THREE.Vector3(-0.028967,-0.170715, 0.984895));
P3w.vertices.push( new THREE.Vector3(-380.000000,82.156864, 0));P3w.normals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
P3w.vertices.push( new THREE.Vector3(-342.352936,37.647060, 0));P3w.normals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
P3w.vertices.push( new THREE.Vector3(-370.588226,126.666664, 0));P3w.normals.push(new THREE.Vector3(-0.028967,-0.170715, 0.984895));
P3w.vertices.push( new THREE.Vector3(-375.294113,121.960785, 0));P3w.normals.push(new THREE.Vector3(-0.024316,-0.175231, 0.984227));
P3w.vertices.push( new THREE.Vector3(-380.000000,82.156864, 0));P3w.normals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
P3w.vertices.push( new THREE.Vector3(-375.294113,121.960785, 0));P3w.normals.push(new THREE.Vector3(-0.024316,-0.175231, 0.984227));
P3w.vertices.push( new THREE.Vector3(-380.000000,117.254906, 0));P3w.normals.push(new THREE.Vector3(-0.019670,-0.179733, 0.983519));
P3w.vertices.push( new THREE.Vector3(-380.000000,82.156864, 0));P3w.normals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
P3w.vertices.push( new THREE.Vector3(-380.000000,82.156864, 0));P3w.normals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
P3w.vertices.push( new THREE.Vector3(-356.470581,37.647060, 0));P3w.normals.push(new THREE.Vector3(-0.042067,-0.253540, 0.966410));
P3w.vertices.push( new THREE.Vector3(-342.352936,37.647060, 0));P3w.normals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
P3w.vertices.push( new THREE.Vector3(-370.588226,37.647060, 0));P3w.normals.push(new THREE.Vector3(-0.028437,-0.253662, 0.966875));
P3w.vertices.push( new THREE.Vector3(-356.470581,37.647060, 0));P3w.normals.push(new THREE.Vector3(-0.042067,-0.253540, 0.966410));
P3w.vertices.push( new THREE.Vector3(-380.000000,82.156864, 0));P3w.normals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
P3w.vertices.push( new THREE.Vector3(-380.000000,82.156864, 0));P3w.normals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
P3w.vertices.push( new THREE.Vector3(-374.159149,38.437878, 0));P3w.normals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.vertices.push( new THREE.Vector3(-370.588226,37.647060, 0));P3w.normals.push(new THREE.Vector3(-0.028437,-0.253662, 0.966875));
P3w.vertices.push( new THREE.Vector3(-380.000000,82.156864, 0));P3w.normals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
P3w.vertices.push( new THREE.Vector3(-380.000000,47.058823, 0));P3w.normals.push(new THREE.Vector3(-0.019386,-0.245172, 0.969286));
P3w.vertices.push( new THREE.Vector3(-374.159149,38.437878, 0));P3w.normals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.vertices.push( new THREE.Vector3(-379.839645,45.840851, 0));P3w.normals.push(new THREE.Vector3(-0.019535,-0.246281, 0.969002));
P3w.vertices.push( new THREE.Vector3(-374.159149,38.437878, 0));P3w.normals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.vertices.push( new THREE.Vector3(-380.000000,47.058823, 0));P3w.normals.push(new THREE.Vector3(-0.019386,-0.245172, 0.969286));
P3w.vertices.push( new THREE.Vector3(-379.839645,45.840851, 0));P3w.normals.push(new THREE.Vector3(-0.019535,-0.246281, 0.969002));
P3w.vertices.push( new THREE.Vector3(-379.209183,43.487909, 0));P3w.normals.push(new THREE.Vector3(-0.020135,-0.248418, 0.968444));
P3w.vertices.push( new THREE.Vector3(-374.159149,38.437878, 0));P3w.normals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.vertices.push( new THREE.Vector3(-379.839645,45.840851, 0));P3w.normals.push(new THREE.Vector3(-0.019535,-0.246281, 0.969002));
P3w.vertices.push( new THREE.Vector3(-379.679291,44.622879, 0));P3w.normals.push(new THREE.Vector3(-0.019685,-0.247388, 0.968717));
P3w.vertices.push( new THREE.Vector3(-379.209183,43.487909, 0));P3w.normals.push(new THREE.Vector3(-0.020135,-0.248418, 0.968444));
P3w.vertices.push( new THREE.Vector3(-379.209183,43.487909, 0));P3w.normals.push(new THREE.Vector3(-0.020135,-0.248418, 0.968444));
P3w.vertices.push( new THREE.Vector3(-377.991211,41.378321, 0));P3w.normals.push(new THREE.Vector3(-0.021303,-0.250327, 0.967927));
P3w.vertices.push( new THREE.Vector3(-374.159149,38.437878, 0));P3w.normals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.vertices.push( new THREE.Vector3(-379.209183,43.487909, 0));P3w.normals.push(new THREE.Vector3(-0.020135,-0.248418, 0.968444));
P3w.vertices.push( new THREE.Vector3(-378.739075,42.352940, 0));P3w.normals.push(new THREE.Vector3(-0.020584,-0.249446, 0.968170));
P3w.vertices.push( new THREE.Vector3(-377.991211,41.378321, 0));P3w.normals.push(new THREE.Vector3(-0.021303,-0.250327, 0.967927));
P3w.vertices.push( new THREE.Vector3(-377.991211,41.378321, 0));P3w.normals.push(new THREE.Vector3(-0.021303,-0.250327, 0.967927));
P3w.vertices.push( new THREE.Vector3(-376.268738,39.655849, 0));P3w.normals.push(new THREE.Vector3(-0.022960,-0.251879, 0.967486));
P3w.vertices.push( new THREE.Vector3(-374.159149,38.437878, 0));P3w.normals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.vertices.push( new THREE.Vector3(-377.991211,41.378321, 0));P3w.normals.push(new THREE.Vector3(-0.021303,-0.250327, 0.967927));
P3w.vertices.push( new THREE.Vector3(-377.243347,40.403702, 0));P3w.normals.push(new THREE.Vector3(-0.022021,-0.251207, 0.967683));
P3w.vertices.push( new THREE.Vector3(-376.268738,39.655849, 0));P3w.normals.push(new THREE.Vector3(-0.022960,-0.251879, 0.967486));
P3w.vertices.push( new THREE.Vector3(-374.159149,38.437878, 0));P3w.normals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.vertices.push( new THREE.Vector3(-376.268738,39.655849, 0));P3w.normals.push(new THREE.Vector3(-0.022960,-0.251879, 0.967486));
P3w.vertices.push( new THREE.Vector3(-375.294128,38.907997, 0));P3w.normals.push(new THREE.Vector3(-0.023898,-0.252551, 0.967288));
P3w.vertices.push( new THREE.Vector3(-374.159149,38.437878, 0));P3w.normals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.vertices.push( new THREE.Vector3(-371.806198,37.807409, 0));P3w.normals.push(new THREE.Vector3(-0.027262,-0.253526, 0.966944));
P3w.vertices.push( new THREE.Vector3(-370.588226,37.647060, 0));P3w.normals.push(new THREE.Vector3(-0.028437,-0.253662, 0.966875));
P3w.vertices.push( new THREE.Vector3(-371.806198,37.807409, 0));P3w.normals.push(new THREE.Vector3(-0.027262,-0.253526, 0.966944));
P3w.vertices.push( new THREE.Vector3(-374.159149,38.437878, 0));P3w.normals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.vertices.push( new THREE.Vector3(-373.024170,37.967758, 0));P3w.normals.push(new THREE.Vector3(-0.026086,-0.253389, 0.967013));

var P4w = new THREE.Geometry();
panelsGeom["P4w"] = P4w;
panelsGeom.P4w = P4w;
P4w.childPanels = new Array();

P4w.foldPt0 = new THREE.Vector3(1-38.823529411765, 37.647058823529, 0);
P4w.foldPt1 = new THREE.Vector3(1-38.823529411765, 303.52941176471, 0);
P4w.fold = new Array();
P4w.fold.push({order:12, angle:(-(90)) * (Math.PI / 180)});
P4w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P4w.foldAngle = P4w.fold[0].angle;

P4w.foldIdeal = -(90) * (Math.PI / 180);

P4w.foldCur = 0;

P4w.vertices = new Array();

P4w.normals = new Array();

P4w.vertices.push( new THREE.Vector3(-1.176471,293.441925, 0));P4w.normals.push(new THREE.Vector3(-0.370442,-0.006091, 0.928836));
P4w.vertices.push( new THREE.Vector3(-19.999999,298.485672, 0));P4w.normals.push(new THREE.Vector3(-0.355217,-0.001416, 0.934783));
P4w.vertices.push( new THREE.Vector3(-1.176471,258.681747, 0));P4w.normals.push(new THREE.Vector3(-0.370176,-0.038350, 0.928170));
P4w.vertices.push( new THREE.Vector3(-38.823528,303.529419, 0));P4w.normals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
P4w.vertices.push( new THREE.Vector3(-1.176471,258.681747, 0));P4w.normals.push(new THREE.Vector3(-0.370176,-0.038350, 0.928170));
P4w.vertices.push( new THREE.Vector3(-19.999999,298.485672, 0));P4w.normals.push(new THREE.Vector3(-0.355217,-0.001416, 0.934783));
P4w.vertices.push( new THREE.Vector3(-38.823528,303.529419, 0));P4w.normals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
P4w.vertices.push( new THREE.Vector3(-10.588235,214.509811, 0));P4w.normals.push(new THREE.Vector3(-0.361723,-0.079412, 0.928897));
P4w.vertices.push( new THREE.Vector3(-1.176471,258.681747, 0));P4w.normals.push(new THREE.Vector3(-0.370176,-0.038350, 0.928170));
P4w.vertices.push( new THREE.Vector3(-10.588235,214.509811, 0));P4w.normals.push(new THREE.Vector3(-0.361723,-0.079412, 0.928897));
P4w.vertices.push( new THREE.Vector3(-38.823528,303.529419, 0));P4w.normals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
P4w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P4w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P4w.vertices.push( new THREE.Vector3(-10.588235,170.588238, 0));P4w.normals.push(new THREE.Vector3(-0.360259,-0.119724, 0.925137));
P4w.vertices.push( new THREE.Vector3(-10.588235,214.509811, 0));P4w.normals.push(new THREE.Vector3(-0.361723,-0.079412, 0.928897));
P4w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P4w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P4w.vertices.push( new THREE.Vector3(-10.588235,170.588238, 0));P4w.normals.push(new THREE.Vector3(-0.360259,-0.119724, 0.925137));
P4w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P4w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P4w.vertices.push( new THREE.Vector3(-10.588235,126.666664, 0));P4w.normals.push(new THREE.Vector3(-0.358227,-0.159452, 0.919918));
P4w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P4w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P4w.vertices.push( new THREE.Vector3(-38.823528,37.647060, 0));P4w.normals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
P4w.vertices.push( new THREE.Vector3(-10.588235,126.666664, 0));P4w.normals.push(new THREE.Vector3(-0.358227,-0.159452, 0.919918));
P4w.vertices.push( new THREE.Vector3(-10.588235,126.666664, 0));P4w.normals.push(new THREE.Vector3(-0.358227,-0.159452, 0.919918));
P4w.vertices.push( new THREE.Vector3(-38.823528,37.647060, 0));P4w.normals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
P4w.vertices.push( new THREE.Vector3(-5.882353,121.960785, 0));P4w.normals.push(new THREE.Vector3(-0.361739,-0.163413, 0.917846));
P4w.vertices.push( new THREE.Vector3(-5.882353,121.960785, 0));P4w.normals.push(new THREE.Vector3(-0.361739,-0.163413, 0.917846));
P4w.vertices.push( new THREE.Vector3(-38.823528,37.647060, 0));P4w.normals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
P4w.vertices.push( new THREE.Vector3(-24.705882,37.647060, 0));P4w.normals.push(new THREE.Vector3(-0.341222,-0.238535, 0.909213));
P4w.vertices.push( new THREE.Vector3(-24.705882,37.647060, 0));P4w.normals.push(new THREE.Vector3(-0.341222,-0.238535, 0.909213));
P4w.vertices.push( new THREE.Vector3(-1.176471,82.156864, 0));P4w.normals.push(new THREE.Vector3(-0.363090,-0.198325, 0.910403));
P4w.vertices.push( new THREE.Vector3(-5.882353,121.960785, 0));P4w.normals.push(new THREE.Vector3(-0.361739,-0.163413, 0.917846));
P4w.vertices.push( new THREE.Vector3(-24.705882,37.647060, 0));P4w.normals.push(new THREE.Vector3(-0.341222,-0.238535, 0.909213));
P4w.vertices.push( new THREE.Vector3(-5.882353,38.907997, 0));P4w.normals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
P4w.vertices.push( new THREE.Vector3(-1.176471,82.156864, 0));P4w.normals.push(new THREE.Vector3(-0.363090,-0.198325, 0.910403));
P4w.vertices.push( new THREE.Vector3(-5.882353,38.907997, 0));P4w.normals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
P4w.vertices.push( new THREE.Vector3(-24.705882,37.647060, 0));P4w.normals.push(new THREE.Vector3(-0.341222,-0.238535, 0.909213));
P4w.vertices.push( new THREE.Vector3(-10.588235,37.647060, 0));P4w.normals.push(new THREE.Vector3(-0.352489,-0.237477, 0.905183));
P4w.vertices.push( new THREE.Vector3(-5.882353,38.907997, 0));P4w.normals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
P4w.vertices.push( new THREE.Vector3(-10.588235,37.647060, 0));P4w.normals.push(new THREE.Vector3(-0.352489,-0.237477, 0.905183));
P4w.vertices.push( new THREE.Vector3(-7.017322,38.437878, 0));P4w.normals.push(new THREE.Vector3(-0.355375,-0.236531, 0.904302));
P4w.vertices.push( new THREE.Vector3(-9.370263,37.807409, 0));P4w.normals.push(new THREE.Vector3(-0.353466,-0.237248, 0.904862));
P4w.vertices.push( new THREE.Vector3(-7.017322,38.437878, 0));P4w.normals.push(new THREE.Vector3(-0.355375,-0.236531, 0.904302));
P4w.vertices.push( new THREE.Vector3(-10.588235,37.647060, 0));P4w.normals.push(new THREE.Vector3(-0.352489,-0.237477, 0.905183));
P4w.vertices.push( new THREE.Vector3(-8.152291,37.967758, 0));P4w.normals.push(new THREE.Vector3(-0.354442,-0.237019, 0.904540));
P4w.vertices.push( new THREE.Vector3(-7.017322,38.437878, 0));P4w.normals.push(new THREE.Vector3(-0.355375,-0.236531, 0.904302));
P4w.vertices.push( new THREE.Vector3(-9.370263,37.807409, 0));P4w.normals.push(new THREE.Vector3(-0.353466,-0.237248, 0.904862));
P4w.vertices.push( new THREE.Vector3(-1.176471,82.156864, 0));P4w.normals.push(new THREE.Vector3(-0.363090,-0.198325, 0.910403));
P4w.vertices.push( new THREE.Vector3(-5.882353,38.907997, 0));P4w.normals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
P4w.vertices.push( new THREE.Vector3(-1.176471,47.058823, 0));P4w.normals.push(new THREE.Vector3(-0.360629,-0.228717, 0.904232));
P4w.vertices.push( new THREE.Vector3(-5.882353,38.907997, 0));P4w.normals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
P4w.vertices.push( new THREE.Vector3(-1.336820,45.840851, 0));P4w.normals.push(new THREE.Vector3(-0.360412,-0.229773, 0.904051));
P4w.vertices.push( new THREE.Vector3(-1.176471,47.058823, 0));P4w.normals.push(new THREE.Vector3(-0.360629,-0.228717, 0.904232));
P4w.vertices.push( new THREE.Vector3(-5.882353,38.907997, 0));P4w.normals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
P4w.vertices.push( new THREE.Vector3(-1.967288,43.487909, 0));P4w.normals.push(new THREE.Vector3(-0.359739,-0.231834, 0.903793));
P4w.vertices.push( new THREE.Vector3(-1.336820,45.840851, 0));P4w.normals.push(new THREE.Vector3(-0.360412,-0.229773, 0.904051));
P4w.vertices.push( new THREE.Vector3(-1.967288,43.487909, 0));P4w.normals.push(new THREE.Vector3(-0.359739,-0.231834, 0.903793));
P4w.vertices.push( new THREE.Vector3(-5.882353,38.907997, 0));P4w.normals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
P4w.vertices.push( new THREE.Vector3(-2.437408,42.352940, 0));P4w.normals.push(new THREE.Vector3(-0.359283,-0.232840, 0.903715));
P4w.vertices.push( new THREE.Vector3(-4.907733,39.655849, 0));P4w.normals.push(new THREE.Vector3(-0.357133,-0.235331, 0.903922));
P4w.vertices.push( new THREE.Vector3(-2.437408,42.352940, 0));P4w.normals.push(new THREE.Vector3(-0.359283,-0.232840, 0.903715));
P4w.vertices.push( new THREE.Vector3(-5.882353,38.907997, 0));P4w.normals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
P4w.vertices.push( new THREE.Vector3(-2.437408,42.352940, 0));P4w.normals.push(new THREE.Vector3(-0.359283,-0.232840, 0.903715));
P4w.vertices.push( new THREE.Vector3(-4.907733,39.655849, 0));P4w.normals.push(new THREE.Vector3(-0.357133,-0.235331, 0.903922));
P4w.vertices.push( new THREE.Vector3(-3.185260,41.378321, 0));P4w.normals.push(new THREE.Vector3(-0.358621,-0.233729, 0.903749));
P4w.vertices.push( new THREE.Vector3(-3.933113,40.403702, 0));P4w.normals.push(new THREE.Vector3(-0.357958,-0.234618, 0.903781));
P4w.vertices.push( new THREE.Vector3(-3.185260,41.378321, 0));P4w.normals.push(new THREE.Vector3(-0.358621,-0.233729, 0.903749));
P4w.vertices.push( new THREE.Vector3(-4.907733,39.655849, 0));P4w.normals.push(new THREE.Vector3(-0.357133,-0.235331, 0.903922));
P4w.vertices.push( new THREE.Vector3(-1.336820,45.840851, 0));P4w.normals.push(new THREE.Vector3(-0.360412,-0.229773, 0.904051));
P4w.vertices.push( new THREE.Vector3(-1.967288,43.487909, 0));P4w.normals.push(new THREE.Vector3(-0.359739,-0.231834, 0.903793));
P4w.vertices.push( new THREE.Vector3(-1.497169,44.622879, 0));P4w.normals.push(new THREE.Vector3(-0.360194,-0.230827, 0.903869));
P4w.vertices.push( new THREE.Vector3(-1.176471,117.254906, 0));P4w.normals.push(new THREE.Vector3(-0.365224,-0.167350, 0.915754));
P4w.vertices.push( new THREE.Vector3(-5.882353,121.960785, 0));P4w.normals.push(new THREE.Vector3(-0.361739,-0.163413, 0.917846));
P4w.vertices.push( new THREE.Vector3(-1.176471,82.156864, 0));P4w.normals.push(new THREE.Vector3(-0.363090,-0.198325, 0.910403));
P4w.vertices.push( new THREE.Vector3(-5.882353,219.215691, 0));P4w.normals.push(new THREE.Vector3(-0.365637,-0.074946, 0.927735));
P4w.vertices.push( new THREE.Vector3(-1.176471,258.681747, 0));P4w.normals.push(new THREE.Vector3(-0.370176,-0.038350, 0.928170));
P4w.vertices.push( new THREE.Vector3(-10.588235,214.509811, 0));P4w.normals.push(new THREE.Vector3(-0.361723,-0.079412, 0.928897));
P4w.vertices.push( new THREE.Vector3(-1.176471,223.921570, 0));P4w.normals.push(new THREE.Vector3(-0.369527,-0.070490, 0.926543));
P4w.vertices.push( new THREE.Vector3(-1.176471,258.681747, 0));P4w.normals.push(new THREE.Vector3(-0.370176,-0.038350, 0.928170));
P4w.vertices.push( new THREE.Vector3(-5.882353,219.215691, 0));P4w.normals.push(new THREE.Vector3(-0.365637,-0.074946, 0.927735));

var P5w = new THREE.Geometry();
panelsGeom["P5w"] = P5w;
panelsGeom.P5w = P5w;
P5w.childPanels = new Array();

P5w.foldPt0 = new THREE.Vector3(1-342.35294117647, 37.647058823529, 0);
P5w.foldPt1 = new THREE.Vector3(1-200, 37.647058823529, 0);
P5w.fold = new Array();
P5w.fold.push({order:13, angle:(-(90)) * (Math.PI / 180)});
P5w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P5w.foldAngle = P5w.fold[0].angle;

P5w.foldIdeal = -(90) * (Math.PI / 180);

P5w.foldCur = 0;

P5w.vertices = new Array();

P5w.normals = new Array();

P5w.vertices.push( new THREE.Vector3(-38.823528,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
P5w.vertices.push( new THREE.Vector3(-109.999998,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
P5w.vertices.push( new THREE.Vector3(-89.607843, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.284974,-0.275433, 0.918110));
P5w.vertices.push( new THREE.Vector3(-89.607843, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.284974,-0.275433, 0.918110));
P5w.vertices.push( new THREE.Vector3(-109.999998,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
P5w.vertices.push( new THREE.Vector3(-130.980392, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.249523,-0.278259, 0.927529));
P5w.vertices.push( new THREE.Vector3(-130.980392, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.249523,-0.278259, 0.927529));
P5w.vertices.push( new THREE.Vector3(-109.999998,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
P5w.vertices.push( new THREE.Vector3(-135.686272, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.245721,-0.274522, 0.929655));
P5w.vertices.push( new THREE.Vector3(-135.686272, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.245721,-0.274522, 0.929655));
P5w.vertices.push( new THREE.Vector3(-109.999998,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
P5w.vertices.push( new THREE.Vector3(-140.392151, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
P5w.vertices.push( new THREE.Vector3(-140.392151, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
P5w.vertices.push( new THREE.Vector3(-109.999998,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
P5w.vertices.push( new THREE.Vector3(-181.176468,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
P5w.vertices.push( new THREE.Vector3(-140.392151, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
P5w.vertices.push( new THREE.Vector3(-181.176468,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
P5w.vertices.push( new THREE.Vector3(-181.336815,36.429087, 0));P5w.normals.push(new THREE.Vector3(-0.206868,-0.249354, 0.946059));
P5w.vertices.push( new THREE.Vector3(-140.392151, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
P5w.vertices.push( new THREE.Vector3(-181.336815,36.429087, 0));P5w.normals.push(new THREE.Vector3(-0.206868,-0.249354, 0.946059));
P5w.vertices.push( new THREE.Vector3(-181.497162,35.211113, 0));P5w.normals.push(new THREE.Vector3(-0.206664,-0.250442, 0.945817));
P5w.vertices.push( new THREE.Vector3(-140.392151, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
P5w.vertices.push( new THREE.Vector3(-181.497162,35.211113, 0));P5w.normals.push(new THREE.Vector3(-0.206664,-0.250442, 0.945817));
P5w.vertices.push( new THREE.Vector3(-181.967285,34.076145, 0));P5w.normals.push(new THREE.Vector3(-0.206182,-0.251471, 0.945649));
P5w.vertices.push( new THREE.Vector3(-140.392151, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
P5w.vertices.push( new THREE.Vector3(-181.967285,34.076145, 0));P5w.normals.push(new THREE.Vector3(-0.206182,-0.251471, 0.945649));
P5w.vertices.push( new THREE.Vector3(-182.437408,32.941177, 0));P5w.normals.push(new THREE.Vector3(-0.205701,-0.252499, 0.945480));
P5w.vertices.push( new THREE.Vector3(-140.392151, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
P5w.vertices.push( new THREE.Vector3(-182.437408,32.941177, 0));P5w.normals.push(new THREE.Vector3(-0.205701,-0.252499, 0.945480));
P5w.vertices.push( new THREE.Vector3(-183.185257,31.966557, 0));P5w.normals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
P5w.vertices.push( new THREE.Vector3(-140.392151, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
P5w.vertices.push( new THREE.Vector3(-183.185257,31.966557, 0));P5w.normals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
P5w.vertices.push( new THREE.Vector3(-183.933105,30.991936, 0));P5w.normals.push(new THREE.Vector3(-0.204251,-0.254297, 0.945312));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-140.392151, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
P5w.vertices.push( new THREE.Vector3(-183.933105,30.991936, 0));P5w.normals.push(new THREE.Vector3(-0.204251,-0.254297, 0.945312));
P5w.vertices.push( new THREE.Vector3(-183.933105,30.991936, 0));P5w.normals.push(new THREE.Vector3(-0.204251,-0.254297, 0.945312));
P5w.vertices.push( new THREE.Vector3(-184.907730,30.244083, 0));P5w.normals.push(new THREE.Vector3(-0.203331,-0.255005, 0.945319));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-184.907730,30.244083, 0));P5w.normals.push(new THREE.Vector3(-0.203331,-0.255005, 0.945319));
P5w.vertices.push( new THREE.Vector3(-185.882355,29.496231, 0));P5w.normals.push(new THREE.Vector3(-0.202411,-0.255714, 0.945325));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-185.882355,29.496231, 0));P5w.normals.push(new THREE.Vector3(-0.202411,-0.255714, 0.945325));
P5w.vertices.push( new THREE.Vector3(-187.017326,29.026112, 0));P5w.normals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-187.017326,29.026112, 0));P5w.normals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
P5w.vertices.push( new THREE.Vector3(-188.152298,28.555992, 0));P5w.normals.push(new THREE.Vector3(-0.200306,-0.256655, 0.945519));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-188.152298,28.555992, 0));P5w.normals.push(new THREE.Vector3(-0.200306,-0.256655, 0.945519));
P5w.vertices.push( new THREE.Vector3(-189.370270,28.395643, 0));P5w.normals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-189.370270,28.395643, 0));P5w.normals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P5w.vertices.push( new THREE.Vector3(-190.588242,28.235294, 0));P5w.normals.push(new THREE.Vector3(-0.198078,-0.257057, 0.945879));
P5w.vertices.push( new THREE.Vector3(-190.588242,28.235294, 0));P5w.normals.push(new THREE.Vector3(-0.198078,-0.257057, 0.945879));
P5w.vertices.push( new THREE.Vector3(-191.806213,28.395643, 0));P5w.normals.push(new THREE.Vector3(-0.196979,-0.256973, 0.946131));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-193.024185,28.555992, 0));P5w.normals.push(new THREE.Vector3(-0.195878,-0.256890, 0.946382));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-191.806213,28.395643, 0));P5w.normals.push(new THREE.Vector3(-0.196979,-0.256973, 0.946131));
P5w.vertices.push( new THREE.Vector3(-194.159149,29.026112, 0));P5w.normals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-193.024185,28.555992, 0));P5w.normals.push(new THREE.Vector3(-0.195878,-0.256890, 0.946382));
P5w.vertices.push( new THREE.Vector3(-195.294113,29.496231, 0));P5w.normals.push(new THREE.Vector3(-0.193855,-0.256166, 0.946995));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-194.159149,29.026112, 0));P5w.normals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
P5w.vertices.push( new THREE.Vector3(-196.268738,30.244083, 0));P5w.normals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-195.294113,29.496231, 0));P5w.normals.push(new THREE.Vector3(-0.193855,-0.256166, 0.946995));
P5w.vertices.push( new THREE.Vector3(-197.243362,30.991936, 0));P5w.normals.push(new THREE.Vector3(-0.192147,-0.254932, 0.947675));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-196.268738,30.244083, 0));P5w.normals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
P5w.vertices.push( new THREE.Vector3(-197.243362,30.991936, 0));P5w.normals.push(new THREE.Vector3(-0.192147,-0.254932, 0.947675));
P5w.vertices.push( new THREE.Vector3(-240.784317, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.vertices.push( new THREE.Vector3(-190.588234, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.vertices.push( new THREE.Vector3(-197.243362,30.991936, 0));P5w.normals.push(new THREE.Vector3(-0.192147,-0.254932, 0.947675));
P5w.vertices.push( new THREE.Vector3(-197.991211,31.966557, 0));P5w.normals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
P5w.vertices.push( new THREE.Vector3(-240.784317, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.vertices.push( new THREE.Vector3(-197.991211,31.966557, 0));P5w.normals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
P5w.vertices.push( new THREE.Vector3(-198.739059,32.941177, 0));P5w.normals.push(new THREE.Vector3(-0.190871,-0.253273, 0.948378));
P5w.vertices.push( new THREE.Vector3(-240.784317, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.vertices.push( new THREE.Vector3(-198.739059,32.941177, 0));P5w.normals.push(new THREE.Vector3(-0.190871,-0.253273, 0.948378));
P5w.vertices.push( new THREE.Vector3(-199.209183,34.076145, 0));P5w.normals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
P5w.vertices.push( new THREE.Vector3(-240.784317, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.vertices.push( new THREE.Vector3(-199.209183,34.076145, 0));P5w.normals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
P5w.vertices.push( new THREE.Vector3(-199.679306,35.211113, 0));P5w.normals.push(new THREE.Vector3(-0.190115,-0.251299, 0.949055));
P5w.vertices.push( new THREE.Vector3(-240.784317, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.vertices.push( new THREE.Vector3(-199.679306,35.211113, 0));P5w.normals.push(new THREE.Vector3(-0.190115,-0.251299, 0.949055));
P5w.vertices.push( new THREE.Vector3(-199.839653,36.429087, 0));P5w.normals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
P5w.vertices.push( new THREE.Vector3(-240.784317, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.vertices.push( new THREE.Vector3(-199.839653,36.429087, 0));P5w.normals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
P5w.vertices.push( new THREE.Vector3(-200.000000,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
P5w.vertices.push( new THREE.Vector3(-240.784317, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.vertices.push( new THREE.Vector3(-240.784317, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.vertices.push( new THREE.Vector3(-200.000000,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
P5w.vertices.push( new THREE.Vector3(-271.176468,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
P5w.vertices.push( new THREE.Vector3(-245.490196, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.146583,-0.280146, 0.948700));
P5w.vertices.push( new THREE.Vector3(-240.784317, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.vertices.push( new THREE.Vector3(-271.176468,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
P5w.vertices.push( new THREE.Vector3(-250.196075, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.142031,-0.284435, 0.948116));
P5w.vertices.push( new THREE.Vector3(-245.490196, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.146583,-0.280146, 0.948700));
P5w.vertices.push( new THREE.Vector3(-271.176468,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
P5w.vertices.push( new THREE.Vector3(-250.196075, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.142031,-0.284435, 0.948116));
P5w.vertices.push( new THREE.Vector3(-271.176468,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
P5w.vertices.push( new THREE.Vector3(-291.568619, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.103303,-0.285811, 0.952702));
P5w.vertices.push( new THREE.Vector3(-291.568619, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.103303,-0.285811, 0.952702));
P5w.vertices.push( new THREE.Vector3(-271.176468,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
P5w.vertices.push( new THREE.Vector3(-342.352936,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
P5w.vertices.push( new THREE.Vector3(-291.568619, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.103303,-0.285811, 0.952702));
P5w.vertices.push( new THREE.Vector3(-342.352936,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
P5w.vertices.push( new THREE.Vector3(-342.352936,23.529413, 0));P5w.normals.push(new THREE.Vector3(-0.055477,-0.266064, 0.962358));
P5w.vertices.push( new THREE.Vector3(-291.568619, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.103303,-0.285811, 0.952702));
P5w.vertices.push( new THREE.Vector3(-342.352936,23.529413, 0));P5w.normals.push(new THREE.Vector3(-0.055477,-0.266064, 0.962358));
P5w.vertices.push( new THREE.Vector3(-332.941162, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.064099,-0.286757, 0.955857));
P5w.vertices.push( new THREE.Vector3(-342.352936,23.529413, 0));P5w.normals.push(new THREE.Vector3(-0.055477,-0.266064, 0.962358));
P5w.vertices.push( new THREE.Vector3(-337.647064, 1.260937, 0));P5w.normals.push(new THREE.Vector3(-0.059638,-0.285730, 0.956453));
P5w.vertices.push( new THREE.Vector3(-332.941162, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.064099,-0.286757, 0.955857));
P5w.vertices.push( new THREE.Vector3(-342.352936,23.529413, 0));P5w.normals.push(new THREE.Vector3(-0.055477,-0.266064, 0.962358));
P5w.vertices.push( new THREE.Vector3(-341.092010, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.056406,-0.282754, 0.957533));
P5w.vertices.push( new THREE.Vector3(-337.647064, 1.260937, 0));P5w.normals.push(new THREE.Vector3(-0.059638,-0.285730, 0.956453));
P5w.vertices.push( new THREE.Vector3(-342.352936,23.529413, 0));P5w.normals.push(new THREE.Vector3(-0.055477,-0.266064, 0.962358));
P5w.vertices.push( new THREE.Vector3(-342.352936, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.055273,-0.278619, 0.958810));
P5w.vertices.push( new THREE.Vector3(-341.092010, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.056406,-0.282754, 0.957533));
P5w.vertices.push( new THREE.Vector3(-341.562134, 5.840852, 0));P5w.normals.push(new THREE.Vector3(-0.055975,-0.281761, 0.957851));
P5w.vertices.push( new THREE.Vector3(-341.092010, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.056406,-0.282754, 0.957533));
P5w.vertices.push( new THREE.Vector3(-342.352936, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.055273,-0.278619, 0.958810));
P5w.vertices.push( new THREE.Vector3(-342.192596, 8.193793, 0));P5w.normals.push(new THREE.Vector3(-0.055408,-0.279693, 0.958489));
P5w.vertices.push( new THREE.Vector3(-341.562134, 5.840852, 0));P5w.normals.push(new THREE.Vector3(-0.055975,-0.281761, 0.957851));
P5w.vertices.push( new THREE.Vector3(-342.352936, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.055273,-0.278619, 0.958810));
P5w.vertices.push( new THREE.Vector3(-342.032257, 6.975821, 0));P5w.normals.push(new THREE.Vector3(-0.055543,-0.280766, 0.958168));
P5w.vertices.push( new THREE.Vector3(-341.562134, 5.840852, 0));P5w.normals.push(new THREE.Vector3(-0.055975,-0.281761, 0.957851));
P5w.vertices.push( new THREE.Vector3(-342.192596, 8.193793, 0));P5w.normals.push(new THREE.Vector3(-0.055408,-0.279693, 0.958489));
P5w.vertices.push( new THREE.Vector3(-338.621689, 2.008790, 0));P5w.normals.push(new THREE.Vector3(-0.058721,-0.285088, 0.956701));
P5w.vertices.push( new THREE.Vector3(-337.647064, 1.260937, 0));P5w.normals.push(new THREE.Vector3(-0.059638,-0.285730, 0.956453));
P5w.vertices.push( new THREE.Vector3(-341.092010, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.056406,-0.282754, 0.957533));
P5w.vertices.push( new THREE.Vector3(-338.621689, 2.008790, 0));P5w.normals.push(new THREE.Vector3(-0.058721,-0.285088, 0.956701));
P5w.vertices.push( new THREE.Vector3(-341.092010, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.056406,-0.282754, 0.957533));
P5w.vertices.push( new THREE.Vector3(-340.344162, 3.731262, 0));P5w.normals.push(new THREE.Vector3(-0.057105,-0.283600, 0.957241));
P5w.vertices.push( new THREE.Vector3(-338.621689, 2.008790, 0));P5w.normals.push(new THREE.Vector3(-0.058721,-0.285088, 0.956701));
P5w.vertices.push( new THREE.Vector3(-340.344162, 3.731262, 0));P5w.normals.push(new THREE.Vector3(-0.057105,-0.283600, 0.957241));
P5w.vertices.push( new THREE.Vector3(-339.596313, 2.756642, 0));P5w.normals.push(new THREE.Vector3(-0.057803,-0.284446, 0.956948));
P5w.vertices.push( new THREE.Vector3(-332.941162, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.064099,-0.286757, 0.955857));
P5w.vertices.push( new THREE.Vector3(-337.647064, 1.260937, 0));P5w.normals.push(new THREE.Vector3(-0.059638,-0.285730, 0.956453));
P5w.vertices.push( new THREE.Vector3(-336.512085, 0.790818, 0));P5w.normals.push(new THREE.Vector3(-0.060711,-0.286124, 0.956267));
P5w.vertices.push( new THREE.Vector3(-332.941162, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.064099,-0.286757, 0.955857));
P5w.vertices.push( new THREE.Vector3(-336.512085, 0.790818, 0));P5w.normals.push(new THREE.Vector3(-0.060711,-0.286124, 0.956267));
P5w.vertices.push( new THREE.Vector3(-334.159134, 0.160349, 0));P5w.normals.push(new THREE.Vector3(-0.062942,-0.286637, 0.955969));
P5w.vertices.push( new THREE.Vector3(-334.159134, 0.160349, 0));P5w.normals.push(new THREE.Vector3(-0.062942,-0.286637, 0.955969));
P5w.vertices.push( new THREE.Vector3(-336.512085, 0.790818, 0));P5w.normals.push(new THREE.Vector3(-0.060711,-0.286124, 0.956267));
P5w.vertices.push( new THREE.Vector3(-335.377106, 0.320698, 0));P5w.normals.push(new THREE.Vector3(-0.061785,-0.286518, 0.956081));
P5w.vertices.push( new THREE.Vector3(-38.823528,37.647060, 0));P5w.normals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
P5w.vertices.push( new THREE.Vector3(-89.607843, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.284974,-0.275433, 0.918110));
P5w.vertices.push( new THREE.Vector3(-38.823528,23.529413, 0));P5w.normals.push(new THREE.Vector3(-0.328766,-0.251661, 0.910264));
P5w.vertices.push( new THREE.Vector3(-38.823528,23.529413, 0));P5w.normals.push(new THREE.Vector3(-0.328766,-0.251661, 0.910264));
P5w.vertices.push( new THREE.Vector3(-89.607843, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.284974,-0.275433, 0.918110));
P5w.vertices.push( new THREE.Vector3(-48.235294, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
P5w.vertices.push( new THREE.Vector3(-38.823528,23.529413, 0));P5w.normals.push(new THREE.Vector3(-0.328766,-0.251661, 0.910264));
P5w.vertices.push( new THREE.Vector3(-48.235294, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
P5w.vertices.push( new THREE.Vector3(-38.823528, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.327681,-0.263639, 0.907260));
P5w.vertices.push( new THREE.Vector3(-38.823528, 9.411765, 0));P5w.normals.push(new THREE.Vector3(-0.327681,-0.263639, 0.907260));
P5w.vertices.push( new THREE.Vector3(-48.235294, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
P5w.vertices.push( new THREE.Vector3(-38.983877, 8.193793, 0));P5w.normals.push(new THREE.Vector3(-0.327455,-0.264679, 0.907038));
P5w.vertices.push( new THREE.Vector3(-48.235294, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
P5w.vertices.push( new THREE.Vector3(-39.614346, 5.840852, 0));P5w.normals.push(new THREE.Vector3(-0.326759,-0.266712, 0.906693));
P5w.vertices.push( new THREE.Vector3(-38.983877, 8.193793, 0));P5w.normals.push(new THREE.Vector3(-0.327455,-0.264679, 0.907038));
P5w.vertices.push( new THREE.Vector3(-39.614346, 5.840852, 0));P5w.normals.push(new THREE.Vector3(-0.326759,-0.266712, 0.906693));
P5w.vertices.push( new THREE.Vector3(-48.235294, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
P5w.vertices.push( new THREE.Vector3(-40.084465, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.326289,-0.267705, 0.906570));
P5w.vertices.push( new THREE.Vector3(-48.235294, 0.000000, 0));P5w.normals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
P5w.vertices.push( new THREE.Vector3(-47.017323, 0.160349, 0));P5w.normals.push(new THREE.Vector3(-0.320298,-0.272076, 0.907405));
P5w.vertices.push( new THREE.Vector3(-40.084465, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.326289,-0.267705, 0.906570));
P5w.vertices.push( new THREE.Vector3(-40.832317, 3.731262, 0));P5w.normals.push(new THREE.Vector3(-0.325606,-0.268584, 0.906556));
P5w.vertices.push( new THREE.Vector3(-40.084465, 4.705883, 0));P5w.normals.push(new THREE.Vector3(-0.326289,-0.267705, 0.906570));
P5w.vertices.push( new THREE.Vector3(-47.017323, 0.160349, 0));P5w.normals.push(new THREE.Vector3(-0.320298,-0.272076, 0.907405));
P5w.vertices.push( new THREE.Vector3(-40.832317, 3.731262, 0));P5w.normals.push(new THREE.Vector3(-0.325606,-0.268584, 0.906556));
P5w.vertices.push( new THREE.Vector3(-47.017323, 0.160349, 0));P5w.normals.push(new THREE.Vector3(-0.320298,-0.272076, 0.907405));
P5w.vertices.push( new THREE.Vector3(-44.664381, 0.790818, 0));P5w.normals.push(new THREE.Vector3(-0.322262,-0.271360, 0.906924));
P5w.vertices.push( new THREE.Vector3(-45.799351, 0.320698, 0));P5w.normals.push(new THREE.Vector3(-0.321302,-0.271845, 0.907119));
P5w.vertices.push( new THREE.Vector3(-44.664381, 0.790818, 0));P5w.normals.push(new THREE.Vector3(-0.322262,-0.271360, 0.906924));
P5w.vertices.push( new THREE.Vector3(-47.017323, 0.160349, 0));P5w.normals.push(new THREE.Vector3(-0.320298,-0.272076, 0.907405));
P5w.vertices.push( new THREE.Vector3(-42.554790, 2.008790, 0));P5w.normals.push(new THREE.Vector3(-0.324072,-0.270169, 0.906634));
P5w.vertices.push( new THREE.Vector3(-40.832317, 3.731262, 0));P5w.normals.push(new THREE.Vector3(-0.325606,-0.268584, 0.906556));
P5w.vertices.push( new THREE.Vector3(-44.664381, 0.790818, 0));P5w.normals.push(new THREE.Vector3(-0.322262,-0.271360, 0.906924));
P5w.vertices.push( new THREE.Vector3(-40.832317, 3.731262, 0));P5w.normals.push(new THREE.Vector3(-0.325606,-0.268584, 0.906556));
P5w.vertices.push( new THREE.Vector3(-42.554790, 2.008790, 0));P5w.normals.push(new THREE.Vector3(-0.324072,-0.270169, 0.906634));
P5w.vertices.push( new THREE.Vector3(-41.580170, 2.756642, 0));P5w.normals.push(new THREE.Vector3(-0.324922,-0.269463, 0.906540));
P5w.vertices.push( new THREE.Vector3(-44.664381, 0.790818, 0));P5w.normals.push(new THREE.Vector3(-0.322262,-0.271360, 0.906924));
P5w.vertices.push( new THREE.Vector3(-43.529411, 1.260937, 0));P5w.normals.push(new THREE.Vector3(-0.323222,-0.270875, 0.906727));
P5w.vertices.push( new THREE.Vector3(-42.554790, 2.008790, 0));P5w.normals.push(new THREE.Vector3(-0.324072,-0.270169, 0.906634));
P5w.vertices.push( new THREE.Vector3(-38.983877, 8.193793, 0));P5w.normals.push(new THREE.Vector3(-0.327455,-0.264679, 0.907038));
P5w.vertices.push( new THREE.Vector3(-39.614346, 5.840852, 0));P5w.normals.push(new THREE.Vector3(-0.326759,-0.266712, 0.906693));
P5w.vertices.push( new THREE.Vector3(-39.144226, 6.975821, 0));P5w.normals.push(new THREE.Vector3(-0.327230,-0.265719, 0.906815));

var P2w = new THREE.Geometry();
panelsGeom["P2w"] = P2w;
panelsGeom.P2w = P2w;
P2w.childPanels = new Array();

P2w.foldPt0 = new THREE.Vector3(1-228.23529411765, 303.52941176471, 0);
P2w.foldPt1 = new THREE.Vector3(1-152.94117647059, 303.52941176471, 0);
P2w.fold = new Array();
P2w.fold.push({order:14, angle:(-(30)) * (Math.PI / 180)});
P2w.fold.push({order:1, angle:(-(90)) * (Math.PI / 180)});
P2w.foldAngle = P2w.fold[0].angle;

P2w.foldIdeal = -(30) * (Math.PI / 180);

P2w.foldCur = 0;

P2w.vertices = new Array();

P2w.normals = new Array();

P2w.vertices.push( new THREE.Vector3(-38.823528,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
P2w.vertices.push( new THREE.Vector3(-65.764704,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
P2w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P2w.vertices.push( new THREE.Vector3(-92.705879,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.293736, 0.003374, 0.955880));
P2w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P2w.vertices.push( new THREE.Vector3(-65.764704,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
P2w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P2w.vertices.push( new THREE.Vector3(-92.705879,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.293736, 0.003374, 0.955880));
P2w.vertices.push( new THREE.Vector3(-122.823528,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P2w.vertices.push( new THREE.Vector3(-92.705879,305.882355, 0));P2w.normals.push(new THREE.Vector3(-0.293733, 0.005623, 0.955871));
P2w.vertices.push( new THREE.Vector3(-122.823528,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P2w.vertices.push( new THREE.Vector3(-92.705879,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.293736, 0.003374, 0.955880));
P2w.vertices.push( new THREE.Vector3(-92.705879,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
P2w.vertices.push( new THREE.Vector3(-122.823528,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P2w.vertices.push( new THREE.Vector3(-92.705879,305.882355, 0));P2w.normals.push(new THREE.Vector3(-0.293733, 0.005623, 0.955871));
P2w.vertices.push( new THREE.Vector3(-152.941177,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.239846, 0.003426, 0.970805));
P2w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P2w.vertices.push( new THREE.Vector3(-122.823528,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P2w.vertices.push( new THREE.Vector3(-190.588234,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P2w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P2w.vertices.push( new THREE.Vector3(-152.941177,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.239846, 0.003426, 0.970805));
P2w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P2w.vertices.push( new THREE.Vector3(-190.588234,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P2w.vertices.push( new THREE.Vector3(-181.176468,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
P2w.vertices.push( new THREE.Vector3(-181.176468,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
P2w.vertices.push( new THREE.Vector3(-190.588234,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P2w.vertices.push( new THREE.Vector3(-200.000000,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
P2w.vertices.push( new THREE.Vector3(-190.588234,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P2w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P2w.vertices.push( new THREE.Vector3(-200.000000,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
P2w.vertices.push( new THREE.Vector3(-190.588234,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P2w.vertices.push( new THREE.Vector3(-228.235291,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.169285, 0.003478, 0.985561));
P2w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P2w.vertices.push( new THREE.Vector3(-258.352936,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P2w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P2w.vertices.push( new THREE.Vector3(-228.235291,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.169285, 0.003478, 0.985561));
P2w.vertices.push( new THREE.Vector3(-288.470581,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.110841, 0.003508, 0.993832));
P2w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P2w.vertices.push( new THREE.Vector3(-258.352936,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P2w.vertices.push( new THREE.Vector3(-288.470581,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.110841, 0.003508, 0.993832));
P2w.vertices.push( new THREE.Vector3(-315.411758,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
P2w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P2w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P2w.vertices.push( new THREE.Vector3(-315.411758,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
P2w.vertices.push( new THREE.Vector3(-342.352936,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
P2w.vertices.push( new THREE.Vector3(-288.470581,305.882355, 0));P2w.normals.push(new THREE.Vector3(-0.110840, 0.005846, 0.993821));
P2w.vertices.push( new THREE.Vector3(-288.470581,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.110841, 0.003508, 0.993832));
P2w.vertices.push( new THREE.Vector3(-258.352936,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P2w.vertices.push( new THREE.Vector3(-288.470581,305.882355, 0));P2w.normals.push(new THREE.Vector3(-0.110840, 0.005846, 0.993821));
P2w.vertices.push( new THREE.Vector3(-258.352936,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P2w.vertices.push( new THREE.Vector3(-288.470581,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.110838, 0.008184, 0.993805));
P2w.vertices.push( new THREE.Vector3(-228.235291,305.882355, 0));P2w.normals.push(new THREE.Vector3(-0.169283, 0.005797, 0.985550));
P2w.vertices.push( new THREE.Vector3(-258.352936,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P2w.vertices.push( new THREE.Vector3(-228.235291,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.169285, 0.003478, 0.985561));
P2w.vertices.push( new THREE.Vector3(-228.235291,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.169280, 0.008116, 0.985535));
P2w.vertices.push( new THREE.Vector3(-258.352936,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P2w.vertices.push( new THREE.Vector3(-228.235291,305.882355, 0));P2w.normals.push(new THREE.Vector3(-0.169283, 0.005797, 0.985550));
P2w.vertices.push( new THREE.Vector3(-200.000000,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
P2w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P2w.vertices.push( new THREE.Vector3(-271.176468,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
P2w.vertices.push( new THREE.Vector3(-342.352936,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
P2w.vertices.push( new THREE.Vector3(-271.176468,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
P2w.vertices.push( new THREE.Vector3(-342.352936,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P2w.vertices.push( new THREE.Vector3(-181.176468,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
P2w.vertices.push( new THREE.Vector3(-200.000000,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
P2w.vertices.push( new THREE.Vector3(-181.336815,36.429087, 0));P2w.normals.push(new THREE.Vector3(-0.206868,-0.249354, 0.946059));
P2w.vertices.push( new THREE.Vector3(-200.000000,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
P2w.vertices.push( new THREE.Vector3(-181.967285,34.076145, 0));P2w.normals.push(new THREE.Vector3(-0.206182,-0.251471, 0.945649));
P2w.vertices.push( new THREE.Vector3(-181.336815,36.429087, 0));P2w.normals.push(new THREE.Vector3(-0.206868,-0.249354, 0.946059));
P2w.vertices.push( new THREE.Vector3(-181.967285,34.076145, 0));P2w.normals.push(new THREE.Vector3(-0.206182,-0.251471, 0.945649));
P2w.vertices.push( new THREE.Vector3(-200.000000,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
P2w.vertices.push( new THREE.Vector3(-182.437408,32.941177, 0));P2w.normals.push(new THREE.Vector3(-0.205701,-0.252499, 0.945480));
P2w.vertices.push( new THREE.Vector3(-200.000000,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
P2w.vertices.push( new THREE.Vector3(-199.839653,36.429087, 0));P2w.normals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
P2w.vertices.push( new THREE.Vector3(-182.437408,32.941177, 0));P2w.normals.push(new THREE.Vector3(-0.205701,-0.252499, 0.945480));
P2w.vertices.push( new THREE.Vector3(-183.185257,31.966557, 0));P2w.normals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
P2w.vertices.push( new THREE.Vector3(-182.437408,32.941177, 0));P2w.normals.push(new THREE.Vector3(-0.205701,-0.252499, 0.945480));
P2w.vertices.push( new THREE.Vector3(-199.839653,36.429087, 0));P2w.normals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
P2w.vertices.push( new THREE.Vector3(-183.185257,31.966557, 0));P2w.normals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
P2w.vertices.push( new THREE.Vector3(-199.839653,36.429087, 0));P2w.normals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
P2w.vertices.push( new THREE.Vector3(-187.017326,29.026112, 0));P2w.normals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
P2w.vertices.push( new THREE.Vector3(-187.017326,29.026112, 0));P2w.normals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
P2w.vertices.push( new THREE.Vector3(-199.839653,36.429087, 0));P2w.normals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
P2w.vertices.push( new THREE.Vector3(-189.370270,28.395643, 0));P2w.normals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.vertices.push( new THREE.Vector3(-199.839653,36.429087, 0));P2w.normals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
P2w.vertices.push( new THREE.Vector3(-199.209183,34.076145, 0));P2w.normals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
P2w.vertices.push( new THREE.Vector3(-189.370270,28.395643, 0));P2w.normals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.vertices.push( new THREE.Vector3(-199.839653,36.429087, 0));P2w.normals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
P2w.vertices.push( new THREE.Vector3(-199.679306,35.211113, 0));P2w.normals.push(new THREE.Vector3(-0.190115,-0.251299, 0.949055));
P2w.vertices.push( new THREE.Vector3(-199.209183,34.076145, 0));P2w.normals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
P2w.vertices.push( new THREE.Vector3(-199.209183,34.076145, 0));P2w.normals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
P2w.vertices.push( new THREE.Vector3(-197.991211,31.966557, 0));P2w.normals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
P2w.vertices.push( new THREE.Vector3(-189.370270,28.395643, 0));P2w.normals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.vertices.push( new THREE.Vector3(-199.209183,34.076145, 0));P2w.normals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
P2w.vertices.push( new THREE.Vector3(-198.739059,32.941177, 0));P2w.normals.push(new THREE.Vector3(-0.190871,-0.253273, 0.948378));
P2w.vertices.push( new THREE.Vector3(-197.991211,31.966557, 0));P2w.normals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
P2w.vertices.push( new THREE.Vector3(-197.991211,31.966557, 0));P2w.normals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
P2w.vertices.push( new THREE.Vector3(-196.268738,30.244083, 0));P2w.normals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
P2w.vertices.push( new THREE.Vector3(-189.370270,28.395643, 0));P2w.normals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.vertices.push( new THREE.Vector3(-197.991211,31.966557, 0));P2w.normals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
P2w.vertices.push( new THREE.Vector3(-197.243362,30.991936, 0));P2w.normals.push(new THREE.Vector3(-0.192147,-0.254932, 0.947675));
P2w.vertices.push( new THREE.Vector3(-196.268738,30.244083, 0));P2w.normals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
P2w.vertices.push( new THREE.Vector3(-196.268738,30.244083, 0));P2w.normals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
P2w.vertices.push( new THREE.Vector3(-194.159149,29.026112, 0));P2w.normals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
P2w.vertices.push( new THREE.Vector3(-189.370270,28.395643, 0));P2w.normals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.vertices.push( new THREE.Vector3(-196.268738,30.244083, 0));P2w.normals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
P2w.vertices.push( new THREE.Vector3(-195.294113,29.496231, 0));P2w.normals.push(new THREE.Vector3(-0.193855,-0.256166, 0.946995));
P2w.vertices.push( new THREE.Vector3(-194.159149,29.026112, 0));P2w.normals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
P2w.vertices.push( new THREE.Vector3(-194.159149,29.026112, 0));P2w.normals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
P2w.vertices.push( new THREE.Vector3(-191.806213,28.395643, 0));P2w.normals.push(new THREE.Vector3(-0.196979,-0.256973, 0.946131));
P2w.vertices.push( new THREE.Vector3(-189.370270,28.395643, 0));P2w.normals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.vertices.push( new THREE.Vector3(-194.159149,29.026112, 0));P2w.normals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
P2w.vertices.push( new THREE.Vector3(-193.024185,28.555992, 0));P2w.normals.push(new THREE.Vector3(-0.195878,-0.256890, 0.946382));
P2w.vertices.push( new THREE.Vector3(-191.806213,28.395643, 0));P2w.normals.push(new THREE.Vector3(-0.196979,-0.256973, 0.946131));
P2w.vertices.push( new THREE.Vector3(-189.370270,28.395643, 0));P2w.normals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.vertices.push( new THREE.Vector3(-191.806213,28.395643, 0));P2w.normals.push(new THREE.Vector3(-0.196979,-0.256973, 0.946131));
P2w.vertices.push( new THREE.Vector3(-190.588242,28.235294, 0));P2w.normals.push(new THREE.Vector3(-0.198078,-0.257057, 0.945879));
P2w.vertices.push( new THREE.Vector3(-187.017326,29.026112, 0));P2w.normals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
P2w.vertices.push( new THREE.Vector3(-189.370270,28.395643, 0));P2w.normals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.vertices.push( new THREE.Vector3(-188.152298,28.555992, 0));P2w.normals.push(new THREE.Vector3(-0.200306,-0.256655, 0.945519));
P2w.vertices.push( new THREE.Vector3(-184.907730,30.244083, 0));P2w.normals.push(new THREE.Vector3(-0.203331,-0.255005, 0.945319));
P2w.vertices.push( new THREE.Vector3(-183.185257,31.966557, 0));P2w.normals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
P2w.vertices.push( new THREE.Vector3(-187.017326,29.026112, 0));P2w.normals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
P2w.vertices.push( new THREE.Vector3(-183.185257,31.966557, 0));P2w.normals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
P2w.vertices.push( new THREE.Vector3(-184.907730,30.244083, 0));P2w.normals.push(new THREE.Vector3(-0.203331,-0.255005, 0.945319));
P2w.vertices.push( new THREE.Vector3(-183.933105,30.991936, 0));P2w.normals.push(new THREE.Vector3(-0.204251,-0.254297, 0.945312));
P2w.vertices.push( new THREE.Vector3(-184.907730,30.244083, 0));P2w.normals.push(new THREE.Vector3(-0.203331,-0.255005, 0.945319));
P2w.vertices.push( new THREE.Vector3(-187.017326,29.026112, 0));P2w.normals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
P2w.vertices.push( new THREE.Vector3(-185.882355,29.496231, 0));P2w.normals.push(new THREE.Vector3(-0.202411,-0.255714, 0.945325));
P2w.vertices.push( new THREE.Vector3(-181.336815,36.429087, 0));P2w.normals.push(new THREE.Vector3(-0.206868,-0.249354, 0.946059));
P2w.vertices.push( new THREE.Vector3(-181.967285,34.076145, 0));P2w.normals.push(new THREE.Vector3(-0.206182,-0.251471, 0.945649));
P2w.vertices.push( new THREE.Vector3(-181.497162,35.211113, 0));P2w.normals.push(new THREE.Vector3(-0.206664,-0.250442, 0.945817));
P2w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P2w.vertices.push( new THREE.Vector3(-181.176468,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
P2w.vertices.push( new THREE.Vector3(-109.999998,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
P2w.vertices.push( new THREE.Vector3(-38.823528,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
P2w.vertices.push( new THREE.Vector3(-38.823528,170.588240, 0));P2w.normals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P2w.vertices.push( new THREE.Vector3(-109.999998,37.647060, 0));P2w.normals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
P2w.vertices.push( new THREE.Vector3(-152.941177,305.882355, 0));P2w.normals.push(new THREE.Vector3(-0.239843, 0.005711, 0.970795));
P2w.vertices.push( new THREE.Vector3(-152.941177,303.529419, 0));P2w.normals.push(new THREE.Vector3(-0.239846, 0.003426, 0.970805));
P2w.vertices.push( new THREE.Vector3(-122.823528,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P2w.vertices.push( new THREE.Vector3(-152.941177,305.882355, 0));P2w.normals.push(new THREE.Vector3(-0.239843, 0.005711, 0.970795));
P2w.vertices.push( new THREE.Vector3(-122.823528,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P2w.vertices.push( new THREE.Vector3(-152.941177,308.235291, 0));P2w.normals.push(new THREE.Vector3(-0.239840, 0.007995, 0.970780));

var P1w = new THREE.Geometry();
panelsGeom["P1w"] = P1w;
panelsGeom.P1w = P1w;
P1w.childPanels = new Array();

P1w.foldPt0 = new THREE.Vector3(1-344.70588235294, 342.35294117647, 0);
P1w.foldPt1 = new THREE.Vector3(1-36.470588235294, 342.35294117647, 0);
P1w.fold = new Array();
P1w.fold.push({order:10, angle:(-(90)) * (Math.PI / 180)});
P1w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P1w.foldAngle = P1w.fold[0].angle;

P1w.foldIdeal = -(90) * (Math.PI / 180);

P1w.foldCur = 0;

P1w.vertices = new Array();

P1w.normals = new Array();

P1w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P1w.vertices.push( new THREE.Vector3(-122.823528,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P1w.vertices.push( new THREE.Vector3(-36.470589,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
P1w.vertices.push( new THREE.Vector3(-152.941177,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.239840, 0.007995, 0.970780));
P1w.vertices.push( new THREE.Vector3(-122.823528,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P1w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P1w.vertices.push( new THREE.Vector3(-152.941177,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.239840, 0.007995, 0.970780));
P1w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P1w.vertices.push( new THREE.Vector3(-190.588234,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P1w.vertices.push( new THREE.Vector3(-190.588234,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P1w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P1w.vertices.push( new THREE.Vector3(-228.235291,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.169280, 0.008116, 0.985535));
P1w.vertices.push( new THREE.Vector3(-228.235291,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.169280, 0.008116, 0.985535));
P1w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P1w.vertices.push( new THREE.Vector3(-258.352936,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P1w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P1w.vertices.push( new THREE.Vector3(-344.705872,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
P1w.vertices.push( new THREE.Vector3(-258.352936,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P1w.vertices.push( new THREE.Vector3(-288.470581,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.110838, 0.008184, 0.993805));
P1w.vertices.push( new THREE.Vector3(-258.352936,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P1w.vertices.push( new THREE.Vector3(-344.705872,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
P1w.vertices.push( new THREE.Vector3(-315.411758,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
P1w.vertices.push( new THREE.Vector3(-288.470581,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.110838, 0.008184, 0.993805));
P1w.vertices.push( new THREE.Vector3(-344.705872,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
P1w.vertices.push( new THREE.Vector3(-288.470581,305.882355, 0));P1w.normals.push(new THREE.Vector3(-0.110840, 0.005846, 0.993821));
P1w.vertices.push( new THREE.Vector3(-288.470581,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.110838, 0.008184, 0.993805));
P1w.vertices.push( new THREE.Vector3(-315.411758,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
P1w.vertices.push( new THREE.Vector3(-288.470581,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.110841, 0.003508, 0.993832));
P1w.vertices.push( new THREE.Vector3(-288.470581,305.882355, 0));P1w.normals.push(new THREE.Vector3(-0.110840, 0.005846, 0.993821));
P1w.vertices.push( new THREE.Vector3(-315.411758,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
P1w.vertices.push( new THREE.Vector3(-315.411758,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
P1w.vertices.push( new THREE.Vector3(-344.705872,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
P1w.vertices.push( new THREE.Vector3(-344.705872,324.117645, 0));P1w.normals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P1w.vertices.push( new THREE.Vector3(-315.411758,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
P1w.vertices.push( new THREE.Vector3(-344.705872,324.117645, 0));P1w.normals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P1w.vertices.push( new THREE.Vector3(-342.352936,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
P1w.vertices.push( new THREE.Vector3(-343.529404,304.705887, 0));P1w.normals.push(new THREE.Vector3(-0.056380, 0.004698, 0.998398));
P1w.vertices.push( new THREE.Vector3(-342.352936,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
P1w.vertices.push( new THREE.Vector3(-344.705872,324.117645, 0));P1w.normals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P1w.vertices.push( new THREE.Vector3(-344.705872,305.882355, 0));P1w.normals.push(new THREE.Vector3(-0.055209, 0.005873, 0.998458));
P1w.vertices.push( new THREE.Vector3(-343.529404,304.705887, 0));P1w.normals.push(new THREE.Vector3(-0.056380, 0.004698, 0.998398));
P1w.vertices.push( new THREE.Vector3(-344.705872,324.117645, 0));P1w.normals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P1w.vertices.push( new THREE.Vector3(-228.235291,305.882355, 0));P1w.normals.push(new THREE.Vector3(-0.169283, 0.005797, 0.985550));
P1w.vertices.push( new THREE.Vector3(-190.588234,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P1w.vertices.push( new THREE.Vector3(-228.235291,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.169280, 0.008116, 0.985535));
P1w.vertices.push( new THREE.Vector3(-228.235291,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.169285, 0.003478, 0.985561));
P1w.vertices.push( new THREE.Vector3(-190.588234,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P1w.vertices.push( new THREE.Vector3(-228.235291,305.882355, 0));P1w.normals.push(new THREE.Vector3(-0.169283, 0.005797, 0.985550));
P1w.vertices.push( new THREE.Vector3(-152.941177,305.882355, 0));P1w.normals.push(new THREE.Vector3(-0.239843, 0.005711, 0.970795));
P1w.vertices.push( new THREE.Vector3(-152.941177,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.239840, 0.007995, 0.970780));
P1w.vertices.push( new THREE.Vector3(-190.588234,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P1w.vertices.push( new THREE.Vector3(-152.941177,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.239846, 0.003426, 0.970805));
P1w.vertices.push( new THREE.Vector3(-152.941177,305.882355, 0));P1w.normals.push(new THREE.Vector3(-0.239843, 0.005711, 0.970795));
P1w.vertices.push( new THREE.Vector3(-190.588234,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P1w.vertices.push( new THREE.Vector3(-92.705879,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
P1w.vertices.push( new THREE.Vector3(-36.470589,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
P1w.vertices.push( new THREE.Vector3(-122.823528,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P1w.vertices.push( new THREE.Vector3(-36.470589,342.352936, 0));P1w.normals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
P1w.vertices.push( new THREE.Vector3(-92.705879,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
P1w.vertices.push( new THREE.Vector3(-36.470589,324.117645, 0));P1w.normals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P1w.vertices.push( new THREE.Vector3(-92.705879,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
P1w.vertices.push( new THREE.Vector3(-37.647058,304.705887, 0));P1w.normals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));
P1w.vertices.push( new THREE.Vector3(-36.470589,324.117645, 0));P1w.normals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P1w.vertices.push( new THREE.Vector3(-92.705879,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
P1w.vertices.push( new THREE.Vector3(-65.764704,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
P1w.vertices.push( new THREE.Vector3(-37.647058,304.705887, 0));P1w.normals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));
P1w.vertices.push( new THREE.Vector3(-92.705879,305.882355, 0));P1w.normals.push(new THREE.Vector3(-0.293733, 0.005623, 0.955871));
P1w.vertices.push( new THREE.Vector3(-65.764704,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
P1w.vertices.push( new THREE.Vector3(-92.705879,308.235291, 0));P1w.normals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
P1w.vertices.push( new THREE.Vector3(-92.705879,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.293736, 0.003374, 0.955880));
P1w.vertices.push( new THREE.Vector3(-65.764704,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
P1w.vertices.push( new THREE.Vector3(-92.705879,305.882355, 0));P1w.normals.push(new THREE.Vector3(-0.293733, 0.005623, 0.955871));
P1w.vertices.push( new THREE.Vector3(-38.823528,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
P1w.vertices.push( new THREE.Vector3(-37.647058,304.705887, 0));P1w.normals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));
P1w.vertices.push( new THREE.Vector3(-65.764704,303.529419, 0));P1w.normals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
P1w.vertices.push( new THREE.Vector3(-36.470589,305.882355, 0));P1w.normals.push(new THREE.Vector3(-0.341649, 0.005528, 0.939811));
P1w.vertices.push( new THREE.Vector3(-36.470589,324.117645, 0));P1w.normals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P1w.vertices.push( new THREE.Vector3(-37.647058,304.705887, 0));P1w.normals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));

var P7w = new THREE.Geometry();
panelsGeom["P7w"] = P7w;
panelsGeom.P7w = P7w;
P7w.childPanels = new Array();

P7w.foldPt0 = new THREE.Vector3(1-343.52941176471, 611.76470588235, 0);
P7w.foldPt1 = new THREE.Vector3(1-381.17647058824, 611.76470588235, 0);
P7w.fold = new Array();
P7w.fold.push({order:3, angle:(-(90)) * (Math.PI / 180)});
P7w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P7w.foldAngle = P7w.fold[0].angle;

P7w.foldIdeal = -(90) * (Math.PI / 180);

P7w.foldCur = 0;

P7w.vertices = new Array();

P7w.normals = new Array();

P7w.vertices.push( new THREE.Vector3(-340.000000,695.294128, 0));P7w.normals.push(new THREE.Vector3(-0.055712, 0.367044, 0.928534));
P7w.vertices.push( new THREE.Vector3(-360.588242,695.294128, 0));P7w.normals.push(new THREE.Vector3(-0.036627, 0.367368, 0.929354));
P7w.vertices.push( new THREE.Vector3(-340.000000,676.470581, 0));P7w.normals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
P7w.vertices.push( new THREE.Vector3(-381.176483,653.529419, 0));P7w.normals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
P7w.vertices.push( new THREE.Vector3(-340.000000,676.470581, 0));P7w.normals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
P7w.vertices.push( new THREE.Vector3(-360.588242,695.294128, 0));P7w.normals.push(new THREE.Vector3(-0.036627, 0.367368, 0.929354));
P7w.vertices.push( new THREE.Vector3(-340.000000,676.470581, 0));P7w.normals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
P7w.vertices.push( new THREE.Vector3(-381.176483,653.529419, 0));P7w.normals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
P7w.vertices.push( new THREE.Vector3(-344.705872,652.941162, 0));P7w.normals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
P7w.vertices.push( new THREE.Vector3(-344.705872,652.941162, 0));P7w.normals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
P7w.vertices.push( new THREE.Vector3(-381.176483,653.529419, 0));P7w.normals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
P7w.vertices.push( new THREE.Vector3(-344.705872,633.529419, 0));P7w.normals.push(new THREE.Vector3(-0.052382, 0.315961, 0.947325));
P7w.vertices.push( new THREE.Vector3(-344.705872,633.529419, 0));P7w.normals.push(new THREE.Vector3(-0.052382, 0.315961, 0.947325));
P7w.vertices.push( new THREE.Vector3(-381.176483,653.529419, 0));P7w.normals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
P7w.vertices.push( new THREE.Vector3(-362.352951,611.764709, 0));P7w.normals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P7w.vertices.push( new THREE.Vector3(-381.176483,611.764709, 0));P7w.normals.push(new THREE.Vector3(-0.017968, 0.297587, 0.954525));
P7w.vertices.push( new THREE.Vector3(-362.352951,611.764709, 0));P7w.normals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P7w.vertices.push( new THREE.Vector3(-381.176483,653.529419, 0));P7w.normals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
P7w.vertices.push( new THREE.Vector3(-344.705872,614.117676, 0));P7w.normals.push(new THREE.Vector3(-0.052680, 0.299265, 0.952715));
P7w.vertices.push( new THREE.Vector3(-344.705872,633.529419, 0));P7w.normals.push(new THREE.Vector3(-0.052382, 0.315961, 0.947325));
P7w.vertices.push( new THREE.Vector3(-362.352951,611.764709, 0));P7w.normals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P7w.vertices.push( new THREE.Vector3(-344.117645,612.941193, 0));P7w.normals.push(new THREE.Vector3(-0.053256, 0.298235, 0.953006));
P7w.vertices.push( new THREE.Vector3(-344.705872,614.117676, 0));P7w.normals.push(new THREE.Vector3(-0.052680, 0.299265, 0.952715));
P7w.vertices.push( new THREE.Vector3(-362.352951,611.764709, 0));P7w.normals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P7w.vertices.push( new THREE.Vector3(-343.529419,611.764709, 0));P7w.normals.push(new THREE.Vector3(-0.053833, 0.297204, 0.953295));
P7w.vertices.push( new THREE.Vector3(-344.117645,612.941193, 0));P7w.normals.push(new THREE.Vector3(-0.053256, 0.298235, 0.953006));
P7w.vertices.push( new THREE.Vector3(-362.352951,611.764709, 0));P7w.normals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P7w.vertices.push( new THREE.Vector3(-342.352936,655.294098, 0));P7w.normals.push(new THREE.Vector3(-0.054240, 0.334298, 0.940905));
P7w.vertices.push( new THREE.Vector3(-340.000000,676.470581, 0));P7w.normals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
P7w.vertices.push( new THREE.Vector3(-344.705872,652.941162, 0));P7w.normals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
P7w.vertices.push( new THREE.Vector3(-340.000000,657.647034, 0));P7w.normals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
P7w.vertices.push( new THREE.Vector3(-340.000000,676.470581, 0));P7w.normals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
P7w.vertices.push( new THREE.Vector3(-342.352936,655.294098, 0));P7w.normals.push(new THREE.Vector3(-0.054240, 0.334298, 0.940905));
P7w.vertices.push( new THREE.Vector3(-381.176483,653.529419, 0));P7w.normals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
P7w.vertices.push( new THREE.Vector3(-360.588242,695.294128, 0));P7w.normals.push(new THREE.Vector3(-0.036627, 0.367368, 0.929354));
P7w.vertices.push( new THREE.Vector3(-381.176483,695.294128, 0));P7w.normals.push(new THREE.Vector3(-0.017503, 0.367559, 0.929836));

var P8w = new THREE.Geometry();
panelsGeom["P8w"] = P8w;
panelsGeom.P8w = P8w;
P8w.childPanels = new Array();

P8w.foldPt0 = new THREE.Vector3(1-381.17647058824, 344.70588235294, 0);
P8w.foldPt1 = new THREE.Vector3(1-343.52941176471, 344.70588235294, 0);
P8w.fold = new Array();
P8w.fold.push({order:8, angle:(-(90)) * (Math.PI / 180)});
P8w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P8w.foldAngle = P8w.fold[0].angle;

P8w.foldIdeal = -(90) * (Math.PI / 180);

P8w.foldCur = 0;

P8w.vertices = new Array();

P8w.normals = new Array();

P8w.vertices.push( new THREE.Vector3(-342.352936,303.529419, 0));P8w.normals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
P8w.vertices.push( new THREE.Vector3(-343.529404,304.705887, 0));P8w.normals.push(new THREE.Vector3(-0.056380, 0.004698, 0.998398));
P8w.vertices.push( new THREE.Vector3(-361.764709,298.328049, 0));P8w.normals.push(new THREE.Vector3(-0.038207,-0.001671, 0.999268));
P8w.vertices.push( new THREE.Vector3(-343.529404,304.705887, 0));P8w.normals.push(new THREE.Vector3(-0.056380, 0.004698, 0.998398));
P8w.vertices.push( new THREE.Vector3(-344.705872,305.882355, 0));P8w.normals.push(new THREE.Vector3(-0.055209, 0.005873, 0.998458));
P8w.vertices.push( new THREE.Vector3(-361.764709,298.328049, 0));P8w.normals.push(new THREE.Vector3(-0.038207,-0.001671, 0.999268));
P8w.vertices.push( new THREE.Vector3(-344.705872,305.882355, 0));P8w.normals.push(new THREE.Vector3(-0.055209, 0.005873, 0.998458));
P8w.vertices.push( new THREE.Vector3(-344.705872,324.117645, 0));P8w.normals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P8w.vertices.push( new THREE.Vector3(-361.764709,298.328049, 0));P8w.normals.push(new THREE.Vector3(-0.038207,-0.001671, 0.999268));
P8w.vertices.push( new THREE.Vector3(-361.764709,298.328049, 0));P8w.normals.push(new THREE.Vector3(-0.038207,-0.001671, 0.999268));
P8w.vertices.push( new THREE.Vector3(-344.705872,324.117645, 0));P8w.normals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P8w.vertices.push( new THREE.Vector3(-381.176483,318.916275, 0));P8w.normals.push(new THREE.Vector3(-0.018817, 0.018910, 0.999644));
P8w.vertices.push( new THREE.Vector3(-362.352951,344.705872, 0));P8w.normals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
P8w.vertices.push( new THREE.Vector3(-381.176483,318.916275, 0));P8w.normals.push(new THREE.Vector3(-0.018817, 0.018910, 0.999644));
P8w.vertices.push( new THREE.Vector3(-344.705872,324.117645, 0));P8w.normals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P8w.vertices.push( new THREE.Vector3(-381.176483,318.916275, 0));P8w.normals.push(new THREE.Vector3(-0.018817, 0.018910, 0.999644));
P8w.vertices.push( new THREE.Vector3(-362.352951,344.705872, 0));P8w.normals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
P8w.vertices.push( new THREE.Vector3(-381.176483,344.705872, 0));P8w.normals.push(new THREE.Vector3(-0.018801, 0.044653, 0.998826));
P8w.vertices.push( new THREE.Vector3(-344.705872,342.352936, 0));P8w.normals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
P8w.vertices.push( new THREE.Vector3(-362.352951,344.705872, 0));P8w.normals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
P8w.vertices.push( new THREE.Vector3(-344.705872,324.117645, 0));P8w.normals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P8w.vertices.push( new THREE.Vector3(-344.705872,342.352936, 0));P8w.normals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
P8w.vertices.push( new THREE.Vector3(-344.117645,343.529404, 0));P8w.normals.push(new THREE.Vector3(-0.055743, 0.043421, 0.997501));
P8w.vertices.push( new THREE.Vector3(-362.352951,344.705872, 0));P8w.normals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
P8w.vertices.push( new THREE.Vector3(-344.117645,343.529404, 0));P8w.normals.push(new THREE.Vector3(-0.055743, 0.043421, 0.997501));
P8w.vertices.push( new THREE.Vector3(-343.529419,344.705872, 0));P8w.normals.push(new THREE.Vector3(-0.056325, 0.044590, 0.997416));
P8w.vertices.push( new THREE.Vector3(-362.352951,344.705872, 0));P8w.normals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
P8w.vertices.push( new THREE.Vector3(-381.176483,293.126678, 0));P8w.normals.push(new THREE.Vector3(-0.018820,-0.006872, 0.999799));
P8w.vertices.push( new THREE.Vector3(-361.764709,298.328049, 0));P8w.normals.push(new THREE.Vector3(-0.038207,-0.001671, 0.999268));
P8w.vertices.push( new THREE.Vector3(-381.176483,318.916275, 0));P8w.normals.push(new THREE.Vector3(-0.018817, 0.018910, 0.999644));

var P6w = new THREE.Geometry();
panelsGeom["P6w"] = P6w;
panelsGeom.P6w = P6w;
P6w.childPanels = new Array();

P6w.foldPt0 = new THREE.Vector3(1-343.52941176471, 611.76470588235, 0);
P6w.foldPt1 = new THREE.Vector3(1-343.52941176471, 344.70588235294, 0);
P6w.fold = new Array();
P6w.fold.push({order:1, angle:(-(90)) * (Math.PI / 180)});
P6w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P6w.foldAngle = P6w.fold[0].angle;

P6w.foldIdeal = -(90) * (Math.PI / 180);

P6w.foldCur = 0;

P6w.vertices = new Array();

P6w.normals = new Array();

P6w.vertices.push( new THREE.Vector3(-343.529419,611.764709, 0));P6w.normals.push(new THREE.Vector3(-0.053833, 0.297204, 0.953295));
P6w.vertices.push( new THREE.Vector3(-362.352951,611.764709, 0));P6w.normals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P6w.vertices.push( new THREE.Vector3(-343.529419,478.235291, 0));P6w.normals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P6w.vertices.push( new THREE.Vector3(-362.352951,611.764709, 0));P6w.normals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P6w.vertices.push( new THREE.Vector3(-381.176483,478.235291, 0));P6w.normals.push(new THREE.Vector3(-0.018528, 0.175440, 0.984316));
P6w.vertices.push( new THREE.Vector3(-343.529419,478.235291, 0));P6w.normals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P6w.vertices.push( new THREE.Vector3(-381.176483,478.235291, 0));P6w.normals.push(new THREE.Vector3(-0.018528, 0.175440, 0.984316));
P6w.vertices.push( new THREE.Vector3(-362.352951,611.764709, 0));P6w.normals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P6w.vertices.push( new THREE.Vector3(-381.176483,611.764709, 0));P6w.normals.push(new THREE.Vector3(-0.017968, 0.297587, 0.954525));
P6w.vertices.push( new THREE.Vector3(-362.352951,344.705872, 0));P6w.normals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
P6w.vertices.push( new THREE.Vector3(-343.529419,478.235291, 0));P6w.normals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P6w.vertices.push( new THREE.Vector3(-381.176483,478.235291, 0));P6w.normals.push(new THREE.Vector3(-0.018528, 0.175440, 0.984316));
P6w.vertices.push( new THREE.Vector3(-343.529419,344.705872, 0));P6w.normals.push(new THREE.Vector3(-0.056325, 0.044590, 0.997416));
P6w.vertices.push( new THREE.Vector3(-343.529419,478.235291, 0));P6w.normals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P6w.vertices.push( new THREE.Vector3(-362.352951,344.705872, 0));P6w.normals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
P6w.vertices.push( new THREE.Vector3(-381.176483,344.705872, 0));P6w.normals.push(new THREE.Vector3(-0.018801, 0.044653, 0.998826));
P6w.vertices.push( new THREE.Vector3(-362.352951,344.705872, 0));P6w.normals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
P6w.vertices.push( new THREE.Vector3(-381.176483,478.235291, 0));P6w.normals.push(new THREE.Vector3(-0.018528, 0.175440, 0.984316));

var P10w = new THREE.Geometry();
panelsGeom["P10w"] = P10w;
panelsGeom.P10w = P10w;
P10w.childPanels = new Array();

P10w.foldPt0 = new THREE.Vector3(1-0, 611.76470588235, 0);
P10w.foldPt1 = new THREE.Vector3(1-37.647058823529, 611.76470588235, 0);
P10w.fold = new Array();
P10w.fold.push({order:4, angle:(-(90)) * (Math.PI / 180)});
P10w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P10w.foldAngle = P10w.fold[0].angle;

P10w.foldIdeal = -(90) * (Math.PI / 180);

P10w.foldCur = 0;

P10w.vertices = new Array();

P10w.normals = new Array();

P10w.vertices.push( new THREE.Vector3(-0.000000,653.529419, 0));P10w.normals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
P10w.vertices.push( new THREE.Vector3(-0.000000,695.294128, 0));P10w.normals.push(new THREE.Vector3(-0.348650, 0.344548, 0.871625));
P10w.vertices.push( new THREE.Vector3(-20.588236,695.294128, 0));P10w.normals.push(new THREE.Vector3(-0.332739, 0.346668, 0.876987));
P10w.vertices.push( new THREE.Vector3(-20.588236,695.294128, 0));P10w.normals.push(new THREE.Vector3(-0.332739, 0.346668, 0.876987));
P10w.vertices.push( new THREE.Vector3(-41.176472,676.470581, 0));P10w.normals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
P10w.vertices.push( new THREE.Vector3(-0.000000,653.529419, 0));P10w.normals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
P10w.vertices.push( new THREE.Vector3(-41.176472,676.470581, 0));P10w.normals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
P10w.vertices.push( new THREE.Vector3(-20.588236,695.294128, 0));P10w.normals.push(new THREE.Vector3(-0.332739, 0.346668, 0.876987));
P10w.vertices.push( new THREE.Vector3(-41.176472,695.294128, 0));P10w.normals.push(new THREE.Vector3(-0.316539, 0.348712, 0.882158));
P10w.vertices.push( new THREE.Vector3(-41.176472,676.470581, 0));P10w.normals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
P10w.vertices.push( new THREE.Vector3(-36.470589,652.941162, 0));P10w.normals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
P10w.vertices.push( new THREE.Vector3(-0.000000,653.529419, 0));P10w.normals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
P10w.vertices.push( new THREE.Vector3(-41.176472,676.470581, 0));P10w.normals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
P10w.vertices.push( new THREE.Vector3(-38.823530,655.294098, 0));P10w.normals.push(new THREE.Vector3(-0.322186, 0.316939, 0.892046));
P10w.vertices.push( new THREE.Vector3(-36.470589,652.941162, 0));P10w.normals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
P10w.vertices.push( new THREE.Vector3(-41.176472,657.647034, 0));P10w.normals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
P10w.vertices.push( new THREE.Vector3(-38.823530,655.294098, 0));P10w.normals.push(new THREE.Vector3(-0.322186, 0.316939, 0.892046));
P10w.vertices.push( new THREE.Vector3(-41.176472,676.470581, 0));P10w.normals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
P10w.vertices.push( new THREE.Vector3(-0.000000,653.529419, 0));P10w.normals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
P10w.vertices.push( new THREE.Vector3(-36.470589,652.941162, 0));P10w.normals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
P10w.vertices.push( new THREE.Vector3(-36.470589,633.529419, 0));P10w.normals.push(new THREE.Vector3(-0.326013, 0.299109, 0.896799));
P10w.vertices.push( new THREE.Vector3(-18.823530,611.764709, 0));P10w.normals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
P10w.vertices.push( new THREE.Vector3(-0.000000,653.529419, 0));P10w.normals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
P10w.vertices.push( new THREE.Vector3(-36.470589,633.529419, 0));P10w.normals.push(new THREE.Vector3(-0.326013, 0.299109, 0.896799));
P10w.vertices.push( new THREE.Vector3(-0.000000,611.764709, 0));P10w.normals.push(new THREE.Vector3(-0.356745, 0.278052, 0.891863));
P10w.vertices.push( new THREE.Vector3(-0.000000,653.529419, 0));P10w.normals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
P10w.vertices.push( new THREE.Vector3(-18.823530,611.764709, 0));P10w.normals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
P10w.vertices.push( new THREE.Vector3(-36.470589,614.117676, 0));P10w.normals.push(new THREE.Vector3(-0.327674, 0.283136, 0.901368));
P10w.vertices.push( new THREE.Vector3(-18.823530,611.764709, 0));P10w.normals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
P10w.vertices.push( new THREE.Vector3(-36.470589,633.529419, 0));P10w.normals.push(new THREE.Vector3(-0.326013, 0.299109, 0.896799));
P10w.vertices.push( new THREE.Vector3(-18.823530,611.764709, 0));P10w.normals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
P10w.vertices.push( new THREE.Vector3(-36.470589,614.117676, 0));P10w.normals.push(new THREE.Vector3(-0.327674, 0.283136, 0.901368));
P10w.vertices.push( new THREE.Vector3(-37.058825,612.941193, 0));P10w.normals.push(new THREE.Vector3(-0.327298, 0.282209, 0.901795));
P10w.vertices.push( new THREE.Vector3(-18.823530,611.764709, 0));P10w.normals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
P10w.vertices.push( new THREE.Vector3(-37.058825,612.941193, 0));P10w.normals.push(new THREE.Vector3(-0.327298, 0.282209, 0.901795));
P10w.vertices.push( new THREE.Vector3(-37.647060,611.764709, 0));P10w.normals.push(new THREE.Vector3(-0.326922, 0.281281, 0.902221));

var P11w = new THREE.Geometry();
panelsGeom["P11w"] = P11w;
panelsGeom.P11w = P11w;
P11w.childPanels = new Array();

P11w.foldPt0 = new THREE.Vector3(1-37.647058823529, 344.70588235294, 0);
P11w.foldPt1 = new THREE.Vector3(1-0, 344.70588235294, 0);
P11w.fold = new Array();
P11w.fold.push({order:9, angle:(-(90)) * (Math.PI / 180)});
P11w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P11w.foldAngle = P11w.fold[0].angle;

P11w.foldIdeal = -(90) * (Math.PI / 180);

P11w.foldCur = 0;

P11w.vertices = new Array();

P11w.normals = new Array();

P11w.vertices.push( new THREE.Vector3(-0.000000,344.705872, 0));P11w.normals.push(new THREE.Vector3(-0.371071, 0.041473, 0.927678));
P11w.vertices.push( new THREE.Vector3(-18.823530,344.705872, 0));P11w.normals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
P11w.vertices.push( new THREE.Vector3(-0.000000,318.916275, 0));P11w.normals.push(new THREE.Vector3(-0.371333, 0.017561, 0.928334));
P11w.vertices.push( new THREE.Vector3(-36.470589,324.117645, 0));P11w.normals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P11w.vertices.push( new THREE.Vector3(-0.000000,318.916275, 0));P11w.normals.push(new THREE.Vector3(-0.371333, 0.017561, 0.928334));
P11w.vertices.push( new THREE.Vector3(-18.823530,344.705872, 0));P11w.normals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
P11w.vertices.push( new THREE.Vector3(-19.411764,298.328049, 0));P11w.normals.push(new THREE.Vector3(-0.355698,-0.001563, 0.934600));
P11w.vertices.push( new THREE.Vector3(-0.000000,318.916275, 0));P11w.normals.push(new THREE.Vector3(-0.371333, 0.017561, 0.928334));
P11w.vertices.push( new THREE.Vector3(-36.470589,324.117645, 0));P11w.normals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P11w.vertices.push( new THREE.Vector3(-0.000000,293.126678, 0));P11w.normals.push(new THREE.Vector3(-0.371383,-0.006382, 0.928458));
P11w.vertices.push( new THREE.Vector3(-0.000000,318.916275, 0));P11w.normals.push(new THREE.Vector3(-0.371333, 0.017561, 0.928334));
P11w.vertices.push( new THREE.Vector3(-19.411764,298.328049, 0));P11w.normals.push(new THREE.Vector3(-0.355698,-0.001563, 0.934600));
P11w.vertices.push( new THREE.Vector3(-36.470589,305.882355, 0));P11w.normals.push(new THREE.Vector3(-0.341649, 0.005528, 0.939811));
P11w.vertices.push( new THREE.Vector3(-19.411764,298.328049, 0));P11w.normals.push(new THREE.Vector3(-0.355698,-0.001563, 0.934600));
P11w.vertices.push( new THREE.Vector3(-36.470589,324.117645, 0));P11w.normals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P11w.vertices.push( new THREE.Vector3(-19.411764,298.328049, 0));P11w.normals.push(new THREE.Vector3(-0.355698,-0.001563, 0.934600));
P11w.vertices.push( new THREE.Vector3(-36.470589,305.882355, 0));P11w.normals.push(new THREE.Vector3(-0.341649, 0.005528, 0.939811));
P11w.vertices.push( new THREE.Vector3(-37.647058,304.705887, 0));P11w.normals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));
P11w.vertices.push( new THREE.Vector3(-19.411764,298.328049, 0));P11w.normals.push(new THREE.Vector3(-0.355698,-0.001563, 0.934600));
P11w.vertices.push( new THREE.Vector3(-37.647058,304.705887, 0));P11w.normals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));
P11w.vertices.push( new THREE.Vector3(-38.823528,303.529419, 0));P11w.normals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
P11w.vertices.push( new THREE.Vector3(-18.823530,344.705872, 0));P11w.normals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
P11w.vertices.push( new THREE.Vector3(-36.470589,342.352936, 0));P11w.normals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
P11w.vertices.push( new THREE.Vector3(-36.470589,324.117645, 0));P11w.normals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P11w.vertices.push( new THREE.Vector3(-36.470589,342.352936, 0));P11w.normals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
P11w.vertices.push( new THREE.Vector3(-18.823530,344.705872, 0));P11w.normals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
P11w.vertices.push( new THREE.Vector3(-37.058825,343.529404, 0));P11w.normals.push(new THREE.Vector3(-0.340881, 0.040884, 0.939217));
P11w.vertices.push( new THREE.Vector3(-37.058825,343.529404, 0));P11w.normals.push(new THREE.Vector3(-0.340881, 0.040884, 0.939217));
P11w.vertices.push( new THREE.Vector3(-18.823530,344.705872, 0));P11w.normals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
P11w.vertices.push( new THREE.Vector3(-37.647060,344.705872, 0));P11w.normals.push(new THREE.Vector3(-0.340377, 0.041995, 0.939351));

var P9w = new THREE.Geometry();
panelsGeom["P9w"] = P9w;
panelsGeom.P9w = P9w;
P9w.childPanels = new Array();

P9w.foldPt0 = new THREE.Vector3(1-37.647058823529, 344.70588235294, 0);
P9w.foldPt1 = new THREE.Vector3(1-37.647058823529, 611.76470588235, 0);
P9w.fold = new Array();
P9w.fold.push({order:2, angle:(-(90)) * (Math.PI / 180)});
P9w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P9w.foldAngle = P9w.fold[0].angle;

P9w.foldIdeal = -(90) * (Math.PI / 180);

P9w.foldCur = 0;

P9w.vertices = new Array();

P9w.normals = new Array();

P9w.vertices.push( new THREE.Vector3(-0.000000,611.764709, 0));P9w.normals.push(new THREE.Vector3(-0.356745, 0.278052, 0.891863));
P9w.vertices.push( new THREE.Vector3(-18.823530,611.764709, 0));P9w.normals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
P9w.vertices.push( new THREE.Vector3(-0.000000,478.235291, 0));P9w.normals.push(new THREE.Vector3(-0.366407, 0.163267, 0.916018));
P9w.vertices.push( new THREE.Vector3(-18.823530,611.764709, 0));P9w.normals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
P9w.vertices.push( new THREE.Vector3(-37.647060,478.235291, 0));P9w.normals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P9w.vertices.push( new THREE.Vector3(-0.000000,478.235291, 0));P9w.normals.push(new THREE.Vector3(-0.366407, 0.163267, 0.916018));
P9w.vertices.push( new THREE.Vector3(-37.647060,478.235291, 0));P9w.normals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P9w.vertices.push( new THREE.Vector3(-18.823530,611.764709, 0));P9w.normals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
P9w.vertices.push( new THREE.Vector3(-37.647060,611.764709, 0));P9w.normals.push(new THREE.Vector3(-0.326922, 0.281281, 0.902221));
P9w.vertices.push( new THREE.Vector3(-18.823530,344.705872, 0));P9w.normals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
P9w.vertices.push( new THREE.Vector3(-0.000000,478.235291, 0));P9w.normals.push(new THREE.Vector3(-0.366407, 0.163267, 0.916018));
P9w.vertices.push( new THREE.Vector3(-37.647060,478.235291, 0));P9w.normals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P9w.vertices.push( new THREE.Vector3(-0.000000,344.705872, 0));P9w.normals.push(new THREE.Vector3(-0.371071, 0.041473, 0.927678));
P9w.vertices.push( new THREE.Vector3(-0.000000,478.235291, 0));P9w.normals.push(new THREE.Vector3(-0.366407, 0.163267, 0.916018));
P9w.vertices.push( new THREE.Vector3(-18.823530,344.705872, 0));P9w.normals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
P9w.vertices.push( new THREE.Vector3(-37.647060,344.705872, 0));P9w.normals.push(new THREE.Vector3(-0.340377, 0.041995, 0.939351));
P9w.vertices.push( new THREE.Vector3(-18.823530,344.705872, 0));P9w.normals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
P9w.vertices.push( new THREE.Vector3(-37.647060,478.235291, 0));P9w.normals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));

var P14w = new THREE.Geometry();
panelsGeom["P14w"] = P14w;
panelsGeom.P14w = P14w;
P14w.childPanels = new Array();

P14w.foldPt0 = new THREE.Vector3(1-41.176470588235, 657.64705882353, 0);
P14w.foldPt1 = new THREE.Vector3(1-340, 657.64705882353, 0);
P14w.fold = new Array();
P14w.fold.push({order:7, angle:(-(90)) * (Math.PI / 180)});
P14w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P14w.foldAngle = P14w.fold[0].angle;

P14w.foldIdeal = -(90) * (Math.PI / 180);

P14w.foldCur = 0;

P14w.vertices = new Array();

P14w.normals = new Array();

P14w.vertices.push( new THREE.Vector3(-41.176472,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.316539, 0.348712, 0.882158));
P14w.vertices.push( new THREE.Vector3(-66.941175,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.295870, 0.351156, 0.888341));
P14w.vertices.push( new THREE.Vector3(-41.176472,676.470581, 0));P14w.normals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
P14w.vertices.push( new THREE.Vector3(-41.176472,676.470581, 0));P14w.normals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
P14w.vertices.push( new THREE.Vector3(-66.941175,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.295870, 0.351156, 0.888341));
P14w.vertices.push( new THREE.Vector3(-41.176472,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
P14w.vertices.push( new THREE.Vector3(-41.176472,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
P14w.vertices.push( new THREE.Vector3(-66.941175,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.295870, 0.351156, 0.888341));
P14w.vertices.push( new THREE.Vector3(-92.705879,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.274777, 0.353465, 0.894181));
P14w.vertices.push( new THREE.Vector3(-92.705879,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.274777, 0.353465, 0.894181));
P14w.vertices.push( new THREE.Vector3(-190.588236,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P14w.vertices.push( new THREE.Vector3(-41.176472,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
P14w.vertices.push( new THREE.Vector3(-122.823528,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
P14w.vertices.push( new THREE.Vector3(-190.588236,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P14w.vertices.push( new THREE.Vector3(-92.705879,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.274777, 0.353465, 0.894181));
P14w.vertices.push( new THREE.Vector3(-190.588236,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P14w.vertices.push( new THREE.Vector3(-122.823528,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
P14w.vertices.push( new THREE.Vector3(-152.941177,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.223925, 0.358280, 0.906363));
P14w.vertices.push( new THREE.Vector3(-152.310707,697.647064, 0));P14w.normals.push(new THREE.Vector3(-0.224296, 0.360090, 0.905553));
P14w.vertices.push( new THREE.Vector3(-152.941177,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.223925, 0.358280, 0.906363));
P14w.vertices.push( new THREE.Vector3(-122.823528,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
P14w.vertices.push( new THREE.Vector3(-122.823528,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
P14w.vertices.push( new THREE.Vector3(-151.680237,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.224665, 0.361896, 0.904741));
P14w.vertices.push( new THREE.Vector3(-152.310707,697.647064, 0));P14w.normals.push(new THREE.Vector3(-0.224296, 0.360090, 0.905553));
P14w.vertices.push( new THREE.Vector3(-152.941177,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.223925, 0.358280, 0.906363));
P14w.vertices.push( new THREE.Vector3(-190.588234,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.191157, 0.360836, 0.912829));
P14w.vertices.push( new THREE.Vector3(-190.588236,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P14w.vertices.push( new THREE.Vector3(-190.588234,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.191157, 0.360836, 0.912829));
P14w.vertices.push( new THREE.Vector3(-228.235291,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.157738, 0.363013, 0.918336));
P14w.vertices.push( new THREE.Vector3(-190.588236,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P14w.vertices.push( new THREE.Vector3(-258.352943,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
P14w.vertices.push( new THREE.Vector3(-190.588236,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P14w.vertices.push( new THREE.Vector3(-228.235291,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.157738, 0.363013, 0.918336));
P14w.vertices.push( new THREE.Vector3(-190.588236,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P14w.vertices.push( new THREE.Vector3(-258.352943,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
P14w.vertices.push( new THREE.Vector3(-288.470581,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.103166, 0.365653, 0.925016));
P14w.vertices.push( new THREE.Vector3(-287.840118,697.647064, 0));P14w.normals.push(new THREE.Vector3(-0.103661, 0.367514, 0.924223));
P14w.vertices.push( new THREE.Vector3(-288.470581,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.103166, 0.365653, 0.925016));
P14w.vertices.push( new THREE.Vector3(-258.352943,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
P14w.vertices.push( new THREE.Vector3(-258.352943,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
P14w.vertices.push( new THREE.Vector3(-287.209656,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.104154, 0.369371, 0.923427));
P14w.vertices.push( new THREE.Vector3(-287.840118,697.647064, 0));P14w.normals.push(new THREE.Vector3(-0.103661, 0.367514, 0.924223));
P14w.vertices.push( new THREE.Vector3(-190.588236,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P14w.vertices.push( new THREE.Vector3(-288.470581,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.103166, 0.365653, 0.925016));
P14w.vertices.push( new THREE.Vector3(-340.000000,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
P14w.vertices.push( new THREE.Vector3(-314.235291,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.079507, 0.366451, 0.927034));
P14w.vertices.push( new THREE.Vector3(-340.000000,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
P14w.vertices.push( new THREE.Vector3(-288.470581,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.103166, 0.365653, 0.925016));
P14w.vertices.push( new THREE.Vector3(-314.235291,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.079507, 0.366451, 0.927034));
P14w.vertices.push( new THREE.Vector3(-340.000000,676.470581, 0));P14w.normals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
P14w.vertices.push( new THREE.Vector3(-340.000000,657.647034, 0));P14w.normals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
P14w.vertices.push( new THREE.Vector3(-340.000000,676.470581, 0));P14w.normals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
P14w.vertices.push( new THREE.Vector3(-314.235291,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.079507, 0.366451, 0.927034));
P14w.vertices.push( new THREE.Vector3(-340.000000,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.055712, 0.367044, 0.928534));
P14w.vertices.push( new THREE.Vector3(-228.865761,697.647064, 0));P14w.normals.push(new THREE.Vector3(-0.157049, 0.364920, 0.917698));
P14w.vertices.push( new THREE.Vector3(-258.352943,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
P14w.vertices.push( new THREE.Vector3(-228.235291,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.157738, 0.363013, 0.918336));
P14w.vertices.push( new THREE.Vector3(-229.496231,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.156362, 0.366823, 0.917056));
P14w.vertices.push( new THREE.Vector3(-258.352943,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
P14w.vertices.push( new THREE.Vector3(-228.865761,697.647064, 0));P14w.normals.push(new THREE.Vector3(-0.157049, 0.364920, 0.917698));
P14w.vertices.push( new THREE.Vector3(-93.336349,697.647064, 0));P14w.normals.push(new THREE.Vector3(-0.274051, 0.355359, 0.893653));
P14w.vertices.push( new THREE.Vector3(-122.823528,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
P14w.vertices.push( new THREE.Vector3(-92.705879,695.294128, 0));P14w.normals.push(new THREE.Vector3(-0.274777, 0.353465, 0.894181));
P14w.vertices.push( new THREE.Vector3(-93.966820,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.273325, 0.357249, 0.893122));
P14w.vertices.push( new THREE.Vector3(-122.823528,700.000000, 0));P14w.normals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
P14w.vertices.push( new THREE.Vector3(-93.336349,697.647064, 0));P14w.normals.push(new THREE.Vector3(-0.274051, 0.355359, 0.893653));

var P13w = new THREE.Geometry();
panelsGeom["P13w"] = P13w;
panelsGeom.P13w = P13w;
P13w.childPanels = new Array();

P13w.foldPt0 = new THREE.Vector3(1-36.470588235294, 652.94117647059, 0);
P13w.foldPt1 = new THREE.Vector3(1-344.70588235294, 652.94117647059, 0);
P13w.fold = new Array();
P13w.fold.push({order:6, angle:(-(90)) * (Math.PI / 180)});
P13w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P13w.foldAngle = P13w.fold[0].angle;

P13w.foldIdeal = -(90) * (Math.PI / 180);

P13w.foldCur = 0;

P13w.vertices = new Array();

P13w.normals = new Array();

P13w.vertices.push( new THREE.Vector3(-36.470589,652.941162, 0));P13w.normals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
P13w.vertices.push( new THREE.Vector3(-38.823530,655.294098, 0));P13w.normals.push(new THREE.Vector3(-0.322186, 0.316939, 0.892046));
P13w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P13w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P13w.vertices.push( new THREE.Vector3(-38.823530,655.294098, 0));P13w.normals.push(new THREE.Vector3(-0.322186, 0.316939, 0.892046));
P13w.vertices.push( new THREE.Vector3(-41.176472,657.647034, 0));P13w.normals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
P13w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P13w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P13w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P13w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P13w.vertices.push( new THREE.Vector3(-41.176472,657.647034, 0));P13w.normals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
P13w.vertices.push( new THREE.Vector3(-190.588236,657.647034, 0));P13w.normals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P13w.vertices.push( new THREE.Vector3(-190.588236,657.647034, 0));P13w.normals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P13w.vertices.push( new THREE.Vector3(-340.000000,657.647034, 0));P13w.normals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
P13w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P13w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P13w.vertices.push( new THREE.Vector3(-340.000000,657.647034, 0));P13w.normals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
P13w.vertices.push( new THREE.Vector3(-342.352936,655.294098, 0));P13w.normals.push(new THREE.Vector3(-0.054240, 0.334298, 0.940905));
P13w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P13w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P13w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P13w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P13w.vertices.push( new THREE.Vector3(-342.352936,655.294098, 0));P13w.normals.push(new THREE.Vector3(-0.054240, 0.334298, 0.940905));
P13w.vertices.push( new THREE.Vector3(-344.705872,652.941162, 0));P13w.normals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));

var P12w = new THREE.Geometry();
panelsGeom["P12w"] = P12w;
panelsGeom.P12w = P12w;
P12w.childPanels = new Array();

P12w.foldPt0 = new THREE.Vector3(1-152.94117647059, 614.11764705882, 0);
P12w.foldPt1 = new THREE.Vector3(1-228.23529411765, 614.11764705882, 0);
P12w.fold = new Array();
P12w.fold.push({order:5, angle:(-(90)) * (Math.PI / 180)});
P12w.fold.push({order:0, angle:(-(90)) * (Math.PI / 180)});
P12w.foldAngle = P12w.fold[0].angle;

P12w.foldIdeal = -(90) * (Math.PI / 180);

P12w.foldCur = 0;

P12w.vertices = new Array();

P12w.normals = new Array();

P12w.vertices.push( new THREE.Vector3(-36.470589,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
P12w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.vertices.push( new THREE.Vector3(-92.705879,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.281330, 0.287577, 0.915507));
P12w.vertices.push( new THREE.Vector3(-122.823528,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P12w.vertices.push( new THREE.Vector3(-92.705879,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.281330, 0.287577, 0.915507));
P12w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.vertices.push( new THREE.Vector3(-92.705879,611.764709, 0));P12w.normals.push(new THREE.Vector3(-0.281504, 0.285599, 0.916073));
P12w.vertices.push( new THREE.Vector3(-92.705879,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.281330, 0.287577, 0.915507));
P12w.vertices.push( new THREE.Vector3(-122.823528,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P12w.vertices.push( new THREE.Vector3(-92.705879,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.281676, 0.283618, 0.916635));
P12w.vertices.push( new THREE.Vector3(-92.705879,611.764709, 0));P12w.normals.push(new THREE.Vector3(-0.281504, 0.285599, 0.916073));
P12w.vertices.push( new THREE.Vector3(-122.823528,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P12w.vertices.push( new THREE.Vector3(-152.941177,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.229417, 0.291688, 0.928594));
P12w.vertices.push( new THREE.Vector3(-122.823528,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P12w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.vertices.push( new THREE.Vector3(-152.941177,611.764709, 0));P12w.normals.push(new THREE.Vector3(-0.229563, 0.289687, 0.929184));
P12w.vertices.push( new THREE.Vector3(-122.823528,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P12w.vertices.push( new THREE.Vector3(-152.941177,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.229417, 0.291688, 0.928594));
P12w.vertices.push( new THREE.Vector3(-152.941177,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.229708, 0.287682, 0.929771));
P12w.vertices.push( new THREE.Vector3(-122.823528,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P12w.vertices.push( new THREE.Vector3(-152.941177,611.764709, 0));P12w.normals.push(new THREE.Vector3(-0.229563, 0.289687, 0.929184));
P12w.vertices.push( new THREE.Vector3(-152.941177,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.229417, 0.291688, 0.928594));
P12w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.vertices.push( new THREE.Vector3(-190.588234,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P12w.vertices.push( new THREE.Vector3(-190.588234,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P12w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.vertices.push( new THREE.Vector3(-228.235291,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.161713, 0.295736, 0.941482));
P12w.vertices.push( new THREE.Vector3(-228.235291,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.161713, 0.295736, 0.941482));
P12w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.vertices.push( new THREE.Vector3(-258.352936,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
P12w.vertices.push( new THREE.Vector3(-288.470581,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.105806, 0.297999, 0.948684));
P12w.vertices.push( new THREE.Vector3(-258.352936,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
P12w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.vertices.push( new THREE.Vector3(-288.470581,611.764709, 0));P12w.normals.push(new THREE.Vector3(-0.105876, 0.295962, 0.949314));
P12w.vertices.push( new THREE.Vector3(-258.352936,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
P12w.vertices.push( new THREE.Vector3(-288.470581,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.105806, 0.297999, 0.948684));
P12w.vertices.push( new THREE.Vector3(-288.470581,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.105946, 0.293922, 0.949939));
P12w.vertices.push( new THREE.Vector3(-258.352936,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
P12w.vertices.push( new THREE.Vector3(-288.470581,611.764709, 0));P12w.normals.push(new THREE.Vector3(-0.105876, 0.295962, 0.949314));
P12w.vertices.push( new THREE.Vector3(-344.705872,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
P12w.vertices.push( new THREE.Vector3(-288.470581,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.105806, 0.297999, 0.948684));
P12w.vertices.push( new THREE.Vector3(-190.588230,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.vertices.push( new THREE.Vector3(-316.588226,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
P12w.vertices.push( new THREE.Vector3(-288.470581,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.105806, 0.297999, 0.948684));
P12w.vertices.push( new THREE.Vector3(-344.705872,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
P12w.vertices.push( new THREE.Vector3(-344.705872,633.529419, 0));P12w.normals.push(new THREE.Vector3(-0.052382, 0.315961, 0.947325));
P12w.vertices.push( new THREE.Vector3(-316.588226,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
P12w.vertices.push( new THREE.Vector3(-344.705872,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
P12w.vertices.push( new THREE.Vector3(-344.705872,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.052680, 0.299265, 0.952715));
P12w.vertices.push( new THREE.Vector3(-316.588226,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
P12w.vertices.push( new THREE.Vector3(-344.705872,633.529419, 0));P12w.normals.push(new THREE.Vector3(-0.052382, 0.315961, 0.947325));
P12w.vertices.push( new THREE.Vector3(-228.235291,611.764709, 0));P12w.normals.push(new THREE.Vector3(-0.161819, 0.293713, 0.942097));
P12w.vertices.push( new THREE.Vector3(-228.235291,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.161713, 0.295736, 0.941482));
P12w.vertices.push( new THREE.Vector3(-258.352936,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
P12w.vertices.push( new THREE.Vector3(-228.235291,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.161924, 0.291685, 0.942709));
P12w.vertices.push( new THREE.Vector3(-228.235291,611.764709, 0));P12w.normals.push(new THREE.Vector3(-0.161819, 0.293713, 0.942097));
P12w.vertices.push( new THREE.Vector3(-258.352936,609.411743, 0));P12w.normals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
P12w.vertices.push( new THREE.Vector3(-64.588234,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P12w.vertices.push( new THREE.Vector3(-36.470589,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
P12w.vertices.push( new THREE.Vector3(-92.705879,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.281330, 0.287577, 0.915507));
P12w.vertices.push( new THREE.Vector3(-36.470589,633.529419, 0));P12w.normals.push(new THREE.Vector3(-0.326013, 0.299109, 0.896799));
P12w.vertices.push( new THREE.Vector3(-36.470589,652.941162, 0));P12w.normals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
P12w.vertices.push( new THREE.Vector3(-64.588234,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P12w.vertices.push( new THREE.Vector3(-36.470589,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.327674, 0.283136, 0.901368));
P12w.vertices.push( new THREE.Vector3(-36.470589,633.529419, 0));P12w.normals.push(new THREE.Vector3(-0.326013, 0.299109, 0.896799));
P12w.vertices.push( new THREE.Vector3(-64.588234,614.117676, 0));P12w.normals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));

var P0w = new THREE.Geometry();
panelsGeom["P0w"] = P0w;
panelsGeom.P0w = P0w;
P0w.childPanels = new Array();

P0w.vertices = new Array();

P0w.normals = new Array();

P0w.vertices.push( new THREE.Vector3(-37.058825,612.941193, 0));P0w.normals.push(new THREE.Vector3(-0.327298, 0.282209, 0.901795));
P0w.vertices.push( new THREE.Vector3(-36.470589,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.327674, 0.283136, 0.901368));
P0w.vertices.push( new THREE.Vector3(-64.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P0w.vertices.push( new THREE.Vector3(-37.647060,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.326922, 0.281281, 0.902221));
P0w.vertices.push( new THREE.Vector3(-37.058825,612.941193, 0));P0w.normals.push(new THREE.Vector3(-0.327298, 0.282209, 0.901795));
P0w.vertices.push( new THREE.Vector3(-64.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P0w.vertices.push( new THREE.Vector3(-37.647060,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.326922, 0.281281, 0.902221));
P0w.vertices.push( new THREE.Vector3(-64.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P0w.vertices.push( new THREE.Vector3(-37.647060,478.235291, 0));P0w.normals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P0w.vertices.push( new THREE.Vector3(-64.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P0w.vertices.push( new THREE.Vector3(-92.705879,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.281676, 0.283618, 0.916635));
P0w.vertices.push( new THREE.Vector3(-37.647060,478.235291, 0));P0w.normals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P0w.vertices.push( new THREE.Vector3(-64.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P0w.vertices.push( new THREE.Vector3(-92.705879,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.281504, 0.285599, 0.916073));
P0w.vertices.push( new THREE.Vector3(-92.705879,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.281676, 0.283618, 0.916635));
P0w.vertices.push( new THREE.Vector3(-92.705879,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.281504, 0.285599, 0.916073));
P0w.vertices.push( new THREE.Vector3(-64.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P0w.vertices.push( new THREE.Vector3(-92.705879,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.281330, 0.287577, 0.915507));
P0w.vertices.push( new THREE.Vector3(-92.705879,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.281676, 0.283618, 0.916635));
P0w.vertices.push( new THREE.Vector3(-122.823528,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P0w.vertices.push( new THREE.Vector3(-37.647060,478.235291, 0));P0w.normals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P0w.vertices.push( new THREE.Vector3(-122.823528,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P0w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.vertices.push( new THREE.Vector3(-37.647060,478.235291, 0));P0w.normals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P0w.vertices.push( new THREE.Vector3(-152.941177,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.229708, 0.287682, 0.929771));
P0w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.vertices.push( new THREE.Vector3(-122.823528,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P0w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.vertices.push( new THREE.Vector3(-152.941177,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.229708, 0.287682, 0.929771));
P0w.vertices.push( new THREE.Vector3(-190.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P0w.vertices.push( new THREE.Vector3(-152.941177,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.229563, 0.289687, 0.929184));
P0w.vertices.push( new THREE.Vector3(-190.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P0w.vertices.push( new THREE.Vector3(-152.941177,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.229708, 0.287682, 0.929771));
P0w.vertices.push( new THREE.Vector3(-152.941177,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.229417, 0.291688, 0.928594));
P0w.vertices.push( new THREE.Vector3(-190.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P0w.vertices.push( new THREE.Vector3(-152.941177,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.229563, 0.289687, 0.929184));
P0w.vertices.push( new THREE.Vector3(-228.235291,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.161924, 0.291685, 0.942709));
P0w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.vertices.push( new THREE.Vector3(-190.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P0w.vertices.push( new THREE.Vector3(-228.235291,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.161924, 0.291685, 0.942709));
P0w.vertices.push( new THREE.Vector3(-343.529419,478.235291, 0));P0w.normals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P0w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.vertices.push( new THREE.Vector3(-228.235291,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.161924, 0.291685, 0.942709));
P0w.vertices.push( new THREE.Vector3(-258.352936,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
P0w.vertices.push( new THREE.Vector3(-343.529419,478.235291, 0));P0w.normals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P0w.vertices.push( new THREE.Vector3(-258.352936,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
P0w.vertices.push( new THREE.Vector3(-288.470581,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.105946, 0.293922, 0.949939));
P0w.vertices.push( new THREE.Vector3(-343.529419,478.235291, 0));P0w.normals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P0w.vertices.push( new THREE.Vector3(-316.588226,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
P0w.vertices.push( new THREE.Vector3(-343.529419,478.235291, 0));P0w.normals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P0w.vertices.push( new THREE.Vector3(-288.470581,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.105946, 0.293922, 0.949939));
P0w.vertices.push( new THREE.Vector3(-343.529419,478.235291, 0));P0w.normals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P0w.vertices.push( new THREE.Vector3(-316.588226,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
P0w.vertices.push( new THREE.Vector3(-343.529419,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.053833, 0.297204, 0.953295));
P0w.vertices.push( new THREE.Vector3(-343.529419,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.053833, 0.297204, 0.953295));
P0w.vertices.push( new THREE.Vector3(-316.588226,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
P0w.vertices.push( new THREE.Vector3(-344.117645,612.941193, 0));P0w.normals.push(new THREE.Vector3(-0.053256, 0.298235, 0.953006));
P0w.vertices.push( new THREE.Vector3(-344.117645,612.941193, 0));P0w.normals.push(new THREE.Vector3(-0.053256, 0.298235, 0.953006));
P0w.vertices.push( new THREE.Vector3(-316.588226,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
P0w.vertices.push( new THREE.Vector3(-344.705872,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.052680, 0.299265, 0.952715));
P0w.vertices.push( new THREE.Vector3(-316.588226,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
P0w.vertices.push( new THREE.Vector3(-288.470581,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.105946, 0.293922, 0.949939));
P0w.vertices.push( new THREE.Vector3(-288.470581,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.105876, 0.295962, 0.949314));
P0w.vertices.push( new THREE.Vector3(-288.470581,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.105806, 0.297999, 0.948684));
P0w.vertices.push( new THREE.Vector3(-316.588226,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
P0w.vertices.push( new THREE.Vector3(-288.470581,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.105876, 0.295962, 0.949314));
P0w.vertices.push( new THREE.Vector3(-343.529419,344.705872, 0));P0w.normals.push(new THREE.Vector3(-0.056325, 0.044590, 0.997416));
P0w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.vertices.push( new THREE.Vector3(-343.529419,478.235291, 0));P0w.normals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P0w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.vertices.push( new THREE.Vector3(-343.529419,344.705872, 0));P0w.normals.push(new THREE.Vector3(-0.056325, 0.044590, 0.997416));
P0w.vertices.push( new THREE.Vector3(-344.117645,343.529404, 0));P0w.normals.push(new THREE.Vector3(-0.055743, 0.043421, 0.997501));
P0w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.vertices.push( new THREE.Vector3(-344.117645,343.529404, 0));P0w.normals.push(new THREE.Vector3(-0.055743, 0.043421, 0.997501));
P0w.vertices.push( new THREE.Vector3(-344.705872,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
P0w.vertices.push( new THREE.Vector3(-228.235291,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.161819, 0.293713, 0.942097));
P0w.vertices.push( new THREE.Vector3(-228.235291,609.411743, 0));P0w.normals.push(new THREE.Vector3(-0.161924, 0.291685, 0.942709));
P0w.vertices.push( new THREE.Vector3(-190.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P0w.vertices.push( new THREE.Vector3(-228.235291,611.764709, 0));P0w.normals.push(new THREE.Vector3(-0.161819, 0.293713, 0.942097));
P0w.vertices.push( new THREE.Vector3(-190.588234,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P0w.vertices.push( new THREE.Vector3(-228.235291,614.117676, 0));P0w.normals.push(new THREE.Vector3(-0.161713, 0.295736, 0.941482));
P0w.vertices.push( new THREE.Vector3(-37.647060,344.705872, 0));P0w.normals.push(new THREE.Vector3(-0.340377, 0.041995, 0.939351));
P0w.vertices.push( new THREE.Vector3(-37.647060,478.235291, 0));P0w.normals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P0w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.vertices.push( new THREE.Vector3(-37.058825,343.529404, 0));P0w.normals.push(new THREE.Vector3(-0.340881, 0.040884, 0.939217));
P0w.vertices.push( new THREE.Vector3(-37.647060,344.705872, 0));P0w.normals.push(new THREE.Vector3(-0.340377, 0.041995, 0.939351));
P0w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.vertices.push( new THREE.Vector3(-36.470589,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
P0w.vertices.push( new THREE.Vector3(-37.058825,343.529404, 0));P0w.normals.push(new THREE.Vector3(-0.340881, 0.040884, 0.939217));
P0w.vertices.push( new THREE.Vector3(-190.588230,342.352936, 0));P0w.normals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));


face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.038794,-0.001513, 0.999246));
face.vertexNormals.push(new THREE.Vector3(-0.019979,-0.041275, 0.998948));
face.vertexNormals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.515966, 0.573592),
new THREE.Vector2( 0.542857, 0.630455),
new THREE.Vector2( 0.489076, 0.566387)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.038794,-0.001513, 0.999246));
face.vertexNormals.push(new THREE.Vector3(-0.019996,-0.006557, 0.999779));
face.vertexNormals.push(new THREE.Vector3(-0.019979,-0.041275, 0.998948));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.515966, 0.573592),
new THREE.Vector2( 0.542857, 0.580797),
new THREE.Vector2( 0.542857, 0.630455)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.019979,-0.041275, 0.998948));
face.vertexNormals.push(new THREE.Vector3(-0.029292,-0.085143, 0.995938));
face.vertexNormals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.542857, 0.630455),
new THREE.Vector2( 0.529412, 0.693557),
new THREE.Vector2( 0.489076, 0.566387)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.029292,-0.085143, 0.995938));
face.vertexNormals.push(new THREE.Vector3(-0.019979,-0.041275, 0.998948));
face.vertexNormals.push(new THREE.Vector3(-0.024618,-0.080498, 0.996451));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.529412, 0.693557),
new THREE.Vector2( 0.542857, 0.630455),
new THREE.Vector2( 0.536134, 0.686835)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.019938,-0.075844, 0.996920));
face.vertexNormals.push(new THREE.Vector3(-0.024618,-0.080498, 0.996451));
face.vertexNormals.push(new THREE.Vector3(-0.019979,-0.041275, 0.998948));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.542857, 0.680112),
new THREE.Vector2( 0.536134, 0.686835),
new THREE.Vector2( 0.542857, 0.630455)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
face.vertexNormals.push(new THREE.Vector3(-0.029292,-0.085143, 0.995938));
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.489076, 0.566387),
new THREE.Vector2( 0.529412, 0.693557),
new THREE.Vector2( 0.489076, 0.756303)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.029156,-0.128287, 0.991308));
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
face.vertexNormals.push(new THREE.Vector3(-0.029292,-0.085143, 0.995938));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.529412, 0.756303),
new THREE.Vector2( 0.489076, 0.756303),
new THREE.Vector2( 0.529412, 0.693557)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
face.vertexNormals.push(new THREE.Vector3(-0.029156,-0.128287, 0.991308));
face.vertexNormals.push(new THREE.Vector3(-0.028967,-0.170715, 0.984895));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.489076, 0.756303),
new THREE.Vector2( 0.529412, 0.756303),
new THREE.Vector2( 0.529412, 0.819048)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
face.vertexNormals.push(new THREE.Vector3(-0.028967,-0.170715, 0.984895));
face.vertexNormals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.489076, 0.756303),
new THREE.Vector2( 0.529412, 0.819048),
new THREE.Vector2( 0.489076, 0.946218)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.028967,-0.170715, 0.984895));
face.vertexNormals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
face.vertexNormals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.529412, 0.819048),
new THREE.Vector2( 0.542857, 0.882633),
new THREE.Vector2( 0.489076, 0.946218)
]);
face = new THREE.Face3( 30, 31, 32 );
face.vertexNormals.push(new THREE.Vector3(-0.028967,-0.170715, 0.984895));
face.vertexNormals.push(new THREE.Vector3(-0.024316,-0.175231, 0.984227));
face.vertexNormals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.529412, 0.819048),
new THREE.Vector2( 0.536134, 0.825770),
new THREE.Vector2( 0.542857, 0.882633)
]);
face = new THREE.Face3( 33, 34, 35 );
face.vertexNormals.push(new THREE.Vector3(-0.024316,-0.175231, 0.984227));
face.vertexNormals.push(new THREE.Vector3(-0.019670,-0.179733, 0.983519));
face.vertexNormals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.536134, 0.825770),
new THREE.Vector2( 0.542857, 0.832493),
new THREE.Vector2( 0.542857, 0.882633)
]);
face = new THREE.Face3( 36, 37, 38 );
face.vertexNormals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
face.vertexNormals.push(new THREE.Vector3(-0.042067,-0.253540, 0.966410));
face.vertexNormals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.542857, 0.882633),
new THREE.Vector2( 0.509244, 0.946218),
new THREE.Vector2( 0.489076, 0.946218)
]);
face = new THREE.Face3( 39, 40, 41 );
face.vertexNormals.push(new THREE.Vector3(-0.028437,-0.253662, 0.966875));
face.vertexNormals.push(new THREE.Vector3(-0.042067,-0.253540, 0.966410));
face.vertexNormals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.529412, 0.946218),
new THREE.Vector2( 0.509244, 0.946218),
new THREE.Vector2( 0.542857, 0.882633)
]);
face = new THREE.Face3( 42, 43, 44 );
face.vertexNormals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
face.vertexNormals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
face.vertexNormals.push(new THREE.Vector3(-0.028437,-0.253662, 0.966875));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.542857, 0.882633),
new THREE.Vector2( 0.534513, 0.945089),
new THREE.Vector2( 0.529412, 0.946218)
]);
face = new THREE.Face3( 45, 46, 47 );
face.vertexNormals.push(new THREE.Vector3(-0.019538,-0.212811, 0.976898));
face.vertexNormals.push(new THREE.Vector3(-0.019386,-0.245172, 0.969286));
face.vertexNormals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.542857, 0.882633),
new THREE.Vector2( 0.542857, 0.932773),
new THREE.Vector2( 0.534513, 0.945089)
]);
face = new THREE.Face3( 48, 49, 50 );
face.vertexNormals.push(new THREE.Vector3(-0.019535,-0.246281, 0.969002));
face.vertexNormals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
face.vertexNormals.push(new THREE.Vector3(-0.019386,-0.245172, 0.969286));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.542628, 0.934513),
new THREE.Vector2( 0.534513, 0.945089),
new THREE.Vector2( 0.542857, 0.932773)
]);
face = new THREE.Face3( 51, 52, 53 );
face.vertexNormals.push(new THREE.Vector3(-0.019535,-0.246281, 0.969002));
face.vertexNormals.push(new THREE.Vector3(-0.020135,-0.248418, 0.968444));
face.vertexNormals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.542628, 0.934513),
new THREE.Vector2( 0.541727, 0.937874),
new THREE.Vector2( 0.534513, 0.945089)
]);
face = new THREE.Face3( 54, 55, 56 );
face.vertexNormals.push(new THREE.Vector3(-0.019535,-0.246281, 0.969002));
face.vertexNormals.push(new THREE.Vector3(-0.019685,-0.247388, 0.968717));
face.vertexNormals.push(new THREE.Vector3(-0.020135,-0.248418, 0.968444));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.542628, 0.934513),
new THREE.Vector2( 0.542399, 0.936253),
new THREE.Vector2( 0.541727, 0.937874)
]);
face = new THREE.Face3( 57, 58, 59 );
face.vertexNormals.push(new THREE.Vector3(-0.020135,-0.248418, 0.968444));
face.vertexNormals.push(new THREE.Vector3(-0.021303,-0.250327, 0.967927));
face.vertexNormals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.541727, 0.937874),
new THREE.Vector2( 0.539987, 0.940888),
new THREE.Vector2( 0.534513, 0.945089)
]);
face = new THREE.Face3( 60, 61, 62 );
face.vertexNormals.push(new THREE.Vector3(-0.020135,-0.248418, 0.968444));
face.vertexNormals.push(new THREE.Vector3(-0.020584,-0.249446, 0.968170));
face.vertexNormals.push(new THREE.Vector3(-0.021303,-0.250327, 0.967927));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.541727, 0.937874),
new THREE.Vector2( 0.541056, 0.939496),
new THREE.Vector2( 0.539987, 0.940888)
]);
face = new THREE.Face3( 63, 64, 65 );
face.vertexNormals.push(new THREE.Vector3(-0.021303,-0.250327, 0.967927));
face.vertexNormals.push(new THREE.Vector3(-0.022960,-0.251879, 0.967486));
face.vertexNormals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.539987, 0.940888),
new THREE.Vector2( 0.537527, 0.943349),
new THREE.Vector2( 0.534513, 0.945089)
]);
face = new THREE.Face3( 66, 67, 68 );
face.vertexNormals.push(new THREE.Vector3(-0.021303,-0.250327, 0.967927));
face.vertexNormals.push(new THREE.Vector3(-0.022021,-0.251207, 0.967683));
face.vertexNormals.push(new THREE.Vector3(-0.022960,-0.251879, 0.967486));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.539987, 0.940888),
new THREE.Vector2( 0.538919, 0.942280),
new THREE.Vector2( 0.537527, 0.943349)
]);
face = new THREE.Face3( 69, 70, 71 );
face.vertexNormals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
face.vertexNormals.push(new THREE.Vector3(-0.022960,-0.251879, 0.967486));
face.vertexNormals.push(new THREE.Vector3(-0.023898,-0.252551, 0.967288));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.534513, 0.945089),
new THREE.Vector2( 0.537527, 0.943349),
new THREE.Vector2( 0.536134, 0.944417)
]);
face = new THREE.Face3( 72, 73, 74 );
face.vertexNormals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
face.vertexNormals.push(new THREE.Vector3(-0.027262,-0.253526, 0.966944));
face.vertexNormals.push(new THREE.Vector3(-0.028437,-0.253662, 0.966875));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.534513, 0.945089),
new THREE.Vector2( 0.531152, 0.945989),
new THREE.Vector2( 0.529412, 0.946218)
]);
face = new THREE.Face3( 75, 76, 77 );
face.vertexNormals.push(new THREE.Vector3(-0.027262,-0.253526, 0.966944));
face.vertexNormals.push(new THREE.Vector3(-0.024992,-0.252970, 0.967151));
face.vertexNormals.push(new THREE.Vector3(-0.026086,-0.253389, 0.967013));
P3w.faces.push( face );
P3w.faceVertexUvs[0].push([
new THREE.Vector2( 0.531152, 0.945989),
new THREE.Vector2( 0.534513, 0.945089),
new THREE.Vector2( 0.532892, 0.945760)
]);
P2w.childPanels.push(P3w);
P3w.parentPanel = P2w;
P3w.computeBoundingSphere();
P3w.normalsNeedUpdate = true;
P3w.computeFaceNormals();

var P3wMesh = new THREE.Mesh(P3w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P3w.mesh = P3wMesh;
P3wMesh.panel = P3w;
P3wMesh.castShadow = true;
P3wMesh.receiveShadow = true;
 scene.add(P3wMesh);objects.push(P3wMesh);


var P3wMesh2 = new THREE.Mesh(P3w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P3w.mesh2 = P3wMesh2;
P3wMesh2.panel = P3w;
P3wMesh2.castShadow = true;
P3wMesh.receiveShadow = true;
 scene.add(P3wMesh2);objects.push(P3wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.370442,-0.006091, 0.928836));
face.vertexNormals.push(new THREE.Vector3(-0.355217,-0.001416, 0.934783));
face.vertexNormals.push(new THREE.Vector3(-0.370176,-0.038350, 0.928170));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.001681, 0.580797),
new THREE.Vector2( 0.028571, 0.573592),
new THREE.Vector2( 0.001681, 0.630455)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
face.vertexNormals.push(new THREE.Vector3(-0.370176,-0.038350, 0.928170));
face.vertexNormals.push(new THREE.Vector3(-0.355217,-0.001416, 0.934783));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.566387),
new THREE.Vector2( 0.001681, 0.630455),
new THREE.Vector2( 0.028571, 0.573592)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
face.vertexNormals.push(new THREE.Vector3(-0.361723,-0.079412, 0.928897));
face.vertexNormals.push(new THREE.Vector3(-0.370176,-0.038350, 0.928170));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.566387),
new THREE.Vector2( 0.015126, 0.693557),
new THREE.Vector2( 0.001681, 0.630455)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.361723,-0.079412, 0.928897));
face.vertexNormals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.015126, 0.693557),
new THREE.Vector2( 0.055462, 0.566387),
new THREE.Vector2( 0.055462, 0.756303)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.360259,-0.119724, 0.925137));
face.vertexNormals.push(new THREE.Vector3(-0.361723,-0.079412, 0.928897));
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.015126, 0.756303),
new THREE.Vector2( 0.015126, 0.693557),
new THREE.Vector2( 0.055462, 0.756303)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.360259,-0.119724, 0.925137));
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
face.vertexNormals.push(new THREE.Vector3(-0.358227,-0.159452, 0.919918));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.015126, 0.756303),
new THREE.Vector2( 0.055462, 0.756303),
new THREE.Vector2( 0.015126, 0.819048)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
face.vertexNormals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
face.vertexNormals.push(new THREE.Vector3(-0.358227,-0.159452, 0.919918));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.756303),
new THREE.Vector2( 0.055462, 0.946218),
new THREE.Vector2( 0.015126, 0.819048)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.358227,-0.159452, 0.919918));
face.vertexNormals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
face.vertexNormals.push(new THREE.Vector3(-0.361739,-0.163413, 0.917846));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.015126, 0.819048),
new THREE.Vector2( 0.055462, 0.946218),
new THREE.Vector2( 0.008403, 0.825770)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.361739,-0.163413, 0.917846));
face.vertexNormals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
face.vertexNormals.push(new THREE.Vector3(-0.341222,-0.238535, 0.909213));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.008403, 0.825770),
new THREE.Vector2( 0.055462, 0.946218),
new THREE.Vector2( 0.035294, 0.946218)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.341222,-0.238535, 0.909213));
face.vertexNormals.push(new THREE.Vector3(-0.363090,-0.198325, 0.910403));
face.vertexNormals.push(new THREE.Vector3(-0.361739,-0.163413, 0.917846));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.035294, 0.946218),
new THREE.Vector2( 0.001681, 0.882633),
new THREE.Vector2( 0.008403, 0.825770)
]);
face = new THREE.Face3( 30, 31, 32 );
face.vertexNormals.push(new THREE.Vector3(-0.341222,-0.238535, 0.909213));
face.vertexNormals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
face.vertexNormals.push(new THREE.Vector3(-0.363090,-0.198325, 0.910403));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.035294, 0.946218),
new THREE.Vector2( 0.008403, 0.944417),
new THREE.Vector2( 0.001681, 0.882633)
]);
face = new THREE.Face3( 33, 34, 35 );
face.vertexNormals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
face.vertexNormals.push(new THREE.Vector3(-0.341222,-0.238535, 0.909213));
face.vertexNormals.push(new THREE.Vector3(-0.352489,-0.237477, 0.905183));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.008403, 0.944417),
new THREE.Vector2( 0.035294, 0.946218),
new THREE.Vector2( 0.015126, 0.946218)
]);
face = new THREE.Face3( 36, 37, 38 );
face.vertexNormals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
face.vertexNormals.push(new THREE.Vector3(-0.352489,-0.237477, 0.905183));
face.vertexNormals.push(new THREE.Vector3(-0.355375,-0.236531, 0.904302));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.008403, 0.944417),
new THREE.Vector2( 0.015126, 0.946218),
new THREE.Vector2( 0.010025, 0.945089)
]);
face = new THREE.Face3( 39, 40, 41 );
face.vertexNormals.push(new THREE.Vector3(-0.353466,-0.237248, 0.904862));
face.vertexNormals.push(new THREE.Vector3(-0.355375,-0.236531, 0.904302));
face.vertexNormals.push(new THREE.Vector3(-0.352489,-0.237477, 0.905183));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.013386, 0.945989),
new THREE.Vector2( 0.010025, 0.945089),
new THREE.Vector2( 0.015126, 0.946218)
]);
face = new THREE.Face3( 42, 43, 44 );
face.vertexNormals.push(new THREE.Vector3(-0.354442,-0.237019, 0.904540));
face.vertexNormals.push(new THREE.Vector3(-0.355375,-0.236531, 0.904302));
face.vertexNormals.push(new THREE.Vector3(-0.353466,-0.237248, 0.904862));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.011646, 0.945760),
new THREE.Vector2( 0.010025, 0.945089),
new THREE.Vector2( 0.013386, 0.945989)
]);
face = new THREE.Face3( 45, 46, 47 );
face.vertexNormals.push(new THREE.Vector3(-0.363090,-0.198325, 0.910403));
face.vertexNormals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
face.vertexNormals.push(new THREE.Vector3(-0.360629,-0.228717, 0.904232));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.001681, 0.882633),
new THREE.Vector2( 0.008403, 0.944417),
new THREE.Vector2( 0.001681, 0.932773)
]);
face = new THREE.Face3( 48, 49, 50 );
face.vertexNormals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
face.vertexNormals.push(new THREE.Vector3(-0.360412,-0.229773, 0.904051));
face.vertexNormals.push(new THREE.Vector3(-0.360629,-0.228717, 0.904232));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.008403, 0.944417),
new THREE.Vector2( 0.001910, 0.934513),
new THREE.Vector2( 0.001681, 0.932773)
]);
face = new THREE.Face3( 51, 52, 53 );
face.vertexNormals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
face.vertexNormals.push(new THREE.Vector3(-0.359739,-0.231834, 0.903793));
face.vertexNormals.push(new THREE.Vector3(-0.360412,-0.229773, 0.904051));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.008403, 0.944417),
new THREE.Vector2( 0.002810, 0.937874),
new THREE.Vector2( 0.001910, 0.934513)
]);
face = new THREE.Face3( 54, 55, 56 );
face.vertexNormals.push(new THREE.Vector3(-0.359739,-0.231834, 0.903793));
face.vertexNormals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
face.vertexNormals.push(new THREE.Vector3(-0.359283,-0.232840, 0.903715));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.002810, 0.937874),
new THREE.Vector2( 0.008403, 0.944417),
new THREE.Vector2( 0.003482, 0.939496)
]);
face = new THREE.Face3( 57, 58, 59 );
face.vertexNormals.push(new THREE.Vector3(-0.357133,-0.235331, 0.903922));
face.vertexNormals.push(new THREE.Vector3(-0.359283,-0.232840, 0.903715));
face.vertexNormals.push(new THREE.Vector3(-0.356307,-0.236043, 0.904062));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.007011, 0.943349),
new THREE.Vector2( 0.003482, 0.939496),
new THREE.Vector2( 0.008403, 0.944417)
]);
face = new THREE.Face3( 60, 61, 62 );
face.vertexNormals.push(new THREE.Vector3(-0.359283,-0.232840, 0.903715));
face.vertexNormals.push(new THREE.Vector3(-0.357133,-0.235331, 0.903922));
face.vertexNormals.push(new THREE.Vector3(-0.358621,-0.233729, 0.903749));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.003482, 0.939496),
new THREE.Vector2( 0.007011, 0.943349),
new THREE.Vector2( 0.004550, 0.940888)
]);
face = new THREE.Face3( 63, 64, 65 );
face.vertexNormals.push(new THREE.Vector3(-0.357958,-0.234618, 0.903781));
face.vertexNormals.push(new THREE.Vector3(-0.358621,-0.233729, 0.903749));
face.vertexNormals.push(new THREE.Vector3(-0.357133,-0.235331, 0.903922));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.005619, 0.942280),
new THREE.Vector2( 0.004550, 0.940888),
new THREE.Vector2( 0.007011, 0.943349)
]);
face = new THREE.Face3( 66, 67, 68 );
face.vertexNormals.push(new THREE.Vector3(-0.360412,-0.229773, 0.904051));
face.vertexNormals.push(new THREE.Vector3(-0.359739,-0.231834, 0.903793));
face.vertexNormals.push(new THREE.Vector3(-0.360194,-0.230827, 0.903869));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.001910, 0.934513),
new THREE.Vector2( 0.002810, 0.937874),
new THREE.Vector2( 0.002139, 0.936253)
]);
face = new THREE.Face3( 69, 70, 71 );
face.vertexNormals.push(new THREE.Vector3(-0.365224,-0.167350, 0.915754));
face.vertexNormals.push(new THREE.Vector3(-0.361739,-0.163413, 0.917846));
face.vertexNormals.push(new THREE.Vector3(-0.363090,-0.198325, 0.910403));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.001681, 0.832493),
new THREE.Vector2( 0.008403, 0.825770),
new THREE.Vector2( 0.001681, 0.882633)
]);
face = new THREE.Face3( 72, 73, 74 );
face.vertexNormals.push(new THREE.Vector3(-0.365637,-0.074946, 0.927735));
face.vertexNormals.push(new THREE.Vector3(-0.370176,-0.038350, 0.928170));
face.vertexNormals.push(new THREE.Vector3(-0.361723,-0.079412, 0.928897));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.008403, 0.686835),
new THREE.Vector2( 0.001681, 0.630455),
new THREE.Vector2( 0.015126, 0.693557)
]);
face = new THREE.Face3( 75, 76, 77 );
face.vertexNormals.push(new THREE.Vector3(-0.369527,-0.070490, 0.926543));
face.vertexNormals.push(new THREE.Vector3(-0.370176,-0.038350, 0.928170));
face.vertexNormals.push(new THREE.Vector3(-0.365637,-0.074946, 0.927735));
P4w.faces.push( face );
P4w.faceVertexUvs[0].push([
new THREE.Vector2( 0.001681, 0.680112),
new THREE.Vector2( 0.001681, 0.630455),
new THREE.Vector2( 0.008403, 0.686835)
]);
P2w.childPanels.push(P4w);
P4w.parentPanel = P2w;
P4w.computeBoundingSphere();
P4w.normalsNeedUpdate = true;
P4w.computeFaceNormals();

var P4wMesh = new THREE.Mesh(P4w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P4w.mesh = P4wMesh;
P4wMesh.panel = P4w;
P4wMesh.castShadow = true;
P4wMesh.receiveShadow = true;
 scene.add(P4wMesh);objects.push(P4wMesh);


var P4wMesh2 = new THREE.Mesh(P4w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P4w.mesh2 = P4wMesh2;
P4wMesh2.panel = P4w;
P4wMesh2.castShadow = true;
P4wMesh.receiveShadow = true;
 scene.add(P4wMesh2);objects.push(P4wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
face.vertexNormals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
face.vertexNormals.push(new THREE.Vector3(-0.284974,-0.275433, 0.918110));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.946218),
new THREE.Vector2( 0.157143, 0.946218),
new THREE.Vector2( 0.128011, 1.000000)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.284974,-0.275433, 0.918110));
face.vertexNormals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
face.vertexNormals.push(new THREE.Vector3(-0.249523,-0.278259, 0.927529));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.128011, 1.000000),
new THREE.Vector2( 0.157143, 0.946218),
new THREE.Vector2( 0.187115, 1.000000)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.249523,-0.278259, 0.927529));
face.vertexNormals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
face.vertexNormals.push(new THREE.Vector3(-0.245721,-0.274522, 0.929655));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.187115, 1.000000),
new THREE.Vector2( 0.157143, 0.946218),
new THREE.Vector2( 0.193838, 0.993277)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.245721,-0.274522, 0.929655));
face.vertexNormals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
face.vertexNormals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.193838, 0.993277),
new THREE.Vector2( 0.157143, 0.946218),
new THREE.Vector2( 0.200560, 0.986555)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
face.vertexNormals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
face.vertexNormals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.200560, 0.986555),
new THREE.Vector2( 0.157143, 0.946218),
new THREE.Vector2( 0.258824, 0.946218)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
face.vertexNormals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
face.vertexNormals.push(new THREE.Vector3(-0.206868,-0.249354, 0.946059));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.200560, 0.986555),
new THREE.Vector2( 0.258824, 0.946218),
new THREE.Vector2( 0.259053, 0.947958)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
face.vertexNormals.push(new THREE.Vector3(-0.206868,-0.249354, 0.946059));
face.vertexNormals.push(new THREE.Vector3(-0.206664,-0.250442, 0.945817));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.200560, 0.986555),
new THREE.Vector2( 0.259053, 0.947958),
new THREE.Vector2( 0.259282, 0.949698)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
face.vertexNormals.push(new THREE.Vector3(-0.206664,-0.250442, 0.945817));
face.vertexNormals.push(new THREE.Vector3(-0.206182,-0.251471, 0.945649));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.200560, 0.986555),
new THREE.Vector2( 0.259282, 0.949698),
new THREE.Vector2( 0.259953, 0.951320)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
face.vertexNormals.push(new THREE.Vector3(-0.206182,-0.251471, 0.945649));
face.vertexNormals.push(new THREE.Vector3(-0.205701,-0.252499, 0.945480));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.200560, 0.986555),
new THREE.Vector2( 0.259953, 0.951320),
new THREE.Vector2( 0.260625, 0.952941)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
face.vertexNormals.push(new THREE.Vector3(-0.205701,-0.252499, 0.945480));
face.vertexNormals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.200560, 0.986555),
new THREE.Vector2( 0.260625, 0.952941),
new THREE.Vector2( 0.261693, 0.954333)
]);
face = new THREE.Face3( 30, 31, 32 );
face.vertexNormals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
face.vertexNormals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
face.vertexNormals.push(new THREE.Vector3(-0.204251,-0.254297, 0.945312));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.200560, 0.986555),
new THREE.Vector2( 0.261693, 0.954333),
new THREE.Vector2( 0.262762, 0.955726)
]);
face = new THREE.Face3( 33, 34, 35 );
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
face.vertexNormals.push(new THREE.Vector3(-0.241892,-0.270759, 0.931761));
face.vertexNormals.push(new THREE.Vector3(-0.204251,-0.254297, 0.945312));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.986555),
new THREE.Vector2( 0.200560, 0.986555),
new THREE.Vector2( 0.262762, 0.955726)
]);
face = new THREE.Face3( 36, 37, 38 );
face.vertexNormals.push(new THREE.Vector3(-0.204251,-0.254297, 0.945312));
face.vertexNormals.push(new THREE.Vector3(-0.203331,-0.255005, 0.945319));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.262762, 0.955726),
new THREE.Vector2( 0.264154, 0.956794),
new THREE.Vector2( 0.272269, 0.986555)
]);
face = new THREE.Face3( 39, 40, 41 );
face.vertexNormals.push(new THREE.Vector3(-0.203331,-0.255005, 0.945319));
face.vertexNormals.push(new THREE.Vector3(-0.202411,-0.255714, 0.945325));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.264154, 0.956794),
new THREE.Vector2( 0.265546, 0.957863),
new THREE.Vector2( 0.272269, 0.986555)
]);
face = new THREE.Face3( 42, 43, 44 );
face.vertexNormals.push(new THREE.Vector3(-0.202411,-0.255714, 0.945325));
face.vertexNormals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.265546, 0.957863),
new THREE.Vector2( 0.267168, 0.958534),
new THREE.Vector2( 0.272269, 0.986555)
]);
face = new THREE.Face3( 45, 46, 47 );
face.vertexNormals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
face.vertexNormals.push(new THREE.Vector3(-0.200306,-0.256655, 0.945519));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.267168, 0.958534),
new THREE.Vector2( 0.268789, 0.959206),
new THREE.Vector2( 0.272269, 0.986555)
]);
face = new THREE.Face3( 48, 49, 50 );
face.vertexNormals.push(new THREE.Vector3(-0.200306,-0.256655, 0.945519));
face.vertexNormals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.268789, 0.959206),
new THREE.Vector2( 0.270529, 0.959435),
new THREE.Vector2( 0.272269, 0.986555)
]);
face = new THREE.Face3( 51, 52, 53 );
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
face.vertexNormals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
face.vertexNormals.push(new THREE.Vector3(-0.198078,-0.257057, 0.945879));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.986555),
new THREE.Vector2( 0.270529, 0.959435),
new THREE.Vector2( 0.272269, 0.959664)
]);
face = new THREE.Face3( 54, 55, 56 );
face.vertexNormals.push(new THREE.Vector3(-0.198078,-0.257057, 0.945879));
face.vertexNormals.push(new THREE.Vector3(-0.196979,-0.256973, 0.946131));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.959664),
new THREE.Vector2( 0.274009, 0.959435),
new THREE.Vector2( 0.272269, 0.986555)
]);
face = new THREE.Face3( 57, 58, 59 );
face.vertexNormals.push(new THREE.Vector3(-0.195878,-0.256890, 0.946382));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
face.vertexNormals.push(new THREE.Vector3(-0.196979,-0.256973, 0.946131));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.275749, 0.959206),
new THREE.Vector2( 0.272269, 0.986555),
new THREE.Vector2( 0.274009, 0.959435)
]);
face = new THREE.Face3( 60, 61, 62 );
face.vertexNormals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
face.vertexNormals.push(new THREE.Vector3(-0.195878,-0.256890, 0.946382));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.277370, 0.958534),
new THREE.Vector2( 0.272269, 0.986555),
new THREE.Vector2( 0.275749, 0.959206)
]);
face = new THREE.Face3( 63, 64, 65 );
face.vertexNormals.push(new THREE.Vector3(-0.193855,-0.256166, 0.946995));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
face.vertexNormals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.278992, 0.957863),
new THREE.Vector2( 0.272269, 0.986555),
new THREE.Vector2( 0.277370, 0.958534)
]);
face = new THREE.Face3( 66, 67, 68 );
face.vertexNormals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
face.vertexNormals.push(new THREE.Vector3(-0.193855,-0.256166, 0.946995));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.280384, 0.956794),
new THREE.Vector2( 0.272269, 0.986555),
new THREE.Vector2( 0.278992, 0.957863)
]);
face = new THREE.Face3( 69, 70, 71 );
face.vertexNormals.push(new THREE.Vector3(-0.192147,-0.254932, 0.947675));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
face.vertexNormals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.281776, 0.955726),
new THREE.Vector2( 0.272269, 0.986555),
new THREE.Vector2( 0.280384, 0.956794)
]);
face = new THREE.Face3( 72, 73, 74 );
face.vertexNormals.push(new THREE.Vector3(-0.192147,-0.254932, 0.947675));
face.vertexNormals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
face.vertexNormals.push(new THREE.Vector3(-0.197147,-0.273569, 0.941431));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.281776, 0.955726),
new THREE.Vector2( 0.343978, 0.986555),
new THREE.Vector2( 0.272269, 0.986555)
]);
face = new THREE.Face3( 75, 76, 77 );
face.vertexNormals.push(new THREE.Vector3(-0.192147,-0.254932, 0.947675));
face.vertexNormals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
face.vertexNormals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.281776, 0.955726),
new THREE.Vector2( 0.282845, 0.954333),
new THREE.Vector2( 0.343978, 0.986555)
]);
face = new THREE.Face3( 78, 79, 80 );
face.vertexNormals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
face.vertexNormals.push(new THREE.Vector3(-0.190871,-0.253273, 0.948378));
face.vertexNormals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.282845, 0.954333),
new THREE.Vector2( 0.283913, 0.952941),
new THREE.Vector2( 0.343978, 0.986555)
]);
face = new THREE.Face3( 81, 82, 83 );
face.vertexNormals.push(new THREE.Vector3(-0.190871,-0.253273, 0.948378));
face.vertexNormals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
face.vertexNormals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.283913, 0.952941),
new THREE.Vector2( 0.284585, 0.951320),
new THREE.Vector2( 0.343978, 0.986555)
]);
face = new THREE.Face3( 84, 85, 86 );
face.vertexNormals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
face.vertexNormals.push(new THREE.Vector3(-0.190115,-0.251299, 0.949055));
face.vertexNormals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.284585, 0.951320),
new THREE.Vector2( 0.285256, 0.949698),
new THREE.Vector2( 0.343978, 0.986555)
]);
face = new THREE.Face3( 87, 88, 89 );
face.vertexNormals.push(new THREE.Vector3(-0.190115,-0.251299, 0.949055));
face.vertexNormals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
face.vertexNormals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.285256, 0.949698),
new THREE.Vector2( 0.285485, 0.947958),
new THREE.Vector2( 0.343978, 0.986555)
]);
face = new THREE.Face3( 90, 91, 92 );
face.vertexNormals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
face.vertexNormals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
face.vertexNormals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.285485, 0.947958),
new THREE.Vector2( 0.285714, 0.946218),
new THREE.Vector2( 0.343978, 0.986555)
]);
face = new THREE.Face3( 93, 94, 95 );
face.vertexNormals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
face.vertexNormals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
face.vertexNormals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.343978, 0.986555),
new THREE.Vector2( 0.285714, 0.946218),
new THREE.Vector2( 0.387395, 0.946218)
]);
face = new THREE.Face3( 96, 97, 98 );
face.vertexNormals.push(new THREE.Vector3(-0.146583,-0.280146, 0.948700));
face.vertexNormals.push(new THREE.Vector3(-0.151135,-0.275840, 0.949247));
face.vertexNormals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.350700, 0.993277),
new THREE.Vector2( 0.343978, 0.986555),
new THREE.Vector2( 0.387395, 0.946218)
]);
face = new THREE.Face3( 99, 100, 101 );
face.vertexNormals.push(new THREE.Vector3(-0.142031,-0.284435, 0.948116));
face.vertexNormals.push(new THREE.Vector3(-0.146583,-0.280146, 0.948700));
face.vertexNormals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.357423, 1.000000),
new THREE.Vector2( 0.350700, 0.993277),
new THREE.Vector2( 0.387395, 0.946218)
]);
face = new THREE.Face3( 102, 103, 104 );
face.vertexNormals.push(new THREE.Vector3(-0.142031,-0.284435, 0.948116));
face.vertexNormals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
face.vertexNormals.push(new THREE.Vector3(-0.103303,-0.285811, 0.952702));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.357423, 1.000000),
new THREE.Vector2( 0.387395, 0.946218),
new THREE.Vector2( 0.416527, 1.000000)
]);
face = new THREE.Face3( 105, 106, 107 );
face.vertexNormals.push(new THREE.Vector3(-0.103303,-0.285811, 0.952702));
face.vertexNormals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
face.vertexNormals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.416527, 1.000000),
new THREE.Vector2( 0.387395, 0.946218),
new THREE.Vector2( 0.489076, 0.946218)
]);
face = new THREE.Face3( 108, 109, 110 );
face.vertexNormals.push(new THREE.Vector3(-0.103303,-0.285811, 0.952702));
face.vertexNormals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
face.vertexNormals.push(new THREE.Vector3(-0.055477,-0.266064, 0.962358));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.416527, 1.000000),
new THREE.Vector2( 0.489076, 0.946218),
new THREE.Vector2( 0.489076, 0.966387)
]);
face = new THREE.Face3( 111, 112, 113 );
face.vertexNormals.push(new THREE.Vector3(-0.103303,-0.285811, 0.952702));
face.vertexNormals.push(new THREE.Vector3(-0.055477,-0.266064, 0.962358));
face.vertexNormals.push(new THREE.Vector3(-0.064099,-0.286757, 0.955857));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.416527, 1.000000),
new THREE.Vector2( 0.489076, 0.966387),
new THREE.Vector2( 0.475630, 1.000000)
]);
face = new THREE.Face3( 114, 115, 116 );
face.vertexNormals.push(new THREE.Vector3(-0.055477,-0.266064, 0.962358));
face.vertexNormals.push(new THREE.Vector3(-0.059638,-0.285730, 0.956453));
face.vertexNormals.push(new THREE.Vector3(-0.064099,-0.286757, 0.955857));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.489076, 0.966387),
new THREE.Vector2( 0.482353, 0.998199),
new THREE.Vector2( 0.475630, 1.000000)
]);
face = new THREE.Face3( 117, 118, 119 );
face.vertexNormals.push(new THREE.Vector3(-0.055477,-0.266064, 0.962358));
face.vertexNormals.push(new THREE.Vector3(-0.056406,-0.282754, 0.957533));
face.vertexNormals.push(new THREE.Vector3(-0.059638,-0.285730, 0.956453));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.489076, 0.966387),
new THREE.Vector2( 0.487274, 0.993277),
new THREE.Vector2( 0.482353, 0.998199)
]);
face = new THREE.Face3( 120, 121, 122 );
face.vertexNormals.push(new THREE.Vector3(-0.055477,-0.266064, 0.962358));
face.vertexNormals.push(new THREE.Vector3(-0.055273,-0.278619, 0.958810));
face.vertexNormals.push(new THREE.Vector3(-0.056406,-0.282754, 0.957533));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.489076, 0.966387),
new THREE.Vector2( 0.489076, 0.986555),
new THREE.Vector2( 0.487274, 0.993277)
]);
face = new THREE.Face3( 123, 124, 125 );
face.vertexNormals.push(new THREE.Vector3(-0.055975,-0.281761, 0.957851));
face.vertexNormals.push(new THREE.Vector3(-0.056406,-0.282754, 0.957533));
face.vertexNormals.push(new THREE.Vector3(-0.055273,-0.278619, 0.958810));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.487946, 0.991656),
new THREE.Vector2( 0.487274, 0.993277),
new THREE.Vector2( 0.489076, 0.986555)
]);
face = new THREE.Face3( 126, 127, 128 );
face.vertexNormals.push(new THREE.Vector3(-0.055408,-0.279693, 0.958489));
face.vertexNormals.push(new THREE.Vector3(-0.055975,-0.281761, 0.957851));
face.vertexNormals.push(new THREE.Vector3(-0.055273,-0.278619, 0.958810));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.488847, 0.988295),
new THREE.Vector2( 0.487946, 0.991656),
new THREE.Vector2( 0.489076, 0.986555)
]);
face = new THREE.Face3( 129, 130, 131 );
face.vertexNormals.push(new THREE.Vector3(-0.055543,-0.280766, 0.958168));
face.vertexNormals.push(new THREE.Vector3(-0.055975,-0.281761, 0.957851));
face.vertexNormals.push(new THREE.Vector3(-0.055408,-0.279693, 0.958489));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.488618, 0.990035),
new THREE.Vector2( 0.487946, 0.991656),
new THREE.Vector2( 0.488847, 0.988295)
]);
face = new THREE.Face3( 132, 133, 134 );
face.vertexNormals.push(new THREE.Vector3(-0.058721,-0.285088, 0.956701));
face.vertexNormals.push(new THREE.Vector3(-0.059638,-0.285730, 0.956453));
face.vertexNormals.push(new THREE.Vector3(-0.056406,-0.282754, 0.957533));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.483745, 0.997130),
new THREE.Vector2( 0.482353, 0.998199),
new THREE.Vector2( 0.487274, 0.993277)
]);
face = new THREE.Face3( 135, 136, 137 );
face.vertexNormals.push(new THREE.Vector3(-0.058721,-0.285088, 0.956701));
face.vertexNormals.push(new THREE.Vector3(-0.056406,-0.282754, 0.957533));
face.vertexNormals.push(new THREE.Vector3(-0.057105,-0.283600, 0.957241));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.483745, 0.997130),
new THREE.Vector2( 0.487274, 0.993277),
new THREE.Vector2( 0.486206, 0.994670)
]);
face = new THREE.Face3( 138, 139, 140 );
face.vertexNormals.push(new THREE.Vector3(-0.058721,-0.285088, 0.956701));
face.vertexNormals.push(new THREE.Vector3(-0.057105,-0.283600, 0.957241));
face.vertexNormals.push(new THREE.Vector3(-0.057803,-0.284446, 0.956948));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.483745, 0.997130),
new THREE.Vector2( 0.486206, 0.994670),
new THREE.Vector2( 0.485138, 0.996062)
]);
face = new THREE.Face3( 141, 142, 143 );
face.vertexNormals.push(new THREE.Vector3(-0.064099,-0.286757, 0.955857));
face.vertexNormals.push(new THREE.Vector3(-0.059638,-0.285730, 0.956453));
face.vertexNormals.push(new THREE.Vector3(-0.060711,-0.286124, 0.956267));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.475630, 1.000000),
new THREE.Vector2( 0.482353, 0.998199),
new THREE.Vector2( 0.480732, 0.998870)
]);
face = new THREE.Face3( 144, 145, 146 );
face.vertexNormals.push(new THREE.Vector3(-0.064099,-0.286757, 0.955857));
face.vertexNormals.push(new THREE.Vector3(-0.060711,-0.286124, 0.956267));
face.vertexNormals.push(new THREE.Vector3(-0.062942,-0.286637, 0.955969));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.475630, 1.000000),
new THREE.Vector2( 0.480732, 0.998870),
new THREE.Vector2( 0.477370, 0.999771)
]);
face = new THREE.Face3( 147, 148, 149 );
face.vertexNormals.push(new THREE.Vector3(-0.062942,-0.286637, 0.955969));
face.vertexNormals.push(new THREE.Vector3(-0.060711,-0.286124, 0.956267));
face.vertexNormals.push(new THREE.Vector3(-0.061785,-0.286518, 0.956081));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.477370, 0.999771),
new THREE.Vector2( 0.480732, 0.998870),
new THREE.Vector2( 0.479110, 0.999542)
]);
face = new THREE.Face3( 150, 151, 152 );
face.vertexNormals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
face.vertexNormals.push(new THREE.Vector3(-0.284974,-0.275433, 0.918110));
face.vertexNormals.push(new THREE.Vector3(-0.328766,-0.251661, 0.910264));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.946218),
new THREE.Vector2( 0.128011, 1.000000),
new THREE.Vector2( 0.055462, 0.966387)
]);
face = new THREE.Face3( 153, 154, 155 );
face.vertexNormals.push(new THREE.Vector3(-0.328766,-0.251661, 0.910264));
face.vertexNormals.push(new THREE.Vector3(-0.284974,-0.275433, 0.918110));
face.vertexNormals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.966387),
new THREE.Vector2( 0.128011, 1.000000),
new THREE.Vector2( 0.068908, 1.000000)
]);
face = new THREE.Face3( 156, 157, 158 );
face.vertexNormals.push(new THREE.Vector3(-0.328766,-0.251661, 0.910264));
face.vertexNormals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
face.vertexNormals.push(new THREE.Vector3(-0.327681,-0.263639, 0.907260));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.966387),
new THREE.Vector2( 0.068908, 1.000000),
new THREE.Vector2( 0.055462, 0.986555)
]);
face = new THREE.Face3( 159, 160, 161 );
face.vertexNormals.push(new THREE.Vector3(-0.327681,-0.263639, 0.907260));
face.vertexNormals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
face.vertexNormals.push(new THREE.Vector3(-0.327455,-0.264679, 0.907038));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.986555),
new THREE.Vector2( 0.068908, 1.000000),
new THREE.Vector2( 0.055691, 0.988295)
]);
face = new THREE.Face3( 162, 163, 164 );
face.vertexNormals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
face.vertexNormals.push(new THREE.Vector3(-0.326759,-0.266712, 0.906693));
face.vertexNormals.push(new THREE.Vector3(-0.327455,-0.264679, 0.907038));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.068908, 1.000000),
new THREE.Vector2( 0.056592, 0.991656),
new THREE.Vector2( 0.055691, 0.988295)
]);
face = new THREE.Face3( 165, 166, 167 );
face.vertexNormals.push(new THREE.Vector3(-0.326759,-0.266712, 0.906693));
face.vertexNormals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
face.vertexNormals.push(new THREE.Vector3(-0.326289,-0.267705, 0.906570));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.056592, 0.991656),
new THREE.Vector2( 0.068908, 1.000000),
new THREE.Vector2( 0.057264, 0.993277)
]);
face = new THREE.Face3( 168, 169, 170 );
face.vertexNormals.push(new THREE.Vector3(-0.319293,-0.272307, 0.907690));
face.vertexNormals.push(new THREE.Vector3(-0.320298,-0.272076, 0.907405));
face.vertexNormals.push(new THREE.Vector3(-0.326289,-0.267705, 0.906570));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.068908, 1.000000),
new THREE.Vector2( 0.067168, 0.999771),
new THREE.Vector2( 0.057264, 0.993277)
]);
face = new THREE.Face3( 171, 172, 173 );
face.vertexNormals.push(new THREE.Vector3(-0.325606,-0.268584, 0.906556));
face.vertexNormals.push(new THREE.Vector3(-0.326289,-0.267705, 0.906570));
face.vertexNormals.push(new THREE.Vector3(-0.320298,-0.272076, 0.907405));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.058332, 0.994670),
new THREE.Vector2( 0.057264, 0.993277),
new THREE.Vector2( 0.067168, 0.999771)
]);
face = new THREE.Face3( 174, 175, 176 );
face.vertexNormals.push(new THREE.Vector3(-0.325606,-0.268584, 0.906556));
face.vertexNormals.push(new THREE.Vector3(-0.320298,-0.272076, 0.907405));
face.vertexNormals.push(new THREE.Vector3(-0.322262,-0.271360, 0.906924));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.058332, 0.994670),
new THREE.Vector2( 0.067168, 0.999771),
new THREE.Vector2( 0.063806, 0.998870)
]);
face = new THREE.Face3( 177, 178, 179 );
face.vertexNormals.push(new THREE.Vector3(-0.321302,-0.271845, 0.907119));
face.vertexNormals.push(new THREE.Vector3(-0.322262,-0.271360, 0.906924));
face.vertexNormals.push(new THREE.Vector3(-0.320298,-0.272076, 0.907405));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.065428, 0.999542),
new THREE.Vector2( 0.063806, 0.998870),
new THREE.Vector2( 0.067168, 0.999771)
]);
face = new THREE.Face3( 180, 181, 182 );
face.vertexNormals.push(new THREE.Vector3(-0.324072,-0.270169, 0.906634));
face.vertexNormals.push(new THREE.Vector3(-0.325606,-0.268584, 0.906556));
face.vertexNormals.push(new THREE.Vector3(-0.322262,-0.271360, 0.906924));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.060793, 0.997130),
new THREE.Vector2( 0.058332, 0.994670),
new THREE.Vector2( 0.063806, 0.998870)
]);
face = new THREE.Face3( 183, 184, 185 );
face.vertexNormals.push(new THREE.Vector3(-0.325606,-0.268584, 0.906556));
face.vertexNormals.push(new THREE.Vector3(-0.324072,-0.270169, 0.906634));
face.vertexNormals.push(new THREE.Vector3(-0.324922,-0.269463, 0.906540));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.058332, 0.994670),
new THREE.Vector2( 0.060793, 0.997130),
new THREE.Vector2( 0.059400, 0.996062)
]);
face = new THREE.Face3( 186, 187, 188 );
face.vertexNormals.push(new THREE.Vector3(-0.322262,-0.271360, 0.906924));
face.vertexNormals.push(new THREE.Vector3(-0.323222,-0.270875, 0.906727));
face.vertexNormals.push(new THREE.Vector3(-0.324072,-0.270169, 0.906634));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.063806, 0.998870),
new THREE.Vector2( 0.062185, 0.998199),
new THREE.Vector2( 0.060793, 0.997130)
]);
face = new THREE.Face3( 189, 190, 191 );
face.vertexNormals.push(new THREE.Vector3(-0.327455,-0.264679, 0.907038));
face.vertexNormals.push(new THREE.Vector3(-0.326759,-0.266712, 0.906693));
face.vertexNormals.push(new THREE.Vector3(-0.327230,-0.265719, 0.906815));
P5w.faces.push( face );
P5w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055691, 0.988295),
new THREE.Vector2( 0.056592, 0.991656),
new THREE.Vector2( 0.055920, 0.990035)
]);
P2w.childPanels.push(P5w);
P5w.parentPanel = P2w;
P5w.computeBoundingSphere();
P5w.normalsNeedUpdate = true;
P5w.computeFaceNormals();

var P5wMesh = new THREE.Mesh(P5w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P5w.mesh = P5wMesh;
P5wMesh.panel = P5w;
P5wMesh.castShadow = true;
P5wMesh.receiveShadow = true;
 scene.add(P5wMesh);objects.push(P5wMesh);


var P5wMesh2 = new THREE.Mesh(P5w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P5w.mesh2 = P5wMesh2;
P5wMesh2.panel = P5w;
P5wMesh2.castShadow = true;
P5wMesh.receiveShadow = true;
 scene.add(P5wMesh2);objects.push(P5wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
face.vertexNormals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.566387),
new THREE.Vector2( 0.093950, 0.566387),
new THREE.Vector2( 0.055462, 0.756303)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.293736, 0.003374, 0.955880));
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
face.vertexNormals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.566387),
new THREE.Vector2( 0.055462, 0.756303),
new THREE.Vector2( 0.093950, 0.566387)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
face.vertexNormals.push(new THREE.Vector3(-0.293736, 0.003374, 0.955880));
face.vertexNormals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.756303),
new THREE.Vector2( 0.132437, 0.566387),
new THREE.Vector2( 0.175462, 0.559664)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.293733, 0.005623, 0.955871));
face.vertexNormals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
face.vertexNormals.push(new THREE.Vector3(-0.293736, 0.003374, 0.955880));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.563025),
new THREE.Vector2( 0.175462, 0.559664),
new THREE.Vector2( 0.132437, 0.566387)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
face.vertexNormals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
face.vertexNormals.push(new THREE.Vector3(-0.293733, 0.005623, 0.955871));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.559664),
new THREE.Vector2( 0.175462, 0.559664),
new THREE.Vector2( 0.132437, 0.563025)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.239846, 0.003426, 0.970805));
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
face.vertexNormals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.566387),
new THREE.Vector2( 0.055462, 0.756303),
new THREE.Vector2( 0.175462, 0.559664)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
face.vertexNormals.push(new THREE.Vector3(-0.239846, 0.003426, 0.970805));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.566387),
new THREE.Vector2( 0.055462, 0.756303),
new THREE.Vector2( 0.218487, 0.566387)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
face.vertexNormals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
face.vertexNormals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.756303),
new THREE.Vector2( 0.272269, 0.566387),
new THREE.Vector2( 0.258824, 0.946218)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
face.vertexNormals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
face.vertexNormals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.258824, 0.946218),
new THREE.Vector2( 0.272269, 0.566387),
new THREE.Vector2( 0.285714, 0.946218)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
face.vertexNormals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.566387),
new THREE.Vector2( 0.489076, 0.756303),
new THREE.Vector2( 0.285714, 0.946218)
]);
face = new THREE.Face3( 30, 31, 32 );
face.vertexNormals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
face.vertexNormals.push(new THREE.Vector3(-0.169285, 0.003478, 0.985561));
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.566387),
new THREE.Vector2( 0.326050, 0.566387),
new THREE.Vector2( 0.489076, 0.756303)
]);
face = new THREE.Face3( 33, 34, 35 );
face.vertexNormals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
face.vertexNormals.push(new THREE.Vector3(-0.169285, 0.003478, 0.985561));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.369076, 0.559664),
new THREE.Vector2( 0.489076, 0.756303),
new THREE.Vector2( 0.326050, 0.566387)
]);
face = new THREE.Face3( 36, 37, 38 );
face.vertexNormals.push(new THREE.Vector3(-0.110841, 0.003508, 0.993832));
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
face.vertexNormals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.412101, 0.566387),
new THREE.Vector2( 0.489076, 0.756303),
new THREE.Vector2( 0.369076, 0.559664)
]);
face = new THREE.Face3( 39, 40, 41 );
face.vertexNormals.push(new THREE.Vector3(-0.110841, 0.003508, 0.993832));
face.vertexNormals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.412101, 0.566387),
new THREE.Vector2( 0.450588, 0.566387),
new THREE.Vector2( 0.489076, 0.756303)
]);
face = new THREE.Face3( 42, 43, 44 );
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
face.vertexNormals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
face.vertexNormals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.489076, 0.756303),
new THREE.Vector2( 0.450588, 0.566387),
new THREE.Vector2( 0.489076, 0.566387)
]);
face = new THREE.Face3( 45, 46, 47 );
face.vertexNormals.push(new THREE.Vector3(-0.110840, 0.005846, 0.993821));
face.vertexNormals.push(new THREE.Vector3(-0.110841, 0.003508, 0.993832));
face.vertexNormals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.412101, 0.563025),
new THREE.Vector2( 0.412101, 0.566387),
new THREE.Vector2( 0.369076, 0.559664)
]);
face = new THREE.Face3( 48, 49, 50 );
face.vertexNormals.push(new THREE.Vector3(-0.110840, 0.005846, 0.993821));
face.vertexNormals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
face.vertexNormals.push(new THREE.Vector3(-0.110838, 0.008184, 0.993805));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.412101, 0.563025),
new THREE.Vector2( 0.369076, 0.559664),
new THREE.Vector2( 0.412101, 0.559664)
]);
face = new THREE.Face3( 51, 52, 53 );
face.vertexNormals.push(new THREE.Vector3(-0.169283, 0.005797, 0.985550));
face.vertexNormals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
face.vertexNormals.push(new THREE.Vector3(-0.169285, 0.003478, 0.985561));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.563025),
new THREE.Vector2( 0.369076, 0.559664),
new THREE.Vector2( 0.326050, 0.566387)
]);
face = new THREE.Face3( 54, 55, 56 );
face.vertexNormals.push(new THREE.Vector3(-0.169280, 0.008116, 0.985535));
face.vertexNormals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
face.vertexNormals.push(new THREE.Vector3(-0.169283, 0.005797, 0.985550));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.559664),
new THREE.Vector2( 0.369076, 0.559664),
new THREE.Vector2( 0.326050, 0.563025)
]);
face = new THREE.Face3( 57, 58, 59 );
face.vertexNormals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
face.vertexNormals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.285714, 0.946218),
new THREE.Vector2( 0.489076, 0.756303),
new THREE.Vector2( 0.387395, 0.946218)
]);
face = new THREE.Face3( 60, 61, 62 );
face.vertexNormals.push(new THREE.Vector3(-0.055674,-0.253371, 0.965766));
face.vertexNormals.push(new THREE.Vector3(-0.123650,-0.251818, 0.959843));
face.vertexNormals.push(new THREE.Vector3(-0.057077,-0.128132, 0.990113));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.489076, 0.946218),
new THREE.Vector2( 0.387395, 0.946218),
new THREE.Vector2( 0.489076, 0.756303)
]);
face = new THREE.Face3( 63, 64, 65 );
face.vertexNormals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
face.vertexNormals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
face.vertexNormals.push(new THREE.Vector3(-0.206868,-0.249354, 0.946059));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.258824, 0.946218),
new THREE.Vector2( 0.285714, 0.946218),
new THREE.Vector2( 0.259053, 0.947958)
]);
face = new THREE.Face3( 66, 67, 68 );
face.vertexNormals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
face.vertexNormals.push(new THREE.Vector3(-0.206182,-0.251471, 0.945649));
face.vertexNormals.push(new THREE.Vector3(-0.206868,-0.249354, 0.946059));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.285714, 0.946218),
new THREE.Vector2( 0.259953, 0.951320),
new THREE.Vector2( 0.259053, 0.947958)
]);
face = new THREE.Face3( 69, 70, 71 );
face.vertexNormals.push(new THREE.Vector3(-0.206182,-0.251471, 0.945649));
face.vertexNormals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
face.vertexNormals.push(new THREE.Vector3(-0.205701,-0.252499, 0.945480));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.259953, 0.951320),
new THREE.Vector2( 0.285714, 0.946218),
new THREE.Vector2( 0.260625, 0.952941)
]);
face = new THREE.Face3( 72, 73, 74 );
face.vertexNormals.push(new THREE.Vector3(-0.189932,-0.249146, 0.949659));
face.vertexNormals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
face.vertexNormals.push(new THREE.Vector3(-0.205701,-0.252499, 0.945480));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.285714, 0.946218),
new THREE.Vector2( 0.285485, 0.947958),
new THREE.Vector2( 0.260625, 0.952941)
]);
face = new THREE.Face3( 75, 76, 77 );
face.vertexNormals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
face.vertexNormals.push(new THREE.Vector3(-0.205701,-0.252499, 0.945480));
face.vertexNormals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.261693, 0.954333),
new THREE.Vector2( 0.260625, 0.952941),
new THREE.Vector2( 0.285485, 0.947958)
]);
face = new THREE.Face3( 78, 79, 80 );
face.vertexNormals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
face.vertexNormals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
face.vertexNormals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.261693, 0.954333),
new THREE.Vector2( 0.285485, 0.947958),
new THREE.Vector2( 0.267168, 0.958534)
]);
face = new THREE.Face3( 81, 82, 83 );
face.vertexNormals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
face.vertexNormals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
face.vertexNormals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.267168, 0.958534),
new THREE.Vector2( 0.285485, 0.947958),
new THREE.Vector2( 0.270529, 0.959435)
]);
face = new THREE.Face3( 84, 85, 86 );
face.vertexNormals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
face.vertexNormals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
face.vertexNormals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.285485, 0.947958),
new THREE.Vector2( 0.284585, 0.951320),
new THREE.Vector2( 0.270529, 0.959435)
]);
face = new THREE.Face3( 87, 88, 89 );
face.vertexNormals.push(new THREE.Vector3(-0.190024,-0.250223, 0.949357));
face.vertexNormals.push(new THREE.Vector3(-0.190115,-0.251299, 0.949055));
face.vertexNormals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.285485, 0.947958),
new THREE.Vector2( 0.285256, 0.949698),
new THREE.Vector2( 0.284585, 0.951320)
]);
face = new THREE.Face3( 90, 91, 92 );
face.vertexNormals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
face.vertexNormals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
face.vertexNormals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.284585, 0.951320),
new THREE.Vector2( 0.282845, 0.954333),
new THREE.Vector2( 0.270529, 0.959435)
]);
face = new THREE.Face3( 93, 94, 95 );
face.vertexNormals.push(new THREE.Vector3(-0.190494,-0.252286, 0.948717));
face.vertexNormals.push(new THREE.Vector3(-0.190871,-0.253273, 0.948378));
face.vertexNormals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.284585, 0.951320),
new THREE.Vector2( 0.283913, 0.952941),
new THREE.Vector2( 0.282845, 0.954333)
]);
face = new THREE.Face3( 96, 97, 98 );
face.vertexNormals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
face.vertexNormals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
face.vertexNormals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.282845, 0.954333),
new THREE.Vector2( 0.280384, 0.956794),
new THREE.Vector2( 0.270529, 0.959435)
]);
face = new THREE.Face3( 99, 100, 101 );
face.vertexNormals.push(new THREE.Vector3(-0.191510,-0.254103, 0.948027));
face.vertexNormals.push(new THREE.Vector3(-0.192147,-0.254932, 0.947675));
face.vertexNormals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.282845, 0.954333),
new THREE.Vector2( 0.281776, 0.955726),
new THREE.Vector2( 0.280384, 0.956794)
]);
face = new THREE.Face3( 102, 103, 104 );
face.vertexNormals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
face.vertexNormals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
face.vertexNormals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.280384, 0.956794),
new THREE.Vector2( 0.277370, 0.958534),
new THREE.Vector2( 0.270529, 0.959435)
]);
face = new THREE.Face3( 105, 106, 107 );
face.vertexNormals.push(new THREE.Vector3(-0.193002,-0.255549, 0.947336));
face.vertexNormals.push(new THREE.Vector3(-0.193855,-0.256166, 0.946995));
face.vertexNormals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.280384, 0.956794),
new THREE.Vector2( 0.278992, 0.957863),
new THREE.Vector2( 0.277370, 0.958534)
]);
face = new THREE.Face3( 108, 109, 110 );
face.vertexNormals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
face.vertexNormals.push(new THREE.Vector3(-0.196979,-0.256973, 0.946131));
face.vertexNormals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.277370, 0.958534),
new THREE.Vector2( 0.274009, 0.959435),
new THREE.Vector2( 0.270529, 0.959435)
]);
face = new THREE.Face3( 111, 112, 113 );
face.vertexNormals.push(new THREE.Vector3(-0.194867,-0.256528, 0.946689));
face.vertexNormals.push(new THREE.Vector3(-0.195878,-0.256890, 0.946382));
face.vertexNormals.push(new THREE.Vector3(-0.196979,-0.256973, 0.946131));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.277370, 0.958534),
new THREE.Vector2( 0.275749, 0.959206),
new THREE.Vector2( 0.274009, 0.959435)
]);
face = new THREE.Face3( 114, 115, 116 );
face.vertexNormals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
face.vertexNormals.push(new THREE.Vector3(-0.196979,-0.256973, 0.946131));
face.vertexNormals.push(new THREE.Vector3(-0.198078,-0.257057, 0.945879));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.270529, 0.959435),
new THREE.Vector2( 0.274009, 0.959435),
new THREE.Vector2( 0.272269, 0.959664)
]);
face = new THREE.Face3( 117, 118, 119 );
face.vertexNormals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
face.vertexNormals.push(new THREE.Vector3(-0.199192,-0.256856, 0.945699));
face.vertexNormals.push(new THREE.Vector3(-0.200306,-0.256655, 0.945519));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.267168, 0.958534),
new THREE.Vector2( 0.270529, 0.959435),
new THREE.Vector2( 0.268789, 0.959206)
]);
face = new THREE.Face3( 120, 121, 122 );
face.vertexNormals.push(new THREE.Vector3(-0.203331,-0.255005, 0.945319));
face.vertexNormals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
face.vertexNormals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.264154, 0.956794),
new THREE.Vector2( 0.261693, 0.954333),
new THREE.Vector2( 0.267168, 0.958534)
]);
face = new THREE.Face3( 123, 124, 125 );
face.vertexNormals.push(new THREE.Vector3(-0.204976,-0.253398, 0.945396));
face.vertexNormals.push(new THREE.Vector3(-0.203331,-0.255005, 0.945319));
face.vertexNormals.push(new THREE.Vector3(-0.204251,-0.254297, 0.945312));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.261693, 0.954333),
new THREE.Vector2( 0.264154, 0.956794),
new THREE.Vector2( 0.262762, 0.955726)
]);
face = new THREE.Face3( 126, 127, 128 );
face.vertexNormals.push(new THREE.Vector3(-0.203331,-0.255005, 0.945319));
face.vertexNormals.push(new THREE.Vector3(-0.201359,-0.256185, 0.945423));
face.vertexNormals.push(new THREE.Vector3(-0.202411,-0.255714, 0.945325));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.264154, 0.956794),
new THREE.Vector2( 0.267168, 0.958534),
new THREE.Vector2( 0.265546, 0.957863)
]);
face = new THREE.Face3( 129, 130, 131 );
face.vertexNormals.push(new THREE.Vector3(-0.206868,-0.249354, 0.946059));
face.vertexNormals.push(new THREE.Vector3(-0.206182,-0.251471, 0.945649));
face.vertexNormals.push(new THREE.Vector3(-0.206664,-0.250442, 0.945817));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.259053, 0.947958),
new THREE.Vector2( 0.259953, 0.951320),
new THREE.Vector2( 0.259282, 0.949698)
]);
face = new THREE.Face3( 132, 133, 134 );
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
face.vertexNormals.push(new THREE.Vector3(-0.207073,-0.248265, 0.946301));
face.vertexNormals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.756303),
new THREE.Vector2( 0.258824, 0.946218),
new THREE.Vector2( 0.157143, 0.946218)
]);
face = new THREE.Face3( 135, 136, 137 );
face.vertexNormals.push(new THREE.Vector3(-0.329807,-0.239567, 0.913146));
face.vertexNormals.push(new THREE.Vector3(-0.337210,-0.120824, 0.933644));
face.vertexNormals.push(new THREE.Vector3(-0.270083,-0.244334, 0.931320));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.946218),
new THREE.Vector2( 0.055462, 0.756303),
new THREE.Vector2( 0.157143, 0.946218)
]);
face = new THREE.Face3( 138, 139, 140 );
face.vertexNormals.push(new THREE.Vector3(-0.239843, 0.005711, 0.970795));
face.vertexNormals.push(new THREE.Vector3(-0.239846, 0.003426, 0.970805));
face.vertexNormals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.563025),
new THREE.Vector2( 0.218487, 0.566387),
new THREE.Vector2( 0.175462, 0.559664)
]);
face = new THREE.Face3( 141, 142, 143 );
face.vertexNormals.push(new THREE.Vector3(-0.239843, 0.005711, 0.970795));
face.vertexNormals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
face.vertexNormals.push(new THREE.Vector3(-0.239840, 0.007995, 0.970780));
P2w.faces.push( face );
P2w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.563025),
new THREE.Vector2( 0.175462, 0.559664),
new THREE.Vector2( 0.218487, 0.559664)
]);
P1w.childPanels.push(P2w);
P2w.parentPanel = P1w;
P2w.computeBoundingSphere();
P2w.normalsNeedUpdate = true;
P2w.computeFaceNormals();

var P2wMesh = new THREE.Mesh(P2w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P2w.mesh = P2wMesh;
P2wMesh.panel = P2w;
P2wMesh.castShadow = true;
P2wMesh.receiveShadow = true;
 scene.add(P2wMesh);objects.push(P2wMesh);


var P2wMesh2 = new THREE.Mesh(P2w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P2w.mesh2 = P2wMesh2;
P2wMesh2.panel = P2w;
P2wMesh2.castShadow = true;
P2wMesh.receiveShadow = true;
 scene.add(P2wMesh2);objects.push(P2wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
face.vertexNormals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.175462, 0.559664),
new THREE.Vector2( 0.052101, 0.510924)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.239840, 0.007995, 0.970780));
face.vertexNormals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.559664),
new THREE.Vector2( 0.175462, 0.559664),
new THREE.Vector2( 0.272269, 0.510924)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.239840, 0.007995, 0.970780));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.559664),
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.272269, 0.566387)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.169280, 0.008116, 0.985535));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.566387),
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.326050, 0.559664)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.169280, 0.008116, 0.985535));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.559664),
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.369076, 0.559664)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
face.vertexNormals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.492437, 0.510924),
new THREE.Vector2( 0.369076, 0.559664)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.110838, 0.008184, 0.993805));
face.vertexNormals.push(new THREE.Vector3(-0.140242, 0.008154, 0.990084));
face.vertexNormals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.412101, 0.559664),
new THREE.Vector2( 0.369076, 0.559664),
new THREE.Vector2( 0.492437, 0.510924)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
face.vertexNormals.push(new THREE.Vector3(-0.110838, 0.008184, 0.993805));
face.vertexNormals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.450588, 0.566387),
new THREE.Vector2( 0.412101, 0.559664),
new THREE.Vector2( 0.492437, 0.510924)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.110840, 0.005846, 0.993821));
face.vertexNormals.push(new THREE.Vector3(-0.110838, 0.008184, 0.993805));
face.vertexNormals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.412101, 0.563025),
new THREE.Vector2( 0.412101, 0.559664),
new THREE.Vector2( 0.450588, 0.566387)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.110841, 0.003508, 0.993832));
face.vertexNormals.push(new THREE.Vector3(-0.110840, 0.005846, 0.993821));
face.vertexNormals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.412101, 0.566387),
new THREE.Vector2( 0.412101, 0.563025),
new THREE.Vector2( 0.450588, 0.566387)
]);
face = new THREE.Face3( 30, 31, 32 );
face.vertexNormals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
face.vertexNormals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
face.vertexNormals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.450588, 0.566387),
new THREE.Vector2( 0.492437, 0.510924),
new THREE.Vector2( 0.492437, 0.536975)
]);
face = new THREE.Face3( 33, 34, 35 );
face.vertexNormals.push(new THREE.Vector3(-0.084287, 0.003517, 0.996435));
face.vertexNormals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
face.vertexNormals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.450588, 0.566387),
new THREE.Vector2( 0.492437, 0.536975),
new THREE.Vector2( 0.489076, 0.566387)
]);
face = new THREE.Face3( 36, 37, 38 );
face.vertexNormals.push(new THREE.Vector3(-0.056380, 0.004698, 0.998398));
face.vertexNormals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
face.vertexNormals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.490756, 0.564706),
new THREE.Vector2( 0.489076, 0.566387),
new THREE.Vector2( 0.492437, 0.536975)
]);
face = new THREE.Face3( 39, 40, 41 );
face.vertexNormals.push(new THREE.Vector3(-0.055209, 0.005873, 0.998458));
face.vertexNormals.push(new THREE.Vector3(-0.056380, 0.004698, 0.998398));
face.vertexNormals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.492437, 0.563025),
new THREE.Vector2( 0.490756, 0.564706),
new THREE.Vector2( 0.492437, 0.536975)
]);
face = new THREE.Face3( 42, 43, 44 );
face.vertexNormals.push(new THREE.Vector3(-0.169283, 0.005797, 0.985550));
face.vertexNormals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
face.vertexNormals.push(new THREE.Vector3(-0.169280, 0.008116, 0.985535));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.563025),
new THREE.Vector2( 0.272269, 0.566387),
new THREE.Vector2( 0.326050, 0.559664)
]);
face = new THREE.Face3( 45, 46, 47 );
face.vertexNormals.push(new THREE.Vector3(-0.169285, 0.003478, 0.985561));
face.vertexNormals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
face.vertexNormals.push(new THREE.Vector3(-0.169283, 0.005797, 0.985550));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.566387),
new THREE.Vector2( 0.272269, 0.566387),
new THREE.Vector2( 0.326050, 0.563025)
]);
face = new THREE.Face3( 48, 49, 50 );
face.vertexNormals.push(new THREE.Vector3(-0.239843, 0.005711, 0.970795));
face.vertexNormals.push(new THREE.Vector3(-0.239840, 0.007995, 0.970780));
face.vertexNormals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.563025),
new THREE.Vector2( 0.218487, 0.559664),
new THREE.Vector2( 0.272269, 0.566387)
]);
face = new THREE.Face3( 51, 52, 53 );
face.vertexNormals.push(new THREE.Vector3(-0.239846, 0.003426, 0.970805));
face.vertexNormals.push(new THREE.Vector3(-0.239843, 0.005711, 0.970795));
face.vertexNormals.push(new THREE.Vector3(-0.204965, 0.003454, 0.978763));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.566387),
new THREE.Vector2( 0.218487, 0.563025),
new THREE.Vector2( 0.272269, 0.566387)
]);
face = new THREE.Face3( 54, 55, 56 );
face.vertexNormals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
face.vertexNormals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
face.vertexNormals.push(new THREE.Vector3(-0.267097, 0.007936, 0.963637));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.559664),
new THREE.Vector2( 0.052101, 0.510924),
new THREE.Vector2( 0.175462, 0.559664)
]);
face = new THREE.Face3( 57, 58, 59 );
face.vertexNormals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
face.vertexNormals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
face.vertexNormals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052101, 0.510924),
new THREE.Vector2( 0.132437, 0.559664),
new THREE.Vector2( 0.052101, 0.536975)
]);
face = new THREE.Face3( 60, 61, 62 );
face.vertexNormals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
face.vertexNormals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));
face.vertexNormals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.559664),
new THREE.Vector2( 0.053782, 0.564706),
new THREE.Vector2( 0.052101, 0.536975)
]);
face = new THREE.Face3( 63, 64, 65 );
face.vertexNormals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
face.vertexNormals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
face.vertexNormals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.559664),
new THREE.Vector2( 0.093950, 0.566387),
new THREE.Vector2( 0.053782, 0.564706)
]);
face = new THREE.Face3( 66, 67, 68 );
face.vertexNormals.push(new THREE.Vector3(-0.293733, 0.005623, 0.955871));
face.vertexNormals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
face.vertexNormals.push(new THREE.Vector3(-0.293729, 0.007872, 0.955856));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.563025),
new THREE.Vector2( 0.093950, 0.566387),
new THREE.Vector2( 0.132437, 0.559664)
]);
face = new THREE.Face3( 69, 70, 71 );
face.vertexNormals.push(new THREE.Vector3(-0.293736, 0.003374, 0.955880));
face.vertexNormals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
face.vertexNormals.push(new THREE.Vector3(-0.293733, 0.005623, 0.955871));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.566387),
new THREE.Vector2( 0.093950, 0.566387),
new THREE.Vector2( 0.132437, 0.563025)
]);
face = new THREE.Face3( 72, 73, 74 );
face.vertexNormals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
face.vertexNormals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));
face.vertexNormals.push(new THREE.Vector3(-0.316996, 0.003347, 0.948421));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.566387),
new THREE.Vector2( 0.053782, 0.564706),
new THREE.Vector2( 0.093950, 0.566387)
]);
face = new THREE.Face3( 75, 76, 77 );
face.vertexNormals.push(new THREE.Vector3(-0.341649, 0.005528, 0.939811));
face.vertexNormals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
face.vertexNormals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));
P1w.faces.push( face );
P1w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052101, 0.563025),
new THREE.Vector2( 0.052101, 0.536975),
new THREE.Vector2( 0.053782, 0.564706)
]);
P0w.childPanels.push(P1w);
P1w.parentPanel = P0w;
P1w.computeBoundingSphere();
P1w.normalsNeedUpdate = true;
P1w.computeFaceNormals();

var P1wMesh = new THREE.Mesh(P1w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P1w.mesh = P1wMesh;
P1wMesh.panel = P1w;
P1wMesh.castShadow = true;
P1wMesh.receiveShadow = true;
 scene.add(P1wMesh);objects.push(P1wMesh);


var P1wMesh2 = new THREE.Mesh(P1w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P1w.mesh2 = P1wMesh2;
P1wMesh2.panel = P1w;
P1wMesh2.castShadow = true;
P1wMesh.receiveShadow = true;
 scene.add(P1wMesh2);objects.push(P1wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.055712, 0.367044, 0.928534));
face.vertexNormals.push(new THREE.Vector3(-0.036627, 0.367368, 0.929354));
face.vertexNormals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.485714, 0.006723),
new THREE.Vector2( 0.515126, 0.006723),
new THREE.Vector2( 0.485714, 0.033613)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
face.vertexNormals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
face.vertexNormals.push(new THREE.Vector3(-0.036627, 0.367368, 0.929354));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.544538, 0.066387),
new THREE.Vector2( 0.485714, 0.033613),
new THREE.Vector2( 0.515126, 0.006723)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
face.vertexNormals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
face.vertexNormals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.485714, 0.033613),
new THREE.Vector2( 0.544538, 0.066387),
new THREE.Vector2( 0.492437, 0.067227)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
face.vertexNormals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
face.vertexNormals.push(new THREE.Vector3(-0.052382, 0.315961, 0.947325));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.492437, 0.067227),
new THREE.Vector2( 0.544538, 0.066387),
new THREE.Vector2( 0.492437, 0.094958)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.052382, 0.315961, 0.947325));
face.vertexNormals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
face.vertexNormals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.492437, 0.094958),
new THREE.Vector2( 0.544538, 0.066387),
new THREE.Vector2( 0.517647, 0.126050)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.017968, 0.297587, 0.954525));
face.vertexNormals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
face.vertexNormals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.544538, 0.126050),
new THREE.Vector2( 0.517647, 0.126050),
new THREE.Vector2( 0.544538, 0.066387)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.052680, 0.299265, 0.952715));
face.vertexNormals.push(new THREE.Vector3(-0.052382, 0.315961, 0.947325));
face.vertexNormals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.492437, 0.122689),
new THREE.Vector2( 0.492437, 0.094958),
new THREE.Vector2( 0.517647, 0.126050)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.053256, 0.298235, 0.953006));
face.vertexNormals.push(new THREE.Vector3(-0.052680, 0.299265, 0.952715));
face.vertexNormals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.491597, 0.124370),
new THREE.Vector2( 0.492437, 0.122689),
new THREE.Vector2( 0.517647, 0.126050)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.053833, 0.297204, 0.953295));
face.vertexNormals.push(new THREE.Vector3(-0.053256, 0.298235, 0.953006));
face.vertexNormals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.490756, 0.126050),
new THREE.Vector2( 0.491597, 0.124370),
new THREE.Vector2( 0.517647, 0.126050)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.054240, 0.334298, 0.940905));
face.vertexNormals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
face.vertexNormals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.489076, 0.063866),
new THREE.Vector2( 0.485714, 0.033613),
new THREE.Vector2( 0.492437, 0.067227)
]);
face = new THREE.Face3( 30, 31, 32 );
face.vertexNormals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
face.vertexNormals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
face.vertexNormals.push(new THREE.Vector3(-0.054240, 0.334298, 0.940905));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.485714, 0.060504),
new THREE.Vector2( 0.485714, 0.033613),
new THREE.Vector2( 0.489076, 0.063866)
]);
face = new THREE.Face3( 33, 34, 35 );
face.vertexNormals.push(new THREE.Vector3(-0.017744, 0.333261, 0.942668));
face.vertexNormals.push(new THREE.Vector3(-0.036627, 0.367368, 0.929354));
face.vertexNormals.push(new THREE.Vector3(-0.017503, 0.367559, 0.929836));
P7w.faces.push( face );
P7w.faceVertexUvs[0].push([
new THREE.Vector2( 0.544538, 0.066387),
new THREE.Vector2( 0.515126, 0.006723),
new THREE.Vector2( 0.544538, 0.006723)
]);
P6w.childPanels.push(P7w);
P7w.parentPanel = P6w;
P7w.computeBoundingSphere();
P7w.normalsNeedUpdate = true;
P7w.computeFaceNormals();

var P7wMesh = new THREE.Mesh(P7w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P7w.mesh = P7wMesh;
P7wMesh.panel = P7w;
P7wMesh.castShadow = true;
P7wMesh.receiveShadow = true;
 scene.add(P7wMesh);objects.push(P7wMesh);


var P7wMesh2 = new THREE.Mesh(P7w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P7w.mesh2 = P7wMesh2;
P7wMesh2.panel = P7w;
P7wMesh2.castShadow = true;
P7wMesh.receiveShadow = true;
 scene.add(P7wMesh2);objects.push(P7wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.057551, 0.003524, 0.998336));
face.vertexNormals.push(new THREE.Vector3(-0.056380, 0.004698, 0.998398));
face.vertexNormals.push(new THREE.Vector3(-0.038207,-0.001671, 0.999268));
P8w.faces.push( face );
P8w.faceVertexUvs[0].push([
new THREE.Vector2( 0.489076, 0.566387),
new THREE.Vector2( 0.490756, 0.564706),
new THREE.Vector2( 0.516807, 0.573817)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.056380, 0.004698, 0.998398));
face.vertexNormals.push(new THREE.Vector3(-0.055209, 0.005873, 0.998458));
face.vertexNormals.push(new THREE.Vector3(-0.038207,-0.001671, 0.999268));
P8w.faces.push( face );
P8w.faceVertexUvs[0].push([
new THREE.Vector2( 0.490756, 0.564706),
new THREE.Vector2( 0.492437, 0.563025),
new THREE.Vector2( 0.516807, 0.573817)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.055209, 0.005873, 0.998458));
face.vertexNormals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
face.vertexNormals.push(new THREE.Vector3(-0.038207,-0.001671, 0.999268));
P8w.faces.push( face );
P8w.faceVertexUvs[0].push([
new THREE.Vector2( 0.492437, 0.563025),
new THREE.Vector2( 0.492437, 0.536975),
new THREE.Vector2( 0.516807, 0.573817)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.038207,-0.001671, 0.999268));
face.vertexNormals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
face.vertexNormals.push(new THREE.Vector3(-0.018817, 0.018910, 0.999644));
P8w.faces.push( face );
P8w.faceVertexUvs[0].push([
new THREE.Vector2( 0.516807, 0.573817),
new THREE.Vector2( 0.492437, 0.536975),
new THREE.Vector2( 0.544538, 0.544405)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
face.vertexNormals.push(new THREE.Vector3(-0.018817, 0.018910, 0.999644));
face.vertexNormals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P8w.faces.push( face );
P8w.faceVertexUvs[0].push([
new THREE.Vector2( 0.517647, 0.507563),
new THREE.Vector2( 0.544538, 0.544405),
new THREE.Vector2( 0.492437, 0.536975)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.018817, 0.018910, 0.999644));
face.vertexNormals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
face.vertexNormals.push(new THREE.Vector3(-0.018801, 0.044653, 0.998826));
P8w.faces.push( face );
P8w.faceVertexUvs[0].push([
new THREE.Vector2( 0.544538, 0.544405),
new THREE.Vector2( 0.517647, 0.507563),
new THREE.Vector2( 0.544538, 0.507563)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
face.vertexNormals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
face.vertexNormals.push(new THREE.Vector3(-0.055194, 0.024074, 0.998185));
P8w.faces.push( face );
P8w.faceVertexUvs[0].push([
new THREE.Vector2( 0.492437, 0.510924),
new THREE.Vector2( 0.517647, 0.507563),
new THREE.Vector2( 0.492437, 0.536975)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
face.vertexNormals.push(new THREE.Vector3(-0.055743, 0.043421, 0.997501));
face.vertexNormals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
P8w.faces.push( face );
P8w.faceVertexUvs[0].push([
new THREE.Vector2( 0.492437, 0.510924),
new THREE.Vector2( 0.491597, 0.509244),
new THREE.Vector2( 0.517647, 0.507563)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.055743, 0.043421, 0.997501));
face.vertexNormals.push(new THREE.Vector3(-0.056325, 0.044590, 0.997416));
face.vertexNormals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
P8w.faces.push( face );
P8w.faceVertexUvs[0].push([
new THREE.Vector2( 0.491597, 0.509244),
new THREE.Vector2( 0.490756, 0.507563),
new THREE.Vector2( 0.517647, 0.507563)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.018820,-0.006872, 0.999799));
face.vertexNormals.push(new THREE.Vector3(-0.038207,-0.001671, 0.999268));
face.vertexNormals.push(new THREE.Vector3(-0.018817, 0.018910, 0.999644));
P8w.faces.push( face );
P8w.faceVertexUvs[0].push([
new THREE.Vector2( 0.544538, 0.581248),
new THREE.Vector2( 0.516807, 0.573817),
new THREE.Vector2( 0.544538, 0.544405)
]);
P6w.childPanels.push(P8w);
P8w.parentPanel = P6w;
P8w.computeBoundingSphere();
P8w.normalsNeedUpdate = true;
P8w.computeFaceNormals();

var P8wMesh = new THREE.Mesh(P8w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P8w.mesh = P8wMesh;
P8wMesh.panel = P8w;
P8wMesh.castShadow = true;
P8wMesh.receiveShadow = true;
 scene.add(P8wMesh);objects.push(P8wMesh);


var P8wMesh2 = new THREE.Mesh(P8w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P8w.mesh2 = P8wMesh2;
P8wMesh2.panel = P8w;
P8wMesh2.castShadow = true;
P8wMesh.receiveShadow = true;
 scene.add(P8wMesh2);objects.push(P8wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.053833, 0.297204, 0.953295));
face.vertexNormals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
face.vertexNormals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P6w.faces.push( face );
P6w.faceVertexUvs[0].push([
new THREE.Vector2( 0.490756, 0.126050),
new THREE.Vector2( 0.517647, 0.126050),
new THREE.Vector2( 0.490756, 0.316807)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
face.vertexNormals.push(new THREE.Vector3(-0.018528, 0.175440, 0.984316));
face.vertexNormals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P6w.faces.push( face );
P6w.faceVertexUvs[0].push([
new THREE.Vector2( 0.517647, 0.126050),
new THREE.Vector2( 0.544538, 0.316807),
new THREE.Vector2( 0.490756, 0.316807)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.018528, 0.175440, 0.984316));
face.vertexNormals.push(new THREE.Vector3(-0.035918, 0.297443, 0.954064));
face.vertexNormals.push(new THREE.Vector3(-0.017968, 0.297587, 0.954525));
P6w.faces.push( face );
P6w.faceVertexUvs[0].push([
new THREE.Vector2( 0.544538, 0.316807),
new THREE.Vector2( 0.517647, 0.126050),
new THREE.Vector2( 0.544538, 0.126050)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
face.vertexNormals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
face.vertexNormals.push(new THREE.Vector3(-0.018528, 0.175440, 0.984316));
P6w.faces.push( face );
P6w.faceVertexUvs[0].push([
new THREE.Vector2( 0.517647, 0.507563),
new THREE.Vector2( 0.490756, 0.316807),
new THREE.Vector2( 0.544538, 0.316807)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.056325, 0.044590, 0.997416));
face.vertexNormals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
face.vertexNormals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
P6w.faces.push( face );
P6w.faceVertexUvs[0].push([
new THREE.Vector2( 0.490756, 0.507563),
new THREE.Vector2( 0.490756, 0.316807),
new THREE.Vector2( 0.517647, 0.507563)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.018801, 0.044653, 0.998826));
face.vertexNormals.push(new THREE.Vector3(-0.037583, 0.044630, 0.998296));
face.vertexNormals.push(new THREE.Vector3(-0.018528, 0.175440, 0.984316));
P6w.faces.push( face );
P6w.faceVertexUvs[0].push([
new THREE.Vector2( 0.544538, 0.507563),
new THREE.Vector2( 0.517647, 0.507563),
new THREE.Vector2( 0.544538, 0.316807)
]);
P0w.childPanels.push(P6w);
P6w.parentPanel = P0w;
P6w.computeBoundingSphere();
P6w.normalsNeedUpdate = true;
P6w.computeFaceNormals();

var P6wMesh = new THREE.Mesh(P6w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P6w.mesh = P6wMesh;
P6wMesh.panel = P6w;
P6wMesh.castShadow = true;
P6wMesh.receiveShadow = true;
 scene.add(P6wMesh);objects.push(P6wMesh);


var P6wMesh2 = new THREE.Mesh(P6w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P6w.mesh2 = P6wMesh2;
P6wMesh2.panel = P6w;
P6wMesh2.castShadow = true;
P6wMesh.receiveShadow = true;
 scene.add(P6wMesh2);objects.push(P6wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
face.vertexNormals.push(new THREE.Vector3(-0.348650, 0.344548, 0.871625));
face.vertexNormals.push(new THREE.Vector3(-0.332739, 0.346668, 0.876987));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.000000, 0.066387),
new THREE.Vector2( 0.000000, 0.006723),
new THREE.Vector2( 0.029412, 0.006723)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.332739, 0.346668, 0.876987));
face.vertexNormals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
face.vertexNormals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.029412, 0.006723),
new THREE.Vector2( 0.058824, 0.033613),
new THREE.Vector2( 0.000000, 0.066387)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
face.vertexNormals.push(new THREE.Vector3(-0.332739, 0.346668, 0.876987));
face.vertexNormals.push(new THREE.Vector3(-0.316539, 0.348712, 0.882158));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.058824, 0.033613),
new THREE.Vector2( 0.029412, 0.006723),
new THREE.Vector2( 0.058824, 0.006723)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
face.vertexNormals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
face.vertexNormals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.058824, 0.033613),
new THREE.Vector2( 0.052101, 0.067227),
new THREE.Vector2( 0.000000, 0.066387)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
face.vertexNormals.push(new THREE.Vector3(-0.322186, 0.316939, 0.892046));
face.vertexNormals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.058824, 0.033613),
new THREE.Vector2( 0.055462, 0.063866),
new THREE.Vector2( 0.052101, 0.067227)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
face.vertexNormals.push(new THREE.Vector3(-0.322186, 0.316939, 0.892046));
face.vertexNormals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.058824, 0.060504),
new THREE.Vector2( 0.055462, 0.063866),
new THREE.Vector2( 0.058824, 0.033613)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
face.vertexNormals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
face.vertexNormals.push(new THREE.Vector3(-0.326013, 0.299109, 0.896799));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.000000, 0.066387),
new THREE.Vector2( 0.052101, 0.067227),
new THREE.Vector2( 0.052101, 0.094958)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
face.vertexNormals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
face.vertexNormals.push(new THREE.Vector3(-0.326013, 0.299109, 0.896799));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.026891, 0.126050),
new THREE.Vector2( 0.000000, 0.066387),
new THREE.Vector2( 0.052101, 0.094958)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.356745, 0.278052, 0.891863));
face.vertexNormals.push(new THREE.Vector3(-0.352867, 0.311872, 0.882168));
face.vertexNormals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.000000, 0.126050),
new THREE.Vector2( 0.000000, 0.066387),
new THREE.Vector2( 0.026891, 0.126050)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.327674, 0.283136, 0.901368));
face.vertexNormals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
face.vertexNormals.push(new THREE.Vector3(-0.326013, 0.299109, 0.896799));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052101, 0.122689),
new THREE.Vector2( 0.026891, 0.126050),
new THREE.Vector2( 0.052101, 0.094958)
]);
face = new THREE.Face3( 30, 31, 32 );
face.vertexNormals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
face.vertexNormals.push(new THREE.Vector3(-0.327674, 0.283136, 0.901368));
face.vertexNormals.push(new THREE.Vector3(-0.327298, 0.282209, 0.901795));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.026891, 0.126050),
new THREE.Vector2( 0.052101, 0.122689),
new THREE.Vector2( 0.052941, 0.124370)
]);
face = new THREE.Face3( 33, 34, 35 );
face.vertexNormals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
face.vertexNormals.push(new THREE.Vector3(-0.327298, 0.282209, 0.901795));
face.vertexNormals.push(new THREE.Vector3(-0.326922, 0.281281, 0.902221));
P10w.faces.push( face );
P10w.faceVertexUvs[0].push([
new THREE.Vector2( 0.026891, 0.126050),
new THREE.Vector2( 0.052941, 0.124370),
new THREE.Vector2( 0.053782, 0.126050)
]);
P9w.childPanels.push(P10w);
P10w.parentPanel = P9w;
P10w.computeBoundingSphere();
P10w.normalsNeedUpdate = true;
P10w.computeFaceNormals();

var P10wMesh = new THREE.Mesh(P10w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P10w.mesh = P10wMesh;
P10wMesh.panel = P10w;
P10wMesh.castShadow = true;
P10wMesh.receiveShadow = true;
 scene.add(P10wMesh);objects.push(P10wMesh);


var P10wMesh2 = new THREE.Mesh(P10w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P10w.mesh2 = P10wMesh2;
P10wMesh2.panel = P10w;
P10wMesh2.castShadow = true;
P10wMesh.receiveShadow = true;
 scene.add(P10wMesh2);objects.push(P10wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.371071, 0.041473, 0.927678));
face.vertexNormals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
face.vertexNormals.push(new THREE.Vector3(-0.371333, 0.017561, 0.928334));
P11w.faces.push( face );
P11w.faceVertexUvs[0].push([
new THREE.Vector2( 0.000000, 0.507563),
new THREE.Vector2( 0.026891, 0.507563),
new THREE.Vector2( 0.000000, 0.544405)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
face.vertexNormals.push(new THREE.Vector3(-0.371333, 0.017561, 0.928334));
face.vertexNormals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
P11w.faces.push( face );
P11w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052101, 0.536975),
new THREE.Vector2( 0.000000, 0.544405),
new THREE.Vector2( 0.026891, 0.507563)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.355698,-0.001563, 0.934600));
face.vertexNormals.push(new THREE.Vector3(-0.371333, 0.017561, 0.928334));
face.vertexNormals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P11w.faces.push( face );
P11w.faceVertexUvs[0].push([
new THREE.Vector2( 0.027731, 0.573817),
new THREE.Vector2( 0.000000, 0.544405),
new THREE.Vector2( 0.052101, 0.536975)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.371383,-0.006382, 0.928458));
face.vertexNormals.push(new THREE.Vector3(-0.371333, 0.017561, 0.928334));
face.vertexNormals.push(new THREE.Vector3(-0.355698,-0.001563, 0.934600));
P11w.faces.push( face );
P11w.faceVertexUvs[0].push([
new THREE.Vector2( 0.000000, 0.581248),
new THREE.Vector2( 0.000000, 0.544405),
new THREE.Vector2( 0.027731, 0.573817)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.341649, 0.005528, 0.939811));
face.vertexNormals.push(new THREE.Vector3(-0.355698,-0.001563, 0.934600));
face.vertexNormals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P11w.faces.push( face );
P11w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052101, 0.563025),
new THREE.Vector2( 0.027731, 0.573817),
new THREE.Vector2( 0.052101, 0.536975)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.355698,-0.001563, 0.934600));
face.vertexNormals.push(new THREE.Vector3(-0.341649, 0.005528, 0.939811));
face.vertexNormals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));
P11w.faces.push( face );
P11w.faceVertexUvs[0].push([
new THREE.Vector2( 0.027731, 0.573817),
new THREE.Vector2( 0.052101, 0.563025),
new THREE.Vector2( 0.053782, 0.564706)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.355698,-0.001563, 0.934600));
face.vertexNormals.push(new THREE.Vector3(-0.340674, 0.004424, 0.940171));
face.vertexNormals.push(new THREE.Vector3(-0.339697, 0.003320, 0.940529));
P11w.faces.push( face );
P11w.faceVertexUvs[0].push([
new THREE.Vector2( 0.027731, 0.573817),
new THREE.Vector2( 0.053782, 0.564706),
new THREE.Vector2( 0.055462, 0.566387)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
face.vertexNormals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
face.vertexNormals.push(new THREE.Vector3(-0.341567, 0.022661, 0.939584));
P11w.faces.push( face );
P11w.faceVertexUvs[0].push([
new THREE.Vector2( 0.026891, 0.507563),
new THREE.Vector2( 0.052101, 0.510924),
new THREE.Vector2( 0.052101, 0.536975)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
face.vertexNormals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
face.vertexNormals.push(new THREE.Vector3(-0.340881, 0.040884, 0.939217));
P11w.faces.push( face );
P11w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052101, 0.510924),
new THREE.Vector2( 0.026891, 0.507563),
new THREE.Vector2( 0.052941, 0.509244)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.340881, 0.040884, 0.939217));
face.vertexNormals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
face.vertexNormals.push(new THREE.Vector3(-0.340377, 0.041995, 0.939351));
P11w.faces.push( face );
P11w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052941, 0.509244),
new THREE.Vector2( 0.026891, 0.507563),
new THREE.Vector2( 0.053782, 0.507563)
]);
P9w.childPanels.push(P11w);
P11w.parentPanel = P9w;
P11w.computeBoundingSphere();
P11w.normalsNeedUpdate = true;
P11w.computeFaceNormals();

var P11wMesh = new THREE.Mesh(P11w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P11w.mesh = P11wMesh;
P11wMesh.panel = P11w;
P11wMesh.castShadow = true;
P11wMesh.receiveShadow = true;
 scene.add(P11wMesh);objects.push(P11wMesh);


var P11wMesh2 = new THREE.Mesh(P11w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P11w.mesh2 = P11wMesh2;
P11wMesh2.panel = P11w;
P11wMesh2.castShadow = true;
P11wMesh.receiveShadow = true;
 scene.add(P11wMesh2);objects.push(P11wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.356745, 0.278052, 0.891863));
face.vertexNormals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
face.vertexNormals.push(new THREE.Vector3(-0.366407, 0.163267, 0.916018));
P9w.faces.push( face );
P9w.faceVertexUvs[0].push([
new THREE.Vector2( 0.000000, 0.126050),
new THREE.Vector2( 0.026891, 0.126050),
new THREE.Vector2( 0.000000, 0.316807)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
face.vertexNormals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
face.vertexNormals.push(new THREE.Vector3(-0.366407, 0.163267, 0.916018));
P9w.faces.push( face );
P9w.faceVertexUvs[0].push([
new THREE.Vector2( 0.026891, 0.126050),
new THREE.Vector2( 0.053782, 0.316807),
new THREE.Vector2( 0.000000, 0.316807)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
face.vertexNormals.push(new THREE.Vector3(-0.341963, 0.279692, 0.897125));
face.vertexNormals.push(new THREE.Vector3(-0.326922, 0.281281, 0.902221));
P9w.faces.push( face );
P9w.faceVertexUvs[0].push([
new THREE.Vector2( 0.053782, 0.316807),
new THREE.Vector2( 0.026891, 0.126050),
new THREE.Vector2( 0.053782, 0.126050)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
face.vertexNormals.push(new THREE.Vector3(-0.366407, 0.163267, 0.916018));
face.vertexNormals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P9w.faces.push( face );
P9w.faceVertexUvs[0].push([
new THREE.Vector2( 0.026891, 0.507563),
new THREE.Vector2( 0.000000, 0.316807),
new THREE.Vector2( 0.053782, 0.316807)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.371071, 0.041473, 0.927678));
face.vertexNormals.push(new THREE.Vector3(-0.366407, 0.163267, 0.916018));
face.vertexNormals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
P9w.faces.push( face );
P9w.faceVertexUvs[0].push([
new THREE.Vector2( 0.000000, 0.507563),
new THREE.Vector2( 0.000000, 0.316807),
new THREE.Vector2( 0.026891, 0.507563)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.340377, 0.041995, 0.939351));
face.vertexNormals.push(new THREE.Vector3(-0.355868, 0.041738, 0.933604));
face.vertexNormals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P9w.faces.push( face );
P9w.faceVertexUvs[0].push([
new THREE.Vector2( 0.053782, 0.507563),
new THREE.Vector2( 0.026891, 0.507563),
new THREE.Vector2( 0.053782, 0.316807)
]);
P0w.childPanels.push(P9w);
P9w.parentPanel = P0w;
P9w.computeBoundingSphere();
P9w.normalsNeedUpdate = true;
P9w.computeFaceNormals();

var P9wMesh = new THREE.Mesh(P9w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P9w.mesh = P9wMesh;
P9wMesh.panel = P9w;
P9wMesh.castShadow = true;
P9wMesh.receiveShadow = true;
 scene.add(P9wMesh);objects.push(P9wMesh);


var P9wMesh2 = new THREE.Mesh(P9w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P9w.mesh2 = P9wMesh2;
P9wMesh2.panel = P9w;
P9wMesh2.castShadow = true;
P9wMesh.receiveShadow = true;
 scene.add(P9wMesh2);objects.push(P9wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.316539, 0.348712, 0.882158));
face.vertexNormals.push(new THREE.Vector3(-0.295870, 0.351156, 0.888341));
face.vertexNormals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.058824, 0.006723),
new THREE.Vector2( 0.095630, 0.006723),
new THREE.Vector2( 0.058824, 0.033613)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.318344, 0.334000, 0.887187));
face.vertexNormals.push(new THREE.Vector3(-0.295870, 0.351156, 0.888341));
face.vertexNormals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.058824, 0.033613),
new THREE.Vector2( 0.095630, 0.006723),
new THREE.Vector2( 0.058824, 0.060504)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
face.vertexNormals.push(new THREE.Vector3(-0.295870, 0.351156, 0.888341));
face.vertexNormals.push(new THREE.Vector3(-0.274777, 0.353465, 0.894181));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.058824, 0.060504),
new THREE.Vector2( 0.095630, 0.006723),
new THREE.Vector2( 0.132437, 0.006723)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.274777, 0.353465, 0.894181));
face.vertexNormals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
face.vertexNormals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.006723),
new THREE.Vector2( 0.272269, 0.060504),
new THREE.Vector2( 0.058824, 0.060504)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
face.vertexNormals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
face.vertexNormals.push(new THREE.Vector3(-0.274777, 0.353465, 0.894181));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.175462, 0.000000),
new THREE.Vector2( 0.272269, 0.060504),
new THREE.Vector2( 0.132437, 0.006723)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
face.vertexNormals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
face.vertexNormals.push(new THREE.Vector3(-0.223925, 0.358280, 0.906363));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.060504),
new THREE.Vector2( 0.175462, 0.000000),
new THREE.Vector2( 0.218487, 0.006723)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.224296, 0.360090, 0.905553));
face.vertexNormals.push(new THREE.Vector3(-0.223925, 0.358280, 0.906363));
face.vertexNormals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.217587, 0.003361),
new THREE.Vector2( 0.218487, 0.006723),
new THREE.Vector2( 0.175462, 0.000000)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
face.vertexNormals.push(new THREE.Vector3(-0.224665, 0.361896, 0.904741));
face.vertexNormals.push(new THREE.Vector3(-0.224296, 0.360090, 0.905553));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.175462, 0.000000),
new THREE.Vector2( 0.216686, 0.000000),
new THREE.Vector2( 0.217587, 0.003361)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.223925, 0.358280, 0.906363));
face.vertexNormals.push(new THREE.Vector3(-0.191157, 0.360836, 0.912829));
face.vertexNormals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.006723),
new THREE.Vector2( 0.272269, 0.006723),
new THREE.Vector2( 0.272269, 0.060504)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.191157, 0.360836, 0.912829));
face.vertexNormals.push(new THREE.Vector3(-0.157738, 0.363013, 0.918336));
face.vertexNormals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.006723),
new THREE.Vector2( 0.326050, 0.006723),
new THREE.Vector2( 0.272269, 0.060504)
]);
face = new THREE.Face3( 30, 31, 32 );
face.vertexNormals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
face.vertexNormals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
face.vertexNormals.push(new THREE.Vector3(-0.157738, 0.363013, 0.918336));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.369076, 0.000000),
new THREE.Vector2( 0.272269, 0.060504),
new THREE.Vector2( 0.326050, 0.006723)
]);
face = new THREE.Face3( 33, 34, 35 );
face.vertexNormals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
face.vertexNormals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
face.vertexNormals.push(new THREE.Vector3(-0.103166, 0.365653, 0.925016));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.060504),
new THREE.Vector2( 0.369076, 0.000000),
new THREE.Vector2( 0.412101, 0.006723)
]);
face = new THREE.Face3( 36, 37, 38 );
face.vertexNormals.push(new THREE.Vector3(-0.103661, 0.367514, 0.924223));
face.vertexNormals.push(new THREE.Vector3(-0.103166, 0.365653, 0.925016));
face.vertexNormals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.411200, 0.003361),
new THREE.Vector2( 0.412101, 0.006723),
new THREE.Vector2( 0.369076, 0.000000)
]);
face = new THREE.Face3( 39, 40, 41 );
face.vertexNormals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
face.vertexNormals.push(new THREE.Vector3(-0.104154, 0.369371, 0.923427));
face.vertexNormals.push(new THREE.Vector3(-0.103661, 0.367514, 0.924223));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.369076, 0.000000),
new THREE.Vector2( 0.410300, 0.000000),
new THREE.Vector2( 0.411200, 0.003361)
]);
face = new THREE.Face3( 42, 43, 44 );
face.vertexNormals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
face.vertexNormals.push(new THREE.Vector3(-0.103166, 0.365653, 0.925016));
face.vertexNormals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.060504),
new THREE.Vector2( 0.412101, 0.006723),
new THREE.Vector2( 0.485714, 0.060504)
]);
face = new THREE.Face3( 45, 46, 47 );
face.vertexNormals.push(new THREE.Vector3(-0.079507, 0.366451, 0.927034));
face.vertexNormals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
face.vertexNormals.push(new THREE.Vector3(-0.103166, 0.365653, 0.925016));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.448908, 0.006723),
new THREE.Vector2( 0.485714, 0.060504),
new THREE.Vector2( 0.412101, 0.006723)
]);
face = new THREE.Face3( 48, 49, 50 );
face.vertexNormals.push(new THREE.Vector3(-0.079507, 0.366451, 0.927034));
face.vertexNormals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
face.vertexNormals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.448908, 0.006723),
new THREE.Vector2( 0.485714, 0.033613),
new THREE.Vector2( 0.485714, 0.060504)
]);
face = new THREE.Face3( 51, 52, 53 );
face.vertexNormals.push(new THREE.Vector3(-0.056064, 0.351776, 0.934404));
face.vertexNormals.push(new THREE.Vector3(-0.079507, 0.366451, 0.927034));
face.vertexNormals.push(new THREE.Vector3(-0.055712, 0.367044, 0.928534));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.485714, 0.033613),
new THREE.Vector2( 0.448908, 0.006723),
new THREE.Vector2( 0.485714, 0.006723)
]);
face = new THREE.Face3( 54, 55, 56 );
face.vertexNormals.push(new THREE.Vector3(-0.157049, 0.364920, 0.917698));
face.vertexNormals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
face.vertexNormals.push(new THREE.Vector3(-0.157738, 0.363013, 0.918336));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326951, 0.003361),
new THREE.Vector2( 0.369076, 0.000000),
new THREE.Vector2( 0.326050, 0.006723)
]);
face = new THREE.Face3( 57, 58, 59 );
face.vertexNormals.push(new THREE.Vector3(-0.156362, 0.366823, 0.917056));
face.vertexNormals.push(new THREE.Vector3(-0.130393, 0.368220, 0.920550));
face.vertexNormals.push(new THREE.Vector3(-0.157049, 0.364920, 0.917698));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.327852, 0.000000),
new THREE.Vector2( 0.369076, 0.000000),
new THREE.Vector2( 0.326951, 0.003361)
]);
face = new THREE.Face3( 60, 61, 62 );
face.vertexNormals.push(new THREE.Vector3(-0.274051, 0.355359, 0.893653));
face.vertexNormals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
face.vertexNormals.push(new THREE.Vector3(-0.274777, 0.353465, 0.894181));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.133338, 0.003361),
new THREE.Vector2( 0.175462, 0.000000),
new THREE.Vector2( 0.132437, 0.006723)
]);
face = new THREE.Face3( 63, 64, 65 );
face.vertexNormals.push(new THREE.Vector3(-0.273325, 0.357249, 0.893122));
face.vertexNormals.push(new THREE.Vector3(-0.249231, 0.359671, 0.899178));
face.vertexNormals.push(new THREE.Vector3(-0.274051, 0.355359, 0.893653));
P14w.faces.push( face );
P14w.faceVertexUvs[0].push([
new THREE.Vector2( 0.134238, 0.000000),
new THREE.Vector2( 0.175462, 0.000000),
new THREE.Vector2( 0.133338, 0.003361)
]);
P13w.childPanels.push(P14w);
P14w.parentPanel = P13w;
P14w.computeBoundingSphere();
P14w.normalsNeedUpdate = true;
P14w.computeFaceNormals();

var P14wMesh = new THREE.Mesh(P14w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P14w.mesh = P14wMesh;
P14wMesh.panel = P14w;
P14wMesh.castShadow = true;
P14wMesh.receiveShadow = true;
 scene.add(P14wMesh);objects.push(P14wMesh);


var P14wMesh2 = new THREE.Mesh(P14w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P14w.mesh2 = P14wMesh2;
P14wMesh2.panel = P14w;
P14wMesh2.castShadow = true;
P14wMesh.receiveShadow = true;
 scene.add(P14wMesh2);objects.push(P14wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
face.vertexNormals.push(new THREE.Vector3(-0.322186, 0.316939, 0.892046));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P13w.faces.push( face );
P13w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052101, 0.067227),
new THREE.Vector2( 0.055462, 0.063866),
new THREE.Vector2( 0.272269, 0.067227)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.322186, 0.316939, 0.892046));
face.vertexNormals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P13w.faces.push( face );
P13w.faceVertexUvs[0].push([
new THREE.Vector2( 0.055462, 0.063866),
new THREE.Vector2( 0.058824, 0.060504),
new THREE.Vector2( 0.272269, 0.067227)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
face.vertexNormals.push(new THREE.Vector3(-0.320089, 0.319040, 0.892052));
face.vertexNormals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
P13w.faces.push( face );
P13w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.067227),
new THREE.Vector2( 0.058824, 0.060504),
new THREE.Vector2( 0.272269, 0.060504)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.193455, 0.330396, 0.923804));
face.vertexNormals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P13w.faces.push( face );
P13w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.060504),
new THREE.Vector2( 0.485714, 0.060504),
new THREE.Vector2( 0.272269, 0.067227)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.056406, 0.336221, 0.940092));
face.vertexNormals.push(new THREE.Vector3(-0.054240, 0.334298, 0.940905));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P13w.faces.push( face );
P13w.faceVertexUvs[0].push([
new THREE.Vector2( 0.485714, 0.060504),
new THREE.Vector2( 0.489076, 0.063866),
new THREE.Vector2( 0.272269, 0.067227)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
face.vertexNormals.push(new THREE.Vector3(-0.054240, 0.334298, 0.940905));
face.vertexNormals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
P13w.faces.push( face );
P13w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.067227),
new THREE.Vector2( 0.489076, 0.063866),
new THREE.Vector2( 0.492437, 0.067227)
]);
P12w.childPanels.push(P13w);
P13w.parentPanel = P12w;
P13w.computeBoundingSphere();
P13w.normalsNeedUpdate = true;
P13w.computeFaceNormals();

var P13wMesh = new THREE.Mesh(P13w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P13w.mesh = P13wMesh;
P13wMesh.panel = P13w;
P13wMesh.castShadow = true;
P13wMesh.receiveShadow = true;
 scene.add(P13wMesh);objects.push(P13wMesh);


var P13wMesh2 = new THREE.Mesh(P13w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P13w.mesh2 = P13wMesh2;
P13wMesh2.panel = P13w;
P13wMesh2.castShadow = true;
P13wMesh.receiveShadow = true;
 scene.add(P13wMesh2);objects.push(P13wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
face.vertexNormals.push(new THREE.Vector3(-0.281330, 0.287577, 0.915507));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052101, 0.067227),
new THREE.Vector2( 0.272269, 0.067227),
new THREE.Vector2( 0.132437, 0.122689)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
face.vertexNormals.push(new THREE.Vector3(-0.281330, 0.287577, 0.915507));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.175462, 0.129412),
new THREE.Vector2( 0.132437, 0.122689),
new THREE.Vector2( 0.272269, 0.067227)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.281504, 0.285599, 0.916073));
face.vertexNormals.push(new THREE.Vector3(-0.281330, 0.287577, 0.915507));
face.vertexNormals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.126050),
new THREE.Vector2( 0.132437, 0.122689),
new THREE.Vector2( 0.175462, 0.129412)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.281676, 0.283618, 0.916635));
face.vertexNormals.push(new THREE.Vector3(-0.281504, 0.285599, 0.916073));
face.vertexNormals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.129412),
new THREE.Vector2( 0.132437, 0.126050),
new THREE.Vector2( 0.175462, 0.129412)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.229417, 0.291688, 0.928594));
face.vertexNormals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.122689),
new THREE.Vector2( 0.175462, 0.129412),
new THREE.Vector2( 0.272269, 0.067227)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.229563, 0.289687, 0.929184));
face.vertexNormals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
face.vertexNormals.push(new THREE.Vector3(-0.229417, 0.291688, 0.928594));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.126050),
new THREE.Vector2( 0.175462, 0.129412),
new THREE.Vector2( 0.218487, 0.122689)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.229708, 0.287682, 0.929771));
face.vertexNormals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
face.vertexNormals.push(new THREE.Vector3(-0.229563, 0.289687, 0.929184));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.129412),
new THREE.Vector2( 0.175462, 0.129412),
new THREE.Vector2( 0.218487, 0.126050)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.229417, 0.291688, 0.928594));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
face.vertexNormals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.122689),
new THREE.Vector2( 0.272269, 0.067227),
new THREE.Vector2( 0.272269, 0.122689)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
face.vertexNormals.push(new THREE.Vector3(-0.161713, 0.295736, 0.941482));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.122689),
new THREE.Vector2( 0.272269, 0.067227),
new THREE.Vector2( 0.326050, 0.122689)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.161713, 0.295736, 0.941482));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
face.vertexNormals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.122689),
new THREE.Vector2( 0.272269, 0.067227),
new THREE.Vector2( 0.369076, 0.129412)
]);
face = new THREE.Face3( 30, 31, 32 );
face.vertexNormals.push(new THREE.Vector3(-0.105806, 0.297999, 0.948684));
face.vertexNormals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.412101, 0.122689),
new THREE.Vector2( 0.369076, 0.129412),
new THREE.Vector2( 0.272269, 0.067227)
]);
face = new THREE.Face3( 33, 34, 35 );
face.vertexNormals.push(new THREE.Vector3(-0.105876, 0.295962, 0.949314));
face.vertexNormals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
face.vertexNormals.push(new THREE.Vector3(-0.105806, 0.297999, 0.948684));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.412101, 0.126050),
new THREE.Vector2( 0.369076, 0.129412),
new THREE.Vector2( 0.412101, 0.122689)
]);
face = new THREE.Face3( 36, 37, 38 );
face.vertexNormals.push(new THREE.Vector3(-0.105946, 0.293922, 0.949939));
face.vertexNormals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
face.vertexNormals.push(new THREE.Vector3(-0.105876, 0.295962, 0.949314));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.412101, 0.129412),
new THREE.Vector2( 0.369076, 0.129412),
new THREE.Vector2( 0.412101, 0.126050)
]);
face = new THREE.Face3( 39, 40, 41 );
face.vertexNormals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
face.vertexNormals.push(new THREE.Vector3(-0.105806, 0.297999, 0.948684));
face.vertexNormals.push(new THREE.Vector3(-0.193732, 0.326515, 0.925125));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.492437, 0.067227),
new THREE.Vector2( 0.412101, 0.122689),
new THREE.Vector2( 0.272269, 0.067227)
]);
face = new THREE.Face3( 42, 43, 44 );
face.vertexNormals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
face.vertexNormals.push(new THREE.Vector3(-0.105806, 0.297999, 0.948684));
face.vertexNormals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.452269, 0.122689),
new THREE.Vector2( 0.412101, 0.122689),
new THREE.Vector2( 0.492437, 0.067227)
]);
face = new THREE.Face3( 45, 46, 47 );
face.vertexNormals.push(new THREE.Vector3(-0.052382, 0.315961, 0.947325));
face.vertexNormals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
face.vertexNormals.push(new THREE.Vector3(-0.052071, 0.332369, 0.941711));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.492437, 0.094958),
new THREE.Vector2( 0.452269, 0.122689),
new THREE.Vector2( 0.492437, 0.067227)
]);
face = new THREE.Face3( 48, 49, 50 );
face.vertexNormals.push(new THREE.Vector3(-0.052680, 0.299265, 0.952715));
face.vertexNormals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
face.vertexNormals.push(new THREE.Vector3(-0.052382, 0.315961, 0.947325));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.492437, 0.122689),
new THREE.Vector2( 0.452269, 0.122689),
new THREE.Vector2( 0.492437, 0.094958)
]);
face = new THREE.Face3( 51, 52, 53 );
face.vertexNormals.push(new THREE.Vector3(-0.161819, 0.293713, 0.942097));
face.vertexNormals.push(new THREE.Vector3(-0.161713, 0.295736, 0.941482));
face.vertexNormals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.126050),
new THREE.Vector2( 0.326050, 0.122689),
new THREE.Vector2( 0.369076, 0.129412)
]);
face = new THREE.Face3( 54, 55, 56 );
face.vertexNormals.push(new THREE.Vector3(-0.161924, 0.291685, 0.942709));
face.vertexNormals.push(new THREE.Vector3(-0.161819, 0.293713, 0.942097));
face.vertexNormals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.129412),
new THREE.Vector2( 0.326050, 0.126050),
new THREE.Vector2( 0.369076, 0.129412)
]);
face = new THREE.Face3( 57, 58, 59 );
face.vertexNormals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
face.vertexNormals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
face.vertexNormals.push(new THREE.Vector3(-0.281330, 0.287577, 0.915507));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.092269, 0.122689),
new THREE.Vector2( 0.052101, 0.067227),
new THREE.Vector2( 0.132437, 0.122689)
]);
face = new THREE.Face3( 60, 61, 62 );
face.vertexNormals.push(new THREE.Vector3(-0.326013, 0.299109, 0.896799));
face.vertexNormals.push(new THREE.Vector3(-0.324280, 0.314835, 0.892032));
face.vertexNormals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052101, 0.094958),
new THREE.Vector2( 0.052101, 0.067227),
new THREE.Vector2( 0.092269, 0.122689)
]);
face = new THREE.Face3( 63, 64, 65 );
face.vertexNormals.push(new THREE.Vector3(-0.327674, 0.283136, 0.901368));
face.vertexNormals.push(new THREE.Vector3(-0.326013, 0.299109, 0.896799));
face.vertexNormals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P12w.faces.push( face );
P12w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052101, 0.122689),
new THREE.Vector2( 0.052101, 0.094958),
new THREE.Vector2( 0.092269, 0.122689)
]);
P0w.childPanels.push(P12w);
P12w.parentPanel = P0w;
P12w.computeBoundingSphere();
P12w.normalsNeedUpdate = true;
P12w.computeFaceNormals();

var P12wMesh = new THREE.Mesh(P12w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P12w.mesh = P12wMesh;
P12wMesh.panel = P12w;
P12wMesh.castShadow = true;
P12wMesh.receiveShadow = true;
 scene.add(P12wMesh);objects.push(P12wMesh);


var P12wMesh2 = new THREE.Mesh(P12w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P12w.mesh2 = P12wMesh2;
P12wMesh2.panel = P12w;
P12wMesh2.castShadow = true;
P12wMesh.receiveShadow = true;
 scene.add(P12wMesh2);objects.push(P12wMesh2)

face = new THREE.Face3( 0, 1, 2 );
face.vertexNormals.push(new THREE.Vector3(-0.327298, 0.282209, 0.901795));
face.vertexNormals.push(new THREE.Vector3(-0.327674, 0.283136, 0.901368));
face.vertexNormals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052941, 0.124370),
new THREE.Vector2( 0.052101, 0.122689),
new THREE.Vector2( 0.092269, 0.122689)
]);
face = new THREE.Face3( 3, 4, 5 );
face.vertexNormals.push(new THREE.Vector3(-0.326922, 0.281281, 0.902221));
face.vertexNormals.push(new THREE.Vector3(-0.327298, 0.282209, 0.901795));
face.vertexNormals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.053782, 0.126050),
new THREE.Vector2( 0.052941, 0.124370),
new THREE.Vector2( 0.092269, 0.122689)
]);
face = new THREE.Face3( 6, 7, 8 );
face.vertexNormals.push(new THREE.Vector3(-0.326922, 0.281281, 0.902221));
face.vertexNormals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
face.vertexNormals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.053782, 0.126050),
new THREE.Vector2( 0.092269, 0.122689),
new THREE.Vector2( 0.053782, 0.316807)
]);
face = new THREE.Face3( 9, 10, 11 );
face.vertexNormals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
face.vertexNormals.push(new THREE.Vector3(-0.281676, 0.283618, 0.916635));
face.vertexNormals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.092269, 0.122689),
new THREE.Vector2( 0.132437, 0.129412),
new THREE.Vector2( 0.053782, 0.316807)
]);
face = new THREE.Face3( 12, 13, 14 );
face.vertexNormals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
face.vertexNormals.push(new THREE.Vector3(-0.281504, 0.285599, 0.916073));
face.vertexNormals.push(new THREE.Vector3(-0.281676, 0.283618, 0.916635));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.092269, 0.122689),
new THREE.Vector2( 0.132437, 0.126050),
new THREE.Vector2( 0.132437, 0.129412)
]);
face = new THREE.Face3( 15, 16, 17 );
face.vertexNormals.push(new THREE.Vector3(-0.281504, 0.285599, 0.916073));
face.vertexNormals.push(new THREE.Vector3(-0.304772, 0.285423, 0.908651));
face.vertexNormals.push(new THREE.Vector3(-0.281330, 0.287577, 0.915507));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.126050),
new THREE.Vector2( 0.092269, 0.122689),
new THREE.Vector2( 0.132437, 0.122689)
]);
face = new THREE.Face3( 18, 19, 20 );
face.vertexNormals.push(new THREE.Vector3(-0.281676, 0.283618, 0.916635));
face.vertexNormals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
face.vertexNormals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.132437, 0.129412),
new THREE.Vector2( 0.175462, 0.129412),
new THREE.Vector2( 0.053782, 0.316807)
]);
face = new THREE.Face3( 21, 22, 23 );
face.vertexNormals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.175462, 0.129412),
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.053782, 0.316807)
]);
face = new THREE.Face3( 24, 25, 26 );
face.vertexNormals.push(new THREE.Vector3(-0.229708, 0.287682, 0.929771));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.255970, 0.285739, 0.923490));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.129412),
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.175462, 0.129412)
]);
face = new THREE.Face3( 27, 28, 29 );
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.229708, 0.287682, 0.929771));
face.vertexNormals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.218487, 0.129412),
new THREE.Vector2( 0.272269, 0.122689)
]);
face = new THREE.Face3( 30, 31, 32 );
face.vertexNormals.push(new THREE.Vector3(-0.229563, 0.289687, 0.929184));
face.vertexNormals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
face.vertexNormals.push(new THREE.Vector3(-0.229708, 0.287682, 0.929771));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.126050),
new THREE.Vector2( 0.272269, 0.122689),
new THREE.Vector2( 0.218487, 0.129412)
]);
face = new THREE.Face3( 33, 34, 35 );
face.vertexNormals.push(new THREE.Vector3(-0.229417, 0.291688, 0.928594));
face.vertexNormals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
face.vertexNormals.push(new THREE.Vector3(-0.229563, 0.289687, 0.929184));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.218487, 0.122689),
new THREE.Vector2( 0.272269, 0.122689),
new THREE.Vector2( 0.218487, 0.126050)
]);
face = new THREE.Face3( 36, 37, 38 );
face.vertexNormals.push(new THREE.Vector3(-0.161924, 0.291685, 0.942709));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.129412),
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.272269, 0.122689)
]);
face = new THREE.Face3( 39, 40, 41 );
face.vertexNormals.push(new THREE.Vector3(-0.161924, 0.291685, 0.942709));
face.vertexNormals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.129412),
new THREE.Vector2( 0.490756, 0.316807),
new THREE.Vector2( 0.272269, 0.510924)
]);
face = new THREE.Face3( 42, 43, 44 );
face.vertexNormals.push(new THREE.Vector3(-0.161924, 0.291685, 0.942709));
face.vertexNormals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
face.vertexNormals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.129412),
new THREE.Vector2( 0.369076, 0.129412),
new THREE.Vector2( 0.490756, 0.316807)
]);
face = new THREE.Face3( 45, 46, 47 );
face.vertexNormals.push(new THREE.Vector3(-0.134096, 0.292916, 0.946688));
face.vertexNormals.push(new THREE.Vector3(-0.105946, 0.293922, 0.949939));
face.vertexNormals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.369076, 0.129412),
new THREE.Vector2( 0.412101, 0.129412),
new THREE.Vector2( 0.490756, 0.316807)
]);
face = new THREE.Face3( 48, 49, 50 );
face.vertexNormals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
face.vertexNormals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
face.vertexNormals.push(new THREE.Vector3(-0.105946, 0.293922, 0.949939));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.452269, 0.122689),
new THREE.Vector2( 0.490756, 0.316807),
new THREE.Vector2( 0.412101, 0.129412)
]);
face = new THREE.Face3( 51, 52, 53 );
face.vertexNormals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
face.vertexNormals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
face.vertexNormals.push(new THREE.Vector3(-0.053833, 0.297204, 0.953295));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.490756, 0.316807),
new THREE.Vector2( 0.452269, 0.122689),
new THREE.Vector2( 0.490756, 0.126050)
]);
face = new THREE.Face3( 54, 55, 56 );
face.vertexNormals.push(new THREE.Vector3(-0.053833, 0.297204, 0.953295));
face.vertexNormals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
face.vertexNormals.push(new THREE.Vector3(-0.053256, 0.298235, 0.953006));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.490756, 0.126050),
new THREE.Vector2( 0.452269, 0.122689),
new THREE.Vector2( 0.491597, 0.124370)
]);
face = new THREE.Face3( 57, 58, 59 );
face.vertexNormals.push(new THREE.Vector3(-0.053256, 0.298235, 0.953006));
face.vertexNormals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
face.vertexNormals.push(new THREE.Vector3(-0.052680, 0.299265, 0.952715));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.491597, 0.124370),
new THREE.Vector2( 0.452269, 0.122689),
new THREE.Vector2( 0.492437, 0.122689)
]);
face = new THREE.Face3( 60, 61, 62 );
face.vertexNormals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
face.vertexNormals.push(new THREE.Vector3(-0.105946, 0.293922, 0.949939));
face.vertexNormals.push(new THREE.Vector3(-0.105876, 0.295962, 0.949314));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.452269, 0.122689),
new THREE.Vector2( 0.412101, 0.129412),
new THREE.Vector2( 0.412101, 0.126050)
]);
face = new THREE.Face3( 63, 64, 65 );
face.vertexNormals.push(new THREE.Vector3(-0.105806, 0.297999, 0.948684));
face.vertexNormals.push(new THREE.Vector3(-0.079327, 0.298736, 0.951033));
face.vertexNormals.push(new THREE.Vector3(-0.105876, 0.295962, 0.949314));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.412101, 0.122689),
new THREE.Vector2( 0.452269, 0.122689),
new THREE.Vector2( 0.412101, 0.126050)
]);
face = new THREE.Face3( 66, 67, 68 );
face.vertexNormals.push(new THREE.Vector3(-0.056325, 0.044590, 0.997416));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.055509, 0.175199, 0.982967));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.490756, 0.507563),
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.490756, 0.316807)
]);
face = new THREE.Face3( 69, 70, 71 );
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.056325, 0.044590, 0.997416));
face.vertexNormals.push(new THREE.Vector3(-0.055743, 0.043421, 0.997501));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.490756, 0.507563),
new THREE.Vector2( 0.491597, 0.509244)
]);
face = new THREE.Face3( 72, 73, 74 );
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
face.vertexNormals.push(new THREE.Vector3(-0.055743, 0.043421, 0.997501));
face.vertexNormals.push(new THREE.Vector3(-0.055160, 0.042251, 0.997583));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.272269, 0.510924),
new THREE.Vector2( 0.491597, 0.509244),
new THREE.Vector2( 0.492437, 0.510924)
]);
face = new THREE.Face3( 75, 76, 77 );
face.vertexNormals.push(new THREE.Vector3(-0.161819, 0.293713, 0.942097));
face.vertexNormals.push(new THREE.Vector3(-0.161924, 0.291685, 0.942709));
face.vertexNormals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.126050),
new THREE.Vector2( 0.326050, 0.129412),
new THREE.Vector2( 0.272269, 0.122689)
]);
face = new THREE.Face3( 78, 79, 80 );
face.vertexNormals.push(new THREE.Vector3(-0.161819, 0.293713, 0.942097));
face.vertexNormals.push(new THREE.Vector3(-0.195915, 0.293873, 0.935551));
face.vertexNormals.push(new THREE.Vector3(-0.161713, 0.295736, 0.941482));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.326050, 0.126050),
new THREE.Vector2( 0.272269, 0.122689),
new THREE.Vector2( 0.326050, 0.122689)
]);
face = new THREE.Face3( 81, 82, 83 );
face.vertexNormals.push(new THREE.Vector3(-0.340377, 0.041995, 0.939351));
face.vertexNormals.push(new THREE.Vector3(-0.335992, 0.165269, 0.927252));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.053782, 0.507563),
new THREE.Vector2( 0.053782, 0.316807),
new THREE.Vector2( 0.272269, 0.510924)
]);
face = new THREE.Face3( 84, 85, 86 );
face.vertexNormals.push(new THREE.Vector3(-0.340881, 0.040884, 0.939217));
face.vertexNormals.push(new THREE.Vector3(-0.340377, 0.041995, 0.939351));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052941, 0.509244),
new THREE.Vector2( 0.053782, 0.507563),
new THREE.Vector2( 0.272269, 0.510924)
]);
face = new THREE.Face3( 87, 88, 89 );
face.vertexNormals.push(new THREE.Vector3(-0.341384, 0.039773, 0.939082));
face.vertexNormals.push(new THREE.Vector3(-0.340881, 0.040884, 0.939217));
face.vertexNormals.push(new THREE.Vector3(-0.204790, 0.041418, 0.977929));
P0w.faces.push( face );
P0w.faceVertexUvs[0].push([
new THREE.Vector2( 0.052101, 0.510924),
new THREE.Vector2( 0.052941, 0.509244),
new THREE.Vector2( 0.272269, 0.510924)
]);
P0w.computeBoundingSphere();
P0w.normalsNeedUpdate = true;
P0w.computeFaceNormals();

var P0wMesh = new THREE.Mesh(P0w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xddaa77, side:THREE.FrontSide, map: outsideTexture, specular:0x444444, shininess:8, specularMap: insideSpecTexture}));
P0w.mesh = P0wMesh;
P0wMesh.panel = P0w;
P0wMesh.castShadow = true;
P0wMesh.receiveShadow = true;
 scene.add(P0wMesh);objects.push(P0wMesh);


var P0wMesh2 = new THREE.Mesh(P0w, new THREE.MeshPhongMaterial({wireframe: false,color: 0xffbbaa, side:THREE.BackSide , map: insideTexture, specularMap: insideSpecTexture}));
P0w.mesh2 = P0wMesh2;
P0wMesh2.panel = P0w;
P0wMesh2.castShadow = true;
P0wMesh.receiveShadow = true;
 scene.add(P0wMesh2);objects.push(P0wMesh2)



}