import project1 from '../assets/project1.png';
import spotify from '../assets/spotify.png';
import vm from '../assets/vm.jpeg';
import jokes from '../assets/jokes.jpeg';

const PROJECTS = [
    {
        id: 1,
        title: 'Company and products registration system',
        description: "Java HTTP Servlet I've built, involving JSP, javascript and core web dev concepts!",
        link: 'https://github.com/ifat-github/Company-and-Products-Registration-and-sign-in',
        image: project1
    },
    {
        id: 2,
        title: 'Music Master',
        description: "React JS app I've wrote that hits the Spotify API to get a playable list of the top tracks of any artist.",
        link: 'https://vigorous-shannon-6eedba.netlify.com/',
        image: spotify
    },
    {
        id: 3,
        title: 'Geeky Jokes',
        description: "React JS app I've wrote that hits an API to get stupid jokes..",
        link: 'https://hopeful-borg-d5ea3c.netlify.com/',
        image: jokes
    },
    {
        id: 4,
        title: 'Vending Machine',
        description: 'Java implementation of a Final State Machine using the example of a vending machine.',
        link: 'https://github.com/ifat-github/vending-machine',
        image: vm
    }
];

export default PROJECTS;