// later in the code we wll replace this tranisent storage with a communication channel which will send the data to the back-end to be saved in the permanent storage.
let local_temp_store = {
    customers: []
}

export default local_temp_store;