import IUser from "./User";


export default interface IToken {
    access_token: string;
    user: IUser;
}