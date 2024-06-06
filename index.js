const minNum=1;
const maxNum=100;
 const answer=Math.floor(Math.random()*(maxNum-minNum)+minNum)
// console.log(answer)
let34
  let attempts=0;
let running=true;
let guess;

while(running){
     guess=window.prompt(`Enter a No. between ${minNum}-${maxNum}`)
    guess=Number(guess)
    if(isNaN(guess)){
        window.alert('please enter a valid no.')    }
    // else if(guess=""){
    //     window.alert('please enter a no.')
    // }
    else if (guess<minNum || guess>maxNum){
        window.alert("please enter a no. between 1-100")
    }
    else {
        attempts++;

        if( guess<answer){
        window.alert("Too Low !! Try again")
        }
        else if( guess>answer){
        
        window.alert("Too High !! Try again")
        }
        else{
        window.alert(`correct guess and  the answer was ${answer}  you took ${attempts}  attempts
        for it`)
        running=false
        
        }}
}
