const Excel = require("exceljs");
const path = require("path");
const countries = [
    {
        name: "Cameroon",
        capital: "Yaounde",
        countryCode: "CM",
        phoneIndicator: 237,
    },
    { name: "France", capital: "Paris", countryCode: "FR", phoneIndicator: 33 },
    {
        name: "United States",
        capital: "Washington, D.C.",
        countryCode: "US",
        phoneIndicator: 1,
    },
    {
        name: "India",
        capital: "New Delhi",
        countryCode: "IN",
        phoneIndicator: 91,
    },
    {
        name: "Brazil",
        capital: "Brasília",
        countryCode: "BR",
        phoneIndicator: 55,
    },
    { name: "Japan", capital: "Tokyo", countryCode: "JP", phoneIndicator: 81 },
    {
        name: "Australia",
        capital: "Canberra",
        countryCode: "AUS",
        phoneIndicator: 61,
    },
    {
        name: "Nigeria",
        capital: "Abuja",
        countryCode: "NG",
        phoneIndicator: 234,
    },
    {
        name: "Germany",
        capital: "Berlin",
        countryCode: "DE",
        phoneIndicator: 1234567,
    },
];

const append = async () => {
    const exportPath = path.resolve(__dirname, "countries.xlsx");
    const workbook = new Excel.Workbook();
    let worksheet;
    try {
        await workbook.xlsx.readFile(exportPath);
        worksheet = workbook.getWorksheet("Countries List");
        console.log("here");
    } catch (error) {
        worksheet = workbook.addWorksheet("Countries List");
        console.log("here12");
    }
    worksheet.columns = [
        { key: "name", header: "Name" },
        { key: "countryCode", header: "Country Code" },
        { key: "capital", header: "Capital" },
        { key: "phoneIndicator", header: "International Direct Dialling" },
    ];
    try {
        const lastRow = worksheet.lastRow || worksheet.getRow(1);
        const newRowNumber = lastRow.number + 1;
        console.log(newRowNumber);

        countries.forEach((item) => {
            worksheet.addRow(item);
        });
        await workbook.xlsx.writeFile(exportPath);
    } catch (err) {
        console.log(err);
    }
};

append();
