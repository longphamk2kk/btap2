class Company {
    nameC;
    establishedDate;
    country;
    businessType;
    employees;

    constructor(nameC, establishedDate, country, businessType, employees) {
        this.nameC = nameC;
        this.establishedDate = establishedDate;
        this.country = country;
        this.businessType = businessType;
        this.employees = employees;
    }
    showEmployee() {

    }
    showCeo() {

    }
    showManager() {

    }
    showStaff() {

    }
}


class Employees extends Company {
    nameE;
    sex;
    age;
    adress;

    constructor(nameC, establishedDate, country, businessType, employees, nameE, sex, age, adress) {
        super(nameC, establishedDate, country, businessType, employees)
        this.nameE = nameE;
        this.sex = sex;
        this.age = age;
        this.adress = adress;
    }
}


class Manager extends Employees {
    managementStyle;
    constructor(nameC, establishedDate, country, businessType, employees, nameE, sex, age, adress, managementStyle) {
        super(nameC, establishedDate, country, businessType, employees, nameE, sex, age, adress)
        this.managementStyle = managementStyle;
    }

}


class Staff extends Employees {
    experienceStaff;
    constructor(nameC, establishedDate, country, businessType, employees, nameE, sex, age, adress, experienceStaff) {
        super(nameC, establishedDate, country, businessType, employees, nameE, sex, age, adress, )
        this.experienceStaff = experienceStaff;
    }
}


class Ceo extends Employees {
    strategy;
    constructor(nameC, establishedDate, country, businessType, employees, nameE, sex, age, adress, strategy) {
        super(nameC, establishedDate, country, businessType, employees, nameE, sex, age, adress)
        this.strategy = strategy;
    }
}
let company = new Company("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"])
console.log(company);
let staff1 = new Staff("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", 20)
console.log(staff1);
let staff2 = new Staff("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", 20)
console.log(staff2);
let staff3 = new Staff("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", 20)
console.log(staff3);
let staff4 = new Staff("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", 20)
console.log(staff4);
let staff5 = new Staff("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", 20)
console.log(staff5);
let manager1 = new Manager("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", "alo alo 1234")
console.log(manager1);
let manager2 = new Manager("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", "alo alo 1234")
console.log(manager2);
let manager3 = new Manager("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", "alo alo 1234")
console.log(manager3);
let manager4 = new Manager("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", "alo alo 1234")
console.log(manager4);
let manager5 = new Manager("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", "alo alo 1234")
console.log(manager5);
let manager6 = new Manager("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", "alo alo 1234")
console.log(manager6);
let manager7 = new Manager("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", "alo alo 1234")
console.log(manager7);
let manager8 = new Manager("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", "alo alo 1234")
console.log(manager8);
let manager9 = new Manager("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", "alo alo 1234")
console.log(manager9);
let manager10 = new Manager("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", "alo alo 1234")
console.log(manager10);
let ceo = new Ceo("ABC", "11 / 11 / 1111", "Viet Nam ", "maketting", ["nhan vien 1", "nhan vien 2"], "Long", "male", "Ninh Binh", "co lam moi co an")
console.log(ceo);