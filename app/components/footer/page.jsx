// components/Footer.js
const Footer = () => {
  return (
    <footer>
      <div className="flex gap-52 mt-10 mb-10 ml-80">
        <section className="flex flex-col items-start">
          <a href="/terms-of-service">Terms of Service </a>
          <a href="/privacy-policy">Privacy Policy </a>
          <a href="/cookie-policy">Cookie Policy </a>
        </section>
        <section className="flex flex-col items-start">
          <a href="/sitemap.xml">Site Map </a>
          <a href="/accessibility-statement">Accessibility Statement </a>
          <a href="/contact">Contact </a>
        </section>
        <section className="flex flex-col items-start">
          <a href="https://github.com/imVey">GitHub </a>
          <a href="https://www.linkedin.com/in/bellamarwan/">LinkedIn </a>
          <a href="https://twitter.com/">Twitter </a>
        </section>
      </div>
      <p className="mt-10">
        &copy; {new Date().getFullYear()} My Next.js App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
