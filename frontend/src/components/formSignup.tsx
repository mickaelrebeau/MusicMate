export function SignUp() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl text-center font-semibold mb-8">Sign Up</h1>
                <div className="flex flex-col">
                    <label className="font-semibold mb-1" htmlFor="pseudo">Peudo</label>
                    <input className="rounded p-2" id="pseudo" type="text" placeholder="Pseudo" />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold mb-1" htmlFor="email">Email</label>
                    <input className="rounded p-2" id="email" type="email" placeholder="Email" />
                </div> 
            </div>
        </>
    )
}