import { SelectCategory } from "@/components/selectCategory";

export default function structure() {

    return (
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight">
                    define your home
                </h2>
            </div>

            <form>
                <SelectCategory/>
            </form>
        </>
    )
}