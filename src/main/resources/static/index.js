let tickets = [];
$(function (){
    getTicket();
    getMovie();
})
function getMovie(){
    $.get("/getMovie",function (movies){
        formatMovies(movies);
    });
}
function formatMovies(movies){
    let out = "<select id='chosenMovie' required><option label='Velg film her'></option>";
    for (const movie of movies){
        out += "<option>"+movie.movie+"</option>"
    }
    out += "</select>"
    $("#movie").html(out);
}
function validation(){
    let errorCount = 0;
    let validphone = document.getElementById("phonenb").checkValidity();
    let validemail = document.getElementById("email").checkValidity();
    let validnumber = document.getElementById("number").checkValidity();
    let chosenMovie = $("#chosenMovie").val();
    let inNumber = $("#number").val();
    let infirstname = $("#firstname").val();
    let inlastname = $("#lastname").val();
    let inphone = $("#phonenb").val();
    let inemail = $("#email").val();

    if (chosenMovie === "" || chosenMovie === "Velg film her"){
        errorCount++
    }
    if (inNumber === 0 || inNumber ===""){
        $("#wrongNumber").text("Må skrive noe inn i antall");
        errorCount++
    }
    else {
        $("#wrongNumber").text("");
    }
    if (infirstname === ""){
        $("#wrongFirstname").text("Må skrive noe inn i fornavnet");
        errorCount++
    }
    else {
        $("#wrongFirstname").text("");
    }
    if (inlastname=== ""){
        $("#wrongLastname").text("Må skrive noe inn i etternavnet");
        errorCount++
    }
    else {
        $("#wrongLastname").text("");
    }
    if (inphone === ""){
        $("#wrongPhonenb").text("Må skrive noe inn i telefonnr");
        errorCount++
    }
    else {
        $("#wrongPhonenb").text("");
    }
    if (inemail === ""){
        $("#wrongEmail").text("Må skrive noe inn i eposten");
        errorCount++
    }
    else {
        $("#wrongEmail").text(   "");
    }
    if (!validphone||!validemail||!validnumber){
        errorCount++
    }
    return errorCount > 0;
}
function regTicket(){
    const ticket = {
        movie : $("#chosenMovie").val(),
        number : $("#number").val(),
        firstname : $("#firstname").val(),
        lastname : $("#lastname").val(),
        phonenb : $("#phonenb").val(),
        email : $("#email").val()
    };
    if (validation() === false){
        tickets.push(ticket);
        $.post("/saveTicket", ticket, function (){
            getTicket();
        });
        $("#chosenMovie").val("")
        $("#number").val("")
        $("#firstname").val("")
        $("#lastname").val("")
        $("#phonenb").val("")
        $("#email").val("")
    }
}
function getTicket(){
    $.get("/getTicket",function (data){
        formatTicket(data);
    })
}
function formatTicket(tickets){
    let out = "<table class='table table-striped'><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>"
    for (const ticket of tickets){
        out += "<tr><td>"+ticket.movie+"</td><td>"+ticket.number+"</td><td>"+ticket.firstname+"</td>" +
            "<td>"+ticket.lastname+"</td><td>"+ticket.phonenb+"</td><td>"+ticket.email+"</td></tr>"
    }
    out += "</table>"
    $("#allTickets").html(out);
}
function deleteTickets(){
    $.get("/deleteTicket",function (){
        getTicket();
    })
}
