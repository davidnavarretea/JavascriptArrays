let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
for(let [llave,valor] of Object.entries(contact)){
    console.log(`${llave} : ${valor}`);
}

