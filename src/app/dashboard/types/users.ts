interface IUsers {
    username:string,
    _id:string,
    email:string,
    isAdmin:boolean,
    isActive:boolean,
    img?:string,
    phone:string,
    password:string,
    createdAt?:string,
}
export interface IUserPromise{
    count:number,
    users:IUsers[]
}

