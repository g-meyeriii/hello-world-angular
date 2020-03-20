export class User { //Essentially a model; ensure non nullable have values
    id: number = 0;
    username: string ='';
    password: string='';
    firstName: string='';
    lastName: string='';
    phone: string;
    email: string;
    isReviewer: boolean =false;
    isAdmin: boolean =false;

    constructor(){
        

    }
}
