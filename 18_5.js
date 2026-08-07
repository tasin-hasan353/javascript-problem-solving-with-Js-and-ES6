/*
const getMostExpensiveProduct = (obj)=> {
    let highestPrice = 0;
    let expensiveProduct = "";
    for(const key in obj) {
        // console.log(typeof obj[key]);
        if(obj[key] > highestPrice) {
            highestPrice = obj[key];
            expensiveProduct = "" + key;
        }

    }

    console.log(expensiveProduct);

    
}


getMostExpensiveProduct({pen: 20, book: 150, bag: 500, pen: 40});



const user1 = {
    name: "Akash", 
    address: {
        city: "Comilla",
    },
}

console.log(user1?.address?.city?.home?.log);



const addGrade = (allStudent) => {
    // console.log(allStudent);
    for(const student of allStudent) {
        
        if(typeof student.marks !== "number") {
            return "Invalid";
        }

        if(student?.marks >= 90) {
            student.marks = "A+";
        }else if(student?.marks >= 80) {
            student.marks = "A";
        }else if(student?.marks >= 60) {
            student.marks = "B";
        }else {
            student.marks = "Fail"
        }
    }

    return allStudent;

}


console.log(addGrade([{name: "Tasin", marks: 95},
{name: "Karim", marks: 70},
{name: "HEllo", marks: 40}
]))

*/

const addGrade = (allStudent) => {
    // console.log(allStudent);
    //  for(const student of allStudent) {
    //     console.log(student);
    //     if(typeof student.marks !== "number") {
    //         return "Invalid";
    //     }
    //  }

    const hasInvalid = allStudent.some((student)=> typeof student.marks !== "number");
    console.log(hasInvalid);

    if(hasInvalid) {
        return "Invalid";
    }

    const updatedGrade = allStudent.map((student) => {
       

        if(student.marks >= 90) {
            student.marks = "A+";
            student.performance = "Excellent";
        }else if(student.marks >= 80) {
            student.marks = "A";
        }else if(student.marks >= 60) {
            student.marks = "B";
        }else {
            student.marks = "Fail"
        }

        return student;

    })

    return updatedGrade;

}


console.log(addGrade([{name: "Tasin", marks: 94},
{name: "Karim", marks: 80},
{name: "HEllo", marks: 40}
]))
