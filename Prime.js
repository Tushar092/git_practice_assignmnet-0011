function checkPrime(num){
let counter = 0;
for(let i = 1; i <= num; i++){
	if(num % i == 0){
		counter++;
	}
	
	if(counter == 2){
		return true;
	}else{
		return false;
	}
}
}

let answer = checkPrime(13);

if(answer == true){
	console.log("It is a Prime Number");
}else{
	console.log("It is Not a Prime Number");
}