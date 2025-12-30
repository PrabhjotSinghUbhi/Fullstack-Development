import Image from "next/image";

export default function Home() {
    console.log("Hello i am a server component.");
    return (
        <h1 className={"text-5xl underline font-extrabold text-center mt-20"}>
            Hello, Prabhjot Singh!
        </h1>
    );
}
