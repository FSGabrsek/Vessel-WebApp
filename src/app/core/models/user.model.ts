import { Generic } from "./generic.model";

export class User extends Generic {
    username: String;
    email: String;
    dateOfBirth: Date;

    constructor(id: number, username: String, email: String, dateOfBirth: Date) {
        super(id);

        this.username = username;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }
}