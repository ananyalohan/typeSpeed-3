var player,form,game,yes,no;
var level1Img, level2Img, level3Img, score= 0;
var rand, word1, word2, word3, word4, word5;
var gameState= "start"
var button1, button2, button3, textbox, typedWord;
var sprite1, sprite2, sprite3, sprite4, sprite5;
var positiveSound;





var level1= ["fun", "too", "car","left", "then", "cool","read","grow", "one", "list", "see","food", "glad", 
             "life", "type", "most", "code", "on", "find", "she", "glow", "leo","wave", "ace", "bee","cope", "dare",
             "moon", "navy", "yum", "pure", "dog", "pure", "rich", "song", "life", "zone","wise","move", 
             "wine", "van", "will","soul","opt" ,"try", "best", "king", "sure", "nice", "date"]

console.log(level1.length)

function preload(){
    level1Img= loadImage("images/level1.png" )
    positiveSound= loadSound("positive.wav")
    gameOver= loadImage("images/gameover.webp")
}

function setup(){

    createCanvas(windowWidth-25,windowHeight-35);
    button1= createButton("Level 1")
     button2= createButton("Level 2")
     button3= createButton("Level 3")

    button1.position((windowWidth/2)-150, windowHeight/2)
    button2.position(windowWidth/2, windowHeight/2)
    button3.position((windowWidth/2)+150, windowHeight/2)

    yes= createButton("Yes")
    

    textbox= createInput("Type here")
    textbox.style('font-size', '30px')

     //word1= createSprite(0, 50, 50,20)
     //word1.shapeColor="white"
     
}

function draw(){


        if (gameState==="start"){
            button1.mousePressed(()=>{
                background(level1Img)
                button1.hide()
                button2.hide()
                button3.hide()

                sprite1= createSprite(0,100,100,30)
                sprite1.shapeColor="white"
                sprite1.velocityX= Math.round(random(1,4))
                word1= level1[Math.round(random(0,49))]

                sprite2= createSprite(0,200,100,30)
                sprite2.shapeColor="white"
                sprite2.velocityX= Math.round(random(1,4))
                word2= level1[Math.round(random(0,49))]

                sprite3= createSprite(0,300,100,30)
                sprite3.shapeColor="white"
                sprite3.velocityX= Math.round(random(1,4))
                word3= level1[Math.round(random(0,49))]

                sprite4= createSprite(0,400,100,30)
                sprite4.shapeColor="white"
                sprite4.velocityX= Math.round(random(1,4))
                word4= level1[Math.round(random(0,49))]

                sprite5= createSprite(0,500,100,30)
                sprite5.shapeColor="white"
                sprite5.velocityX= Math.round(random(1,4))
                word5= level1[Math.round(random(0,49))]

                gameState= "play"
            })

            

        }

        else if (gameState=== "play") {
            background(level1Img)

            drawSprites()

            textSize(30)
            textFont("Century gothic")
    
            text("Score: "+ score, windowWidth/2+450, 50)

            typedWord=textbox.value()
            textbox.position(windowWidth/2-200, 30)
            textFont("times new roman")

            if(typedWord=== word1&& sprite1.visible===true&&sprite1.x<windowWidth){
                sprite1.visible= false
                word1= ""
                score= score+ 2
               positiveSound.play()
            }

            if(typedWord=== word2&& sprite2.visible===true &&sprite2.x<windowWidth){
             
                sprite2.visible= false
                word2= ""
                score= score+2
                positiveSound.play()
            }
            if(typedWord=== word3&& sprite3.visible===true &&sprite3.x<windowWidth){
             
                sprite3.visible= false
                word3= ""
                score= score+2
                positiveSound.play()
            }
            if(typedWord=== word4&& sprite4.visible===true &&sprite4.x<windowWidth){
             
                sprite4.visible= false
                word4= ""
                score= score+2
                positiveSound.play()
            }
            if(typedWord=== word5&& sprite5.visible===true &&sprite5.x<windowWidth){
             
                sprite5.visible= false
                word5= ""
                score= score+2
                positiveSound.play()
            }

            if(sprite1.visible===false&&sprite2.visible===false&&sprite3.visible===false
                &&sprite4.visible===false&&sprite5.visible===false&&score===10){
                    score=score+10
                    gameState="end"
                }
            


           
            console.log(score)
            
            textSize(20)
            fill("red")
            text(word1, sprite1.x-25, sprite1.y+5)
            text(word2, sprite2.x-25, sprite2.y+5)
            text(word3, sprite3.x-25, sprite3.y+5)
            text(word4, sprite4.x-25, sprite4.y+5)
            text(word5, sprite5.x-25, sprite5.y+5)



        }
    
        else if(gameState==="end"){
            background(gameOver)
            textbox.hide()
            fill("white")
            textSize(30)
            text("Your score: "+score,windowWidth/2-100,500  )
            text("Do you want to continue playing?",windowWidth-200,600)
            yes.position(windowWidth/2-10, 650)

        }
     
    }