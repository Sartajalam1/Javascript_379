// Singlton
// objects.create

// Objects literals

const mySym = Symbol("key1");
const JsUser = {
    name: "Sartaj",
    "full name": "Sartaj alam",
    [mySym]: "mykey1",
    age: 20,
    location: "Chennai",
    email: "sartaj23@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser);