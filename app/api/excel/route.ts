import { NextRequest, NextResponse } from "next/server";
import Excel from "exceljs";
import * as path from "path";

export async function POST(req: NextRequest) {
    const { data, fileName } = await req.json();
    try {
        await append(data);
        // return NextResponse.json({ message: "added" });
    } catch (err: any) {
        NextResponse.json({ error: err.message }, { status: 403 });
    }
    return NextResponse.json({ message: "added" });
}
const append = async (data: any) => {
    const exportPath = path.resolve(process.cwd() + "/public", "data.xlsx");
    const workbook = new Excel.Workbook();
    let worksheet: any;
    try {
        await workbook.xlsx.readFile(exportPath);
        worksheet = workbook.getWorksheet("Bank List");
        console.log("here");
    } catch (error) {
        worksheet = workbook.addWorksheet("Bank List");
        console.log("here12");
    }
    worksheet.columns = [
        { key: "psid", header: "PSID" },
        { key: "branch", header: "Branch" },
        { key: "date", header: "Date" },
        { key: "cardtype", header: "Card Type" },
        { key: "token", header: "Token" },
    ];
    try {
        const lastRow = worksheet.lastRow || worksheet.getRow(1);
        const newRowNumber = lastRow.number + 1;
        console.log(newRowNumber, data);

        worksheet.addRow(data);
        await workbook.xlsx.writeFile(exportPath);
    } catch (err) {
        console.log(err);
    }
};
