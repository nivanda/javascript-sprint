export let rectObj = {
    width:50,
    height:30,
    area() {
        return this.width * this.height  
    },
    perimeter() {
        return (this.width * 2) + (this.height * 2)
    }
}