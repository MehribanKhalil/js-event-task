// HTML hissənizdə bir formunuz və tablenız olsun.Formda firstname,lastname,age,isMarried inputları olsun.İnput boş olduqda user yaradılmasın.Bütün inputları doldurduqdan sonra user yaradılsın və dataları table-a əlavə olunsun.

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const age = document.getElementById('age')
const isMarried = document.getElementById('isMarried')
const submitBtn = document.getElementById('submitBtn')
const tBody = document.querySelector('tbody')


submitBtn.addEventListener('click',event=>{

    event.preventDefault()
    const nameValue=firstName.value
    const lastNameValue=lastName.value
    const ageValue=age.value
    const isMarriedValue=isMarried.checked ? 'married' : 'not married'

    if (nameValue=='' || lastNameValue=='' || ageValue=='' || isMarriedValue=='') {
        alert('formu doldurun') 
        return
    } 

    const tRow = document.createElement('tr')
    const nameTData = document.createElement('td')
    const lastNameTData = document.createElement('td')
    const ageTData = document.createElement('td')
    const marriedTData = document.createElement('td')


    tRow.append(nameTData,
        lastNameTData,
        ageTData,
        marriedTData)
    tBody.append(tRow)


    nameTData.textContent=nameValue
    lastNameTData.textContent=lastNameValue
    ageTData.textContent=ageValue
    marriedTData.textContent=isMarriedValue


    firstName.value=''
    lastName.value=''
    age.value=''
    isMarried.checked=false
})