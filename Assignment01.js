function startQuiz() {

    let name = document.getElementById("name").value;
    let rollno = document.getElementById("rollno").value;
    let section = document.getElementById("section").value;

    if (name === "" || rollno === "" || section === "") {
        alert("Please fill all the details");
        return;
    }

    window.location.href = "quiz.html";
}