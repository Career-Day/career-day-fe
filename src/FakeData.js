const fakeData = {
    fakeJobs: [{
            id: 1,
            title: 'Graphic Designer',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/2192/2192721.svg',
            averageSalary: '$47k',
            description: 'Graphic designers develop graphics and layouts for product illustrations, company logos, websites and more.'
        },
        {
            id: 2,
            title: 'Software Developer',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/2463/2463510.svg',
            averageSalary: '$90k',
            description: 'Researching, designing, implementing and managing software programs.'
        },
        {
            id: 3,
            title: 'Dentist',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/994/994888.svg',
            averageSalary: '$170k',
            description: 'Promote and assist in disease prevention and oral health.'
        },
        {
            id: 4,
            title: 'Data Scientist',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/1925/1925173.svg',
            averageSalary: '$100k',
            description: 'Data scientists utilize their analytical, statistical, and programming skills to collect, analyze, and interpret large data sets.'
        },
        {
            id: 5,
            title: 'Accountant',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/1925/1925173.svg',
            averageSalary: '$60k',
            description: 'Accountants prepare and review financial reports and tax documents.'
        },
        {
            id: 6,
            title: 'Hair Stylist',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/599/599367.svg',
            averageSalary: '$30k',
            description: 'Hair Stylists are beauty service professionals who specialize in the fashioning and treatment of hair.'
        },
        {
            id: 7,
            title: 'Plumber',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/307/307873.svg',
            averageSalary: '$55k',
            description: 'A plumber is responsible for installing and repairing water systems in residential or commercial buildings.'
        },
        {
            id: 8,
            title: 'Pediatrician',
            iconURL: 'https://www.flaticon.com/premium-icon/icons/svg/3323/3323583.svg',
            averageSalary: '$203k',
            description: 'General pediatricians provide care for infants, children, teenagers, and young adults.'
        },
        {
            id: 9,
            title: 'Microbiologist',
            iconURL: 'https://www.flaticon.com/premium-icon/icons/svg/3051/3051239.svg',
            averageSalary: '$76k',
            description: 'Microbiologists study microorganisms such as bacteria, viruses, algae, fungi, and some types of parasites. They try to understand how these organisms live, grow, and interact with their environments.'
        },
        {
            id: 10,
            title: 'Financial Analyst',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/1584/1584961.svg',
            averageSalary: '$68k',
            description: 'Financial analysts invariably use spreadsheets (and statistical software packages) to analyze financial data, spot trends, and develop forecasts.'
        },
        {
            id: 11,
            title: 'Lab Technician',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/3081/3081749.svg',
            averageSalary: '$35k',
            description: 'Prepare and in some cases process samples within a laboratory setting.'
        },
        {
            id: 12,
            title: 'Zoologist',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/2424/2424348.svg',
            averageSalary: '$79k',
            description: 'Zoologists study animals and their interactions with ecosystems.'
        },
        {
            id: 13,
            title: 'Forensic Accountant',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/1265/1265944.svg',
            averageSalary: '$65k',
            description: 'Forensic accountants examine data to determine where missing money has gone and how to recover it.'
        },
        {
            id: 14,
            title: 'Civil Engineer',
            iconURL: 'https://www.flaticon.com/premium-icon/icons/svg/2316/2316096.svg',
            averageSalary: '$78k',
            description: 'Civil engineers design major transportation projects.'
        },
        {
            id: 15,
            title: 'Pharmacist',
            iconURL: 'https://www.flaticon.com/svg/static/icons/svg/1256/1256535.svg',
            averageSalary: '$126k',
            description: 'Provide medical advice and dispense medications. '
        },
    ],
    fakeDetails: [{
            id: 1,
            title: 'Graphic Designer',
            imgURL: 'https://www.freepik.com/blog/app/uploads/2018/07/PIN-BLOG-1270x720-What-is-the-difference-between-an-illustrator-and-a-graphic-designer-1.jpg',
            minSalary: '$35k',
            maxSalary: '$60k',
            description: 'Graphic designers are visual communicators, who create visual concepts by hand or by using computer software. They communicate ideas to inspire, inform, or captivate consumers through both physical and virtual art forms that include images, words, or graphics. The end goal of graphic designers is to make the organizations that hire them more well known by their designs. By using a variety of media they communicate a particular idea to be used in advertising and promotions. These media include fonts, shapes, colors, images, print design, photography, animation, logos, and billboards. Graphic designers often work on projects with artists, multimedia animators and other creative professionals.'
        },
        {
            id: 2,
            title: 'Software Developer',
            imgURL: 'https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png',
            minSalary: '$60k',
            maxSalary: '$120k',
            description: 'A computer programmer, sometimes called a software developer, a programmer or more recently a coder, is a person who creates computer software. The term computer programmer can refer to a specialist in one area of computers, or to a generalist who writes code for many kinds of software.'
        },
        {
            id: 3,
            title: 'Dentist',
            imgURL: 'https://image.freepik.com/free-vector/dental-clinic-doctor-patient-cartoon-characters-illustration_169479-150.jpg',
            minSalary: '$130k',
            maxSalary: '$210k',
            description: 'Dentists remove tooth decay, fill cavities, and repair fractured teeth. Dentists diagnose and treat problems with patients\' teeth, gums, and related parts of the mouth. They provide advice and instruction on taking care of the teeth and gums and on diet choices that affect oral health.'
        },
        {
            id: 4,
            title: 'Data Scientist',
            imgURL: 'https://image.freepik.com/free-vector/scientist-people-innovation-laboratory-illustration-cartoon-doctor-character-working-statistic-analysis-white_109722-1592.jpg',
            minSalary: '$80k',
            maxSalary: '$150k',
            description: 'Data scientists utilize their analytical, statistical, and programming skills to collect, analyze, and interpret large data sets. They then use this information to develop data-driven solutions to difficult business challenges.'
        },
        {
            id: 5,
            title: 'Accountant',
            imgURL: 'https://image.freepik.com/free-vector/consulting-concept-illustration_114360-2719.jpg',
            minSalary: '$30k',
            maxSalary: '$90k',
            description: 'Accountants prepare and review financial reports and tax documents. Some accountants work for accounting firms and some own their own businesses. Others work for large companies or the government. Accountants work with numbers a lot.'
        },
        {
            id: 6,
            title: 'Hair Stylist',
            imgURL: 'https://image.freepik.com/free-vector/male-hairdressing-beauty-salon-interior-isolated-flat-vector-illustration-cartoon-stylist-beautician-cutting-client-hair-barbershop-appearance-beauty-concept_74855-10100.jpg',
            minSalary: '$20k',
            maxSalary: '$40k',
            description: 'Hair Stylists are beauty service professionals who specialize in the fashioning and treatment of hair. Hair Stylist responsibilities include cleaning and cutting hair, offering hair care and hair styling consultations and recommending hair styling products, among other duties.'
        },
        {
            id: 7,
            title: 'Plumber',
            imgURL: 'https://image.freepik.com/free-vector/vector-illustration-concept-plumber-service_81522-4780.jpg',
            minSalary: '$33k',
            maxSalary: '$98k',
            description: 'Plumbers install and repair plumbing systems in residential and commercial properties. They also install fixtures and domestic appliances associated with heating, cooling, and sanitation systems.'
        },
        {
            id: 8,
            title: 'Pediatrician',
            imgURL: 'https://image.freepik.com/free-vector/gynecology-check-up-illustration_52683-46803.jpg',
            minSalary: '$153k',
            maxSalary: '$280k',
            description: 'General pediatricians provide care for infants, children, teenagers, and young adults. They specialize in diagnosing and treating problems specific to younger people. Most pediatricians treat common illnesses, minor injuries, and infectious diseases, and administer vaccinations. Some pediatricians specialize in pediatric surgery or serious medical conditions that commonly affect younger patients, such as autoimmune disorders or chronic ailments.'
        },
        {
            id: 9,
            title: 'Microbiologist',
            imgURL: 'https://image.freepik.com/free-vector/scientific-research-scientist-people-wearing-lab-coats-science-researches-chemical-laboratory-experiments-illustration_102902-1830.jpg',
            minSalary: '$44k',
            maxSalary: '$133k',
            description: 'Microbiologists study microorganisms such as bacteria, viruses, algae, fungi, and some types of parasites. They try to understand how these organisms live, grow, and interact with their environments. Many microbiologists work in research and development conducting basic research or applied research. Other microbiologists conduct applied research and develop new products to solve particular problems.'
        },
        {
            id: 10,
            title: 'Financial Analyst',
            imgURL: 'https://image.freepik.com/free-vector/financial-administration-flat-vector-illustration_82574-8831.jpg',
            minSalary: '$48k',
            maxSalary: '$79k',
            description: 'Financial analysts are employed by mutual- and pension funds, hedge funds, securities firms, banks, investment banks, insurance companies, and other businesses, helping these companies or their clients make investment decisions. In corporate roles, financial analysts perform budget, revenue and cost modelling as part of their responsibilities.'
        },
        {
            id: 11,
            title: 'Lab Technician',
            imgURL: 'https://image.freepik.com/free-vector/scientist-people-innovation-laboratory-illustration-cartoon-doctors-working-process-robot-creating-white_109722-1591.jpg',
            minSalary: '$25k',
            maxSalary: '$45k',
            description: 'Lab technicians take raw materials and, using instruments and equipment, shape them into the grounds for conclusions, treatments, and decisions. Learn from the lab technician job description below how experience in this field serves as a foundation for the medical and scientific communities, as well as advanced work in medicine and science.'
        },
        {
            id: 12,
            title: 'Zoologist',
            imgURL: 'https://image.freepik.com/free-vector/safari-tourists-enjoying-adventure-travel-watching-animals-taking-pictures-african-landscape-flora-fauna-vector-illustration-jeep-tour-kenya-savannah-journey_74855-8561.jpg',
            minSalary: '$49k',
            maxSalary: '$110k',
            description: 'Zoologists may be involved in a wide variety of duties in various environments. For example they may observe and study animals in their natural environments, or plan and conduct experiments involving animals in nature, in zoos, or in other controlled areas. They may also collect biological specimens and measure physical characteristics. These studies are generally aimed at investigating animal behavior, migration, interactions with other species, and reproduction, as well as the pests, diseases, toxins, and habitat changes that affect them. They use the information they gather to monitor and estimate populations, address invasive species and other threats, control disease, manage hunting programs, and develop conservation plans. They also write reports and journal articles and give presentations to share their findings.'
        },
        {
            id: 13,
            title: 'Forensic Accountant',
            imgURL: 'https://image.freepik.com/free-vector/woman-sitting-desk-with-policeman-looking-computer-screen-trying-identify-criminal-using-photo-crime-victim-police-station-flat-cartoon-characters-colorful-vector-illustration_198278-2409.jpg',
            minSalary: '$50k',
            maxSalary: '$80k',
            description: 'Forensic accountants examine data to determine where missing money has gone and how to recover it. They may also present reports of their financial findings as evidence during hearings, where they often testify as expert witnesses. This work serves an important purpose at public accounting and consulting firms, law firms, law enforcement agencies, and insurance companies.'
        },
        {
            id: 14,
            title: 'Civil Engineer',
            imgURL: 'https://image.freepik.com/free-vector/multicultural-team-civil-engineers-construction-site-flat-character-vector-illustration-concept_213110-255.jpg',
            minSalary: '$58k',
            maxSalary: '$121k',
            description: 'Civil engineers conceive, design, build, supervise, operate, construct and maintain infrastructure projects and systems in the public and private sector, including roads, buildings, airports, tunnels, dams, bridges, and systems for water supply and sewage treatment.'
        },
        {
            id: 15,
            title: 'Pharmacist',
            imgURL: 'https://image.freepik.com/free-vector/customers-pharmacist-pharmacy-store-people-buying-medication-drugstore-flat-vector-illustration-service-treatment-pharmaceutics-concept_74855-9835.jpg',
            minSalary: '$107k',
            maxSalary: '$151k',
            description: 'Pharmacists are healthcare practitioners who check and distribute drugs to doctors for medication that had been prescribed to patients. They advise patients and health care providers on the selection, dosages, interactions, and side effects of medications. They might work in a  hospital or retail store. '
        }
    ]
}
export default fakeData