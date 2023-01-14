export class User {
    constructor(
        public id: number,
        public email: string,
        public name: string,
        public surname: string,
        public avatar: string,
    ) {}

    get fullName() {
        return this.name + ' ' + this.surname
    }
}