const data = [
    {
        question: "Which property is used to change the background color?",
        incorrectAnswers: ["color", "bgcolor", "bgColor"],
        correctAnswer: "background-color"
    },
    {
        question: "What does CSS stand for?",
        incorrectAnswers: ["Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "What is the correct HTML for referring to an external style sheet?",
        incorrectAnswers: ["<stylesheet>mystyle.css</stylesheet>", "<link rel='stylesheet' type='text/css' href='mystyle.css'", "<link rel='stylesheet' type='text/css' href='mystyle.css'"],
        correctAnswer: "<style src='mystyle.css'>"
    },
     {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        incorrectAnswers: ["In the <body> section", "At the end of the document", "In the <body> section"],
        correctAnswer: "In the head section"
    },
     {
        question: "Which HTML tag is used to define an internal style sheet?",
        incorrectAnswers: ["<style>", "<script>", "<style>"],
        correctAnswer: "<css>"
    }

]


export default data;