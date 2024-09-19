{
    //20-masala
    function foo(arr){
        if(arr.length % 2 != 0){
            let index = Math.floor(arr.length / 2)
            let result = arr[index]
            return `${arr} kiritilgan massivning uzunligi toq bo'lganda o'rtasidagi element ${result}`
        }
        else{
            let index = arr.length / 2
            let result = (arr[index] + arr[index - 1]) / 2
            return `${arr} kiritilgan massivning uzunligi juft bo'lganda uning o'rtasidagi sonlar yig'indisini 2 soniga bo'lingandagi natijasi ${result}`
        }
    }
    console.log(foo([1, 2, 3, 4, 5]));
}

{
    //21-masala
    function primeNumber(n){
        let count = 0
        for(i = 0; i <= n; i++){
            if(n % i == 0){
                count++
            }
        }
        if(count == 2){
            return `${n} soni tub son`
        }else{
            return `${n} soni tub son emas`
        }
    }
    console.log(primeNumber(23));
}

{
    //22-masala
    let n = 8
    let k = 0
    if(n % 2 !== 0){
        console.log(`${n} 2 ning darajasidagi son emas`);
    }else{
        while(n >= 2){
                n = n / 2
                k++
        }
        console.log(`Kiritilgan son 2 ning ${k} darajasidagi son`);
    }
}

{
    //23-masala
    function foo(n){
        let count = 0
        for(let i = 1; i < n; i++){
            if(n % i == 0){
                count += i
            }
        }
        if(n === count){
            return `${n} mukammal son`
        }else{
            return `${n} mukammal son emas`
        }
    }
    console.log(foo(6));
}

{
    //24-masala
    function foo(n){
        let arr = Array.from(String(n), Number)
        let count = 0
        for(let i = 1; i <= arr.length; i++){
            count++
        }
        return `${n} soni ${count} xonali son`
    }
    console.log(foo(23));
}

{
    //25-masala
    function foo(str){
        let splt = str.split(" ")
        let count = 0
        for(let i = 0; i < splt.length; i++)
            if(splt[i].includes(`a`) || splt[i].includes(`A`)){
                count++
            }
        return count
    }
    console.log(foo("Najot talim"));
}

{
    //26-masala va 34-masala. Ikki masalani sharti bir xil ekan
    function foo(str){
        let splt = str.split(" ")
        let small = splt[0]
        for(let i = 0; i < splt.length; i++){
            if(splt[i].length < small.length){
                small = splt[i]
            }
        }
        return `Berilgan Matn(String)da uzunligi eng kam bo'lgan so'z: ${small}`

    }
    console.log(foo("Men Front-end dasturchiman"));
}

{
    //27-masala
    function foo(n){
        if(typeof n === "number"){
            return `Kiritilgan argument son`
        }
        else if(typeof n === "string"){
            return `Kiritilgan argument String`
        }
        else{
            return  0
        }
    }
    console.log(foo("Hello"));
}

{
    //28-masala
    function foo(str){
        let result = str.split("").reverse().join("")
        return result

    }
    console.log(foo("Javascript"));
}

{
    //29-masala
    function foo(str){
        let count = 0
        let num = "1234567890"
        for(let i = 0; i < str.length; i++){
            if(num.includes(str[i])){
                count++
            }
        }
        return `(${str}) Ushbu String ichida ${count} ta son bor`

    }
    console.log(foo("Hello im 23 years"));
}

{
    //30-masala
    function foo(n){
        let result = n.toString().split("").reverse().join("")
        return Number(result)
    }
    console.log(foo(2564));
}

{
    //32-masala
    function minManWord(str){
        let splt = str.split(" ")
        let minWord = splt[0]
        let maxWord = splt[0]
        for(let i = 0; i < splt.length; i++){
            if(splt[i].length < minWord.length){
                minWord = splt[i]
            }
            if(splt[i].length > maxWord.length){
                maxWord = splt[i]
            }
        }
        return `minWord: ${minWord}, maxword: ${maxWord}`
    }
    console.log(minManWord("Men dasturlash kursida oqiyman"));
}

{
    //33-masala
    function getLevel(n){
        let result = []
        for(let i = 1; i <= n; i++){
            result.push(2**i)
        }
        return result
    }
    console.log(getLevel(4));
}

{
    //35-masala
    let obj = {a: 2, b: 3, c: 4}
    let n = 3
    let result = []
    for(let index in obj){
        result.push(obj[index] * n)
    }
    console.log(result);
}