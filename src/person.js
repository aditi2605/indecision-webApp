export const isAdult = (age) => {
    if(age == 18) return true;
    return false;
}

export const canDrink = (age)=>{
    if(age == 21) return true;
    return false;
}

export default  (age) => age >=65;