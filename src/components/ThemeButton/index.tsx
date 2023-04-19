import { Switch } from "@headlessui/react";
import { ThemeButtonProps } from "./interface";

export function ThemeButton({mode, handleChangeTheme}: ThemeButtonProps) {
    return (
        <div className='mr-1'>
            <Switch.Group>
            <div className='bg-backgroundPrimary text-fontPrimary p-5 inline-flex justify-center items-center'>
                <Switch
                    className={`${mode === 'dark' ? 'bg-highlightPrimary' : 'bg-fontPrimary'} h-6 w-10 rounded-full relative content-center inline-flex items-center mx-2`}
                    checked={mode === 'dark'}
                    onChange={handleChangeTheme}
                >
                    <span className='h-4 w-4 bg-backgroundPrimary rounded-full  inline-block transform transition ui-checked:text-fontPrimary ui-not-checked:text-fontPrimary ui-not-checked:tranlate-x-1 ui-checked:translate-x-6'/>
                </Switch>
            {mode === 'dark' ? (
                <svg className='stroke-fontPrimary h-7 w-7 transition duration-150 ease-in-out hover:stroke-highlightPrimary' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z' />
                </svg>
            ) : (
                <svg className='stroke-fontPrimary h-7 w-7 transition duration-150 ease-in-out hover:stroke-highlightPrimary' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            )}
          </div>
        </Switch.Group>
            <button>

            </button>
        </div>
    )
}