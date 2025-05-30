// src/app/page.jsx (or any page)
import Navbar from '@/components/Navbar';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>{/* your page content here */}</main>
        </>
    );
}