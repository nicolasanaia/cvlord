import { Tab } from "@headlessui/react";
import { useState } from "react";

export default function TabMenu() {     
    const [isShowing, setIsShowing] = useState(false)

    return (
    <div className='mx-auto mt-20 max-w-[80%]'>
        <Tab.Group>
            <Tab.List className='flex justify-center mx-auto h-7 max-w-[90%] border-b border-b-white/10'>
                <Tab className='mr-20 ui-selected:border-b-2 ui-selected:rounded-sm text- ui-selected:text-highlightPrimary ui-not-selected:text-fontPrimary transition-colors duration-200 hover:text-highlightPrimary'>
                    Summary
                </Tab>
                <Tab className='mr-20 ui-selected:border-b-2 ui-selected:rounded-sm ui-selected:text-highlightPrimary ui-not-selected:text-fontPrimary transition-colors duration-200 hover:text-highlightPrimary'>
                    Experience    
                </Tab>
                <Tab className='mr-20 ui-selected:border-b-2 ui-selected:rounded-sm ui-selected:text-highlightPrimary ui-not-selected:text-fontPrimary leading-20 transition-colors duration-200 hover:text-highlightPrimary'>
                    Education    
                </Tab>
                <Tab className='mr-20 ui-selected:border-b-2 ui-selected:rounded-sm ui-selected:text-highlightPrimary ui-not-selected:text-fontPrimary transition-colors duration-200'>
                    Skills    
                </Tab>
                <Tab className='mr-20 ui-selected:border-b-2 ui-selected:rounded-sm ui-selected:border-b-text-fontPrimary ui-selected:text-highlightPrimary ui-not-selected:text-fontPrimary transition-colors duration-200'>
                    Extracurricular    
                </Tab>
                <Tab className={'hover:text-highlightPrimary ui-selected:border-b-2 ui-selected:rounded-sm ui-selected:border-b-text-fontPrimary ui-selected:text-highlightPrimary ui-not-selected:text-fontPrimary transition-colors duration-200'}>
                    Projects    
                </Tab>
            </Tab.List>
            <Tab.Panels className='mt-5 mx-auto max-w-[90%] h-vh'>
                <Tab.Panel className='align-middle leading-6'>In my last experience, I have worked as a Software Developer at iClubs. I study at Federal University of ABC (UFABC), one of the greatest in Latin
America and currently coursing the Bachelor of Computer Science and the Bachelor of Science and Technology. The things I like the most in a
work environment is finding new opportunities to expand our limits and develop new horizons for both the company and myself.</Tab.Panel>
                <Tab.Panel>Experience</Tab.Panel>
                <Tab.Panel>Education</Tab.Panel>
                <Tab.Panel>Skills</Tab.Panel>
                <Tab.Panel>Extracurricular</Tab.Panel>
                <Tab.Panel>Projects</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    </div>
)
}