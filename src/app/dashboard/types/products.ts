interface IProducts {
    title:string,
    _id:string,
    price:number,
    desc:string,
    stock:string,
    img:string,
    createdAt: string,
    size:string
}
export interface IProductPromise{
    count: number,
    products: IProducts[]
}

