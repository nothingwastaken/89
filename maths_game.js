player1_name = localStorage.getItem("player_1name");
player2_name = localStorage.getItem("player_2name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

console.log(player1_name);
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";


document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
a_a = parseInt(number1) * parseInt(number2);

question_word = "<h4>" + number1 + "X" +  number2 + "</h4>";
input_box = "<br> Answer: <input type = 'text' id = 'input_check_box'>";
c_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
row = question_word + input_box + c_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}


player_answer = "player2"
player_question = "player1"

function check(){
   answer = document.getElementById("input_check_box").value;
    if (answer == a_a){
        if (player_answer == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
    }
    }
    if(player_question == "player1"){
        player_question = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        player_question = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if(player_answer == "player1"){
        player_answer = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        player_answer = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
    }
