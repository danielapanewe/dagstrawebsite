import imageemployeeone from '../assets/portrait-3.jpg';
import imageemployeetwo from '../assets/portrait-4.jpg';
import imageemployeethree from '../assets/portrait-5.jpg';
export const navLinks = [
    {
        id: 'accueil',
        title: 'Accueil',
    },
    {
        id: 'service',
        title: 'Service',
    },
    {
        id: 'projets',
        title: 'Projets',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];
export const featuresItem = [
    {
        id: 'business consulting',
        title: 'Business Consulting',
        content:
            'Solution for every business related problems, readily and skillfully.',
        icon: 'bar-chart-outline',
    },
    {
        id: 'risk Management',
        title: 'Risk Management',
        content:
            'Calculate every possible risk in your business, take control over them.',
        icon: 'notifications-outline',
    },
    {
        id: 'market Research',
        title: 'Market Research',
        content:
            'Know the market before taking any step, reduce risks before you go.',
        icon: 'checkmark-done-outline',
    },
    {
        id: 'quality Services',
        title: 'Quality Services',
        content:
            'Experience unparalleled service, from beginningto final construction.',
        icon: 'bulb-outline',
    },
];

export const employee = [
    {
        id: 'employee1',
        image: `${imageemployeeone}`,
        alt: 'employé 1',
        name: 'Legartha Mantana',
        position: 'Brand Management Consultant',
        description:
            'As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects.',
    },
    {
        id: 'employee2',
        image: `${imageemployeetwo}`,
        alt: 'employé 1',
        name: 'John Snow',
        position: 'Business Analyst',
        description:
            'John has overseen the meteoric growth while protecting scaling its uniquely creative and culture.',
    },
    {
        id: 'employee3',
        image: `${imageemployeethree}`,
        alt: 'employé 1',
        name: 'Ragner Lothbrok',
        position: 'Business Consultant',
        description:
            'Ragner, SVP of Engineering, oversees Elixir’s vast engineering organization which drives the core programming.',
    },
];
