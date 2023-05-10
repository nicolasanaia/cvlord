import { isEmpty } from 'lodash';
import { ILanguages } from './interface';
import useLanguages from '@/hooks/useLanguages';

export default function Languages() {
    const { data = [] as ILanguages[]} = useLanguages();
    console.log(data)

    if (isEmpty(data)) {
        return null;
    }
    
    return (
        <div className='px-4 md:px-12 mt-4 space-y-8'>
            <div className='justify-center grid grid-cols-4 gap-2'>
                {data.map((languages: ILanguages) => (
                    <div className='bg-backgroundSecondary' key={languages.languageId}>
                        <p>{languages.language}</p>
                        <br />
                        <p>Write Level</p>
                        <p>{languages.writeLevel}</p>
                        <br />
                        <p>Read Level</p>
                        <p>{languages.readLevel}</p>
                        <br />
                        <p>Speech Level</p>
                        <p>{languages.speechLevel}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}