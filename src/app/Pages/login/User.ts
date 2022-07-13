export class User{
  id:number
  emailAdress:string
  userName:string
  password:any
  name:string
  secondName:string
  constructor(id:number,emailAdress:string,userName:string,password:any,name:string,secondName:string) {
    this.id=id
    this.emailAdress=emailAdress
    this.userName=userName
    this.password=password
    this.name=name
    this.secondName=secondName
  }
}
