// Code your solutions in this file


function writeCards(friends=["Samuel", " Lydia", "Esther"], graduation){
    const newArray = []
    for(let i=0; i< friends.length; i++){

        newArray.push(`Thank you, ${friends[i]}, for the wonderful ${graduation} gift!`)
    }
    return newArray

}

function countDown(){
    let i =10;

    while(i>=0){
        console.log(i)
        i--
        
    }


}

countDown()