function capitalizeFirstLetter(string){
    const LowerAll = string.toLowerCase();
    const capital = LowerAll[0].toUpperCase();
    newString = LowerAll.replace(LowerAll[0],capital);
    return newString ;
    
}
console.log(capitalizeFirstLetter("cApiTalizE"));