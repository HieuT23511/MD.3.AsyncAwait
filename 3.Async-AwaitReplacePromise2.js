async function onMyBirthDayAsync(isKayoSick) {
    if (!isKayoSick) return 2;
    throw new Error("Error! I am sad. I can't go to the ")
}

async function show(){
try {
    let result = await onMyBirthDayAsync(false);
    console.log(`I have  ${result} cakes for `)
} catch (err) {
    console.log(err.message)
} finally {
    console.log(`Party`)
}
}
show()

