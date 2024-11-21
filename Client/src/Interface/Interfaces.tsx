export interface IUser{
    username : string,
    password : string,
    image : string

}

export interface IComment {
    content : string
    author? : string
}

export interface IPuzzels {
    title : string,
    content : string,
    author? : string,
    comments : IComment[]
}

