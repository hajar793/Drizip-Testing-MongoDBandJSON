// generate fake data for testing by using faker library
var faker = require("faker");
export const typingDelay= 25;
export const randomLicencePlate= faker.vehicle.vrm();
export const randomVin= faker.vehicle.vin();
export const randomDescription= faker.lorem.paragraph();
export const randomRatePerDay= faker.datatype.number({min:1000, max:50000})
export const randomEstimatedValue= faker.datatype.number({min:1000, max:50000})
export const randomDiscountWeek= faker.datatype.number({min:1, max:21})
export const randomDiscountMonth= faker.datatype.number({min:33, max:45})
export const randomDiscountTwoWeeks= faker.datatype.number({min:22, max:32})


// 
export const Emails=["neemlaptop@outlook.com","hajar@drizip.com","neemsalem07@hotmail.com"]
export const E_mail =faker.random.arrayElement(Emails)
// edit information
export const FName= faker.name.firstName()
export const LName = faker.name.lastName()
export const IdNumber= faker.helpers.replaceSymbolWithNumber('##########')
export const Day= faker.datatype.number({min:1,max:31})
export const Month = faker.datatype.number({min:1,max:12})
export const Year = faker.datatype.number({min:1970,max:2000})
export const TheAddress= faker.address.country('110033')
export const license=faker.helpers.replaceSymbolWithNumber('##########')
//create an account
export const phoneNumberR=[ '+2206687557','+5734116573',
'+5198294482', '+5198294481','+5198294480' ]
export var phone_Number =faker.random.arrayElement(phoneNumberR)//faker.phone.phoneNumber('+###########')
export const OPT=faker.helpers.replaceSymbolWithNumber('######')
//book car in chile
export const CUNT=["8320000 ","1390000","2340000","9160000"]
//https://en.wikipedia.org/wiki/Postal_codes_in_Chile
export const InChile=faker.random.arrayElement(CUNT)
export var registerEmail = faker.internet.email()// var for save same eamil
