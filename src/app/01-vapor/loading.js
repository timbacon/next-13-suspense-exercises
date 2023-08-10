import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton/LibraryGameCardSkeleton';
import React from 'react';

export const dynamic = 'force-dynamic';

async function VaporLoading() {
    return (
        <section className='max-width-wrapper'>
            <header className='library-header'>
                <h1>My games</h1>
                <p></p>
            </header>
            <div className='game-grid'>
                {Array.from({ length: 12 }).map((el, index) => (
                    <LibraryGameCardSkeleton key={index} />
                ))}
            </div>
        </section>
    );
}

export default VaporLoading;
