document.getElementById('btn-case-plus').addEventListener('click', function () {
    // kno akta input value ka niya asa 
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    // value sat case Number Field
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
});
// case -number - minus
document.getElementById('case-number-minus').addEventListener('click', function () {
    // kno akta input value ka niya asa 
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    // value sat case Number Field
    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
});