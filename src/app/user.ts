export class User {
    constructor(
        public firstname: string,
        public middlename : string,
        public lastname: string,
        public email: string,
        public state: String,
        public district : String,
        public zipcode : number | undefined | null,
        public phone: number | undefined | null,
        public topic: string,
        public timePreference: string,
        public gender : String,

    ) {}
}
