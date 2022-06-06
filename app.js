const products = [
    {
      price: 200,
      name: "TV",
      amount: 3,
      discaunt: 5,
      availableIn: ["Odessa", "Kyiv", "Lviv"],
    },
    {
      price: 300,
      name: "Phone",
      amount: 5,
      discaunt: 10,
      availableIn: ["Baden-baden", "Kyiv", "Lviv"],
    },
    {
      price: 200,
      name: "oven",
      amount: 10,
      discaunt: 13,
      availableIn: ["Chernobaivka", "Lviv", "Zaporoje"],
    },
    {
      price: 400,
      name: "iron",
      amount: 32,
      discaunt: 0,
      availableIn: ["Kharkiv", "Vilnus", "Mykolaiv"],
    },
  ];
//   сумму всех денег по продуктам

const totalPrice = products.reduce(
    (acc, product) => {
        acc = acc + product.price;
        return acc;
    }, 0
);
// Сумму всех денег по продуктам с учетом скидки
const totalPriceWithDoscount = products.reduce(
    (acc, product) => {
        acc = acc + product.price - (product.price * product.discaunt / 100);
        return acc;
    }, 0
)
// список всех городов где представлены продукты

const allCity = products.reduce(
    (acc, product) => {
        product.availableIn.forEach(city => {
            acc.push(city);
        });
        return acc;
    },[]
);
const allCityFilter = deleteDublikate(allCity);

// список городов, по которым продукты пересекаются (Львов, Киев итд)

const allCityDublicate = allCity.filter((element, index) => {
    return allCity.indexOf(element) !== index;
});
const listCity = deleteDublikate(allCityDublicate);

function deleteDublikate(array){
    let result = array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
    return result;
}