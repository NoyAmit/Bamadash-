const Bamadash = {
    calc(operand1, operand2, operator) 
    {
        let answer;
         if (operator = "*") answer = operand1 * operand2;
         if (operator = "-") answer = operand1 - operand2;
         if (operator = "+") answer = operand1 + operand2;
         if (operator = "/") answer = operand1 / operand2;
    } ,
    compact(array)
    {
        array.forEach(element) 
            while(element != null & element != false & element != 0 & element != NaN & element != "" & element != undefined)
            {
                console.log(element);
            }

    },
    intersection(array1,array2, isStrict){
        throw new Error("Method not implimented.");
    },
    filter(array) {
        throw new Error("Method not implimented.");
    },
    size(collection) { 
        throw new Error("Method not implimented.");
    },
    castArray(value) {
        throw new Error("Method not implimented.");
    }
}

module.exports = Bamadash;