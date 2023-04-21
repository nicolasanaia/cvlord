export function CoverEdit() {

    // const [name, setName] = useState('');
    // const [occupation, setOccupation] = useState('');
    // const [location, setLocation] = useState('');
    // const [bio, setBio] = useState('');

    // async function handleUserInformation(event: FormEvent) {
    //     event.preventDefault();

    //     await createTransaction({
    //         title,
    //         amount,
    //         category,
    //         type,
    //     })
    // }

    return (
        <div className='flex items-center justify-center'>
            <form className='flex items-center justify-center'>
                <input className='flex justify-self-center self-center bg-transparent h-8 color font-roboto' type='text' name='name' placeholder='Name'></input>
                <button className='mx-3' type='submit'>
                    <svg className='stroke-fontPrimary h-5 w-5 transition duration-150 ease-in-out hover:stroke-highlightPrimary' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
                    </svg>
                </button>
            </form>
        </div>
    )
}