import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="hero">
        <h2>Next.js + Headless WordPress</h2>
        <p>
          This combination empowers seamless integration between Next.js and
          WordPress, providing dynamic and efficient web experiences.
        </p>
        <Link href="/blog" className="btn">
          Read Blog Posts
        </Link>
      </div>
    </section>
  );
}
