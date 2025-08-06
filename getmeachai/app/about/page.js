import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="text-white container mx-auto px-4 py-16">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-6">About Buy Me a Chai</h1>
      <p className="text-center max-w-2xl mx-auto mb-12 text-gray-300">
        Welcome to <span className="font-semibold text-purple-400">Buy Me a Chai</span> — 
        a crowdfunding platform for creators and helpers. 
        Our mission is to help creators, artists, and everyday heroes 
        receive support from their fans and community.
      </p>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
        <Image
          src="/group.gif"
          width={150}
          height={150}
          alt="Our Mission"
          className="bg-gray-700 p-3 rounded-full"
        />
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4 md:text-left text-center">Our Mission</h2>
          <p className="text-gray-300">
            We believe in the power of small acts of kindness. 
            Whether you are a musician, developer, writer, or 
            just someone raising funds for a cause, our platform 
            allows your supporters to contribute directly.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              img: "/man.gif",
              title: "Create Your Page",
              desc: "Set up your profile and tell your story to your supporters.",
            },
            {
              img: "/coin.gif",
              title: "Receive Support",
              desc: "Fans buy you a chai to support your work or cause.",
            },
            {
              img: "/tea.gif",
              title: "Grow Your Community",
              desc: "Turn supporters into a loyal community that believes in you.",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Image
                src={item.img}
                width={80}
                height={80}
                alt={item.title}
                className="bg-gray-700 p-3 rounded-full"
              />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-300 text-sm max-w-[200px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Start Your Journey Today</h2>
        <p className="text-gray-300 mb-6">
          Create your free account and let your supporters buy you a chai.
        </p>
        <Link href="/Login">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
export const metadata = {
  title: "Get me a Chai - About Page ",
  description: "This website is a crowdfunding platform for fundraisers.",
};