export interface LoginSuccessful {
    token: string;
}

export interface IUser {
    id: number;
    email: string;
    name: string;
    surname: string;
    avatar: string;
}

export interface SingleUserResponse {
    data: IUser;
    support: {
        url: string;
        text: string;
    }
}