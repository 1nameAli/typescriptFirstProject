import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        name: "first_num",
        type: "number",
    },
    { message: "Enter second number", name: "second_num", type: "number" },
    {
        message: "Enter any operator",
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"],
    },
]);
// Condtitional statements
if (answer.operator === "Addition") {
    console.log(`Your output is : ${answer.first_num + answer.second_num}  `);
}
else if (answer.operator === "Subtraction") {
    console.log(`Your output is : ${answer.first_num - answer.second_num} `);
}
else if (answer.operator === "Multiplication") {
    console.log(`Your output is : ${answer.first_num * answer.second_num} `);
}
else if (answer.operator === "Division") {
    console.log(`Your output is : ${answer.first_num / answer.second_num} `);
}
