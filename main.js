 function handleData() {
     fetch("./data.json")
         .then(response => response.json())
         .then(json =>
             handleTableRowItems(json)
         )
         .catch(error => {
             console.error(error);
         })
 }

 function handleTableRowItems(teams) {
     const table = document.getElementById("tableBody");
     teams.map(team => {
         let row = table.insertRow();

         let year = row.insertCell(0)
         year.innerText = team.year

         let first = row.insertCell(1)
         first.innerText = team.first

         let second = row.insertCell(2)
         second.innerText = team.second
     })
 }

 handleData();