import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using our services",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="mx-auto text-justify">
        <h2 className="py-5 text-3xl">CUSTOMER CARE</h2>
        <p>
          Dear customers and prospective customers, We understand that you have
          questions. You want to know where our data comes from, who has access
          to it and why, what we do with your private information, and most
          importantly, can you still trust us? Well, if you are a bit sceptical
          about our data policies, we must warn you: We have made a few
          compromises on this scale of 1-10 (1 being the best). It's a 2/10.
        </p>
        <p>
          Firstly, your information is sourced from a local farm that feeds
          local lambs to the flock. We don’t tell you where it comes from
          because it’s too personal and potentially distressing for the animals.
          Their health is extremely important to us; after all, they are not
          just animals - they're our pets! Secondly, we let our family, friends,
          and even the local hairdresser have access to your information. We
          understand that this may be a bit awkward, but they know what we do
          with it. They've all been through our vetting process.
        </p>
        <h2 className="mt-10 py-5 text-3xl">PRIVACY & SAFETY</h2>
        <p>
          As for our privacy policy, well, we're not really sure ourselves - we
          keep on tweaking and experimenting. It's a 2/10. We’ll tell you more
          about that in our Terms of Service, which is equally as important. On
          the subject of trust… Well, you've seen what many a company did with
          your data just this year. But this year will be different; So
          honestly, why even cling to assumptions of data safety?
        </p>
        <p>
          Nonetheless, you may be elated to know, we do not really care for your
          data, nor are organized enough to sell it to third parties. The
          payments and orders run securely. In conclusion, we are the biggest
          and best at heart. You should definitely trust us!"
        </p>
        <h2 className="mt-10 py-5 text-3xl">WHOLESALE INQUIRIES</h2>
        <p>
          Fell free to order a bunch, if the volume is genuienely wholesale
          please email ___ <br />
          (and not "let me get 10 for all my friends" - who are you kidding? you
          dont have that many close aquiantances.){" "}
        </p>
        <h2 className="mt-10 py-5 text-3xl">PAYMENT METHODS</h2>
        <p>
          - Credit / Debit Cards
          <br /> - PAYPAL
          <br /> - Offline Payments
        </p>
      </div>
    </main>
  );
}
