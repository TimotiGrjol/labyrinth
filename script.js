var canvas = document.getElementById("myCanvas");
console.log(canvas);
var ctx = canvas.getContext("2d");

const wall=document.getElementById("Walls");
const broken=document.getElementById("Broken");
const key=document.getElementById("Key");

const personD=document.getElementById("personD");
const personL=document.getElementById("personL");
const personR=document.getElementById("personR");
const personU=document.getElementById("personU");


var masKey=0;


let map2a = [
"###S###########################",
"#...#...#.......#.#.#.........#",
"#.#.#.#######.###.#.#.#####.###",
"#.#.#.....#...#...#...#...#...#",
"#.###.#.###.###.#########.#.###",
"#...#.#.#.....#...#.....#.....#",
"#.###.#.#####.###.#.#.#.#####.#",
"#.#.#.#.......#.....#.#.......#",
"#.#.#.#.#.###.###.###.###.###.#",
"#.....#.#.#.....#.#...#.....#.#",
"#.###.###.#########.#.#####.###",
"#.#.#.#.#...........#.#.#...#.#",
"#.#.###.#####.#.#.###.#.#.###.#",
"#...#.#.....#.#.#...#.#.#...#.#",
"#####.###.###.###.#####.#####.#",
"#.#.........#.#.#.............#",
"#.#.###.#######.#####.###.#.#.#",
"#...#.#.#.....#.#.....#...#.#.#",
"#.###.#####.###.#.###F#########",
"#.#.........#.....#...#.....#.#",
"#.#.#.#####.#.#.###.#.#.#.###.#",
"#...#...#...#.#.#.#.#...#.....#",
"#.#.#.#########.#.#######.#.#.#",
"#.#.#.#.#.#.....#.........#.#.#",
"###.###.#.#.#.#####.#########.#",
"#.........#.#...#.#...#.......#",
"#########.#.###.#.###.###.#.###",
"#...#.#...#.#.#.#...#.#...#.#.#",
"#.###.#.#.#.#.###.###.#.#####.#",
"#.......#.......#.....#.......#",
"#############################C#"
];



let map2line=[
    "###S###########################",
    "#!!!#...#.......#.#.#.........#",
    "#!#.#.#######.###.#.#.#####.###",
    "#!#.#!!!..#...#...#...#...#...#",
    "#!###!#!###.###.#########.#.###",
    "#!..#!#!#.....#...#.....#.....#",
    "#!###!#!#####.###.#.#.#.#####.#",
    "#!#.#!#!!!....#.....#.#.......#",
    "#!#.#!#.#!###.###.###.###.###.#",
    "#!!!!!#.#!#.....#.#...#.....#.#",
    "#.###.###!#########.#.#####.###",
    "#.#.#.#.#!!!!!!!!!..#.#.#...#.#",
    "#.#.###.#####.#.#!###.#.#.###.#",
    "#...#.#.....#.#.#!..#.#.#...#.#",
    "#####.###.###.###!#####.#####.#",
    "#.#.........#.#.#!!!!!........#",
    "#.#.###.#######.#####!###.#.#.#",
    "#...#.#.#.....#.#....!#...#.#.#",
    "#.###.#####.###.#.###F#########",
    "#.#.........#.....#..!#!!!..#.#",
    "#.#.#.#####.#.#.###.#!#!#!###.#",
    "#...#...#...#.#.#.#.#!!!#!!!!!#",
    "#.#.#.#########.#.#######.#.#!#",
    "#.#.#.#.#.#.....#.........#.#!#",
    "###.###.#.#.#.#####.#########!#",
    "#.........#.#...#.#...#..!!!!!#",
    "#########.#.###.#.###.###!#.###",
    "#...#.#...#.#.#.#...#.#!!!#.#.#",
    "#.###.#.#.#.#.###.###.#!#####.#",
    "#.......#.......#.....#!!!!!!!#",
    "#############################C#"
    ];



    

 let map2=   [
        "###S###########################",
        "#!!!#,,,#.......#.#.#.........#",
        "#!#,#,#######.###.#.#.#####.###",
        "#!#,#!!!,,#...#...#...#...#...#",
        "#!###!#!###.###.#########.#.###",
        "#!,,#!#!#.....#...#.....#.....#",
        "#!###!#!#####.###.#.#.#.#####.#",
        "#!#,#!#!!!....#.....#.#.......#",
        "#!#,#!#.#!###.###.###.###.###.#",
        "#!!!!!#.#!#.....#.#...#.....#.#",
        "#,###.###!#########.#.#####.###",
        "#,#,#.#.#!!!!!!!!!..#.#.#...#.#",
        "#,#,###.#####.#.#!###.#.#.###.#",
        "#,,,#.#.....#.#.#!..#.#.#...#.#",
        "#####.###.###.###!#####.#####.#",
        "#.#.........#.#.#!!!!!........#",
        "#.#.###.#######.#####!###.#.#.#",
        "#...#.#.#.....#.#....!#...#.#.#",
        "#.###.#####.###.#.###F#########",
        "#.#.........#.....#,,!#!!!,,#,#",
        "#.#.#.#####.#.#.###,#!#!#!###,#",
        "#...#...#...#.#.#,#,#!!!#!!!!!#",
        "#.#.#.#########.#,#######,#,#!#",
        "#.#.#.#.#.#.....#,,,,,,,,,#,#!#",
        "###.###.#.#.#.#####,#########!#",
        "#.........#.#...#,#,,,#,,!!!!!#",
        "#########.#.###.#,###,###!#,###",
        "#...#.#...#.#.#.#,,,#,#!!!#,#,#",
        "#.###.#.#.#.#.###,###,#!#####,#",
        "#.......#.......#,,,,,#!!!!!!!#",
        "#############################C#"
        ];


    
    
let kposx=0;
let kposy=0;


risi();
fakeStena();
spawnKey();


//maze generator!!
function risi(){
    for(let i=0; i<map2.length; i++){
        let x=0;
        let y=i*20;
        for(let j=0; j<map2[i].length; j++){
            if(map2[i][j]=="#"){
                ctx.drawImage(wall,x, y);
                x=x+20
                
            }
            else{
                x=x+20
            }
        } 
    }
}

function start(){
    swal.fire({
        title: "Welcome to the dungeon",
        text: "Find the key and escape!",
        button: "Start",
        confirmButtonColor: "#384539"
      });

}

function fakeStena(){
    let x=420;
    let y=360;
    ctx.drawImage(broken,x,y);
}



function spawnKey(){
    let rnd=0, rnd2=0, x=0, y=0;

    while(true){
        rnd=Math.floor(Math.random() * map2.length);
        rnd2=Math.floor(Math.random() * map2.length);
        x=rnd*20;
        y=rnd2*20;
        x+=2;
        y+=2;
        console.log(rnd,rnd2);
        if(map2[rnd2][rnd]=="."){
            ctx.drawImage(key,x,y);
            break;
        }
        else{
            continue;
        }
    }
    kposx=rnd;
    kposy=rnd2;
}

function getKey(){
    swal.fire({
        title: "You got the key!",
        text:"a door has now opened",
        icon: "success",
        confirmButtonColor: "#384539"
      },2000).then(function(isConfirm) {
        let x=420;
        let y=360;
        ctx2.clearRect(x,y,20,20);
        map2[18][21]='.';
        masKey=1;
          
        });

    
}


var canvas2=document.getElementById('myCanvas');
var ctx2=canvas2.getContext("2d");
var a=62;
var b=2;

function drawD(){
ctx.drawImage(personD, a,b);

}

function drawL(){
ctx.drawImage(personL, a,b);

}
function drawR(){
    ctx.drawImage(personR, a,b);
    
}


function drawU(){
    ctx.drawImage(personU, a,b);

}



drawD();


let row=0;
let col=3;



//console.log(row,col);



document.addEventListener("keydown",function(e){
    if(e.keyCode==39 || e.keyCode==68 )//desno
        {
            col+=1;
            if(col===kposx && row===kposy){
                ctx2.clearRect(a+20,b,15,15);
                drawR();
                getKey();
            }

            if(map2[row][col]=='#'){
                col-=1;
                drawR();
            }

            else{
            ctx2.clearRect(a,b,15,15);
            a+=20;
            drawR();
            }

    }  

    if(e.keyCode==37 || e.keyCode==65)//levo
        {
            col-=1;
            if(col===kposx && row===kposy){
                ctx2.clearRect(a-20,b,15,15);
                drawL();
                getKey();
            }
            if(map2[row][col]=='#'){
                col+=1;
                drawL();
            }
            else{
            ctx2.clearRect(a,b,15,15);
            a-=20;
            drawL();  
            }              
    }


    if(e.keyCode==40 || e.keyCode==83){ //dol
            if(map2[row+1][col]=='F' && masKey==0){
                drawD();
            }
            else{
                if(col===kposx && row+1===kposy){
                    ctx2.clearRect(a,b+20,15,15);
                    drawD();
                    getKey();
                }
                row+=1;
                if(map2[row][col]=='#'){
                    row-=1;
                    drawD();
                }

                else if(map2[row][col]=='C'){
                    ctx2.clearRect(a,b,15,15);
                    b+=20;
                    row+=1;
                    drawD();  
                    finish();
                }
                else{
                    ctx2.clearRect(a,b,15,15);
                    b=b+20;
                    drawD();
                }
        }

    }

    if(e.keyCode==38 || e.keyCode==87){   //hor
        
        if(map2[row][col]=='S' ){
        }

        else{
            if(col===kposx && row-1===kposy){
                ctx2.clearRect(a,b-20,15,15);
                drawU();
                getKey();
            }
            row-=1;
            if(map2[row][col]=='#'){
                row+=1;
                drawU();
            }

            else{
                ctx2.clearRect(a,b,15,15);
                b=b-20;
                drawU();
                }
        }
    }
    

})


function finish(){

    swal.fire({
        title: "You escaped the dungeon!",
        icon: "success",
        confirmButtonText: 'Restart',
        confirmButtonColor: "#384539"
      }).then(function(isConfirm) {
        if (isConfirm) {
          location.reload()}
          
        });

}





   




