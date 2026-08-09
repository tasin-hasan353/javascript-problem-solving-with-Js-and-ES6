

const applyBonusPoints = (users, bonus) => {
    const result = users.map(user => {
        const {name, points} = user;
        const newObj = {name , points};
        newObj.points = points + bonus;

        return newObj;
    })

    // console.log(result);
    return result;

}

const users = [{ name: "Rafi", points: 20 }, {name: "Tasin", points: 15}];
const bonus = 5;

console.log(users);
console.log(applyBonusPoints(users, bonus))