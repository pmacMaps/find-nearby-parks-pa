// populate data into a shell table
export const buildTable = (table,data) => {
    for (const feature of data) {
        let newRow = table.insertRow(-1);
        addRow(newRow, feature.properties.PARK_NAME);
        addRow(newRow, `${feature.properties.PREMISE_ADDRESS}, ${feature.properties.PREMISE_CITY}, PA ${feature.properties.PREMISE_ZIP}`);
    }
}

// insert a new row into table
const addRow = (row,value) => {
    let newCell = row.insertCell(-1);
    let div = document.createElement('div');
    div.innerHTML = value;
    newCell.appendChild(div);
}