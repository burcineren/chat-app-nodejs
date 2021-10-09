const socket = io.connect('http://localhost:3000')

const sender = document.getElementById('sender');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

submitBtn.addEventListener('click', () =>{
    socket.emit('chat', { 
        message: message.value, 
        sender: sender.value, 
    })
})
socket.on('chat',data =>{
    feedback.innerHTML = '';
    output.innerHTML ='<p><strong>' + data.sender +'</strong>'+ data.message + '</p>';//+= ile bütün gelen mesajları alır
    message.value = '';
})
message.addEventListener('keypress', () =>{
    socket.emit('typing',sender.value);
})
socket.on('typing', data =>{
    feedback.innerHTML= '<p>' + data + 'yazıyor...</p>'; 
})








// const array = [["key1","value1"],["key2","value2"]];

// const lastMap = new Map(array);

// console.log(lastMap);

// const cities= new Map();

// cities.set("istanbul",2);
// cities.set("ankara",5);

// const array = Array.from(cities);
// // [[istanbul",2],["ankara",5)]]
// console.log(array);
// const emp1 = {
//     name: "burçin",
//     age:24,

// }
// emp1.salary=15;
// console.log(emp1);

// function Employee(name, age, salary){ //yapıcı fonksiyon
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.showInfos = function(){
//         console.log(this.name,this.age,this.salary);
//     }

//     console.log(this);

// }

// const emp1 = new Employee("Burçin",15,2000);
// const emp2 = new Employee("Tuğçe",20,4000);

// emp1.showInfos();
// emp2.showInfos();

// console.log(emp1);


// console.log(emp2);