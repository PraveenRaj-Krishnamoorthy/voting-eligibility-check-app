class classes {
    constructor(name, voter, age) {
        this.n = name;
        this.v = voter;
        this.a = age;
    }
    condition() {
        if (this.a >=18) {
            this.e = true
            if (this.v == "yes") {
                true
            } else {
                false
                alert("Apply Voter ID!")
            }
        } else {
            alert("Below 18!")
            this.e = false
        }
    }
    display() {
        let output = document.querySelector(".show");
        output.innerHTML =
            `
    Name : ${this.n}<br>
    Elidgibility : ${this.v == true && this.a==true ? "Elidgible" : "Not elidgible"}<br>
    Age : ${this.e == true && this.a == true ? this.a : "Not Eligible!"}
    `}
}

const func = () => {
    let form = document.forms["formdata"];
    let user = form["user"].value;
    let voter = form["r1"].value;
    let age = form["age"].value;
    let vote = new classes(user, voter, age);
    vote.condition();
    vote.display();
}