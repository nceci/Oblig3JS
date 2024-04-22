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
    let validphone = $("#phonenb")[0].checkValidity();
    let validemail = $("#email")[0].checkValidity();
    let validnumber = $("#number")[0].checkValidity();
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