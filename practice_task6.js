
const createIdGenerator = () => {
    let id = 1;

    return function generatingID() {
       console.log(id);
        id++;
    }

}


const generateID = createIdGenerator();
const geneRateTimer = createIdGenerator();

generateID();
generateID();
generateID();
generateID();
generateID();

geneRateTimer();
geneRateTimer();
geneRateTimer();
geneRateTimer();
