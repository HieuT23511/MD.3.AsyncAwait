async function getDivision(a, b) {
    if (b !== 0) return (a / b);
    throw new Error("Math error");
}

async function show() {
    try {
        let result = await getDivision(3, 3);
        console.log(result)
    } catch (error) {
        console.log(error.message);
    }
}
show();