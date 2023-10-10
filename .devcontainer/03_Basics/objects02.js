// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id  = "123abc"
tinderUser.name = "sagar"
tinderUser.isLoggedIn = false
tinderUser.lastName = "khan"
// console.log(tinderUser);

const regularUser = {
    email: "Sagar@gmail.com",
    fullname:{
        userFullName: {
            firstname: "jimmy",
            lastname: "siker"
        }
    }
}
 
// object ke andar objects access kar sakte hai Dot(.) ka use karke, Dot lagte jao aur objects kender ka object acsses katre jao
// console.log(regularUser.fullname.userFullName)

// Two onjects ko kaise Add kar sakte hai syntax 
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

// const obj3 = {obj1, obj2}
// const obje3 = Object.assign({}, obj1, obj2)

//Spread Method 
const obj3 = {...obj1, ...obj2}
console.log(obj3);