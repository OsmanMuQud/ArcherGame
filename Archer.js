function setup()
{
	createCanvas(800,600);
}
var menu=true;
var game=false;
var gMenu=false;
var credit=false;
var gameOver=false;
var help=false;
var score=0;
var y=96;
var x=196;
var speed=4;
var speedx=4;
var speedy=4;
var xfix=false;
var yfix=false;
var xval;
var yval;
var mx=400;
var my=300;
var inc=0;
var siz=400;
var tarsiz=400;
var maxinc=0;
var dis=255;
var arrows=10;
var incrt=20;
var loaded=true;

function draw()
{
	background(0);
	if(loaded){
	if(score<0)
	score=0;
	inc=floor(score/incrt)*2;
	if(inc>maxinc)
	maxinc=inc;
	else
	inc=maxinc;
	var siz1=400-(floor(score/50))*50;
	if(siz1<tarsiz)
	tarsiz=siz1;
	if(tarsiz<siz)
	siz-=2;


	background(51);
	noStroke();
	if(menu)
	{

		fill(255);textSize(100);
		text("ARCHER",200,250);
		textSize(20);
		text("By Osman",525,270);
		textSize(40);
    text("START GAME",250,400);
		text("CREDITS",250,460);
		text("HELP",250,520);
		text("EXIT",250,580);

		fill(255,9,9);
		ellipse(250,250,10,10);
		ellipse(240,250,10,10);
		ellipse(245,245,10,10);
		ellipse(252,248,10,10);

		ellipse(250+20,250,10,10);
		ellipse(240+14,250,10,10);
		ellipse(245-14,245,10,10);
		ellipse(252-15,248,10,10);

		stroke(9,255,9);
    line(244,241,243,237);//3
		line(251,243,255,239);//4
		line(249,245,248,241);//1
		line(239,246,240,242);//2

    line(244-14,241,243-14,237);//7
		line(251-15,243,255-15,239);//8
		line(249+20,245,248+20,241);//5
		line(239+14,246,240+14,242);//6

		stroke(0);
		strokeWeight(2);
		line(188,215,211,250);
		line(180,225,205,250);
		line(184,220,215,250);

	}

	if(game)
	{
		if(arrows<=0){gameOver=true;}
		background(5,151,182);
		fill(255);
		textSize(30);
		text("Score:"+score,600,100);

		fill(0);
		ellipse(mx,my,siz+8,siz+8);
		for(var i=siz;i>=0;i-=(siz/10))
		{
			if((i/(siz/10))%2==0)
			fill(255,255,50);
			else
			fill(187,0,4);

			ellipse(mx,my,i,i);
		}
		stroke(0);
		strokeWeight(8);
		line(150,96,150,504);
		line(196,550,604,550);
		strokeWeight(2);
		stroke(0);
		fill(255);
		ellipse(150,y,20,20);
		ellipse(x,550,20,20);
		if(!xfix){
			if(x<196)
			speedx*=-1;
			if(x>604)
			speedx*=-1;
  		if(speedx>0)speedx=speed+inc;else speedx=-(speed+inc);
			x+=speedx;
			yfix=false;
		}
		if(!yfix&&xfix){
			if(y>504)
			speedy*=-1;
			if(y<96)
			speedy*=-1;
			if(speedy>0)speedy=speed+inc;else speedy=-(speed+inc);
			y+=speedy;
		}
		if(xfix&&yfix){
		ellipse(x,y,10,10);
		noStroke();
		fill(0,dis);
		text((ceil(map(dist(x,y,mx,my),0,siz/2,10,0))),(x+10),y);
		dis-=2;
		}
		stroke(255);strokeWeight(4);
		noFill();
		push();
		translate(700,50);
		arc(0,0,30,30,0,(3*HALF_PI));
		triangle(0,-10,0,-20,5,-15);
		pop();

		line(740,30,740,60);
		line(760,30,760,60);

		push();
		strokeWeight(2);
		translate(50,50);
		push();
		rotate(-HALF_PI/2);
		ellipse(0,0,40,40);
		fill(255);
		triangle(0,-10,3,-4,-3,-4);
		stroke(0);
		line(0,-2,0,15);
		rectMode(CENTER);
		rect(0,15,3,4);
		pop();
		text("Arrows:"+arrows,40,10);
		pop();

		if(gMenu)
		{
			stroke(0);
			fill(255);
			rect(300,200,300,200);
			fill(0);
			noStroke();
			textSize(30);
			text("You Want to quit ?",325,250);
			text("YES!",350,325);
			text("NO!",475,325);

		}
		if(gameOver)
		{
			xfix=true;yfix=true;
			textSize(100);
			fill(0);
			text("GAME OVER",150,300);
		}
	}
	if(credit)
	{
		fill(255);
		text("Designed & Creater by Osman Mustafa\nQuddusi",50,300);
		text("BACK",600,500);

	}
	if(help)
	{
		fill(255);
		text("Press space to lock the location \nof sliders on each axis.\nThe intersecion of which will be \nconsidered for the score.",50,300);
		text("BACK",600,500);

	}}

}
function mousePressed()
{
	if(mouseX>250&&menu)
	{
		if(mouseY>340&&mouseY<400&&mouseX<500)
		{
			menu=false;
			game=true;
		}
		if(mouseY>420&&mouseY<460&&mouseX<420)
		{
			menu=false;
			credit=true;
		}
		if(mouseY>490&&mouseY<550&&mouseX<340)
		{
			menu=false;
			help=true;
		}
		if(mouseY>560&&mouseY<600&&mouseX<340)
		{
			menu=false;
			close();

		}
		return;

	}
	if(credit&&mouseX>600&&mouseX<700&&mouseY<500&&mouseY>440)
 	{
 		menu=true;
 		credit=false;
		return;
 	}
	if(help&&mouseX>600&&mouseX<700&&mouseY<500&&mouseY>440)
	 {
		 menu=true;
		 help=false;
		 return;
	 }
	if(game&&mouseX>685&&mouseX<715&&mouseY<60&&mouseY>30)
	{
		gameOver=false;
		arrows=10;
		score=0;
		tarsiz=siz=400;
		mx=400;
		my=300;
		x=196;
		inc=0;
		maxinc=0;
		xfix=false;
		yfix=false;
		return;
	}
	else if(game&&mouseX>740&&mouseX<760&&mouseY<60&&mouseY>30&&!gameOver)
	{
		gMenu=true;
		return;
	}
	if(gMenu&&mouseX>350&&mouseX<420&&mouseY<330&&mouseY>300)
	{
		gMenu=false;
		game=false;
		x=196;y=96;
		menu=true;
		return;
	}
	if(gMenu&&mouseX>480&&mouseX<530&&mouseY<330&&mouseY>300)
	{
		gMenu=false;
		return;
	}
	
	   if(!xfix&&!gMenu){
			xfix=true;
			xval=x;
			return;
		}
		if(!yfix&&xfix&&!gMenu){
			yfix=true;
		  	yval=y;
			var d=dist(xval,yval,mx,my);
			if(d>siz/2)
			{arrows-=1;}
			score=score+ceil(map(d,0,siz/2,10,0));
			return;
		}
		if(xfix&&yfix&&!gMenu)
		{
			xfix=false;
			dis=255;
			changeTar();
			return;
		}
}
function keyPressed()
{
	if(key==' '&&!gameOver)
	{
    if(!xfix&&!gMenu){
			xfix=true;
			xval=x;
			return;
		}
		if(!yfix&&xfix&&!gMenu){
			yfix=true;
		  yval=y;
			var d=dist(xval,yval,mx,my);
			if(d>siz/2)
			{arrows-=1;}
			score=score+ceil(map(d,0,siz/2,10,0));
			return;
		}
		if(xfix&&yfix&&!gMenu)
		{
			xfix=false;
			dis=255;
			changeTar();
			return;
		}
	}

}
function changeTar()
{
	tari=tarsiz/2;
	my=random(96+tari,504-tari);
	mx=random(196+tari,604-tari);
}
