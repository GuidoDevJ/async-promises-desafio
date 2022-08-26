import * as jsonfile from "jsonfile";

class Contact {
  id?: number = undefined;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    // usar la version Async (readFile)
    let promise = jsonfile.readFile(__dirname + "/contacts.json")
    promise
    .then( (res) =>{
    this.data = res
    } )
    return promise
   
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    // usar la version Async (writeFIle)

   return  jsonfile.writeFile(__dirname + "/contacts.json", this.data);
  }
  getOneById(id:number) {
    const encontrado = this.data.find((contacto) => {
      if (contacto?.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}
export { ContactsCollection, Contact };

// let col= new ContactsCollection()
// col.load().then(()=>{
//   col.addOne({id:10005,name:"Maximo"})
//   col.save().then(()=>{
//     console.log(col.getAll())
//   })
// })

