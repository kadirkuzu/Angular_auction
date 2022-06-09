export class Categories {
  name: string
  id: number
  howMany:number

  constructor(name: string, id: number,howMany:number) {
    this.name = name
    this.id=id
    this.howMany=howMany
  }
}
export class Product{
  name:string
  typeOfCategory:string
  constructor(name:string,id:number,typeOfCategory:string) {
    this.name=name
    this.typeOfCategory=typeOfCategory
  }
}
