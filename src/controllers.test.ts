import test from "ava";
import { ContactsController } from "./controllers";
import{Contact,ContactsCollection} from "./models"

test("Testeo el constructor del controller", (t) => {
  // test de prueba
  t.truthy(true);
});

test.serial("Testeo el método processOptions", (t) => {
  let contact = new ContactsCollection()

  contact.load().then(()=>{
  let mocket:Contact;
  mocket = contact.getOneById(3333)
    let controller = new ContactsController()
    controller.load.then(()=>{
     let resul =  controller.processOptions({action:"get",params:mocket})
     t.deepEqual(mocket,resul)
    })
  })
});


