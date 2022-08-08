const planets = ["Earth", "Jupiter", "Neptune"];

function showPlanets(planets) {
    planets.forEach( (item, index) => {
        if(index < planets.length) {
            console.log(item);
        }
    });
}
