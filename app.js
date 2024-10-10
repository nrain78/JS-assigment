// //////--------------CH____________06;
// QNO 1;
document.write("<h2>pre post</h2>")
let a = 5;
document.write(`The value of a is = ${5} <br> <br>`);
let b = ++a;
document.write(`The value of ++a is = ${b} <br>`)
document.write(`Now the value of a is 6 <br> <br>`)
document.write(`The value of a++ is = ${b} <br>`);
let c = a++;
document.write(`Now the value of a is = ${c = a++} <br><br>`);
let d = --a;
document.write(`the value of --a is = ${d = --a} <br>`);
document.write(`The value of a is ${d}<br><br>`);
document.write(`The value of a is = 6<br>`);
let e = a--;
document.write(`Now The value of a-- is = ${e = a--} `);

// QNO 02;
document.write("<h2>PRE-POST INCREMENT AND DECREMENT</h2>")
let i = 2;
let z = 1;
document.write(`i =${2}<br>`);
document.write(`z =${1}<br>`);
document.write(`<h3>Stage #01; --a<br></h3>`)
document.write(`--a means pre-decrement. This decreases the value of a by 1 before using it.<br>
    So the value of a becomes 1. <br>
    So after --a the value of a is 1 <br>
    <h3> Stage #02; --a - --b</h3><br>
    --a already becomes a = 1. <br>
    Now --b means pre-decrement on b.<br>
    b was initially 1.so --b becomes = 0.<br>
    So the expression is 1 - 0. <br>
    Result after this stage is = 1.<br>
    <h3> Stage #03; --a - --b + ++b</h3><br>
    --a - --b has already value calculates is = 1.<br>
    Now we calculate value ++b .<br>
    ++b it means pre-increment on b.<br>
    This increases the value of b by 1 before using it.<br>
    b was 0, so ++b makes b 1.<br>
    Now the expression is 1 + 1.<br>
    Result after this stage: 2.<br>
    <h3>Stage #04; --a - --b + ++b + b--</h3><br>
    We already  know --a - --b + ++b.<br>
    b-- means post decrement. it means the value of b is used first<br>
    then decreased it.<br>
    So the value of b is currently 1, so b-- uses the value 1, and then b becomes 0<br>
    The expression is now becomes 2 + 1 = 3.<br>
    <h3> Final values </h3><br>
    a = 1 (from the first pre-decrement --a)<br>
    b = 0 (after b--)<br>
    result = 3.<br>
    <h3>Summary</h3>
    a = 1,
    b = 0,
    result = 3.<br>`)

    // QNO 03;
    document.write("<h2>Greet User</h2>")
    let name = prompt("enter a name");
    document.write(`Welcome ${name}`);

    // QNO 06;
    function calculateResult() {
        // a) Take three subjects name from user
        let subject1 = document.getElementById("subject1").value;
        let subject2 = document.getElementById("subject2").value;
        let subject3 = document.getElementById("subject3").value;

        // b) Total marks for each subject is 100
        var totalMarksPerSubject = 100;

        // c) & d) Take obtained marks for each subject
        let marks1 = parseFloat(document.getElementById("marks1").value);
        let marks2 = parseFloat(document.getElementById("marks2").value);
        let marks3 = parseFloat(document.getElementById("marks3").value);

        // e) Calculate total marks and percentage
        let totalObtainedMarks = marks1 + marks2 + marks3;
        let totalMarks = totalMarksPerSubject * 3;  // Total marks for 3 subjects
        let percentage = (totalObtainedMarks / totalMarks) * 100;

        // Display the result in a table
        let resultSection = document.getElementById("resultSection");
        resultSection.innerHTML = `
            <h3>Result</h3>
            <table border = "black" >
                <tr>
                    <th>Subject</th>
                    <th>Total Marks</th>
                    <th>Obtained Marks</th>
                </tr>
                <tr>
                    <td>${subject1}</td>
                    <td>${totalMarksPerSubject}</td>
                    <td>${marks1}</td>
                </tr>
                <tr>
                    <td>${subject2}</td>
                    <td>${totalMarksPerSubject}</td>
                    <td>${marks2}</td>
                </tr>
                <tr>
                    <td>${subject3}</td>
                    <td>${totalMarksPerSubject}</td>
                    <td>${marks3}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <th>${totalMarks}</th>
                    <th>${totalObtainedMarks}</th>
                </tr>
                <tr>
                    <th colspan="2">Percentage</th>
                    <th>${percentage.toFixed(2)}%</th>
                </tr>
            </table>
        `;
    }

// QNO 03
function displayTable() {
    // Get the number input from the user
    let number = document.getElementById("numberInput").value;
    
    // If the input is empty, use 5 as the default value
    if (number === "") {
        number = 5;
    } else {
        number = parseInt(number); // Convert input to a number
    }
    
    // Create the multiplication table
   let tableHTML = "<h3>Multiplication Table of " + number + ":</h3>";
    tableHTML += "<table>";
    for (let i = 1; i <= 10; i++) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + number + "</td>";
        tableHTML += "<td>x</td>";
        tableHTML += "<td>" + i + "</td>";
        tableHTML += "<td>=</td>";
        tableHTML += "<td>" + (number * i) + "</td>";
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    // Display the table in the browser
    document.getElementById("tableSection").innerHTML = tableHTML;
}

