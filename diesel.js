function calculateFines(str) {
    const arr = JSON.parse(str)
    let sum = 0
    let cars = []
    let carsI = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][3] < 2000) {
            sum += 20
            cars[carsI] = {
                reg:arr[i][2],
                year:arr[i][3],
                fuel:arr[i][4],
                fine:20
            }
            carsI++
            continue
        }
        if (arr[i][3] < 2015 && arr[i][4] == "diesel") {
            sum += 10
            cars[carsI] = {
                reg:arr[i][2],
                year:arr[i][3],
                fuel:arr[i][4],
                fine:10
            }
            carsI++
        }
    }
    return JSON.stringify({totalFines:sum, cars:cars})
}