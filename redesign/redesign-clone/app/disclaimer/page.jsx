import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Disclaimer | Dr. Maya Reynolds, PsyD",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-secondary text-body pt-36 pb-24 px-6 md:px-12 flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-ink mb-6">
            Disclaimer
          </h1>
          <p className="font-body font-light text-base sm:text-lg text-body/85 leading-relaxed">
            This page will be provided by Dr. Reynolds&apos; practice before launch.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
