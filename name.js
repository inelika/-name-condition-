 function nameCondition(name) {
    if (name === "Zhasmin") {
        return "Сегодня твой счастливый день! Получи свой приз.";
    } else if (name === "Aidana") {
        return "Сегодня и твой счастливый день! Получи свою скидку.";
    } else {
      return `Добро пожаловать, ${name}`;

    }

}
console.log(nameCondition("Zhasmin"));
console.log(nameCondition("Yenlik"));
console.log(nameCondition("Aidana"));
console.log(nameCondition("Aruzhan"));
console.log(nameCondition("Dias"));
