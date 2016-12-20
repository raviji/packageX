
            
function boundCheck(p, m)
{
    var v = new THREE.Vector3(p.x, p.y, p.z);
    v.applyMatrix4(m);
    if (boundsMin == null)
    {
        boundsMin = new THREE.Vector3(v.x, v.y, v.z);
        boundsMax = new THREE.Vector3(v.x, v.y, v.z);
    }
    else
    {
        boundsMin.min(v);
        boundsMax.max(v);

    }
}
function calcBoundary(panel)
{
    if (panel == null)
    {
        boundsMin = null;
        boundsMax = null;
        calcBoundary(panelsGeom.P0w);
        centerTar.addVectors(boundsMax, boundsMin);
        centerTar.multiplyScalar(0.5);
        return;
    }
    for (var i in panel.vertices) {
        boundCheck(panel.vertices[i], panel.mainMatrix);
    }
    for (var i in panel.childPanels) {
        var pan = panel.childPanels[i];
        calcBoundary(pan);
    // Shows only the explicitly set index of "5", and ignores 0-4
    }
}
           
function resetFold()
{
    for (var i in objects) {                    
        objects[i].panel.foldManual = false;
    }
                       
    angle = Math.min(angle, foldMax+1);
    angle = Math.max(angle, 0);
}
         
//m_proj.transpose();
function updatePanel(panel)
{
    if (panel == null)
        return;
    
    var p = new THREE.Vector3(0, 0, 0);
    if (panel.parentPanel != null && panel.parentPanel.foldPt0 != null)
        p = panel.parentPanel.foldPt0;
    var p2 = new THREE.Vector3(0, 0, 0);
                
    var rot = new THREE.Matrix4();
                
    if (panel.foldAngle==null)
        panel.foldAngle = 0;
                
    var t1 = new THREE.Matrix4();
    var t2 = new THREE.Matrix4();
                
    if (panel.foldPt0 != null)
    {
        p2 = panel.foldPt0;
                    
        var axis = new THREE.Vector3(0, 0, 1);
        axis.subVectors(panel.foldPt0, panel.foldPt1);
        axis.normalize();
                    
                  
            
        if (!panel.foldManual)
        {
                
            foldMax = Math.max(foldMax, panel.fold[foldIndex].order);
            var fa = 0;
            if (angle>= panel.fold[foldIndex].order)
                fa = panel.fold[foldIndex].angle;
                            
                    
                        
            angleDir = angle-anglePrev;
            if (angleDir>0)
            {
                var fn = 0;
                if (angle+1>= panel.fold[foldIndex].order)
                    fn = panel.fold[foldIndex].angle;
            }
            else
            {
                var fn = fa;
                fa = panel.fold[foldIndex].angle;
                if (angle-1<= panel.fold[foldIndex].order)
                    fa = 0;
                                    
            }
            var dif = 0;//angle - (panel.foldCur-1);
            if (fn != fa)
                dif =angle -Math.floor(angle);
            panel.foldAngle += (fa * (1-dif) + fn * dif  - panel.foldAngle)*0.15;
        }   
        else
        {
            if (panel.fold[foldIndex].angle>0)
            {
                panel.foldAngle = Math.max(0, panel.foldAngle);
                panel.foldAngle = Math.min(Math.max(panel.fold[1].angle,panel.fold[0].angle), panel.foldAngle);
            }
            else
            {
                panel.foldAngle = Math.max(panel.fold[foldIndex].angle, panel.foldAngle);
                panel.foldAngle = Math.min(0, panel.foldAngle);
            }
        }
        //Math.abs(Math.sin(angle)) * panel.foldAngle
                    
        rot.makeRotationAxis(axis, panel.foldAngle);
        //var p2 = new THREE.Vector3(0, 0, 0);
                
        //p2.addVectors(panel.foldPt0,panel.foldPt1);
        //p2.multiplyScalar(0.5);
                     
        t1.makeTranslation( -p2.x,-p2.y,-p2.z );
        t2.makeTranslation(p2.x,p2.y,p2.z );
                
    }
    else
    {
        rot.makeRotationX(Math.PI);
        t1.makeTranslation( -000,-000,90);
    }
                
    // p2 = panel.vertices[0];
              
    var m3 = new THREE.Matrix4();
    m3.multiplyMatrices( t2, rot );
    m3.multiplyMatrices( m3, t1 );
    if (panel.parentPanel != null)
        m3.multiplyMatrices(panel.parentPanel.mainMatrix, m3 );
    //else
            
            
    panel.mainMatrix = new THREE.Matrix4();
    panel.mainMatrix.copy(m3);
                    
    t1.makeTranslation( -center.x,-center.y,0 );
            
    // var m1 = new THREE.Matrix4();
    //  m1.makeRotationZ( boxAngle );
            
    m3.multiplyMatrices(t1, m3);
    //  m3.multiplyMatrices(m1, m3);
                   
                    
    panel.mesh.matrix = m3;
    panel.mesh.setMatrix(panel.mesh.matrix);
              
    panel.mesh2.matrix = m3;
    panel.mesh2.setMatrix(panel.mesh2.matrix);
              
    for (var i in panel.childPanels) {
        var pan = panel.childPanels[i];
        updatePanel(pan);
    // Shows only the explicitly set index of "5", and ignores 0-4
    }
}