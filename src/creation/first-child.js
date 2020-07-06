function createFirstChild(v) {
    const firstChild = document.createElement('div');
    firstChild.classList.add('veggie-info');
        const name = document.createElement('h3');
        name.innerText = `${v.name}`;

        const description = document.createElement('p');
        description.innerText = v.description;

        const dataList = document.createElement('ul');
        dataList.classList.add('data-list');

            const [maturity, spread, sun, season] = [document.createElement('li'), document.createElement('li'), document.createElement('li'), document.createElement('li')]
            maturity.innerText = `Days to Maturity: ${v.maturity_time}`;
            spread.innerText = `Average Spread: ${v.spread}`;
            season.innerText = `Growing Season: ${v.season}`;
            sun.innerText = `Sun Exposure: ${v.sun_exposure}`;

        dataList.append(maturity, spread, sun, season);

        const instructionsHeader = document.createElement('h4');
        instructionsHeader.classList.add("instruction-head");
        instructionsHeader.innerText = "How to Grow:"

        const instructions = document.createElement('p');
        instructions.classList.add('instructions');
        instructions.innerHTML = v.instructions


    firstChild.append(name, description, dataList, instructionsHeader, instructions);

    return firstChild;
}