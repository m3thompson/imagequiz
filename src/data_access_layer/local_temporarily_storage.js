import flowers from "../temp_data_repository/flowers";
import data from "../temp_data_repository/data"; 
// later in the code we wll replace this tranisent storage with a communication channel which will send the data to the back-end to be saved in the permanent storage.
let dataService = {
    customers: [],
    getFlowers: () => {
        return flowers;
    },
    getQuiz: (name) => {
        let quiz = data.find(x => x.name.toLowerCase() === name.toLowerCase());
        return quiz;

    }
}

export default dataService;