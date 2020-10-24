const fakeData = [
    {
     id: 1,
     title: 'Graphic Designer',
     imgURL: 'https://www.freepik.com/blog/app/uploads/2018/07/PIN-BLOG-1270x720-What-is-the-difference-between-an-illustrator-and-a-graphic-designer-1.jpg',
     averageSalary: '$47k',
     description: 'Graphic designers develop graphics and layouts for product illustrations, company logos, websites and more.',
    icon: 'https://www.flaticon.com/svg/static/icons/svg/2192/2192721.svg'
    },
    {
     id: 2,
     title: 'Software Developer',
     imgURL: 'https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png',
     averageSalary: '$90k',
     description: 'Researching, designing, implementing and managing software programs.',
     icon: 'https://www.flaticon.com/svg/static/icons/svg/2463/2463510.svg'
    },
    {
     id: 3,
     title: 'Dentist',
     imgURL: 'https://image.freepik.com/free-vector/dental-clinic-doctor-patient-cartoon-characters-illustration_169479-150.jpg',
     averageSalary: '$170k',
     description: 'Promote and assist in disease prevention and oral health.',
     icon: 'https://www.flaticon.com/svg/static/icons/svg/994/994888.svg'
    },
    {
     id: 4,
     title: 'Data Scientist',
     imgURL: 'https://image.freepik.com/free-vector/scientist-people-innovation-laboratory-illustration-cartoon-doctor-character-working-statistic-analysis-white_109722-1592.jpg',
     averageSalary: '$100k',
     description: 'Data scientists utilize their analytical, statistical, and programming skills to collect, analyze, and interpret large data sets.',
     icon: 'https://www.flaticon.com/svg/static/icons/svg/1925/1925173.svg'
    },
    {
     id: 5,
     title: 'Accountant',
     imgURL: 'https://image.freepik.com/free-vector/consulting-concept-illustration_114360-2719.jpg',
     averageSalary: '$60k',
     description: 'Accountants prepare and review financial reports and tax documents.',
     icon: 'https://www.flaticon.com/svg/static/icons/svg/1925/1925173.svg'
    },
    {
     id: 6,
     title: 'Hair Stylist',
     imgURL: 'https://image.freepik.com/free-vector/male-hairdressing-beauty-salon-interior-isolated-flat-vector-illustration-cartoon-stylist-beautician-cutting-client-hair-barbershop-appearance-beauty-concept_74855-10100.jpg',
     averageSalary: '$30k',
     description: 'Hair Stylists are beauty service professionals who specialize in the fashioning and treatment of hair.',
     icon: 'https://www.flaticon.com/svg/static/icons/svg/599/599367.svg'
    },
    {
     id: 7,
     title: 'Plumber',
     imgURL: 'https://image.freepik.com/free-vector/vector-illustration-concept-plumber-service_81522-4780.jpg',
     averageSalary: '$55k',
     description: 'A plumber is responsible for installing and repairing water systems in residential or commercial buildings.',
     icon: 'https://www.flaticon.com/svg/static/icons/svg/307/307873.svg'
    },
    {
     id: 8,
     title: 'Pediatrician',
     imgURL: 'https://image.freepik.com/free-vector/gynecology-check-up-illustration_52683-46803.jpg',
     averageSalary: '$203k',
     description: 'General pediatricians provide care for infants, children, teenagers, and young adults.',
     icon: 'https://www.flaticon.com/svg/static/icons/svg/3461/3461589.svg'
    },
    {
     id: 9,
     title: 'Microbiologist',
     imgURL: 'https://image.freepik.com/free-vector/scientific-research-scientist-people-wearing-lab-coats-science-researches-chemical-laboratory-experiments-illustration_102902-1830.jpg',
     averageSalary: '$76k',
     description: 'Microbiologists study microorganisms such as bacteria, viruses, algae, fungi, and some types of parasites. They try to understand how these organisms live, grow, and interact with their environments.',
     icon: 'https://www.flaticon.com/premium-icon/icons/svg/3051/3051239.svg'
    },
    {
     id: 10,
     title: 'Financial Analyst',
     imgURL: 'https://image.freepik.com/free-vector/financial-administration-flat-vector-illustration_82574-8831.jpg',
     averageSalary: '$68k',
     description: 'Financial analysts invariably use spreadsheets (and statistical software packages) to analyze financial data, spot trends, and develop forecasts.',
     icon: 'https://www.flaticon.com/svg/static/icons/svg/1584/1584961.svg'
    },
    {
     id: 11,
     title: 'Lab Technician',
     imgURL: 'https://image.freepik.com/free-vector/scientist-people-innovation-laboratory-illustration-cartoon-doctors-working-process-robot-creating-white_109722-1591.jpg',
     averageSalary: '$35k',
     description: 'Prepare and in some cases process samples within a laboratory setting.',
     icon: 'https://www.flaticon.com/svg/static/icons/svg/3081/3081749.svg'
    },
    {
     id: 12,
     title: 'Zoologist',
     imgURL: 'https://image.freepik.com/free-vector/safari-tourists-enjoying-adventure-travel-watching-animals-taking-pictures-african-landscape-flora-fauna-vector-illustration-jeep-tour-kenya-savannah-journey_74855-8561.jpg',
     averageSalary: '$79k',
     description: 'Zoologists study animals and their interactions with ecosystems.',
     icon: 'https://www.flaticon.com/svg/static/icons/svg/2424/2424348.svg'
    },
    {
     id: 13,
     title: 'Forensic Accountant',
     imgURL: 'https://image.freepik.com/free-vector/woman-sitting-desk-with-policeman-looking-computer-screen-trying-identify-criminal-using-photo-crime-victim-police-station-flat-cartoon-characters-colorful-vector-illustration_198278-2409.jpg',
     averageSalary: '$65k',
     description: 'Forensic accountants examine data to determine where missing money has gone and how to recover it.',
     icon: 'https://www.flaticon.com/svg/static/icons/svg/1265/1265944.svg'
    },
    {
     id: 14,
     title: 'Civil Engineer',
     imgURL: 'https://image.freepik.com/free-vector/multicultural-team-civil-engineers-construction-site-flat-character-vector-illustration-concept_213110-255.jpg',
     averageSalary: '$78k',
     description: 'Civil engineers design major transportation projects.',
     icon: 'https://www.flaticon.com/premium-icon/icons/svg/2316/2316096.svg'
    },
    {
     id: 15,
     title: 'Pharmacist',
     imgURL: 'https://image.freepik.com/free-vector/customers-pharmacist-pharmacy-store-people-buying-medication-drugstore-flat-vector-illustration-service-treatment-pharmaceutics-concept_74855-9835.jpg',
     averageSalary: '$126k',
     description: 'Provide medical advice and dispense medications. ',
    icon: 'https://www.flaticon.com/svg/static/icons/svg/1256/1256535.svg'
    },
]

export default fakeData