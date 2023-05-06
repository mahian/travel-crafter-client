import Link from 'next/link';
import React from 'react';

const PageHeader = ({ children }: any) => {
    return (
        <div className="p-5 bg-light mb-4">
            <h1 className="">{children}</h1>
            <nav className="d-flex">
                <h6 className="mb-0">
                    <Link href="/" className="text-reset">Home</Link>
                    <span>/</span>
                    <a href="" className="text-reset"><u>Contact-us</u></a>
                </h6>
            </nav>
        </div>
    );
};

export default PageHeader;