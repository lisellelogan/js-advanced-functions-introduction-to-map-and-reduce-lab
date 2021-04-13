//mapToNegativize function //=> returns array with all values made negative
function mapToNegativize(srcArray){
    return srcArray.map(num => num*-1);
}

//function mapToNoChange //=> returns array with original values
function mapToNoChange(srcArray){
    return srcArray.map(num => num);
}

function mapToDouble(srcArray){
    return srcArray.map(num => num*2)
}

function mapToSquare(srcArray){
    return srcArray.map(num => num**2)
}

//REDUCE-LIKE METHODS
function reduceToTotal(srcArray, startPoint=0){
    srcArray.map(num => 
        startPoint += num
    )

    return startPoint
}

function reduceToAllTrue(srcArray){
    let allTrueValues = true
    srcArray.forEach(num => {
        if (!!num === false) {
            allTrueValues = false
        }
    })
    return allTrueValues
}

function reduceToAnyTrue(srcArray){
    let allTrueValues = false
    srcArray.forEach(num => {
        if (!!num) {
            allTrueValues = true
        }
    })
    return allTrueValues
}
