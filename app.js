console.log("welcome to the page");
console.log("https://github.com/Breniah/COP3060_301");

const name = "Breniah";
console.log("Name:", name);
const age = "21";
console.log("Age: ",age);
const isMember = true;
console.log("Am i a member: ",isMember);
const hobbies = ["reading", "hiking", "gym", "swimming", "cooking", "coding"];
console.log("Hobbies: ",hobbies);
const user = {id:1, role: "admin"};
console.log("User Info: ",user);
let lastlogin = undefined;
console.log("Last Login: ",lastlogin);

const nextAge = age + 1;
console.log("In 2026 I'll be: ",nextAge);

const isExactly20  = age === 20;
console.log("I am not ", isExactly20);

if (isMember && age > 20){
  console.log("You're close to my age");
}else {
  console.log("You're ALOT younger than me BYEEEE");
}

const list = document.getElementById("hobbyList");
for (let i = 0; i < hobbies.length; i++) {
  const li = document.createElement("li");
  li.textContent = hobbies[i];
  list.appendChild(li);
}

function validateEmail(){
  const input = document.getElementById("emailInput").value;
  const status = document.getElementById("status").value;
}

if (input.length === 0) {
    status.textContent = "Please enter an email.";
    status.className = "fail";

  } else if (emailPattern.test(input)) {
    status.textContent = "Valid email!";
    status.className = "pass";
  } else {
    status.textContent = "Invalid email format.";
    status.className = "fail";
  }
}
  
