function generate_gym_name() {

    let names = ['Body', 'Build', 'Force', 'Energy', 'Life', 'Sport', 'Fit', 'Fitness'];

    let positions = getRandomItens(names, 2);
    
    let firstName = positions[0];
    let lastName = positions[1];

    console.log(firstName + ' ' + lastName);
}

function getRandomItens(array, n) {
        var result = new Array(n),
            len = array.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = array[x in taken ? taken[x] : x];
            taken[x] = --len;
        }
        return result;
}

generate_gym_name();