function getShippingCost(country) {
    let price;// объявляем переменную для хранения цены 
    switch (country) {// начинаем инструкцию switch для проверки переданной страны
        case 'China':// если страна — Китай
            price = 100;// стоимость доставки в Китай
            break;// завершаем блок switch после нахождения соответствия
        case 'Chile':
            price = 250;
            break;
        case 'Australia':
            price = 170;
            break;
        case 'Jamaica':
            price = 120;
            break;
            default:// если страна не была найдена в предыдущих случаях
            return "Sorry, there is no delivery to your country";// возвращаем сообщение о том, что доставка невозможна
    }
    return `Shipping to ${country} will cost ${price} credits`;// если страна найдена, возвращаем сообщение о стоимости доставки
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"