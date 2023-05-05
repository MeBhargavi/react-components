import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [
    {
        id:'l2ks',
        label: 'Can i use React on this project?',
        content: 'You can use react on any project you want.You can use react on any project you want.You can use react on any project you want'    
    },
    {
        id:'feff2ks',
        label: 'Can i use Javascript on this project?',
        content: 'You can use Javascript on any project you want.You can use Javascript on any project you want.You can use Javascript on any project you want' 
    },
    {
        id:'ryer57ks',
        label: 'Can i use CSS on this project?',
        content: 'You can use CSS on any project you want.You can use CSS on any project you want.You can use CSS on any project you want' 
    }
];

    return <Accordion items={items} />;
    
}

export default AccordionPage;