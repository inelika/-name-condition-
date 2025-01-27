function convertname(name) {
    if (name === "Zhasmin") {
        return "Сегодня твой счастливый день! Получи свой приз.";
    } else if (name === "Aidana") {
        return "Сегодня и твой счастливый день! Получи свою скидку.";
    } else {
      return `Добро пожаловать, ${name}`;

    }
}
console.log(convertname("Zhasmin"));
console.log(convertname("Yenlik"));
console.log(convertname("Aidana"));
console.log(convertname("Aruzhan"));
console.log(convertname("Dias"));

