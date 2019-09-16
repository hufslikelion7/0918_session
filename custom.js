Array.prototype.myForEach = function(func) {
    // 채우세요!
}

Array.prototype.myFilter = function(func) {
    // 채우세요!
}

Array.prototype.myMap = function(func) {
    // 채우세요!
}

Array.prototype.myEvery = function(func) {
    // 채우세요!
}

// TEST CASES

const forEachTest = () => {
    const testArray = [1,2,3,4,5]
    const a1 = []
    const a2 = []
    function multiplyTen(el)  {
        return el*10
    }
    testArray.forEach(element => {
        a1.push(multiplyTen(element))
    })
    console.log(".forEach =>",a1)
    
    testArray.myForEach(element => {
        a2.push(multiplyTen(element))
    })
    console.log(".myForEach =>",a2)
    
    if (a1.length !== a2.length) {
        console.log("FAIL!\n")
        return
    }
    for(let i = 0; i < a1.length; i++) {
        if (a1[i]!==a2[i]) {
            console.log("FAIL!\n")
            return
        }
    }
    console.log("PASS!\n")
}

const filterTest = () => {
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const filterResult = words.filter(word => word.length > 6);
    const myFilterResult = words.myFilter(word => word.length > 6);
    
    console.log(".filter =>",filterResult)
    console.log(".myFilter =>",myFilterResult)

    if(myFilterResult===undefined || filterResult.length !== myFilterResult.length) {
        console.log("FAIL!\n")
        return
    }

    for(let i = 0; i < filterResult.length; i++) {
        if (filterResult[i]!==myFilterResult[i]) {
            console.log("FAIL!\n")
            return
        }
    }
    console.log("PASS!\n")
}

const mapTest = () => {
    const testArray = [1, 4, 9, 16];

    const mapArray = testArray.map(x => x * 2);
    const myMapArray = testArray.myMap(x => x * 2);

    console.log(".map =>", mapArray)
    console.log(".myMap =>", myMapArray)
    // expected output: Array [2, 8, 18, 32]

    if(myMapArray===undefined || mapArray.length !== myMapArray.length) {
        console.log("FAIL!\n")
        return
    }

    for(let i = 0; i < mapArray.length; i++) {
        if (mapArray[i]!==myMapArray[i]) {
            console.log("FAIL!\n")
            return
        }
    }
    console.log("PASS!\n")
}  

const everyTest = () => {
    const testArray = [1, 30, 39, 29, 10, 13]

    const every = testArray.every(num => num < 40)
    const myEvery = testArray.myEvery(num => num < 40)

    console.log(".every =>", every)
    console.log(".myEvery =>", myEvery)
    
    if (every !== myEvery) {
        console.log('FAIL!\n')
        return
    }
    console.log("PASS!\n")
}

forEachTest()
filterTest()
mapTest()
everyTest()



