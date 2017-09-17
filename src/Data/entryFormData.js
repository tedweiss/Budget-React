const incomeEntryFormData = [
  {
    type: 'date',
    label: 'Date',
    id: 'date',
    required: true
  }, {
    type: 'number',
    label: 'Amount',
    id: 'amount',
    required: true,
    placeholder: '0.00'
  }, {
    type: 'text',
    label: 'Income Source',
    id: 'income_source',
    required: true,
    placeholder: 'work'
  }, {
    type: 'text',
    label: 'Whose Income',
    id: 'whose_income',
    required: true,
    placeholder: 'George'
  }, {
    type: 'textbox',
    label: 'notes',
    id: 'notes',
    required: false,
    placeholder: ''
  }
]
export {incomeEntryFormData}
