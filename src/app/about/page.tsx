import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="mx-auto text-justify">
        <h2 className="py-5 text-3xl">About</h2>
        <p>fuck right on off, there is no sappy tale of how this shop came to be. you dont care, and we wont share. this is a webshop for funny clothes, not a therapist office.
        </p>
        
      </div>
    </main>
  );
}
