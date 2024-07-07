const query = {
    search: "Вася",
    take: 10
};

const queryString = Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

console.log(queryString);
