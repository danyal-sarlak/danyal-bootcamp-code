/* var users = [
    {name:'alireza', gender: 'male'},
    {name: 'mohamad', gender: 'male'},
    {name: 'fateme', gender:'fmale'},
    {name: 'qgadir', gender:'male'},
    {name: 'danyal', gender:'male'},
    {name: 'ros', gender:'fmale'},
    {name: 'maryam', gender:'fmale'},
    
]

var malelist = []
var fmalelist = []
users.some(ismale);
function ismale (user){
    return gender === 'male'
    malelist.push(user)
}
console.log(malelist); */


var users = [
    {name:'alireza', gender: 'male'},
    {name: 'mohamad', gender: 'male'},
    {name: 'fateme', gender:'female'},
    {name: 'qgadir', gender:'male'},
    {name: 'danyal', gender:'male'},
    {name: 'ros', gender:'female'},
    {name: 'melika', gender:'female'}
]

var malelist = []
var fmalelist = []
users.forEach(function(user) {
    if (user.gender === 'male') {
        malelist.push(user);
    } else if (user.gender === 'female') {
        fmalelist.push(user);
    }
});
console.log(malelist);








