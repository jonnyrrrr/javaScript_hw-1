//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_names = ['Dexter', 'Winter', 'Sofia', 'Bailey', 'Benji', 'Prince']
let dog_sent = ('Dexter is really fat')

function findWords(str, arr){ 
    for(let i=0; i<arr.length; i++){
      if(arr[i] == str){
        console.log(`Matched ${arr[i]}`)
      } else {
        if (arr[i] != str){
            console.log('No Macthes')
        }
      }
    }
  }

console.log(findWords(dog_sent, dog_names))


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
rand_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i=0; i<arr.length; i++){
        let value = arr.splice(i + 1, 'even index');
        return value;
    }
    
}

console.log(replaceEvens(rand_arr))




//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

