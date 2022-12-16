let studentsName = prompt("Nama");
let score = prompt("Nilai");

const scoreCheck = ()=>{
    if (score >= 80){
        console.log(studentsName,"Mendapatkan nilai A")
     } else if (score >= 65 && score <=79){
         console.log(studentsName, "Mendapatkan nilai B")
        } else if (score >= 50 && score <= 64){
            console.log(studentsName, "Mendapatkan nilai C")
            } else if (score >= 35 && score <= 49){
                console.log(studentsName, "Mendapatkan nilai D")
                 }  else if (score >= 1 && score <= 34 ){
                    console.log(studentsName, "Mendapatkan nilai E")
                     } else {
                            console.log("Nilai Invalid")
                     }
}

scoreCheck(studentsName, score)