function calculateResult() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let english = Number(document.getElementById("english").value);
    let math = Number(document.getElementById("math").value);
    let physics = Number(document.getElementById("physics").value);
    let chemistry = Number(document.getElementById("chemistry").value);
    let dsa = Number(document.getElementById("computer").value);

    if (name === "" || roll === "") {
        alert("Please enter student name and roll number.");
        return;
    }

    if (
        english < 0 || english > 100 ||
        math < 0 || math > 100 ||
        physics < 0 || physics > 100 ||
        chemistry < 0 || chemistry > 100 ||
        computer < 0 || computer > 100
    ) {
        alert("Marks should be between 0 and 100.");
        return;
    }

    let total = english + math + physics + chemistry + computer;

    let percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else if (percentage >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }

    let result;

    if (
        english >= 33 &&
        math >= 33 &&
        physics >= 33 &&
        chemistry >= 33 &&
        computer >= 33
    ) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    document.getElementById("output").innerHTML = `

        <h2>Student Information</h2>

        <p><b>Student Name:</b> ${name}</p>
        <p><b>Roll Number:</b> ${roll}</p>

        <table>

            <tr>
                <th>Subject</th>
                <th>Marks</th>
            </tr>

            <tr>
                <td>English</td>
                <td>${english}</td>
            </tr>

            <tr>
                <td>Mathematics</td>
                <td>${math}</td>
            </tr>

            <tr>
                <td>Physics</td>
                <td>${physics}</td>
            </tr>

            <tr>
                <td>Chemistry</td>
                <td>${chemistry}</td>
            </tr>

            <tr>
                <td>Computer</td>
                <td>${dsa}</td>
            </tr>

        </table>

        <div class="result">

            <p><b>Total Marks:</b> ${total} / 500</p>

            <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>

            <p><b>Grade:</b> ${grade}</p>

            <p><b>Result:</b> ${result}</p>

        </div>
    `;
}