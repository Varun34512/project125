function setup() {
    video = createCapture(VIDEO ) ;
    video.size(550, 500) ;
    canvas= createCanvas(550,550) ;
    canvas.position(560,150) ;
    poseNet= ml5.poseNet(video, modelLoaded ) ;
    poseNet.on('pose', gotPoses) ;
     
    }

    function draw() {
        background('#aba9a4') ;
        text('Varun',20,530);   
        textSize(difference) ;
        fill('lightblue') ;
        document.getElementById("font_size").innerHTML = "The text size is "+ difference+"px" ;
    }

    function modelLoaded() {
        console.log("Model is Loaded") ;
    }

    var leftWristX=0 ;
    var rightWristX=0 ;
    var difference= 0 ;

    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results) ;
            leftWristX= results[0].pose.leftWrist.x ;
            rightWristX= results[0].pose.rightWrist.x ;
            difference= floor(leftWristX-rightWristX) ; 
            console.log("leftWristX= "+leftWristX+" rightWristX= "+rightWristX+" difference= "+difference) ;
        }
    }
     