import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
let persons = new Person();
let startProgram = async (persons) => {
    console.log(chalk.bold.magentaBright("*** Welcome to the Program... ***"));
    do {
        let answer = await inquirer.prompt([{
                name: "Select",
                type: "list",
                message: "Who do you want to talk to?",
                choices: ["Teacher", "Student", "Exit"]
            }]);
        if (answer.Select == "Teacher") {
            console.log(chalk.yellowBright(`Hello Teacher! How are You?`));
        }
        else if (answer.Select == "Student") {
            let engageStudent = await inquirer.prompt([{
                    name: "student",
                    type: "input",
                    message: "Which student do you want to talk to?"
                }]);
            let student = persons.students.find(val => val.name == engageStudent.student);
            if (!student) {
                let newStudent = new Student(engageStudent.student);
                persons.addStudent(newStudent);
                console.log(`Hello' ${newStudent.name} Nice to meet you!`);
                console.log(chalk.yellowBright("How are you?"));
                console.log("\nNew Student!!! This student added in your list:");
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello' ${engageStudent.student} Nice to see you again!`);
                console.log(chalk.yellowBright("How are you? \n"));
                console.log(persons.students);
            }
        }
        else if (answer.Select == "Exit") {
            console.log(chalk.bold.magenta("*** Exiting the Program ***"));
            process.exit();
        }
    } while (true);
};
startProgram(persons);
