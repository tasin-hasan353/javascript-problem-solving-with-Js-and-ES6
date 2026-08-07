/*
// This is a way 
const modifiedStudent = (student)=> {
    
    const studentWithGrade = [...student];

    
    
    
    for(const obj of studentWithGrade) {
        
        if(typeof obj.marks !== "number") {
            return "Invalid";
        }

        if(obj.marks >= 90) {
            obj.grade = "A+";
        }else if(obj.marks >= 80) {
            obj.grade = "A";
        }else if(obj.marks >= 70) {
            obj.grade = "B";
        }else if(obj.marks >= 50) {
            obj.grade = "B-";
        }else {
            obj.grade = "Fail";
        }
        
    }
   
    return studentWithGrade;
    

}

const student = [
    {name: "Tasin", marks: 95},
    {name: "Siam", marks: 40}, 
    {name: "Hasan", marks: 70}
]

console.log(modifiedStudent(student));




// This is another way

function getGrade(marks) {
    if(marks >= 90) {
        return "A+"
    }else if(marks >= 80) {
        return "A";
    }else if(marks >= 60) {
        return "B";
    }else {
        return "F";
    }
}


const modifiedStudent = (students) => {
    
    // const [{name, marks}] = students;

    const resultWithGrade = students.map((student) => {
        const {name, marks} = student;

        const newStudentWithGrade = {name, marks, grade: getGrade(marks)};

        return newStudentWithGrade;

    })

    return resultWithGrade;

}


const students = [
    {name: "Tasin", marks: 95},
    {name: "Siam", marks: 40}, 
    {name: "Hasan", marks: 70}
]



console.log(students);
console.log(modifiedStudent(students));
*/



const cartCalculator = prducts=> {
    // console.log(prducts);

    let totalItem = 0;
    let totalPrice = 0;
    for(const singleProd of prducts) {
        const {price, qty} = singleProd;
        
        totalItem = totalItem + qty;
        totalPrice = totalPrice + (price * qty);

    }

    return `Total: ${totalItem || 0} items, ${totalPrice || 0} Taka`;

}



const products = [
    {name: "Pen", price: 100, qty: 1},
    {name: "Notebook", price: 100, qty: 2},
    {name: "Notebook", price: 500, qty: 2},
]

// console.log(undefined + 2000);
console.log(cartCalculator(products));
