function isIsogram(str){
    if (str === "" || str.length === 1) {
        return true
    }

    const arr = str.toLowerCase().split("");
 
    const results = arr.sort((a,b ) => a.localeCompare(b))
    const value = results[0];
    console.log(results)
    
    for (let i = 1; i < results.length; i += 1){
        if (value === results[i]) {
            return false;
        } else {
            return true;
        }
    }
  
    

}



console.log(isIsogram("tblmvnuwxsthqr"))