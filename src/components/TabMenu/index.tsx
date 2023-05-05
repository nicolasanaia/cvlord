import { Tab } from "@headlessui/react";
import { useState } from "react";
import Summary from "../Summary";
import Experience from "../Experience";
import Education from "../Education";
import Skills from "../Skills";
import Extracurricular from "../Extracurricular";
import Projects from "../Projects";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

export default function TabMenu() {     
    let [categories] = useState({
        Summary: {
            id: 1,
            item: <Summary />,
        },
        Experience: {
            id: 2,
            item: <Experience />,
        },
        Education: {
            id: 3,
            item: <Education />,
        },
        Skills: {
            id: 4,
            item: <Skills />,
        },
        Extracurricular: {
            id: 5,
            item: <Extracurricular />,
        },
        Projects: {
            id: 6,
            item: <Projects />,
        },
      })

    return (
    <div className='w-[80%] max-w-l mx-auto px-2 py-16 sm:px-0'>
        <Tab.Group>
            <Tab.List className='flex space-x-1 border-b border-b-white/10 h-9'>
            {Object.keys(categories).map((category) => (
                <Tab
                key={category}
                className={({ selected }) =>
                    classNames(
                    'font-hanken text-lg w-full transition-all duration-200 outline-none',
                    selected
                        ? 'border-b-2 border-b-highlightPrimary text-highlightPrimary'
                        : 'text-fontPrimary hover:text-highlightPrimary hover:border-b-2 hover:border-b-highlightPrimary'
                    )
                }
                >
                    {category}
                </Tab>
            ))}
            </Tab.List>
            <Tab.Panels className='mt-2'>
                {Object.values(categories).map((category, idx) => (
                    <Tab.Panel
                        key={idx}
                        className={classNames(
                            'text-lg font-normal font-hanken p-3',
                        )}
                    >
                        {category.item}
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    </div>
)
}