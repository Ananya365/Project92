function login(){
    var player1 = document.getElementById("player_1_input").value;
    var player2 = document.getElementById("player_2_input").value;

    localStorage.setItem("Player 1",player1);
    localStorage.setItem("Player 2",player2);

    window.location="main_page.html";
}