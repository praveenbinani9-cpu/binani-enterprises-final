export async function appendToSheet(sheetTab: string, rowValues: any[]) {
  console.log("Sheet:", sheetTab)
  console.log("Data:", rowValues)

  return {
    success: true,
  }
}

export async function saveLeadToGoogleSheets(data: any) {
  return appendToSheet("Leads", [data])
}