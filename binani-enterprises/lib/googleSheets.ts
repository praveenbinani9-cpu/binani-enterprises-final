export async function appendToSheet(data: any) {
  console.log("Lead data:", data)

  return {
    success: true,
  }
}

export async function saveLeadToGoogleSheets(data: any) {
  return appendToSheet(data)
}