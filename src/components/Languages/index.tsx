import { isEmpty } from 'lodash';
import { ILanguages } from './interface';
import useLanguages from '@/hooks/useLanguages';

export default function Languages() {
    const { data = [] as ILanguages[]} = useLanguages();

    if (isEmpty(data)) {
        return null;
    }
    
    return (
        <div className='px-4 md:px-12 mt-4 space-y-8'>
            <div className='grid grid-cols-4 gap-2'>
                {data.map((languages: ILanguages) => (
                    <div key={languages.languageId}>{languages.language}</div>
                ))}
            </div>
        </div>
    )
}