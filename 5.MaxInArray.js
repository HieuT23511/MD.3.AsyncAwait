async function maxInArray(arr) {
        if (arr instanceof Array) {
         return Math.max(...arr)
        }
        throw new Error(`Not a Array...`)
}
async function show(arr){
    try{
        console.log(await maxInArray(arr))
    }
    catch (error){
        console.log(error)
    }
}
let arrayNeedFindMaxElement = [1,2,3,4,5,6]
show(arrayNeedFindMaxElement)