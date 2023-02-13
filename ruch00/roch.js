let tabEntier=[1,2,3,4,5,6,7,8,9,10];
let tabString= new Array();
function numberToString(tabEntier){
    
    for(i=0;i<=9;i++) {
        if(tabEntier[i]==1)
          {
            tabString[i]="un";
          }
         if (tabEntier[i]==2)
          {
            tabString[i]="Deux";
          }
         if (tabEntier[i]==3)
          {
            tabString[i]="Trois";
          }
          if (tabEntier[i] == 4)
          {
            tabString[i] = "quatre";
          }
          if (tabEntier[i] == 5)
          {
            tabString[i] = "cinq";
          }
          if (tabEntier[i] == 6)
          {
            tabString[i] = "six";
          }
          if (tabEntier[i] == 7)
          {
            tabString[i] = "sept";
          }
          if (tabEntier[i] == 8)
          {
            tabString[i] = "huit";
          }
          if (tabEntier[i] == 9)
          {
            tabString[i] = "neuf";
          }
          if (tabEntier[i] == 10)
          {
            tabString[i] = "dix";
          }
    }
    return (tabString);
}
console.log("Entrée: " , tabEntier);
console.log("Sortie: ",numberToString(tabEntier));;