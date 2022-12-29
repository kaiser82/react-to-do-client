import { Spinner } from 'flowbite-react';
import React from 'react';

const SpinnerLoading = () => {
    return (
        <div className="flex flex-col gap-2">

            <div className="text-center">
                <Spinner aria-label="Center-aligned spinner example" />
            </div>

        </div>
    );
};

export default SpinnerLoading;