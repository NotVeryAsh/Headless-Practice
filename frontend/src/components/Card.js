import clsx from 'clsx';

export default function Card({ children, title = null, width = 'w-full' }) {

    const display = clsx(title === null && 'hidden')

    return (
        <div className={"flex bg-slate-100 rounded-xl drop-shadow-md flex-col mt-5 " + width}>
            <p className={"rounded-t-xl bg-slate-50 text-center py-2 text-xl " + display}>{title}</p>
            <hr className={"w-full h-px border-0 bg-slate-300 " + display} />
            <div className="p-5 rounded-b-xl rounded-t-xl">
                {children}
            </div>
        </div>
    );
}
