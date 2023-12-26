// ConstantData.jsx

const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

const currentYear = new Date().getFullYear();
const years = range(currentYear - 100, currentYear); // Adjust the range as needed

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const religions = [
    { value: 'christianity', label: 'Christianity' },
    { value: 'islam', label: 'Islam' },
    { value: 'hinduism', label: 'Hinduism' },
    { value: 'buddhism', label: 'Buddhism' },
    { value: 'sikhism', label: 'Sikhism' },
    { value: 'judaism', label: 'Judaism' },
    { value: 'bahai', label: 'Baháʼí Faith' },
    { value: 'jainism', label: 'Jainism' },
    { value: 'shinto', label: 'Shinto' },
    { value: 'taoism', label: 'Taoism' },
    { value: 'zoroastrianism', label: 'Zoroastrianism' },
    { value: 'confucianism', label: 'Confucianism' },
    { value: 'other', label: 'Other' },
];
const genders=["Male","Female","Other"]
const maritalStatuses=["Single","Married"]
export { years, months, religions,genders,maritalStatuses };
