import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "home - wayan ardike",
    description: "Personal Website",
};
export default function Home() {
    return (
        <div className='flex-col'>
            <Link href={'/'} className=' flex'>
                <h1>Hello, world!</h1>
            </Link>
        </div>
    );
}
