const fakeData = {
    fakeJobs: [{
            id: 1,
            title: 'Graphic Designer',
            icon_url: 'https://www.flaticon.com/premium-icon/icons/svg/3270/3270930.svg',
            avg_salary: '$47k',
            short_description: 'Graphic designers develop graphics and layouts for product illustrations, company logos, websites and more.'
        },
        {
            id: 2,
            title: 'Software Developer',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/2463/2463510.svg',
            avg_salary: '$90k',
            short_description: 'Researching, designing, implementing and managing software programs.'
        },
        {
            id: 3,
            title: 'Dentist',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/994/994888.svg',
            avg_salary: '$170k',
            short_description: 'Promote and assist in disease prevention and oral health.'
        },
        {
            id: 4,
            title: 'Data Scientist',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/1925/1925173.svg',
            avg_salary: '$100k',
            short_description: 'Data scientists utilize their analytical, statistical, and programming skills to collect, analyze, and interpret large data sets.'
        },
        {
            id: 5,
            title: 'Accountant',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/2562/2562544.svg',
            avg_salary: '$60k',
            short_description: 'Accountants prepare and review financial reports and tax documents.'
        },
        {
            id: 6,
            title: 'Hair Stylist',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/843/843869.svg',
            avg_salary: '$30k',
            short_description: 'Hair Stylists are beauty service professionals who specialize in the fashioning and treatment of hair.'
        },
        {
            id: 7,
            title: 'Plumber',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/3125/3125561.svg',
            avg_salary: '$55k',
            short_description: 'A plumber is responsible for installing and repairing water systems in residential or commercial buildings.'
        },
        {
            id: 8,
            title: 'Pediatrician',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/3468/3468872.svg',
            avg_salary: '$203k',
            short_description: 'General pediatricians provide care for infants, children, teenagers, and young adults.'
        },
        {
            id: 9,
            title: 'Microbiologist',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/3035/3035512.svg',
            avg_salary: '$76k',
            short_description: 'Microbiologists study microorganisms such as bacteria, viruses, algae, fungi, and some types of parasites. They try to understand how these organisms live, grow, and interact with their environments.'
        },
        {
            id: 10,
            title: 'Financial Analyst',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/1584/1584961.svg',
            avg_salary: '$68k',
            short_description: 'Financial analysts invariably use spreadsheets (and statistical software packages) to analyze financial data, spot trends, and develop forecasts.'
        },
        {
            id: 11,
            title: 'Lab Technician',
            icon_url: 'https://www.flaticon.com/premium-icon/icons/svg/978/978961.svg',
            avg_salary: '$35k',
            short_description: 'Prepare and in some cases process samples within a laboratory setting.'
        },
        {
            id: 12,
            title: 'Zoologist',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/2424/2424348.svg',
            avg_salary: '$79k',
            short_description: 'Zoologists study animals and their interactions with ecosystems.'
        },
        {
            id: 13,
            title: 'Forensic Accountant',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/2322/2322972.svg',
            avg_salary: '$65k',
            short_description: 'Forensic accountants examine data to determine where missing money has gone and how to recover it.'
        },
        {
            id: 14,
            title: 'Civil Engineer',
            icon_url: 'https://www.flaticon.com/premium-icon/icons/svg/2316/2316096.svg',
            avg_salary: '$78k',
            short_description: 'Civil engineers design major transportation projects.'
        },
        {
            id: 15,
            title: 'Pharmacist',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/1256/1256535.svg',
            avg_salary: '$126k',
            short_description: 'Provide medical advice and dispense medications. '
        },
    ],
    fakeDetails: [
        {
            id: 1,
            title: 'Graphic Designer',
            image_url: 'https://www.freepik.com/blog/app/uploads/2018/07/PIN-BLOG-1270x720-What-is-the-difference-between-an-illustrator-and-a-graphic-designer-1.jpg',
            video_url: 'https://www.youtube.com/watch?v=kqwgs7vBMkU',
            min_salary: '$35k',
            max_salary: '$60k',
            long_description: 'Graphic designers are visual communicators, who create visual concepts by hand or by using computer software. They communicate ideas to inspire, inform, or captivate consumers through both physical and virtual art forms that include images, words, or graphics. The end goal of graphic designers is to make the organizations that hire them more well known by their designs. By using a variety of media they communicate a particular idea to be used in advertising and promotions. These media include fonts, shapes, colors, images, print design, photography, animation, logos, and billboards. Graphic designers often work on projects with artists, multimedia animators and other creative professionals.'
        },
        {
            id: 2,
            title: 'Software Developer',
            image_url: 'https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png',
            min_salary: '$60k',
            max_salary: '$120k',
            long_description: 'A computer programmer, sometimes called a software developer, a programmer or more recently a coder, is a person who creates computer software. The term computer programmer can refer to a specialist in one area of computers, or to a generalist who writes code for many kinds of software.'
        },
        {
            id: 3,
            title: 'Dentist',
            image_url: 'https://image.freepik.com/free-vector/dental-clinic-doctor-patient-cartoon-characters-illustration_169479-150.jpg',
            min_salary: '$130k',
            max_salary: '$210k',
            long_description: 'Dentists remove tooth decay, fill cavities, and repair fractured teeth. Dentists diagnose and treat problems with patients\' teeth, gums, and related parts of the mouth. They provide advice and instruction on taking care of the teeth and gums and on diet choices that affect oral health.'
        },
        {
            id: 4,
            title: 'Data Scientist',
            image_url: 'https://image.freepik.com/free-vector/scientist-people-innovation-laboratory-illustration-cartoon-doctor-character-working-statistic-analysis-white_109722-1592.jpg',
            min_salary: '$80k',
            max_salary: '$150k',
            long_description: 'Data scientists utilize their analytical, statistical, and programming skills to collect, analyze, and interpret large data sets. They then use this information to develop data-driven solutions to difficult business challenges.'
        },
        {
            id: 5,
            title: 'Accountant',
            image_url: 'https://image.freepik.com/free-vector/consulting-concept-illustration_114360-2719.jpg',
            min_salary: '$30k',
            max_salary: '$90k',
            long_description: 'Accountants prepare and review financial reports and tax documents. Some accountants work for accounting firms and some own their own businesses. Others work for large companies or the government. Accountants work with numbers a lot.'
        },
        {
            id: 6,
            title: 'Hair Stylist',
            image_url: 'https://image.freepik.com/free-vector/male-hairdressing-beauty-salon-interior-isolated-flat-vector-illustration-cartoon-stylist-beautician-cutting-client-hair-barbershop-appearance-beauty-concept_74855-10100.jpg',
            min_salary: '$20k',
            max_salary: '$40k',
            long_description: 'Hair Stylists are beauty service professionals who specialize in the fashioning and treatment of hair. Hair Stylist responsibilities include cleaning and cutting hair, offering hair care and hair styling consultations and recommending hair styling products, among other duties.'
        },
        {
            id: 7,
            title: 'Plumber',
            image_url: 'https://image.freepik.com/free-vector/vector-illustration-concept-plumber-service_81522-4780.jpg',
            min_salary: '$33k',
            max_salary: '$98k',
            long_description: 'Plumbers install and repair plumbing systems in residential and commercial properties. They also install fixtures and domestic appliances associated with heating, cooling, and sanitation systems.'
        },
        {
            id: 8,
            title: 'Pediatrician',
            image_url: 'https://image.freepik.com/free-vector/gynecology-check-up-illustration_52683-46803.jpg',
            min_salary: '$153k',
            max_salary: '$280k',
            long_description: 'General pediatricians provide care for infants, children, teenagers, and young adults. They specialize in diagnosing and treating problems specific to younger people. Most pediatricians treat common illnesses, minor injuries, and infectious diseases, and administer vaccinations. Some pediatricians specialize in pediatric surgery or serious medical conditions that commonly affect younger patients, such as autoimmune disorders or chronic ailments.'
        },
        {
            id: 9,
            title: 'Microbiologist',
            image_url: 'https://image.freepik.com/free-vector/scientific-research-scientist-people-wearing-lab-coats-science-researches-chemical-laboratory-experiments-illustration_102902-1830.jpg',
            min_salary: '$44k',
            max_salary: '$133k',
            long_description: 'Microbiologists study microorganisms such as bacteria, viruses, algae, fungi, and some types of parasites. They try to understand how these organisms live, grow, and interact with their environments. Many microbiologists work in research and development conducting basic research or applied research. Other microbiologists conduct applied research and develop new products to solve particular problems.'
        },
        {
            id: 10,
            title: 'Financial Analyst',
            image_url: 'https://image.freepik.com/free-vector/financial-administration-flat-vector-illustration_82574-8831.jpg',
            min_salary: '$48k',
            max_salary: '$79k',
            long_description: 'Financial analysts are employed by mutual- and pension funds, hedge funds, securities firms, banks, investment banks, insurance companies, and other businesses, helping these companies or their clients make investment decisions. In corporate roles, financial analysts perform budget, revenue and cost modelling as part of their responsibilities.'
        },
        {
            id: 11,
            title: 'Lab Technician',
            image_url: 'https://image.freepik.com/free-vector/scientist-people-innovation-laboratory-illustration-cartoon-doctors-working-process-robot-creating-white_109722-1591.jpg',
            min_salary: '$25k',
            max_salary: '$45k',
            long_description: 'Lab technicians take raw materials and, using instruments and equipment, shape them into the grounds for conclusions, treatments, and decisions. Learn from the lab technician job description below how experience in this field serves as a foundation for the medical and scientific communities, as well as advanced work in medicine and science.'
        },
        {
            id: 12,
            title: 'Zoologist',
            image_url: 'https://image.freepik.com/free-vector/safari-tourists-enjoying-adventure-travel-watching-animals-taking-pictures-african-landscape-flora-fauna-vector-illustration-jeep-tour-kenya-savannah-journey_74855-8561.jpg',
            min_salary: '$49k',
            max_salary: '$110k',
            long_description: 'Zoologists may be involved in a wide variety of duties in various environments. For example they may observe and study animals in their natural environments, or plan and conduct experiments involving animals in nature, in zoos, or in other controlled areas. They may also collect biological specimens and measure physical characteristics. These studies are generally aimed at investigating animal behavior, migration, interactions with other species, and reproduction, as well as the pests, diseases, toxins, and habitat changes that affect them. They use the information they gather to monitor and estimate populations, address invasive species and other threats, control disease, manage hunting programs, and develop conservation plans. They also write reports and journal articles and give presentations to share their findings.'
        },
        {
            id: 13,
            title: 'Forensic Accountant',
            image_url: 'https://image.freepik.com/free-vector/woman-sitting-desk-with-policeman-looking-computer-screen-trying-identify-criminal-using-photo-crime-victim-police-station-flat-cartoon-characters-colorful-vector-illustration_198278-2409.jpg',
            min_salary: '$50k',
            max_salary: '$80k',
            long_description: 'Forensic accountants examine data to determine where missing money has gone and how to recover it. They may also present reports of their financial findings as evidence during hearings, where they often testify as expert witnesses. This work serves an important purpose at public accounting and consulting firms, law firms, law enforcement agencies, and insurance companies.'
        },
        {
            id: 14,
            title: 'Civil Engineer',
            image_url: 'https://image.freepik.com/free-vector/multicultural-team-civil-engineers-construction-site-flat-character-vector-illustration-concept_213110-255.jpg',
            min_salary: '$58k',
            max_salary: '$121k',
            long_description: 'Civil engineers conceive, design, build, supervise, operate, construct and maintain infrastructure projects and systems in the public and private sector, including roads, buildings, airports, tunnels, dams, bridges, and systems for water supply and sewage treatment.'
        },
        {
            id: 15,
            title: 'Pharmacist',
            image_url: 'https://image.freepik.com/free-vector/customers-pharmacist-pharmacy-store-people-buying-medication-drugstore-flat-vector-illustration-service-treatment-pharmaceutics-concept_74855-9835.jpg',
            min_salary: '$107k',
            max_salary: '$151k',
            long_description: 'Pharmacists are healthcare practitioners who check and distribute drugs to doctors for medication that had been prescribed to patients. They advise patients and health care providers on the selection, dosages, interactions, and side effects of medications. They might work in a  hospital or retail store. '
        }
    ]
}
export default fakeData
