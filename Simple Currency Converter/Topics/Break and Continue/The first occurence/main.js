function find5(numbers) {
    for(let [index, number] of numbers.entries()){
        if(number === 5){
            return index;
        }
    }
    return -1;
}
