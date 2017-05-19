let Person = require('./person')
// Write your code here
module.exports = Student
function Student(name,age,klass){
		Person.call(this);
		this.klass = klass;
		this.introduce = function(){
		return 'My name is '+name+'. I am '+age+' years old. I am a Student. I am at Class '+klass+'.';
	}
}
