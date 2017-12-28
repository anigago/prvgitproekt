let ulTag = document.getElementById("lista");


let person = {
    name:"Anita",
    lastname:"Gagovska",
    age:34,
    phones: ["070509509", "078836124"]

}

for (let i=0; i < person.phones.length; i = i+1) {
    let newLi = document.createElement("li");
    newLi.innerHTML = person.phones[i];
    ulTag.appendChild(newLi);
}