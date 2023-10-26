import { defineStore } from "pinia";

export const useFormRegisterStore = defineStore({
    id: "formRegister",
    state: () => ({
        //Correo UCB y codigo
        ucbEmail: "",
        code: "",
        //Datos personales
        name: "",
        firstLastName: "",
        secondLastName: "",
        documentNumber: "",
        documentComplement: "",
        cellPhoneNumber: "",
        isStudent: true,
        campus: "",
        career: "",
        yearOfEntry: "",
        password: "",
        confirmPassword: "",
    }),
    actions: {
        //Correo UCB y codigo
        setUcbEmail(ucbEmail) {
            this.ucbEmail = ucbEmail;
        },
        setCode(code) {
            this.code = code;
        },
        //Datos personales
        setName(name) {
            this.name = name;
        },
        setFirstLastName(firstLastName) {
            this.firstLastName = firstLastName;
        },
        setSecondLastName(secondLastName) {
            this.secondLastName = secondLastName;
        },
        setDocumentNumber(documentNumber) {
            this.documentNumber = documentNumber;
        },
        setDocumentComplement(documentComplement) {
            this.documentComplement = documentComplement;
        },
        setCellPhoneNumber(cellPhoneNumber) {
            this.cellPhoneNumber = cellPhoneNumber;
        },
        setIsStudent(isStudent) {
            this.isStudent = isStudent;
        },
        setCampus(campus) {
            this.campus = campus;
        },
        setCareer(career) {
            this.career = career;
        },
        setYearOfEntry(yearOfEntry) {
            this.yearOfEntry = yearOfEntry;
        },
        setPassword(password) {
            this.password = password;
        },
        setConfirmPassword(confirmPassword) {
            this.confirmPassword = confirmPassword;
        },
        
    },

});