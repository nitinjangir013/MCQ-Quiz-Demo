// Create variable
const textNumberDiv = document.getElementById('tn');
const btnsDiv = document.getElementsByClassName('btns');
const btnsDiv1 = document.getElementsByClassName('btns1');
textNumberDiv.style.display = 'block';
const textNumberDiv1 = document.getElementById('que_div');
const textNumberSelected = document.getElementById('text_number');
var counter = 3;
let setInter1 = setInterval(function()
	{
		if (counter<4) {
			textNumberSelected.innerHTML = counter;
			counter--;
		}
		if (counter==-1)
		{
			clearInterval(setInter1);
			textNumberDiv.style.display = 'none';
			textNumberDiv1.style.display = 'block';
			btnsDiv[0].style.display = 'block';
		}
	},1000);
const questionContainer = document.getElementById("que_div");
let question = '';
let questions = ["Javascript is an _______ language?","Which of the following keywords is used to define a variable in Javascript?","Which of the following methods is used to access HTML elements using Javascript?","Which of the following methods can be used to display data in some form using Javascript?"];
let q1 = {a:"Object-Oriented",b:"Object-Based",c:"Procedural",d:"None Of the Above",right:'a'};
let q2 = {a:"Var",b:"let",c:"Both A and B",d:"None Of the Above",right:'c'};
let q3 = {a:"getElementById()",b:"getElementsByClassName()",c:"Both A and B",d:"None Of the Above",right:'c'};
let q4 = {a:"document.write()",b:"console.log()",c:"window.alert()",d:"All Of the Above",right:'d'};
let options = [q1,q2,q3,q4];
question = '';
var ques_number = 0;
next();

// ---------------- Next Question btn function -------------------
function next() {
	textNumberDiv1.style.color = 'inherit';
	if (ques_number<options.length) {
	ques_number++;
	question='<h2 class="heading">Question : '+ques_number+'</h2><div class="question_div">'+questions[ques_number-1]+'</div><div class="options_container">';		
	question+="<div class='option_input'><input name='options_"+(ques_number-1)+"' type='radio' value='a'>"+options[(ques_number-1)].a+"</div>";
	question+="<div class='option_input'><input name='options_"+(ques_number-1)+"' type='radio' value='b'>"+options[(ques_number-1)].b+"</div>";
	question+="<div class='option_input'><input name='options_"+(ques_number-1)+"' type='radio' value='c'>"+options[(ques_number-1)].c+"</div>";
	question+="<div class='option_input'><input name='options_"+(ques_number-1)+"' type='radio' value='d'>"+options[(ques_number-1)].d+"</div></div><div class='btns1'><button class='btn_n' onclick='result(options["+(ques_number-1)+"])'>Result</button></div>";
	questionContainer.innerHTML = question;
	}
	
	match();
}

// ---------------- Previous Question btn function -------------------
function pre() {
	textNumberDiv1.style.color = 'inherit';
	if (ques_number<5) {
		if (ques_number>0) {
			ques_number--;
		}
	question='<h2 class="heading">Question : '+ques_number+'</h2><div class="question_div">'+questions[ques_number-1]+'</div><div class="options_container">';		
	question+="<div class='option_input'><input name='options_"+(ques_number-1)+"' type='radio' value='a'>"+options[(ques_number-1)].a+"</div>";
	question+="<div class='option_input'><input name='options_"+(ques_number-1)+"' type='radio' value='b'>"+options[(ques_number-1)].b+"</div>";
	question+="<div class='option_input'><input name='options_"+(ques_number-1)+"' type='radio' value='c'>"+options[(ques_number-1)].c+"</div>";
	question+="<div class='option_input'><input name='options_"+(ques_number-1)+"' type='radio' value='d'>"+options[(ques_number-1)].d+"</div></div><div class='btns1'><button class='btn_n' onclick='result(options["+(ques_number-1)+"])'>Result</button></div>";
	questionContainer.innerHTML = question;
	}
}


// ---------------- Result Function -------------------

function result()
{
	let userAnswer = document.querySelectorAll("input");
	let checkedOption = '';
	for(i=0;i<userAnswer.length;i++)
	{
		if(userAnswer[i].checked === true)
		{
			checkedOption = userAnswer[i].value;
		}
	}
	if (checkedOption==options[(ques_number-1)].right) {
		textNumberDiv1.style.color = 'Green';
		textNumberDiv1.innerHTML = '<div id="result_div">Right Answer</div>';
	}
	else
	{
		textNumberDiv1.style.color = 'Red';
		textNumberDiv1.innerHTML = '<div id="result_div">Wrong Answer</div>';
	}
}



// ------------------ Color Change -----------------------

const selectedColorDiv = document.getElementById('color');
var c = '';
var c_1 = '';
var c_2 = '';
setInterval(function () {
const rm_1 = parseInt(Math.random()*12);
const rm_2 = parseInt(Math.random()*12);
const rm_3 = parseInt(Math.random()*12);
	//color 1
	if (rm_1>10) {
		c = 'f';
	}
	else if (rm_1<10 && rm_1>8) {
		c = 'e';
	}
	else if (rm_1<8 && rm_1>6) {
		c = 'd';
	}
	else if (rm_1<6 && rm_1>4) {
		c = 'c';
	}
	else if (rm_1<6 && rm_1>4) {
		c = 'b';
	}
	else
	{
		c = 'a';
	}

	//color 2

	if (rm_2>10) {
		c_1 = 'f';
	}
	else if (rm_2<10 && rm_2>8) {
		c_1 = 'e';
	}
	else if (rm_2<8 && rm_2>6) {
		c_1 = 'd';
	}
	else if (rm_1<6 && rm_1>4) {
		c_1 = 'c';
	}
	else if (rm_1<4 && rm_1>2) {
		c_1 = 'b';
	}
	else
	{
		c_1 = 'a';
	}

	//color 3


	if (rm_3>10) {
		c_2 = 'f';
	}
	else if (rm_3<10 && rm_3>8) {
		c_2 = 'e';
	}
	else if (rm_3<8 && rm_3>6) {
		c_2 = 'd';
	}
	else if (rm_1<6 && rm_1>4) {
		c_2 = 'c';
	}
	else if (rm_1<6 && rm_1>4) {
		c_2 = 'b';
	}
	else
	{
		c_2 = 'a';
	}
	selectedColorDiv.style.transition = 'all 2s';
	selectedColorDiv.style.background = '#'+c+c_1+c_2;
},3000)