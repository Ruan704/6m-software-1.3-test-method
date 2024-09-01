   
/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames(){
    // Add code here
    const LengthOfstudentList = studentList.length;

    for (i = 0; i < LengthOfstudentList; i++) {
        console.log("The student name : " + studentList[i]);
    }

    return studentList;
}

printStudentNames();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}
