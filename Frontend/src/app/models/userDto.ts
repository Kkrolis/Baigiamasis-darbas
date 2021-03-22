export class UserDto {

    userName: string;
    firstName: string;
    lastName: string;
    userPassword: string;
    userEmail: string;

    constructor (userName: string, firstName: string, lastName: string, userPassword: string, userEmail: string) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userPassword = userPassword;
        this.userEmail = userEmail;
    }

}