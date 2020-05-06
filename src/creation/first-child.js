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

    dataList.append(maturity);
    dataList.append(spread);
    dataList.append(sun);
    dataList.append(season);


    firstChild.append(name);
    firstChild.append(description);
    firstChild.append(dataList);

    return firstChild;
}