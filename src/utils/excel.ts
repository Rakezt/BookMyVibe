import xlsx from 'xlsx';

export const parseExcelFile = (filePath: string) => {
  const workbook = xlsx.readFile(filePath, {
    cellDates: true,
  });

  const sheetName = workbook.SheetNames[0];

  const worksheet = workbook.Sheets[sheetName];

  const data = xlsx.utils.sheet_to_json(worksheet, {
    raw: false,
  });

  return data;
};
