export default function Header({title = 'Default Header'}: {title: string}) {
    return (
        <section className="p-5">
            <h1 className='text-5xl font-bold'>{title}</h1>
        </section>
    )
}