let teams = {};
const select = document.getElementById("searchYear")
const table = document.getElementById("tableBody");

async function handleData() {
    await fetch("./data.json")
        .then(response => response.json())
        .then(json =>
            teams.data = json
        )
        .catch(error => {
            console.error(error);
        })
}

function handleYear() {
    teams.data.map(team => {
        let option = document.createElement("option")
        option.innerText = team.year
        option.innerHTML.valueOf = team.year
        select.append(option)
    })
}

function changeYear() {
    if (teams.data.filter(team => select.value == team.year).length > 0) {
        teams.data = teams.data.filter(team => select.value == team.year)

    } else {
        handleData()
    }

    document.getElementById("tableBody").innerHTML = "";
    handleTableRowItems()
    handleData()
}

function handleTableRowItems() {
    if (teams.data && teams.data.length > 0) {
        teams.data.map(team => {
            let row = table.insertRow();

            let year = row.insertCell(0)
            year.innerText = team.year

            let first = row.insertCell(1)
            first.innerText = team.first

            let second = row.insertCell(2)
            second.innerText = team.second
        })
    }
}


async function init() {
    await handleData();
    handleYear(teams)
    handleTableRowItems();
}

init()