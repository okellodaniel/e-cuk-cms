import { cn } from "@/lib/utils";
import React, { MouseEventHandler, useState } from "react";


interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    className
}) => {

    return (
        <button
            onClick={onClick}
            className={cn("rounded-full items-center justify-center bg-white shadow-md p-2 hover:scale-110", 
                className = 
            )}
        >
        

        </button>
    );
}

export default IconButton;