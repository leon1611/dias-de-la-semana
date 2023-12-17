'use strict'
let week = ['Suday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];

week.shift(); // Elimina el  domingo del inicio de la lista.
alert(week);
week.unshift('Monday');// Agrega el lunes al inicio de la lista.
alert(week);
week.push('Sunday');// Agrega el domingo al final de la lista.
alert(week);
week.splice(4, 0, 'Friday');// Inserta el  viernes en la posición correcta.
alert(week);
for (let i = 0; i < week.length; i++) {   // muestra de dia a dia
    alert(week[i]);
}

