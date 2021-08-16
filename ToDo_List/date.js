//console.log(module);
//module.exports.getDate = getDate ;

// function getDate(){
// let today = new Date();

// let options ={
//     weekday: "long",
//     day: "numeric",
//     month: "long"
// }
// return  today.toLocaleDateString("en-US", options);
// }
exports.getDate = function(){
    const today = new Date();

    const options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return  today.toLocaleDateString("en-US", options);
}

exports.getDay = function (){
    const today = new Date();
    
    const options ={
        weekday: "long",
    }
    return  today.toLocaleDateString("en-US", options); 
}