import { NextRequest, NextResponse } from 'next/server'
import { appendToSheet } from '@/lib/googleSheets'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      source,
      fullName,
      mobile,
      email,
      pinCode,
      employmentType,
      monthlySalary,
      annualITR,
      loanAmount,
    } = body

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    const empLabel =
      employmentType === 'salaried'
        ? 'Salaried'
        : employmentType === 'self_employed'
        ? 'Self Employed'
        : 'Self Employed Professional'

    const incomeField =
      employmentType === 'salaried'
        ? `Monthly Salary: ₹${monthlySalary}`
        : `Annual ITR: ₹${annualITR}`

    let sheetTab: string
    let rowValues: string[]

    if (source === 'CreditCard') {
      sheetTab = 'Credit Card Applications'
      rowValues = [timestamp, fullName, mobile, email, pinCode, empLabel, incomeField, 'CreditCard']
    } else if (source === 'PersonalLoan') {
      sheetTab = 'Personal Loan Applications'
      rowValues = [timestamp, fullName, mobile, email, pinCode, empLabel, incomeField, loanAmount || '', 'PersonalLoan']
    } else {
      return NextResponse.json({ error: 'Invalid source' }, { status: 400 })
    }

    await appendToSheet(sheetTab, rowValues)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Lead submission error:', error)
    // Return success anyway so user experience is good even if sheets fails
    // In production you might want to log to a fallback (DB, email, etc.)
    return NextResponse.json({ success: true, warning: 'Logged locally' })
  }
}
