/* Implementação do singleton com uma base de usuários bem simples*/

interface User {
    name: string;
    age: number;
}

class MyDatabaseClassic {
    private static instance: MyDatabaseClassic | null = null;
    private users: User[] = [];

    private constructor() {}

    public static getInstance(): MyDatabaseClassic {
        if(MyDatabaseClassic.instance === null) {
            MyDatabaseClassic.instance = new MyDatabaseClassic();
        }

        return MyDatabaseClassic.instance;
    }
    
    add(user: User): void {
        this.users.push(user);
    }

    remove(index: number): void {
        this.users.splice(index, 1);
    }

    show(): void{
        for(const user of this.users) {
            console.log(user);
        }
    }
}

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({name: 'Harry', age: 14});
myDatabaseClassic.add({name: 'Ron', age: 14});
myDatabaseClassic.add({name: 'Hagrid', age: 65});

myDatabaseClassic.show();